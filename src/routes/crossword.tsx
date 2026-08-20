import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell, PageHeader } from "@/components/PageShell";
import { WORDS } from "@/lib/laleti";

export const Route = createFileRoute("/crossword")({ component: WordSearch });
const SIZE = 14;
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DIRECTIONS = [
  [0, 1],
  [1, 0],
  [1, 1],
  [-1, 1],
  [0, -1],
  [-1, 0],
  [-1, -1],
  [1, -1],
] as const;
type Placement = { word: string; cells: number[] };

function buildGrid(seed: number) {
  let state = seed;
  const random = () => {
    state = (state * 1103515245 + 12345) % 2147483648;
    return state / 2147483648;
  };
  const grid: (string | null)[] = Array.from(
    { length: SIZE * SIZE },
    () => null,
  );
  const placements: Placement[] = [];
  for (const word of WORDS) {
    for (let attempt = 0; attempt < 1000; attempt++) {
      const [dr, dc] = DIRECTIONS[Math.floor(random() * DIRECTIONS.length)]!;
      const row = Math.floor(random() * SIZE);
      const col = Math.floor(random() * SIZE);
      const cells: number[] = [];
      for (let i = 0; i < word.length; i++) {
        const r = row + dr * i;
        const c = col + dc * i;
        const index = r * SIZE + c;
        if (
          r < 0 ||
          r >= SIZE ||
          c < 0 ||
          c >= SIZE ||
          (grid[index] && grid[index] !== word[i])
        ) {
          cells.length = 0;
          break;
        }
        cells.push(index);
      }
      if (!cells.length) continue;
      cells.forEach((index, i) => {
        grid[index] = word[i]!;
      });
      placements.push({ word, cells });
      break;
    }
  }
  return {
    letters: grid.map(
      (letter) => letter ?? LETTERS[Math.floor(random() * 26)]!,
    ),
    placements,
  };
}

function WordSearch() {
  const seed = useMemo(
    () => Math.floor(Math.random() * 2147483647),
    [],
  );
  const { letters, placements } = useMemo(() => buildGrid(seed), [seed]);
  const [found, setFound] = useState<string[]>([]);
  const [selection, setSelection] = useState<number[]>([]);
  const [dragging, setDragging] = useState(false);
  const [hintCells, setHintCells] = useState<number[]>([]);
  const [status, setStatus] = useState(
    "Start with LALETI. She deserves to be found first.",
  );
  const foundCells = useMemo(
    () =>
      new Set(
        placements
          .filter((p) => found.includes(p.word))
          .flatMap((p) => p.cells),
      ),
    [found, placements],
  );
  const lineFrom = (start: number, end: number) => {
    const r1 = Math.floor(start / SIZE),
      c1 = start % SIZE,
      r2 = Math.floor(end / SIZE),
      c2 = end % SIZE;
    const rowDistance = Math.abs(r2 - r1),
      colDistance = Math.abs(c2 - c1);
    if (rowDistance && colDistance && rowDistance !== colDistance) return null;
    const dr = Math.sign(r2 - r1),
      dc = Math.sign(c2 - c1),
      steps = Math.max(rowDistance, colDistance);
    return Array.from(
      { length: steps + 1 },
      (_, i) => (r1 + dr * i) * SIZE + c1 + dc * i,
    );
  };
  const commit = (cells: number[]) => {
    const word = cells.map((index) => letters[index]).join(""),
      reversed = [...word].reverse().join("");
    const hit = placements.find(
      (p) =>
        !found.includes(p.word) &&
        (p.word === word || p.word === reversed) &&
        p.cells.length === cells.length,
    );
    if (hit) {
      setFound((prev) => [...prev, hit.word]);
      setStatus(
        `${hit.word} found - that is ${found.length + 1} of ${WORDS.length}.`,
      );
    } else if (cells.length > 1)
      setStatus(
        "Not this one. Try another straight line, forwards or backwards.",
      );
    setSelection([]);
  };
  const hint = () => {
    const missing = placements.find((p) => !found.includes(p.word));
    if (!missing) return;
    setHintCells([missing.cells[0]!]);
    setStatus(`Hint: ${missing.word} starts on the glowing letter.`);
    window.setTimeout(() => setHintCells([]), 3200);
  };
  const complete = found.length === WORDS.length;
  return (
    <PageShell>
      <PageHeader
        eyebrow="A tiny game, a big fuss"
        title={
          <>
            Laleti's sweet{" "}
            <span className="text-gold font-semibold">word search</span>
          </>
        }
        intro={`There are ${WORDS.length} words hidden in here, and every one is about you. Drag across a word in a straight line, forwards or backwards.`}
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-5 pb-8 lg:grid-cols-[minmax(0,1fr)_260px]">
        <div
          className="select-none rounded-3xl bg-white/90 p-3 shadow-soft-mint sm:p-5"
          onPointerUp={() => {
            setDragging(false);
            if (selection.length) commit(selection);
          }}
          onPointerLeave={() => {
            setDragging(false);
            setSelection([]);
          }}
        >
          <div
            className="grid gap-0.5"
            style={{ gridTemplateColumns: `repeat(${SIZE}, minmax(0, 1fr))` }}
          >
            {letters.map((letter, index) => {
              const selected = selection.includes(index),
                isFound = foundCells.has(index),
                isHint = hintCells.includes(index);
              return (
                <button
                  key={index}
                  type="button"
                  onPointerDown={() => {
                    setDragging(true);
                    setSelection([index]);
                  }}
                  onPointerEnter={() => {
                    if (!dragging || !selection.length) return;
                    const line = lineFrom(selection[0]!, index);
                    if (line) setSelection(line);
                  }}
                  className="aspect-square rounded-md text-[0.62rem] font-bold uppercase transition sm:text-sm"
                  style={{
                    background: isFound
                      ? "linear-gradient(120deg,#b8c0ff,#e7d8ff)"
                      : selected
                        ? "#ffd5e7"
                        : "rgba(255,255,255,.62)",
                    color: isFound || selected ? "#3c2f66" : undefined,
                    boxShadow: isHint ? "0 0 0 3px #f084b4" : undefined,
                  }}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>
        <aside className="rounded-3xl bg-white/90 px-5 py-6 shadow-soft-mint">
          <h2 className="font-display text-xl">
            Found {found.length}/{WORDS.length}
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-1.5 text-sm">
            {WORDS.map((word) => (
              <li
                key={word}
                className={
                  found.includes(word)
                    ? "font-semibold text-primary line-through"
                    : "text-foreground/60"
                }
              >
                {word}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={hint}
            className="mt-6 w-full rounded-full border border-primary/25 bg-white px-5 py-3 text-sm font-medium text-primary"
          >
            Hint
          </button>
        </aside>
      </section>
      <p className="mx-auto max-w-2xl px-5 pb-8 text-center text-sm text-foreground/70">
        {complete
          ? "Every word found. Twenty out of twenty, just like your year."
          : status}
      </p>
      <div className="pb-16 text-center">
        <Link
          to="/gallery"
          className="inline-flex rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background shadow-3d"
        >
          Continue to the gallery
        </Link>
      </div>
    </PageShell>
  );
}
