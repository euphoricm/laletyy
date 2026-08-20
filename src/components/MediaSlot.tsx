import { ImagePlus } from "lucide-react";
import { useState } from "react";

export function MediaSlot({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`grid place-items-center bg-lavender-gradient p-8 text-center ${className}`}>
        <div>
          <ImagePlus className="mx-auto h-8 w-8 text-foreground/55" />
          <p className="mt-3 font-hand text-2xl text-foreground/70">Laleti's photo goes here</p>
        </div>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}
