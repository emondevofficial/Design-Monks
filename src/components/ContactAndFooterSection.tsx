import React, { useState } from 'react';
import { Check, CheckCircle2, MessageCircle } from 'lucide-react';
import {
  BRAND_ASSETS,
  OFFICE_LOCATIONS,
  RoutePath,
  SOCIAL_LINKS,
} from '../data/designMonksData';
import { GlowButton } from './GlowButton';

interface ContactAndFooterSectionProps {
  onNavigate: (path: RoutePath) => void;
}

const BUDGET_OPTIONS = [
  'Less than $5K',
  '$5K - $10K',
  '$10K - $20K',
  '$20K - $50K',
  'More than $50K',
];

export const ContactAndFooterSection: React.FC<ContactAndFooterSectionProps> = ({
  onNavigate,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [budget, setBudget] = useState('$10K - $20K');
  const [details, setDetails] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError('Please enter a valid email address.');
      return;
    }
    if (!details.trim()) {
      setFormError('Please share a brief overview of your project.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <>
      {/* Contact CTA Section */}
      <section id="contact-cta" className="bg-[#fafafa] px-4 sm:px-8 lg:px-16 pb-16 md:pb-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#e5e5e5] bg-[#fbfaf6] p-6 sm:p-10 lg:p-16 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
            {/* Decorative Subtle Yellow Gradient Glows */}
            <img
              src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68ba5e44ccb1468ce5b97221_96a931f11af1a2f6b37e251396d130df_6894f274513a65bb1abe220f_Gradient%20%281%29-p-130x130q80.avif"
              alt=""
              aria-hidden="true"
              referrerPolicy="no-referrer"
              className="pointer-events-none absolute top-0 right-0 w-[420px] opacity-85"
            />
            <img
              src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68ba5e44dc9d7cd13e738839_92c4e6700f092875cffdf04c77a01999_6894f29b7c0ac32bcac50b5f_Gradient%20%282%29-p-130x130q80.avif"
              alt=""
              aria-hidden="true"
              referrerPolicy="no-referrer"
              className="pointer-events-none absolute bottom-0 left-0 w-[340px] opacity-85"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
              {/* Left Column: Offer + Value Props + Specialist Card */}
              <div className="flex flex-col justify-between gap-8 h-full">
                <div className="space-y-4">
                  <span className="inline-flex items-center rounded-full border border-[#28e485] bg-[#16ff85]/10 px-3.5 py-1 text-sm font-medium text-[#188a50]">
                    Claim a $799 Consultation, on Us!
                  </span>
                  <h2 className="dm-heading font-title text-[2rem] sm:text-[2.75rem] font-bold leading-[1.15] text-[#0a0a0a]">
                    Enhance Your Brand Potential <em>At No Cost!</em>
                  </h2>

                  <ul className="pt-2 space-y-3 text-base text-[#404040]">
                    {[
                      'Expect a response from us within 24 hours',
                      'We’re happy to sign an NDA upon request.',
                      'Get access to a team of dedicated product specialists.',
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7d40ff]/15 text-[#7d40ff]">
                          <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Shaer Reaz Specialist Card */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border border-[#e5e5e5] bg-white/85 p-5 backdrop-blur-sm">
                  <img
                    src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6ac3523dd1d9af0efbaeaf24_2e5e96865d86189f255298303d6064bd_Shaer%20Reaz.avif"
                    alt="Shaer Reaz, Head of Business at Design Monks"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="h-16 w-16 rounded-full object-cover border border-neutral-200 shrink-0"
                  />
                  <div className="space-y-1">
                    <p className="font-title text-lg font-bold text-[#0a0a0a]">Shaer Reaz</p>
                    <p className="text-sm text-[#525252]">Head of Business, Design Monks</p>
                    <div className="flex flex-wrap items-center gap-4 pt-1">
                      <a
                        href="https://wa.me/+17165036335"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0a0a0a] hover:text-[#7d40ff] transition-colors"
                      >
                        <MessageCircle className="h-4 w-4 text-[#188a50]" />
                        <span>+1 (716) 503-6335</span>
                      </a>
                      <a
                        href="http://designmonks.co/meeting"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-[#7d40ff] underline underline-offset-4 hover:text-[#592db5]"
                      >
                        Book a Call Directly
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Consultation Form */}
              <div className="rounded-2xl bg-white p-6 sm:p-8 border border-[#e5e5e5] shadow-sm">
                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="font-title text-2xl font-bold text-[#0a0a0a]">
                      Thank you! Your submission has been received!
                    </h3>
                    <p className="text-base text-[#525252] max-w-md mx-auto">
                      Shaer and our product design specialists will review your brief and follow up
                      within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFullName('');
                        setEmail('');
                        setWhatsapp('');
                        setDetails('');
                      }}
                      className="mt-2 inline-flex items-center rounded-lg border border-[#7d40ff] px-5 py-2.5 text-sm font-semibold text-[#7d40ff] hover:bg-[#7d40ff] hover:text-white transition-colors cursor-pointer"
                    >
                      Send another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="dm-full-name" className="block text-sm font-medium text-[#0a0a0a] mb-1.5">
                        Full Name
                      </label>
                      <input
                        id="dm-full-name"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-neutral-300 bg-[#fafafa] px-4 py-3 text-sm text-[#0a0a0a] placeholder:text-neutral-400 focus:border-[#7d40ff] focus:bg-white focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="dm-email" className="block text-sm font-medium text-[#0a0a0a] mb-1.5">
                          Your Email*
                        </label>
                        <input
                          id="dm-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="yourmail@gmail.com"
                          className="w-full rounded-lg border border-neutral-300 bg-[#fafafa] px-4 py-3 text-sm text-[#0a0a0a] placeholder:text-neutral-400 focus:border-[#7d40ff] focus:bg-white focus:outline-none"
                        />
                      </div>
                      <div>
                        <label htmlFor="dm-whatsapp" className="block text-sm font-medium text-[#0a0a0a] mb-1.5">
                          Whatsapp Number
                        </label>
                        <input
                          id="dm-whatsapp"
                          type="tel"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          placeholder="+1 123 456 7890"
                          className="w-full rounded-lg border border-neutral-300 bg-[#fafafa] px-4 py-3 text-sm text-[#0a0a0a] placeholder:text-neutral-400 focus:border-[#7d40ff] focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <span className="block text-sm font-medium text-[#0a0a0a] mb-2">
                        Project Budget
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {BUDGET_OPTIONS.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setBudget(option)}
                            className={`rounded-lg border px-3 py-2 text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                              budget === option
                                ? 'border-[#7d40ff] bg-[#7d40ff]/10 text-[#0a0a0a]'
                                : 'border-neutral-300 bg-[#fafafa] text-[#525252] hover:border-neutral-400'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="dm-details" className="block text-sm font-medium text-[#0a0a0a] mb-1.5">
                        Project Details*
                      </label>
                      <textarea
                        id="dm-details"
                        required
                        rows={3}
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        placeholder="I want to redesign my website.."
                        className="w-full rounded-lg border border-neutral-300 bg-[#fafafa] px-4 py-3 text-sm text-[#0a0a0a] placeholder:text-neutral-400 focus:border-[#7d40ff] focus:bg-white focus:outline-none resize-none"
                      />
                    </div>

                    {formError && (
                      <p className="text-sm font-medium text-red-600">{formError}</p>
                    )}

                    <div className="pt-2">
                      <GlowButton
                        type="submit"
                        label="Send Inquiry"
                        size="lg"
                        curvedArrow
                        className="w-full sm:w-auto"
                      />
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Guarantee Pill Marquee */}
          <div className="relative mt-4 flex items-center overflow-hidden rounded-full border border-[#e5e5e5] bg-white py-3.5 px-6 shadow-[0_20px_48px_-12px_rgba(15,23,42,0.1)]">
            <div className="flex-1 overflow-hidden">
              <div className="animate-dm-marquee-fast flex items-center gap-12 whitespace-nowrap">
                {[0, 1, 2].map((i) => (
                  <p key={i} className="text-sm sm:text-base font-medium text-[#0a0a0a]">
                    Why risk it with the{' '}
                    <em className="font-playfair-em text-[#592db5]">wrong partner</em>? Get 100%
                    value and guarantee. Don’t miss out - Secure your{' '}
                    <em className="font-playfair-em text-[#592db5]">brand’s future</em> today.
                  </p>
                ))}
              </div>
            </div>
            <div className="hidden md:block shrink-0 pl-4 bg-white z-10">
              <img
                src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67adb7fc40ac25c9c66f4018_aa9ab833b3c7ac4ca1390641d6680d27_CTA%20Image.avif"
                alt="Design Monks team avatars with 40+ count badge"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="h-9 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-[#fafafa]">
        {/* Top Light Slogan + Socials + Newsletter */}
        <div className="bg-[#fafafa] text-[#0a0a0a] px-4 sm:px-8 lg:px-16 py-14 md:py-20 rounded-b-[2rem]">
          <div className="mx-auto max-w-[51.375rem] text-center space-y-8">
            <p className="text-lg sm:text-xl leading-relaxed text-[#525252]">
              Say goodbye to outdated enterprise software and welcome the smoother one. We lead you
              from design to product innovation to shape your path from idea to success
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label={s.name}
                  className="flex h-11 w-11 items-center justify-center rounded-lg bg-black/10 hover:bg-[#7d40ff]/20 transition-colors"
                >
                  <img
                    src={s.icon}
                    alt={s.name}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="h-5 w-5 brightness-0"
                  />
                </a>
              ))}
            </div>

            {/* Newsletter Subscribe */}
            {newsletterSubscribed ? (
              <div className="rounded-xl bg-emerald-50 border border-emerald-200 px-5 py-3.5 text-sm font-medium text-emerald-800 inline-block">
                Thank you! Your submission has been received! 😄
              </div>
            ) : (
              <form
                onSubmit={handleNewsletterSubmit}
                className="mx-auto flex max-w-md flex-col sm:flex-row items-stretch sm:items-center gap-2.5"
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  aria-label="Newsletter email"
                  className="flex-1 rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-[#0a0a0a] placeholder:text-neutral-400 focus:border-[#7d40ff] focus:outline-none"
                />
                <GlowButton type="submit" label="Subscribe" curvedArrow />
              </form>
            )}
          </div>
        </div>

        {/* Globe Video + 8 Global Office Locations */}
        <div className="relative overflow-hidden px-4 sm:px-8 lg:px-16 pt-28 sm:pt-36 md:pt-48 pb-16">
          <div className="pointer-events-none absolute inset-0 z-0">
            <video
              src={BRAND_ASSETS.footerGlobeVideo}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover opacity-55"
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-[1280px] grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 text-left">
            {OFFICE_LOCATIONS.map((loc) => (
              <div key={loc.country} className="space-y-1.5">
                <p className="font-title text-base font-bold text-[#fafafa]">{loc.country}</p>
                <p className="text-xs sm:text-sm leading-relaxed text-neutral-400 whitespace-pre-line">
                  {loc.address}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Link Columns */}
        <div className="px-4 sm:px-8 lg:px-16 pt-8 pb-12">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-white/10">
              {/* Important Links */}
              <div>
                <h3 className="font-title text-lg font-bold text-white mb-5">Important Links</h3>
                <ul className="space-y-2.5 text-sm text-neutral-400">
                  {[
                    { label: 'Contact Us', path: '/contact' as RoutePath },
                    { label: 'About us', path: '/about' as RoutePath },
                    { label: 'Products', path: '/projects' as RoutePath },
                    { label: 'Industry', path: '/projects' as RoutePath },
                    { label: 'Blogs', path: '/blog' as RoutePath },
                    { label: 'LLM info', path: '/ai-excellency' as RoutePath },
                  ].map((item) => (
                    <li key={item.label}>
                      <button
                        type="button"
                        onClick={() => onNavigate(item.path)}
                        className="hover:text-[#a87fff] transition-colors cursor-pointer"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="font-title text-lg font-bold text-white mb-5">Services</h3>
                <ul className="space-y-2.5 text-sm text-neutral-400">
                  {[
                    { label: 'UI/UX Design', path: '/services/ui-ux' as RoutePath },
                    { label: 'Web Design', path: '/services/web-design' as RoutePath },
                    { label: 'Logo & Branding', path: '/services/logo-branding' as RoutePath },
                    { label: 'Webflow Design', path: '/services/webflow-design' as RoutePath },
                    { label: 'Framer Design', path: '/services/framer-design' as RoutePath },
                    { label: 'AI Website Redesign', path: '/ai-excellency' as RoutePath },
                    { label: 'SaaS Design', path: '/services/saas-design' as RoutePath },
                    { label: 'AI Pitch Deck Design', path: '/ai-excellency' as RoutePath },
                  ].map((item) => (
                    <li key={item.label}>
                      <button
                        type="button"
                        onClick={() => onNavigate(item.path)}
                        className="hover:text-[#a87fff] transition-colors cursor-pointer"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specialized Industry */}
              <div>
                <h3 className="font-title text-lg font-bold text-white mb-5">
                  Specialized Industry
                </h3>
                <ul className="space-y-2.5 text-sm text-neutral-400">
                  {[
                    'Fintech Industry',
                    'Healthcare Industry',
                    'Fitness & Gym Industry',
                    'Edtech Industry',
                    'Cybersecurity Industry',
                  ].map((ind) => (
                    <li key={ind}>
                      <button
                        type="button"
                        onClick={() => onNavigate('/projects')}
                        className="hover:text-[#a87fff] transition-colors cursor-pointer"
                      >
                        {ind}
                      </button>
                    </li>
                  ))}
                  <li>
                    <a
                      href="https://www.figma.com/proto/3SAd2UpB6GgFnozSVLb73V/Design-Monks-Pitchdeck?page-id=0%3A1&node-id=1-3671"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-[#a87fff] transition-colors"
                    >
                      <span>Company Deck</span>
                      <img
                        src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68a1a4d69b7f2d6096d260a3_Download%20button.svg"
                        alt="Download"
                        referrerPolicy="no-referrer"
                        className="h-4 w-4"
                      />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Compare */}
              <div>
                <h3 className="font-title text-lg font-bold text-white mb-5">Compare</h3>
                <ul className="space-y-2.5 text-sm text-neutral-400">
                  {['Vs Agencies', 'Vs Freelancers', 'Vs Inhouse'].map((cmp) => (
                    <li key={cmp}>
                      <button
                        type="button"
                        onClick={() => onNavigate('/pricing')}
                        className="hover:text-[#a87fff] transition-colors cursor-pointer"
                      >
                        {cmp}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Explore AI Summary */}
              <div className="col-span-2 md:col-span-1 space-y-4">
                <h3 className="font-title text-lg font-bold text-white">Explore AI Summary</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    {
                      name: 'ChatGPT',
                      icon: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6abca6f67550c40d7006a05b_ai-icon-chatgpt.svg',
                      href: 'https://chatgpt.com/?hints=search&q=Visit%20https%3A%2F%2Fwww.designmonks.co%2F',
                    },
                    {
                      name: 'Claude',
                      icon: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6abca6f77550c40d7006a060_Claude.svg',
                      href: 'https://claude.ai/new?q=Visit%20https%3A%2F%2Fwww.designmonks.co%2F',
                    },
                    {
                      name: 'Perplexity',
                      icon: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6abca6f77550c40d7006a05e_Perplexity.svg',
                      href: 'https://www.perplexity.ai/search/new?q=Visit%20https%3A%2F%2Fwww.designmonks.co%2F',
                    },
                    {
                      name: 'Gemini',
                      icon: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6abca6f77550c40d7006a05c_Gemini.svg',
                      href: 'https://www.google.com/search?udm=50&q=Visit%20https%3A%2F%2Fwww.designmonks.co%2F',
                    },
                    {
                      name: 'Grok',
                      icon: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6abca6f77550c40d7006a05f_Grok.svg',
                      href: 'https://grok.com/?q=Visit%20https%3A%2F%2Fwww.designmonks.co%2F',
                    },
                  ].map((ai) => (
                    <a
                      key={ai.name}
                      href={ai.href}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      title={ai.name}
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 hover:bg-[#7d40ff]/30 transition-colors"
                    >
                      <img src={ai.icon} alt={ai.name} referrerPolicy="no-referrer" className="h-5 w-5" />
                    </a>
                  ))}
                </div>
                <a
                  href="https://www.google.com/preferences/source?q=designmonks.co"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-neutral-200 hover:border-[#7d40ff] transition-colors"
                >
                  <img
                    src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6abca6f77550c40d7006a05d_Google.svg"
                    alt="Google"
                    referrerPolicy="no-referrer"
                    className="h-4 w-4"
                  />
                  <span>Add Design Monks on Google</span>
                </a>
              </div>
            </div>

            {/* Partner Badges Strip */}
            <div className="py-10 flex flex-wrap items-center justify-between gap-6 border-b border-white/10">
              {[
                {
                  label: 'Official Framer Expert',
                  img: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6accc43210785e9dc68f3fa1_footer-badge-framer-expert.svg',
                  href: 'https://www.framer.com/@design-monks/',
                },
                {
                  label: 'Webflow Certified Partner',
                  img: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6accc43210785e9dc68f3fc8_footer-badge-webflow-certified-partner.svg',
                  href: 'https://webflow.com/@design-monks-co',
                },
                {
                  label: 'Top Product Design Agency',
                  img: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6accc43210785e9dc68f4001_footer-badge-dribbble-select.svg',
                  href: 'https://dribbble.com/design_monks',
                },
                {
                  label: 'OpenAI Select Partner',
                  img: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6accc432bfad3a3a6ebbe90c_footer-badge-openai-select-partner.svg',
                  href: '#contact-cta',
                },
              ].map((badge) => (
                <a
                  key={badge.label}
                  href={badge.href}
                  target={badge.href.startsWith('http') ? '_blank' : undefined}
                  rel={badge.href.startsWith('http') ? 'noopener noreferrer nofollow' : undefined}
                  className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300 hover:text-white transition-colors"
                >
                  <img
                    src={badge.img}
                    alt={badge.label}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="h-7 w-auto"
                  />
                  <span>{badge.label}</span>
                </a>
              ))}

              {/* Clutch + Google Reviews */}
              <a
                href="https://clutch.co/profile/design-monks"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex items-center gap-3 text-xs text-neutral-300 hover:text-white"
              >
                <img
                  src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68a1a63e1b6574571b18b9f9_Frame%201116606742.svg"
                  alt="Clutch"
                  referrerPolicy="no-referrer"
                  className="h-7 w-auto"
                />
                <div>
                  <div>Reviewed on</div>
                  <img
                    src={BRAND_ASSETS.fiveStarsFooter}
                    alt="5 stars"
                    referrerPolicy="no-referrer"
                    className="h-3.5 mt-0.5"
                  />
                </div>
              </a>

              <div className="flex items-center gap-3 text-xs text-neutral-300">
                <img
                  src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68a1a6571c705d568fbe3e0d_Google.svg"
                  alt="Google"
                  referrerPolicy="no-referrer"
                  className="h-7 w-auto"
                />
                <div>
                  <div>Reviewed on</div>
                  <img
                    src={BRAND_ASSETS.fiveStarsFooter}
                    alt="5 stars"
                    referrerPolicy="no-referrer"
                    className="h-3.5 mt-0.5"
                  />
                </div>
              </div>
            </div>

            {/* Copyright Row */}
            <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-neutral-500">
              <button
                type="button"
                onClick={() => onNavigate('/about')}
                className="hover:text-neutral-300 cursor-pointer"
              >
                Terms &amp; Conditions
              </button>
              <p>&copy; 2026, Design Monks LLC, All Rights Reserved.</p>
              <button
                type="button"
                onClick={() => onNavigate('/about')}
                className="hover:text-neutral-300 cursor-pointer"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>

        {/* Full-width Giant Green-Gradient Design Monks Footer Banner */}
        <div className="w-full overflow-hidden pb-20 md:pb-16">
          <img
            src={BRAND_ASSETS.footerWordmarkBanner}
            alt="Design Monks footer wordmark on green gradient"
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </div>
      </footer>
    </>
  );
};
