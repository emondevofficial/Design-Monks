import React, { useState } from 'react';
import {
  BRAND_ASSETS,
  RoutePath,
  WHAT_WE_DO_SERVICES,
} from '../data/designMonksData';
import { GlowButton } from './GlowButton';

interface ServicesSectionProps {
  onNavigate: (path: RoutePath) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = WHAT_WE_DO_SERVICES[activeIndex];

  return (
    <section className="relative rounded-[2rem] bg-[#0a0a0a] text-[#fafafa] px-4 sm:px-8 lg:px-16 py-16 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        {/* Section Heading */}
        <div className="mb-12 md:mb-16 flex flex-col items-start md:items-center md:text-center gap-4">
          <span className="dm-section-tag-dark">What We Do</span>
          <h2 className="dm-heading font-title text-[2rem] sm:text-[2.75rem] md:text-[3rem] font-bold leading-[1.15] text-[#fafafa] text-balance">
            We Design Brands That <br />
            <em>Speak to Audiences</em>
          </h2>
        </div>

        {/* 2-Column Sticky Services Layout */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-14">
          {/* Left Sticky Services Switcher */}
          <div className="w-full lg:w-[40%] lg:max-w-[26rem] lg:sticky lg:top-24 flex flex-col gap-6">
            {/* Service Tabs */}
            <div className="flex flex-wrap lg:flex-col gap-2">
              {WHAT_WE_DO_SERVICES.map((svc, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={svc.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`text-left rounded-xl px-4 py-3 transition-all cursor-pointer border ${
                      isActive
                        ? 'bg-[#7d40ff]/15 border-[#7d40ff] text-white'
                        : 'bg-white/[0.03] border-white/10 text-neutral-400 hover:text-white hover:border-white/25'
                    }`}
                  >
                    <div className="font-title text-lg sm:text-xl font-bold">{svc.title}</div>
                  </button>
                );
              })}
            </div>

            {/* Active Service Detail Card */}
            <div className="pt-2">
              <h3 className="font-title text-2xl sm:text-3xl font-bold text-[#fafafa]">
                {activeService.title}
              </h3>
              <div
                aria-hidden="true"
                className="my-4 h-px w-full bg-gradient-to-r from-[#43009d] to-[#180037]"
              />
              <p className="text-[1rem] leading-[1.6] text-neutral-300">
                {activeService.description}
              </p>
              <button
                type="button"
                onClick={() => onNavigate(activeService.route)}
                className="mt-5 inline-flex items-center gap-2 text-base font-bold text-[#a87fff] hover:text-white transition-colors cursor-pointer"
              >
                <span>See More</span>
                <img
                  src={BRAND_ASSETS.ctaArrowPurple}
                  alt=""
                  aria-hidden="true"
                  referrerPolicy="no-referrer"
                  className="h-5 w-5"
                />
              </button>
            </div>
          </div>

          {/* Right Staggered Portfolio Card Grid */}
          <div className="w-full lg:w-[58%] flex flex-col gap-10">
            {WHAT_WE_DO_SERVICES.map((svc, idx) => (
              <div
                key={svc.id}
                onMouseEnter={() => setActiveIndex(idx)}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start"
              >
                {svc.images.map((img, imgIdx) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => onNavigate(svc.route)}
                    className={`group overflow-hidden rounded-xl border border-white/10 bg-neutral-900 text-left cursor-pointer transition-transform duration-300 hover:-translate-y-1 ${
                      imgIdx === 1 ? 'sm:mt-16' : ''
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full aspect-[396/556] object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Book a Call CTA */}
        <div className="mt-14 md:mt-20 flex justify-center">
          <GlowButton label="Book a Call" size="lg" onClick={() => onNavigate('/contact')} />
        </div>
      </div>
    </section>
  );
};
