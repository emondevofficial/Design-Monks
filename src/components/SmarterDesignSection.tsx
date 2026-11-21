import React from 'react';
import {
  RoutePath,
  SMARTER_TOOLS_BOTTOM,
  SMARTER_TOOLS_TOP,
  SMARTER_WORKFLOW_CARDS,
} from '../data/designMonksData';
import { GlowButton } from './GlowButton';

interface SmarterDesignSectionProps {
  onNavigate: (path: RoutePath) => void;
}

export const SmarterDesignSection: React.FC<SmarterDesignSectionProps> = ({ onNavigate }) => {
  return (
    <section
      className="relative overflow-hidden rounded-[2rem] bg-[#0a0a0a] text-[#fafafa] py-16 md:py-24"
      style={{
        backgroundImage:
          'url(https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a59301f72544288acd806ca_image%20189.avif)',
        backgroundPosition: '50% 0',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background AI Tool Icons Dual Marquee Strip */}
      <div className="relative mb-12 md:mb-16 space-y-4 opacity-80">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 sm:w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 sm:w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent"
        />

        {/* Top Marquee Left */}
        <div className="overflow-hidden">
          <div className="animate-dm-marquee-left flex items-center gap-4">
            {[...SMARTER_TOOLS_TOP, ...SMARTER_TOOLS_TOP, ...SMARTER_TOOLS_TOP].map((src, i) => (
              <div
                key={`t-${i}`}
                className="h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-md"
              >
                <img
                  src={src}
                  alt=""
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Marquee Right */}
        <div className="overflow-hidden">
          <div className="animate-dm-marquee-right-slow flex items-center gap-4">
            {[...SMARTER_TOOLS_BOTTOM, ...SMARTER_TOOLS_BOTTOM, ...SMARTER_TOOLS_BOTTOM].map(
              (src, i) => (
                <div
                  key={`b-${i}`}
                  className="h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-md"
                >
                  <img
                    src={src}
                    alt=""
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col items-center text-center gap-4">
          <span className="dm-section-tag-dark">AI-Powered Design</span>
          <h2 className="dm-heading font-title text-[2rem] sm:text-[2.75rem] md:text-[3rem] font-bold leading-[1.15] text-[#fafafa] text-balance">
            Smarter Design, <em>Supercharged by AI</em>
          </h2>
          <p className="max-w-2xl text-[1.0625rem] leading-[1.6] text-neutral-300">
            From wireframes to launch, we blend AI tools with strategy to deliver faster,
            sharper, and data-led design results.
          </p>
        </div>

        {/* Glowing Center Orb + Branch Tree + 4 Workflow Cards */}
        <div className="mt-10 md:mt-14 flex flex-col items-center">
          <div className="relative flex h-[150px] sm:h-[200px] w-full items-center justify-center">
            <img
              src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a580e0914b4301d103f44e0_Frame%202147257885%20(1).avif"
              alt="Design Monks AI core orb"
              referrerPolicy="no-referrer"
              loading="lazy"
              className="h-[220px] sm:h-[310px] w-auto object-contain"
            />
          </div>

          <div className="hidden lg:block w-full -mt-4 mb-2">
            <img
              src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a5881642fb56b348a27922e_Group%201000004391.avif"
              alt=""
              aria-hidden="true"
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* 4-Column Workflow Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mt-4 lg:mt-0">
            {SMARTER_WORKFLOW_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-[#262626] p-5 flex flex-col justify-between gap-7 text-left transition-transform duration-300 hover:-translate-y-1 hover:border-[#7d40ff]/60"
                style={{
                  backgroundImage:
                    'url(https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a618e51d0b8e5522ff04ddf_127c3103325400378923042b97f5ae95_Step%20%281%29.avif)',
                  backgroundPosition: '50%',
                  backgroundSize: 'cover',
                }}
              >
                <div className="space-y-5">
                  <h3 className="font-title text-xl font-bold text-[#fafafa]">{card.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {card.icons.map((iconSrc, idx) => (
                      <img
                        key={idx}
                        src={iconSrc}
                        alt=""
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl object-contain shadow-[0_9px_16px_rgba(65,108,193,0.24)]"
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-2.5">
                  <p className="text-xs font-medium tracking-wider text-neutral-400">PRODUCES:</p>
                  <div className="flex flex-wrap gap-2">
                    {card.produces.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg bg-[#2b3d4c] px-2.5 py-1 text-xs sm:text-sm text-[#fafafa] shadow-[inset_0_0_19px_rgba(255,255,255,0.12)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-14">
            <GlowButton
              label="Explore AI Capabilities"
              size="lg"
              onClick={() => onNavigate('/ai-excellency')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
