import React from 'react';
import { BRAND_ASSETS, HERO_ROW_1, HERO_ROW_2, RoutePath } from '../data/designMonksData';
import { GlowButton } from './GlowButton';

interface HeroSectionProps {
  onNavigate: (path: RoutePath) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] text-[#fafafa] pt-8 md:pt-10 pb-36 md:pb-44 -mb-14 md:-mb-24">
      {/* Background SVG Glow & Texture */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <img
          src={BRAND_ASSETS.heroBgPattern}
          alt=""
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-top opacity-95"
        />
        <img
          src={BRAND_ASSETS.heroTexture}
          alt=""
          referrerPolicy="no-referrer"
          className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-overlay"
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </div>

      {/* Top Center Content */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-8 flex flex-col items-center text-center">
        {/* Brand Wordmark */}
        <button
          type="button"
          onClick={() => onNavigate('/')}
          aria-label="Design Monks Home"
          className="mb-8 md:mb-10 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#a87fff]"
        >
          <img
            src={BRAND_ASSETS.logoWhite}
            alt="Design Monks"
            referrerPolicy="no-referrer"
            className="h-8 md:h-9 w-auto"
          />
        </button>

        {/* Clutch & Google 4.9 Rating Lockup */}
        <div className="mb-5 flex flex-col items-center gap-1.5">
          <img
            src={BRAND_ASSETS.reviewPlatforms}
            alt="Clutch and Google review platform logos"
            width={57}
            height={32}
            referrerPolicy="no-referrer"
            className="h-7 w-auto"
          />
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#fafafa] tabular-nums">4.9</span>
            <img
              src={BRAND_ASSETS.fiveStarsGold}
              alt="Five gold star rating"
              width={88}
              height={16}
              referrerPolicy="no-referrer"
              className="h-4 w-auto"
            />
          </div>
        </div>

        {/* H1 Eyebrow */}
        <h1 className="font-title text-base md:text-xl font-bold tracking-tight text-[#fafafa]/90 mb-3">
          AI-Powered Leading UI/UX Design Agency
        </h1>

        {/* Main Display Headline */}
        <h2 className="dm-heading font-title max-w-[54rem] text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] font-bold leading-[1.08] tracking-[-0.02em] text-[#fafafa] text-balance">
          We <em>Design</em> Products That Drive{' '}
          <span
            aria-hidden="true"
            className="inline-block align-middle mx-1 h-[0.85em] w-[4.2rem] sm:w-[6.5rem] md:w-[8.5rem] bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${BRAND_ASSETS.headingLogoPill})` }}
          />{' '}
          <em>Results</em>
        </h2>

        {/* AI Chip Badge */}
        <div className="mt-5 mb-7 flex justify-center">
          <img
            src={BRAND_ASSETS.aiChipBadge}
            alt="Human-Crafted Design + AI-Accelerated Growth"
            referrerPolicy="no-referrer"
            className="h-8 sm:h-9 w-auto"
          />
        </div>

        {/* Hero Primary CTA */}
        <GlowButton
          label="Let's Talk"
          size="lg"
          onClick={() => {
            const el = document.getElementById('contact-cta');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            } else {
              onNavigate('/contact');
            }
          }}
        />
      </div>

      {/* Dual Counter-Scrolling Portfolio Thumbnails Marquee */}
      <div className="relative z-10 mt-12 md:mt-14 space-y-4 md:space-y-5 hover-pause">
        {/* Side Fade Masks */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 sm:w-28 bg-gradient-to-r from-[#0a0a0a] to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 sm:w-28 bg-gradient-to-l from-[#0a0a0a] to-transparent"
        />

        {/* Row 1 (Scrolls Left) */}
        <div className="overflow-hidden">
          <div className="animate-dm-marquee-left-slow flex items-center gap-4 md:gap-5">
            {[...HERO_ROW_1, ...HERO_ROW_1].map((item, idx) => (
              <button
                key={`r1-${idx}`}
                type="button"
                onClick={() => onNavigate('/projects')}
                className="group relative h-[10.5rem] md:h-[13.625rem] shrink-0 overflow-hidden rounded-2xl md:rounded-[1.25rem] bg-neutral-900 border border-white/10 cursor-pointer"
                style={{ aspectRatio: item.aspect }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  referrerPolicy="no-referrer"
                  loading={idx < 8 ? 'eager' : 'lazy'}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Row 2 (Scrolls Right) */}
        <div className="overflow-hidden">
          <div className="animate-dm-marquee-right-slow flex items-center gap-4 md:gap-5">
            {[...HERO_ROW_2, ...HERO_ROW_2].map((item, idx) => (
              <button
                key={`r2-${idx}`}
                type="button"
                onClick={() => onNavigate('/projects')}
                className="group relative h-[10.5rem] md:h-[13.625rem] shrink-0 overflow-hidden rounded-2xl md:rounded-[1.25rem] bg-neutral-900 border border-white/10 cursor-pointer"
                style={{ aspectRatio: item.aspect }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  referrerPolicy="no-referrer"
                  loading={idx < 8 ? 'eager' : 'lazy'}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
