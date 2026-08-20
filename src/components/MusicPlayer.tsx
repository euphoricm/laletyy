import { useEffect, useRef, useState } from "react";
import { Music, Pause, Play } from "lucide-react";

const BASE_VOLUME = 0.18;

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const a = audioRef.current;
    if (!a) return;

    const syncPlaybackState = () => setPlaying(!a.paused);

    const handlePlay = () => setPlaying(true);
    const handlePause = () => setPlaying(false);

    a.volume = BASE_VOLUME;
    a.muted = false;
    a.addEventListener("play", handlePlay);
    a.addEventListener("pause", handlePause);
    a.addEventListener("ended", handlePause);

    const start = async () => {
      try {
        await a.play();
        syncPlaybackState();
      } catch {
        setPlaying(false);
      }
    };

    void start();

    return () => {
      a.removeEventListener("play", handlePlay);
      a.removeEventListener("pause", handlePause);
      a.removeEventListener("ended", handlePause);
    };
  }, []);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;

    if (a.paused) {
      try {
        a.volume = BASE_VOLUME;
        a.muted = false;
        await a.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
      return;
    }

    a.pause();
    setPlaying(false);
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
          {playing ? "playing for Laleti" : "play Laleti's song"}
        </span>
      </button>
      <audio
        ref={audioRef}
        src="/media/mimi1.mp3"
        loop
        autoPlay
        preload="auto"
        className="hidden"
      />
    </div>
  );
}
