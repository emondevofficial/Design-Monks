import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS, WRITTEN_TESTIMONIALS } from '../data/designMonksData';

export const TestimonialsAndFaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Written Testimonials Section */}
      <section className="bg-[#fafafa] text-[#0a0a0a] py-16 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-16 mb-10 md:mb-14 flex flex-col items-start md:items-center md:text-center gap-4">
          <span className="dm-section-tag-light">Referral From People</span>
          <h2 className="dm-heading font-title text-[2rem] sm:text-[2.75rem] md:text-[3rem] font-bold leading-[1.15] text-[#0a0a0a]">
            Trusted by People
            <br />
            <em>Chosen by Brands</em>
          </h2>
        </div>

        {/* Smooth Horizontal Marquee of Testimonial Cards */}
        <div className="relative hover-pause overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-24 bg-gradient-to-r from-[#fafafa] to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-24 bg-gradient-to-l from-[#fafafa] to-transparent"
          />

          <div className="animate-dm-marquee-left-slow flex items-stretch gap-4 px-4">
            {[...WRITTEN_TESTIMONIALS, ...WRITTEN_TESTIMONIALS].map((t, idx) => (
              <article
                key={`${t.name}-${idx}`}
                className="w-[20rem] sm:w-[25rem] shrink-0 rounded-2xl border border-[#e5e5e5] bg-white p-6 flex flex-col justify-between gap-6 shadow-[0_2px_12px_rgba(15,23,42,0.03)]"
              >
                <p className="text-[1rem] leading-[1.6] text-[#525252]">{t.quote}</p>
                <div className="flex items-center gap-3.5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover border border-neutral-200 shrink-0"
                  />
                  <div>
                    <p className="font-title text-base font-bold text-[#0a0a0a]">{t.name}</p>
                    <p className="text-sm text-[#525252]">{t.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#fafafa] text-[#0a0a0a] px-4 sm:px-8 lg:px-16 py-16 md:py-24">
        <div className="mx-auto max-w-[1000px]">
          <div className="mb-10 md:mb-14 flex flex-col items-start md:items-center md:text-center gap-4">
            <span className="dm-section-tag-light">Frequently Asked Questions</span>
            <h2 className="dm-heading font-title text-[2rem] sm:text-[2.75rem] md:text-[3rem] font-bold leading-[1.15] text-[#0a0a0a]">
              Your Questions
              <br />
              <em className="font-playfair-em">Answered!</em>
            </h2>
          </div>

          <div className="divide-y divide-[#e5e5e5] border-t border-b border-[#e5e5e5]">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={item.q} className="py-5 sm:py-7">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 text-left cursor-pointer group"
                  >
                    <h3 className="font-title text-lg sm:text-xl font-bold text-[#0a0a0a] group-hover:text-[#7d40ff] transition-colors">
                      {item.q}
                    </h3>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-[#0a0a0a] transition-transform duration-300 ${
                        isOpen ? 'rotate-180 border-[#7d40ff] text-[#7d40ff]' : ''
                      }`}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[1rem] leading-[1.65] text-[#525252]">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
