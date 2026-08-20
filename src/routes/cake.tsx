import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Mic, Sparkles, Wind } from "lucide-react";
import { PageShell, PageHeader } from "@/components/PageShell";
import { Confetti } from "@/components/Confetti";

export const Route = createFileRoute("/cake")({ component: CakePage });

function CakePage() {
  const [blown, setBlown] = useState(false);
  const [listening, setListening] = useState(false);
  const [status, setStatus] = useState(
    "Turn on the microphone, then blow toward it to put the candles out.",
  );
  const streamRef = useRef<MediaStream | null>(null);
  const frameRef = useRef<number | null>(null);
  const blow = () => {
    if (blown) return;
    setBlown(true);
    setListening(false);
    setStatus("Your wish is sent. Happy 20th, Laleti.");
    streamRef.current?.getTracks().forEach((track) => track.stop());
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
  };
  const listen = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const context = new AudioContext();
      const analyser = context.createAnalyser();
      const source = context.createMediaStreamSource(stream);
      source.connect(analyser);
      analyser.fftSize = 256;
      const data = new Uint8Array(analyser.frequencyBinCount);
      let loudFrames = 0;
      setListening(true);
      setStatus("Listening now. Make a steady blow toward your microphone.");
      const check = () => {
        analyser.getByteFrequencyData(data);
        const volume =
          data.reduce((sum, value) => sum + value, 0) / data.length;
        loudFrames = volume > 42 ? loudFrames + 1 : 0;
        if (loudFrames > 5) blow();
        else frameRef.current = requestAnimationFrame(check);
      };
      check();
    } catch {
      setStatus(
        "Microphone access is unavailable here. Use the blow button below to make your wish.",
      );
    }
  };
  useEffect(
    () => () => {
      streamRef.current?.getTracks().forEach((track) => track.stop());
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    },
    [],
  );
  return (
    <PageShell>
      <div className="relative">
        <Confetti count={18} />
        <PageHeader
          eyebrow="A birthday wish"
          title={
            <>
              Make a wish,{" "}
              <span className="text-gold font-semibold">Laleti</span>
            </>
          }
          intro="Close your eyes for one little second, keep the wish to yourself, then blow toward your microphone and watch the candles go out."
        />
      </div>
      <section className="mx-auto max-w-2xl px-5 pb-16 text-center">
        <div className="relative mx-auto h-[24rem] w-full max-w-md">
          <div className="absolute bottom-0 left-1/2 h-40 w-80 -translate-x-1/2 rounded-t-[3rem] bg-[radial-gradient(circle_at_top,_#f9efe4_0%,_#f3d9c0_24%,_#d4a075_56%,_#a96d4a_100%)] shadow-[0_24px_60px_rgba(118,81,49,0.26)]" />
          <div className="absolute bottom-14 left-1/2 h-11 w-[20rem] -translate-x-1/2 rounded-t-[2rem] border border-[#f8efe7]/70 bg-[linear-gradient(180deg,#fffaf6_0%,#ffe9c7_100%)] shadow-[inset_0_5px_14px_rgba(255,255,255,0.8)]" />
          <div className="absolute bottom-[7.6rem] left-1/2 h-6 w-[21rem] -translate-x-1/2 rounded-full border border-[#cb8d5d]/40 bg-[linear-gradient(180deg,#c98a63_0%,#e4b88d_100%)] opacity-80" />
          <div className="absolute bottom-[8rem] left-1/2 h-6 w-[22rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.7),_rgba(255,255,255,0)_68%)] opacity-70" />
          {[...Array(20)].map((_, i) => {
            const left = 16 + (i % 10) * 7.6;
            const bottom = i < 10 ? 12 : 8;
            return (
              <div
                key={i}
                className="absolute h-20 w-3 rounded-full bg-[linear-gradient(180deg,#fff7e3_0%,#f5d17d_28%,#e6a85c_100%)] shadow-[0_8px_16px_rgba(185,134,65,0.4)]"
                style={{ left: `${left}%`, bottom: `${bottom}rem` }}
              >
                <span
                  className={`absolute -top-8 left-1/2 h-9 w-5 -translate-x-1/2 rounded-[100%] bg-[radial-gradient(circle_at_50%_35%,_#fff3b8_0%,_#f5d273_28%,_#dca24d_100%)] shadow-[0_0_18px_rgba(255,210,122,0.75)] transition-all duration-700 ${blown ? "scale-0 opacity-0" : "animate-pulse"}`}
                  style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
                />
              </div>
            );
          })}
          <div className="absolute inset-x-20 bottom-14 flex items-center justify-center">
            <div className="h-16 w-16 rounded-full bg-[radial-gradient(circle_at_30%_30%,_#fffdf6_0%,_#efd9b7_28%,_#d4a66e_100%)] shadow-[0_0_18px_rgba(255,214,149,0.8)]" />
          </div>
          <span className="absolute bottom-8 left-1/2 -translate-x-1/2 font-display text-6xl font-semibold text-white drop-shadow-[0_6px_12px_rgba(120,84,49,0.35)]">
            20
          </span>
        </div>
        {!blown && (
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <button
              onClick={listen}
              disabled={listening}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background shadow-3d disabled:opacity-70"
            >
              <Mic className="h-4 w-4" />
              {listening ? "Listening for your blow" : "Use microphone"}
            </button>
            <button
              onClick={blow}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-foreground shadow-soft-mint"
            >
              <Wind className="h-4 w-4" />
              Blow candles
            </button>
          </div>
        )}
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-foreground/65">
          {status}
        </p>
        {blown && (
          <div className="mt-8 animate-fade-up">
            <Sparkles className="mx-auto h-7 w-7 text-gold" />
            <p className="mt-3 font-hand text-3xl">
              May this new year be as beautiful, bright and full of joy as you
              are.
            </p>
          </div>
        )}
        <Link
          to="/code"
          className="mt-12 inline-block text-sm font-medium text-primary"
        >
          Open the birthday code
        </Link>
      </section>
    </PageShell>
  );
}
