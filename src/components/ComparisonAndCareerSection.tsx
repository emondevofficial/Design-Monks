import React from 'react';
import { Check, X } from 'lucide-react';
import { COMPARISON_ROWS, RoutePath } from '../data/designMonksData';

interface ComparisonAndCareerSectionProps {
  onNavigate: (path: RoutePath) => void;
}

const COLUMNS = ['Speed', 'Flexibility', 'Quality', 'Scalability', 'Affordability'];

export const ComparisonAndCareerSection: React.FC<ComparisonAndCareerSectionProps> = ({
  onNavigate,
}) => {
  return (
    <>
      {/* Comparison Matrix Section */}
      <section className="rounded-[2rem] bg-[#0a0a0a] text-[#fafafa] py-16 md:py-24 overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-16">
          <div className="mb-12 md:mb-16 flex flex-col items-start md:items-center md:text-center gap-4">
            <span className="dm-section-tag-dark">Why Choose Us</span>
            <h2 className="dm-heading font-title text-[2rem] sm:text-[2.75rem] md:text-[3rem] font-bold leading-[1.15] text-[#fafafa]">
              <em className="not-italic font-playfair-em">Design Monks’s</em> Alternative?
              <br />
              <em className="not-italic font-playfair-em">Think</em> One More Time!
            </h2>
          </div>

          {/* Horizontal Scroll Wrapper on small viewports */}
          <div className="overflow-x-auto no-scrollbar pb-4">
            <div className="min-w-[820px]">
              {/* Table Header */}
              <div className="grid grid-cols-[3.2fr_1fr_1fr_1fr_1fr_1fr] items-center px-8 pb-5 text-base font-bold text-[#fafafa]">
                <div>Platform</div>
                {COLUMNS.map((col) => (
                  <div key={col} className="text-center">
                    {col}
                  </div>
                ))}
              </div>

              {/* Table Rows */}
              <div className="flex flex-col gap-3">
                {COMPARISON_ROWS.map((row) => {
                  const rowInner = (
                    <div
                      className={`grid grid-cols-[3.2fr_1fr_1fr_1fr_1fr_1fr] items-center px-8 py-6 rounded-[2rem] ${
                        row.highlighted
                          ? 'bg-gradient-to-b from-[#592db5] via-[#6b35de] to-[#7d40ff] text-white'
                          : 'bg-[#121216] border border-white/10 text-[#fafafa]'
                      }`}
                    >
                      <div className="flex items-start gap-5 pr-6">
                        {row.highlighted && (
                          <div className="hidden sm:flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white/15">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                              fill="none"
                              className="h-8 w-8 text-white"
                            >
                              <path
                                d="M30.5925 9.85747C29.8273 8.04493 28.7033 6.40027 27.2904 5.01676C25.8774 3.63326 24.1946 2.52956 22.3435 1.78029C20.4956 1.03102 18.5143 0.645508 16.5108 0.645508H14.6565C10.7701 0.645508 7.04247 2.15648 4.2928 4.84888C1.54312 7.54127 0 11.1881 0 14.9935V30.2183C0 30.6194 0.165108 31.0049 0.454046 31.2909C0.746159 31.5738 1.13988 31.7355 1.54947 31.7355H17.0982C19.0223 31.7355 20.9274 31.3624 22.7055 30.6411C24.4836 29.9199 26.0997 28.8659 27.4618 27.5321C28.8208 26.1984 29.9003 24.619 30.637 22.878C31.3736 21.1369 31.7515 19.2684 31.7515 17.3844V15.5687C31.7515 13.6069 31.3577 11.6669 30.5925 9.85747ZM23.7596 19.9835C21.4989 21.9235 18.781 22.9464 15.898 22.9464C13.0149 22.9464 10.2938 21.9235 8.03629 19.9835C7.50604 19.5327 7.45524 18.7461 7.91564 18.23C8.37921 17.7108 9.17935 17.6611 9.7096 18.1119C11.4972 19.6477 13.6373 20.4592 15.898 20.4592C18.1587 20.4592 20.2955 19.6477 22.0863 18.1119C22.6134 17.6611 23.4167 17.7139 23.8771 18.23C24.3407 18.7461 24.2867 19.5327 23.7596 19.9835Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        )}
                        <div>
                          <h3 className="font-title text-xl font-bold text-white">
                            {row.platform}
                          </h3>
                          <p
                            className={`mt-1.5 text-sm sm:text-base leading-relaxed ${
                              row.highlighted ? 'text-white/90' : 'text-neutral-400'
                            }`}
                          >
                            {row.description}
                          </p>
                        </div>
                      </div>

                      {row.scores.map((passed, colIdx) => (
                        <div key={colIdx} className="flex justify-center">
                          {passed ? (
                            <span
                              className={`flex h-9 w-9 items-center justify-center rounded-full ${
                                row.highlighted
                                  ? 'bg-[#2cfa92]/20 text-[#2cfa92]'
                                  : 'bg-emerald-500/15 text-emerald-400'
                              }`}
                            >
                              <Check className="h-5 w-5 stroke-[2.5]" />
                            </span>
                          ) : (
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/15 text-red-500">
                              <X className="h-5 w-5 stroke-[2.5]" />
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  );

                  return row.highlighted ? (
                    <div key={row.platform} className="dm-comparison-wrapper shadow-2xl">
                      {rowInner}
                    </div>
                  ) : (
                    <div key={row.platform}>{rowInner}</div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Openings / Career Section */}
      <section className="relative mt-4 rounded-[2rem] bg-[#0a0a0a] text-[#fafafa] px-4 sm:px-8 lg:px-16 py-16 md:py-24 overflow-hidden">
        {/* Decorative Holographic 3D Ring */}
        <img
          src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67db041a706632a9c11cb6c6_Ring.avif"
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          loading="lazy"
          className="pointer-events-none absolute -top-4 right-4 sm:right-12 w-24 sm:w-32 h-auto opacity-85"
        />

        <div className="relative z-10 mx-auto max-w-[1280px]">
          <div className="mb-10 flex flex-col items-start gap-4 max-w-sm">
            <span className="dm-section-tag-dark">Openings</span>
            <h2 className="dm-heading font-title text-[2rem] sm:text-[2.75rem] md:text-[3rem] font-bold leading-[1.15] text-[#fafafa]">
              Be a <em className="font-playfair-em">Monk!</em> Like us
            </h2>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('/career')}
            className="dm-career-card-outer block w-full text-left cursor-pointer"
          >
            <div className="rounded-[calc(2rem-1.5px)] bg-[#0a0a0a] px-6 py-8 sm:px-9 sm:py-11 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
                <img
                  src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67db8c5ffeaab886bb2c65f2_mike%20icon.svg"
                  alt="Megaphone icon"
                  referrerPolicy="no-referrer"
                  className="h-8 w-8"
                />
              </div>

              <div className="flex-1 space-y-3">
                <h3 className="font-title text-2xl sm:text-[1.75rem] font-bold text-[#fafafa]">
                  Business Development Executive
                </h3>
                <p className="text-base leading-relaxed text-[#d4d4d4] max-w-3xl">
                  We&apos;re looking for a Business Development Executive with 2-4 years of
                  experience to be the first point of contact for our international clients.
                  You&apos;ll qualify leads, run outreach, book meetings and turn conversations into
                  signed projects. Remote, full time.
                </p>
                <div className="pt-2 flex flex-wrap gap-2.5">
                  {['Starting from BDT 40K', '1 Vacancy', 'Full Time', 'Remote'].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs sm:text-sm text-neutral-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </button>
        </div>
      </section>
    </>
  );
};
