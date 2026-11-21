import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, X } from 'lucide-react';
import { VIDEO_TESTIMONIALS, VideoTestimonial } from '../data/designMonksData';

export const ClientStoriesSection: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<VideoTestimonial | null>(null);
  const [modalMuted, setModalMuted] = useState(false);

  const scrollTrack = (dir: 'prev' | 'next') => {
    if (!trackRef.current) return;
    const distance = 420;
    trackRef.current.scrollBy({
      left: dir === 'next' ? distance : -distance,
      behavior: 'smooth',
    });
  };

  const activeIndex = activeVideo
    ? VIDEO_TESTIMONIALS.findIndex((v) => v.name === activeVideo.name)
    : -1;

  return (
    <section className="bg-[#fafafa] text-[#0a0a0a] px-4 sm:px-8 lg:px-16 py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1280px]">
        {/* Header Row */}
        <div className="mb-10 md:mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="flex flex-col items-start gap-4">
            <span className="dm-section-tag-light">Client Stories</span>
            <h2 className="dm-heading font-title text-[2rem] sm:text-[2.75rem] md:text-[3rem] font-bold leading-[1.15] text-[#0a0a0a]">
              Success <em>Stories</em> <br />
              That <em>Inspire Us</em>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollTrack('prev')}
              aria-label="Previous client story"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-[#0a0a0a] transition-colors hover:border-[#7d40ff] hover:text-[#7d40ff] cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollTrack('next')}
              aria-label="Next client story"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-[#0a0a0a] transition-colors hover:border-[#7d40ff] hover:text-[#7d40ff] cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Horizontal 9:16 Video Testimonial Cards Track */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4"
        >
          {VIDEO_TESTIMONIALS.map((story) => (
            <button
              key={story.name}
              type="button"
              onClick={() => {
                setModalMuted(false);
                setActiveVideo(story);
              }}
              className="group relative aspect-[9/16] w-[19rem] sm:w-[22.5rem] md:w-[24.75rem] shrink-0 snap-start overflow-hidden rounded-3xl bg-neutral-900 text-left cursor-pointer"
            >
              {/* Thumbnail */}
              <img
                src={story.thumb}
                alt={`${story.name}, ${story.role}`}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Bottom contrast scrim */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/15"
              />

              {/* Center Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/15 backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#7d40ff]/80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 80 80"
                    fill="none"
                    className="h-20 w-20"
                  >
                    <path
                      d="M54.667 37.6913C56.4448 38.7177 56.4448 41.2837 54.667 42.3101L34.667 53.8571C32.8892 54.8835 30.667 53.6005 30.667 51.5477L30.667 28.4536C30.667 26.4008 32.8892 25.1178 34.667 26.1442L54.667 37.6913Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>

              {/* Bottom Info Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-3 text-[#fafafa]">
                <img
                  src={story.logo}
                  alt={story.role}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="h-9 w-auto max-w-[140px] object-contain object-left brightness-0 invert"
                />
                <p className="text-[0.95rem] leading-[1.45] text-[#fafafa]/90 line-clamp-2">
                  {story.quote}
                </p>
                <div className="pt-1">
                  <p className="font-title text-base font-bold text-white">{story.name}</p>
                  <p className="text-sm text-neutral-300">{story.role}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Video Player Lightbox Modal */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Testimonial video from ${activeVideo.name}`}
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[420px] overflow-hidden rounded-3xl bg-neutral-950 border border-white/15 shadow-2xl"
          >
            <div className="relative aspect-[9/16] w-full bg-black">
              <video
                key={activeVideo.video}
                src={activeVideo.video}
                poster={activeVideo.thumb}
                autoPlay
                loop
                playsInline
                muted={modalMuted}
                controls
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                aria-label="Close video modal"
                className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white hover:bg-[#7d40ff] transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setModalMuted((m) => !m)}
                aria-label={modalMuted ? 'Unmute' : 'Mute'}
                className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white hover:bg-[#7d40ff] transition-colors cursor-pointer"
              >
                {modalMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>
            </div>
            <div className="flex items-center justify-between gap-3 p-4 bg-[#121216] text-white">
              <div>
                <p className="font-title font-bold text-base">{activeVideo.name}</p>
                <p className="text-xs text-neutral-400">{activeVideo.role}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveVideo(
                      VIDEO_TESTIMONIALS[
                        (activeIndex - 1 + VIDEO_TESTIMONIALS.length) % VIDEO_TESTIMONIALS.length
                      ]
                    )
                  }
                  aria-label="Previous video"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-[#7d40ff] cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveVideo(
                      VIDEO_TESTIMONIALS[(activeIndex + 1) % VIDEO_TESTIMONIALS.length]
                    )
                  }
                  aria-label="Next video"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-[#7d40ff] cursor-pointer"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
