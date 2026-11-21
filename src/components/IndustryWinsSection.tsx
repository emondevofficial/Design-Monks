import React from 'react';
import {
  BRAND_ASSETS,
  CLIENT_LOGOS,
  CaseStudy,
  INDUSTRY_WINS,
  RoutePath,
} from '../data/designMonksData';
import { GlowButton } from './GlowButton';

interface IndustryWinsSectionProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
  onNavigate: (path: RoutePath) => void;
}

export const IndustryWinsSection: React.FC<IndustryWinsSectionProps> = ({
  onSelectCaseStudy,
  onNavigate,
}) => {
  return (
    <section className="relative z-20 rounded-[2rem] bg-[#fafafa] text-[#0a0a0a] px-4 sm:px-8 lg:px-16 py-16 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        {/* Trusted By 200+ Logos Block */}
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="font-title text-lg sm:text-xl font-semibold text-[#525252] mb-8">
            Trusted by 200+ of the world&apos;s top brands
          </h2>
          <div className="relative overflow-hidden py-2">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#fafafa] to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#fafafa] to-transparent"
            />
            <div className="animate-dm-marquee-left flex items-center gap-12 sm:gap-16">
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="flex h-10 shrink-0 items-center justify-center opacity-75 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="h-7 sm:h-8 w-auto object-contain brightness-0 opacity-75"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industry Wins Header */}
        <div className="mb-10 md:mb-14 flex flex-col items-start md:items-center md:text-center gap-4">
          <span className="dm-section-tag-light">Industry Wins</span>
          <h2 className="dm-heading font-title text-[2rem] sm:text-[2.75rem] md:text-[3rem] font-bold leading-[1.15] text-[#0a0a0a] text-balance">
            Proven Success in <br />
            <em>Every Industry</em>
          </h2>
        </div>

        {/* Sticky Stacked Case Study Cards */}
        <div className="flex flex-col gap-6 md:gap-8">
          {INDUSTRY_WINS.map((study, index) => (
            <button
              key={study.id}
              type="button"
              onClick={() => onSelectCaseStudy(study)}
              style={{
                backgroundColor: study.bgColor,
                zIndex: 3 + index,
              }}
              className={`group w-full text-left rounded-2xl p-5 sm:p-8 lg:pl-10 lg:pr-5 lg:py-5 flex flex-col lg:flex-row items-center gap-6 lg:gap-14 transition-transform duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(15,23,42,0.06)] cursor-pointer ${
                index < 4 ? 'lg:sticky lg:top-20' : ''
              }`}
            >
              {/* Left Text Block */}
              <div className="flex-1 w-full flex flex-col justify-between">
                <div>
                  <h3 className="font-playfair-em text-lg sm:text-xl text-[#0a0a0a]">
                    {study.industry}
                  </h3>
                  <h4 className="font-title mt-3 mb-3 text-2xl sm:text-[1.75rem] md:text-[2rem] font-bold leading-[1.2] text-[#0a0a0a]">
                    {study.title}
                  </h4>
                  <p className="text-[1rem] leading-[1.55] text-[#404040] max-w-xl">
                    {study.description}
                  </p>
                </div>

                {/* Scope / Duration Grid */}
                <div className="mt-7 grid grid-cols-2 gap-4 py-2.5 border-y border-black/10 max-w-md">
                  <div>
                    <p className="text-sm text-[#525252]">{study.metric1Label}</p>
                    <div className="font-title text-lg sm:text-xl font-bold text-[#0a0a0a] mt-0.5">
                      {study.metric1Value}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-[#525252]">{study.metric2Label}</p>
                    <div className="font-title text-lg sm:text-xl font-bold text-[#0a0a0a] mt-0.5">
                      {study.metric2Value}
                    </div>
                  </div>
                </div>

                {/* Author Footer */}
                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={study.authorAvatar}
                      alt={study.authorName}
                      width={48}
                      height={48}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="h-12 w-12 rounded-full object-cover border border-black/10"
                    />
                    <div>
                      <div className="text-sm font-bold text-[#0a0a0a]">{study.authorName}</div>
                      <div className="text-sm text-[#525252]">{study.authorRole}</div>
                    </div>
                  </div>
                  <img
                    src={BRAND_ASSETS.ctaArrowCirclePurple}
                    alt="View case study"
                    width={22}
                    height={22}
                    referrerPolicy="no-referrer"
                    className="h-6 w-6 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>
              </div>

              {/* Right Showcase Image */}
              <div className="w-full lg:w-[48%] max-w-[582px] overflow-hidden rounded-xl">
                <img
                  src={study.image}
                  alt={study.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </button>
          ))}
        </div>

        {/* See All Projects CTA */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <GlowButton label="See All Projects" size="lg" onClick={() => onNavigate('/projects')} />
        </div>
      </div>
    </section>
  );
};
