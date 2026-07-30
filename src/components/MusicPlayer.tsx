import { useEffect, useRef, useState } from "react";
import { Music, Pause, Play } from "lucide-react";
import songUrl from "@/routes/song.mp3";

const BASE_VOLUME = 0.3;

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      try {
        a.volume = BASE_VOLUME;
        await a.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    }
  };

  if (!mounted) return null;
  return (
    <div className="fixed bottom-5 left-5 z-30">
      <button
        onClick={toggle}
        className="flex items-center gap-3 rounded-full bg-white/85 py-2 pl-2 pr-4 shadow-soft-gold backdrop-blur transition hover:bg-white"
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-gold-gradient text-white">
          {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </span>
        <span className="flex items-center gap-1.5 text-sm font-medium text-foreground">
          <Music className="h-3.5 w-3.5" />
          {playing ? "playing for Dad" : "play Dad's song"}
        </span>
      </button>
      <audio ref={audioRef} src={songUrl} loop preload="none" className="hidden" />
    </div>
  );
}
