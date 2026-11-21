import React, { useRef, useState } from 'react';
import { Pause, Volume2, VolumeX } from 'lucide-react';
import { BRAND_ASSETS } from '../data/designMonksData';

export const ShowreelSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isUnmuted, setIsUnmuted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const togglePlayAndSound = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (!isUnmuted) {
      vid.muted = false;
      vid.play().catch(() => {});
      setIsUnmuted(true);
      setIsPaused(false);
    } else if (vid.paused) {
      vid.play().catch(() => {});
      setIsPaused(false);
    } else {
      vid.pause();
      setIsPaused(true);
    }
  };

  const toggleMuteOnly = (e: React.MouseEvent) => {
    e.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;
    const next = !isUnmuted;
    vid.muted = !next;
    setIsUnmuted(next);
  };

  return (
    <section className="bg-[#fafafa] text-[#0a0a0a] pt-16 md:pt-24 pb-10 md:pb-16">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-16 text-center flex flex-col items-center gap-4 mb-10 md:mb-14">
        <span className="dm-section-tag-light">What Sets Us Apart</span>
        <h2 className="dm-heading font-title text-[2rem] sm:text-[2.75rem] md:text-[3rem] font-bold leading-[1.15] text-[#0a0a0a] text-balance">
          Why Us? Because Your <br />
          <em>Growth Is Our Mission</em>
        </h2>
        <p className="max-w-[42rem] text-[1.0625rem] leading-[1.6] text-[#525252]">
          See the difference thoughtful design makes. Our works highlight the dedication we bring
          to every client partnership.
        </p>
      </div>

      {/* Full-width Showreel Video Container */}
      <div className="mx-auto max-w-[1400px] px-3 sm:px-6 lg:px-8">
        <div
          onClick={togglePlayAndSound}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              togglePlayAndSound();
            }
          }}
          aria-label={isUnmuted ? 'Toggle showreel playback' : 'Play showreel with sound'}
          className="group relative w-full overflow-hidden rounded-[2rem] bg-neutral-950 cursor-pointer h-[360px] sm:h-[520px] md:h-[680px] lg:h-[820px]"
        >
          <video
            ref={videoRef}
            src={BRAND_ASSETS.showreelVideo}
            autoPlay
            loop
            muted={!isUnmuted}
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          />

          {/* Center Custom Play/Watch Badge */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              isUnmuted && !isPaused ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
            }`}
          >
            {isUnmuted && !isPaused ? (
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black/55 backdrop-blur-md text-white border border-white/20">
                <Pause className="h-8 w-8" />
              </div>
            ) : (
              <img
                src={BRAND_ASSETS.showreelPlayBadge}
                alt="Watch showreel video"
                referrerPolicy="no-referrer"
                className="h-24 w-24 sm:h-28 sm:w-28 transition-transform duration-300 group-hover:scale-110"
              />
            )}
          </div>

          {/* Sound Toggle Corner Button */}
          <button
            type="button"
            onClick={toggleMuteOnly}
            aria-label={isUnmuted ? 'Mute showreel' : 'Unmute showreel'}
            className="absolute bottom-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 hover:bg-[#7d40ff] transition-colors cursor-pointer"
          >
            {isUnmuted ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </section>
  );
};
