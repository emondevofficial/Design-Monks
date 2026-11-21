import React, { useState } from 'react';
import {
  DEVICE_MARQUEE_LABELS,
  DEVICE_SHOWCASE_IMAGES,
  RoutePath,
  TEAM_PREVIEW,
} from '../data/designMonksData';

interface WhyChooseUsSectionProps {
  onNavigate: (path: RoutePath) => void;
}

const PLAN_OPTIONS = ['Monthly', 'Quarterly', 'Annually'] as const;

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ onNavigate }) => {
  const [selectedBilling, setSelectedBilling] = useState<(typeof PLAN_OPTIONS)[number]>('Monthly');

  return (
    <>
      {/* Why Choose Us Bento Section */}
      <section className="bg-[#fafafa] text-[#0a0a0a] px-4 sm:px-8 lg:px-16 py-16 md:py-24">
        <div className="mx-auto max-w-[1038px]">
          <div className="mb-10 md:mb-14 flex flex-col items-start md:items-center md:text-center gap-4">
            <span className="dm-section-tag-light">Why Choose Us</span>
            <h2 className="dm-heading font-title text-[2rem] sm:text-[2.75rem] md:text-[3rem] font-bold leading-[1.15] text-[#0a0a0a]">
              Unmatched <em>Benefits</em> For <br />
              <em>Your</em> Success
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {/* Top Row: Flexible Payment Plans + Unlimited Revisions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Card 1: Flexible Payment Plans */}
              <div className="relative overflow-hidden rounded-2xl bg-[#f4f1ff] p-6 min-h-[380px] flex flex-col justify-between border border-[#e9e3ff]">
                <div className="relative z-10 flex flex-col gap-5">
                  <div>
                    <h3 className="font-title text-xl font-bold text-[#0a0a0a]">
                      Flexible Payment Plans
                    </h3>
                    <p className="mt-1 text-base text-[#525252]">Pay your way</p>
                  </div>

                  {/* Interactive Billing Selector */}
                  <div className="flex flex-wrap gap-2">
                    {PLAN_OPTIONS.map((plan) => (
                      <button
                        key={plan}
                        type="button"
                        onClick={() => setSelectedBilling(plan)}
                        className={`rounded-[10px] px-4 py-2.5 text-sm font-medium border transition-all cursor-pointer ${
                          selectedBilling === plan
                            ? 'bg-[#7d40ff] text-white border-[#7d40ff] shadow-sm'
                            : 'bg-white/65 text-[#0a0a0a] border-[#e1e1e1] hover:bg-white'
                        }`}
                      >
                        {plan}
                      </button>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-5 text-sm font-medium text-[#404040]">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a101fc0c0913c21a436cc91_Container%20(5).svg"
                        alt=""
                        referrerPolicy="no-referrer"
                        className="h-4 w-4"
                      />
                      <span>No commitment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a101fc0c0913c21a436cc91_Container%20(5).svg"
                        alt=""
                        referrerPolicy="no-referrer"
                        className="h-4 w-4"
                      />
                      <span>Cancel anytime</span>
                    </div>
                  </div>
                </div>

                {/* Decorative stacked cards visual */}
                <div className="relative z-10 mt-6 flex justify-end">
                  <img
                    src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a21ccf4475a5abd11d5d7da_Group%202%20(1).avif"
                    alt="Stacked payment card designs"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-64 sm:w-72 h-auto object-contain rounded-lg transition-transform duration-300 hover:scale-[1.03]"
                  />
                </div>
              </div>

              {/* Card 2: Unlimited Revisions */}
              <div
                className="relative overflow-hidden rounded-2xl p-6 min-h-[380px] flex flex-col justify-between border border-[#e5e5e5]"
                style={{
                  backgroundImage:
                    'url(https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a21d38aadf2f9a9ad9c4f46_Frame%202147238769.avif)',
                  backgroundPosition: '0 100%',
                  backgroundSize: 'cover',
                }}
              >
                <div className="relative z-10 space-y-2.5 max-w-[380px]">
                  <h3 className="font-title text-xl font-bold text-[#0a0a0a]">
                    Unlimited Revisions
                  </h3>
                  <p className="text-base leading-relaxed text-[#525252]">
                    Enjoy unlimited revisions and lifetime support, ensuring your satisfaction at
                    every stage.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Row: Lifetime Support + Hand-Picked Resources */}
            <div className="grid grid-cols-1 lg:grid-cols-[309px_1fr] gap-4">
              {/* Card 3: Lifetime Support */}
              <div
                className="relative overflow-hidden rounded-2xl bg-[#7d40ff] p-6 min-h-[340px] flex flex-col justify-between text-white"
                style={{
                  backgroundImage:
                    'url(https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a21d5e0e0a52795af69a4dc_Frame%202147238769%20(1).avif)',
                  backgroundPosition: '0 0',
                  backgroundSize: 'cover',
                }}
              >
                <div className="space-y-2.5">
                  <h3 className="font-title text-xl font-bold text-white">Lifetime Support</h3>
                  <p className="text-base leading-relaxed text-white/90">
                    Enjoy unlimited revisions and lifetime support, ensuring your satisfaction at
                    every stage.
                  </p>
                </div>
              </div>

              {/* Card 4: Diverse Skill Set + Hand-Picked Resources */}
              <div
                className="relative overflow-hidden rounded-2xl p-6 border border-[#e5e5e5]"
                style={{
                  backgroundImage:
                    'url(https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a21dbc94ff98470072b0689_Frame%202147238769%20(2).avif)',
                  backgroundPosition: '0 0',
                  backgroundSize: 'cover',
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-[260px_1fr] gap-6 items-start">
                  {/* Left White Team Roster Card */}
                  <div className="rounded-xl bg-white p-5 shadow-sm border border-neutral-100">
                    <h3 className="font-title text-lg font-bold text-[#0a0a0a] mb-4">
                      Diverse Skill Set
                    </h3>
                    <div className="flex flex-col gap-3.5">
                      {TEAM_PREVIEW.map((member, idx) => (
                        <div key={member.name}>
                          <div className="flex items-center gap-3">
                            <img
                              src={member.avatar}
                              alt={member.name}
                              referrerPolicy="no-referrer"
                              loading="lazy"
                              className="h-9 w-9 rounded-full object-cover shrink-0"
                            />
                            <div className="min-w-0">
                              <p className="text-sm font-bold text-[#0a0a0a] truncate">
                                {member.name}
                              </p>
                              <p className="text-xs text-[#737373] truncate">{member.role}</p>
                            </div>
                          </div>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {member.tags.map((t) => (
                              <span
                                key={t}
                                className="rounded-md bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-[#525252]"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                          {idx < TEAM_PREVIEW.length - 1 && (
                            <div className="mt-3 h-px w-full bg-neutral-100" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Hand-Picked Resources Copy & Visual */}
                  <div className="flex flex-col justify-between h-full gap-6 pt-1">
                    <div className="space-y-2.5">
                      <h3 className="font-title text-xl font-bold text-[#0a0a0a]">
                        Hand-Picked Resources
                      </h3>
                      <p className="text-base leading-relaxed text-[#525252]">
                        Explore a wide array of thoughtfully curated resources that showcase the rich
                        diversity and unique perspectives from various regions
                      </p>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => onNavigate('/teams')}
                        className="text-sm font-bold text-[#7d40ff] hover:text-[#592db5] transition-colors cursor-pointer"
                      >
                        Meet the full team &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purple Device Showcase Marquee Section */}
      <section className="bg-[#f1eaff] text-[#0a0a0a] py-14 md:py-20 overflow-hidden">
        {/* Device Mockups Continuous Horizontal Track */}
        <div className="overflow-hidden hover-pause">
          <div className="animate-dm-marquee-left-slow flex items-center gap-6 sm:gap-8">
            {[...DEVICE_SHOWCASE_IMAGES, ...DEVICE_SHOWCASE_IMAGES].map((imgSrc, i) => (
              <div
                key={`dev-${i}`}
                className="h-[17rem] sm:h-[22rem] md:h-[25rem] shrink-0 flex items-center"
              >
                <img
                  src={imgSrc}
                  alt="Design Monks product showcase on device"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="h-full w-auto object-contain rounded-xl drop-shadow-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text Capabilities Marquee */}
        <div className="mt-10 md:mt-14 overflow-hidden">
          <div className="animate-dm-marquee-fast flex items-center gap-8">
            {[...Array(4)].map((_, repeatIdx) => (
              <div key={repeatIdx} className="flex items-center gap-8 shrink-0">
                {DEVICE_MARQUEE_LABELS.map((label) => (
                  <React.Fragment key={`${repeatIdx}-${label}`}>
                    <span className="font-body text-lg md:text-2xl font-normal tracking-[0.03rem] text-[#0a0a0a] whitespace-nowrap">
                      {label}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full bg-[#7d40ff] shrink-0"
                    />
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
