import React, { useState } from 'react';
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Clock,
  Globe2,
  Sparkles,
  Users,
  X,
} from 'lucide-react';
import {
  BRAND_ASSETS,
  CLIENT_LOGOS,
  CaseStudy,
  EXTRA_PROJECTS,
  HERO_ROW_1,
  HERO_ROW_2,
  INDUSTRY_WINS,
  OFFICE_LOCATIONS,
  PRICING_PLANS,
  RoutePath,
  TEAM_PREVIEW,
  WHAT_WE_DO_SERVICES,
} from '../data/designMonksData';
import { ComparisonAndCareerSection } from './ComparisonAndCareerSection';
import { GlowButton } from './GlowButton';
import { SmarterDesignSection } from './SmarterDesignSection';

interface InternalPagesProps {
  currentRoute: RoutePath;
  onNavigate: (path: RoutePath) => void;
  onSelectCaseStudy: (study: CaseStudy) => void;
}

const SERVICE_DETAIL_CATALOG: {
  route: RoutePath;
  tag: string;
  title: string;
  emWord: string;
  subtitle: string;
  deliverables: string[];
  timeline: string;
  preview: string;
}[] = [
  {
    route: '/services/ui-ux',
    tag: 'UI/UX Design',
    title: 'Research-Led Product Interfaces',
    emWord: 'That Convert',
    subtitle:
      'From SaaS dashboards to consumer mobile apps, we turn complex user workflows into clear, delightful experiences backed by usability testing.',
    deliverables: [
      'UX Research & User Journey Mapping',
      'Information Architecture & Wireframing',
      'High-Fidelity Web & Mobile App UI',
      'Interactive Figma Prototypes & Design Systems',
    ],
    timeline: '4 – 8 Weeks',
    preview: WHAT_WE_DO_SERVICES[0].images[0].src,
  },
  {
    route: '/services/logo-branding',
    tag: 'Logo & Branding',
    title: 'Brand Identities Built',
    emWord: 'To Stand Out',
    subtitle:
      'Distinctive visual identities, custom marks, typography systems, and packaging engineered to command attention and build lasting trust.',
    deliverables: [
      'Brand Strategy & Positioning',
      'Custom Logo & 3D Mark Exploration',
      'Color, Typography & Illustration System',
      'Comprehensive Brand Book & Social Kits',
    ],
    timeline: '3 – 6 Weeks',
    preview: WHAT_WE_DO_SERVICES[2].images[0].src,
  },
  {
    route: '/services/web-design',
    tag: 'Web Design',
    title: 'High-Converting Websites',
    emWord: 'Engineered for Growth',
    subtitle:
      'Editorial storytelling meets conversion-rate optimization so every scroll guides prospects cleanly toward booking or buying.',
    deliverables: [
      'Conversion Copy Structure & Wireframes',
      'Responsive Desktop, Tablet & Mobile UI',
      'Custom Motion & Micro-Interaction Specs',
      'SEO-Ready Semantic Structure',
    ],
    timeline: '3 – 5 Weeks',
    preview: WHAT_WE_DO_SERVICES[1].images[0].src,
  },
  {
    route: '/services/webflow-design',
    tag: 'Webflow Design',
    title: 'Pixel-Perfect Webflow',
    emWord: 'Built to Scale',
    subtitle:
      'Webflow Certified Partners crafting clean Client-First builds, dynamic CMS collections, and buttery GSAP-grade interactions.',
    deliverables: [
      'Figma-to-Webflow Development',
      'Client-First Clean Class Architecture',
      'Dynamic CMS & Localization Setup',
      'Core Web Vitals & Speed Optimization',
    ],
    timeline: '2 – 4 Weeks',
    preview: WHAT_WE_DO_SERVICES[3].images[0].src,
  },
  {
    route: '/services/framer-design',
    tag: 'Framer Design',
    title: 'Interactive Framer Sites',
    emWord: 'Shipped in Days',
    subtitle:
      'Official Framer Experts building expressive startup websites, interactive product showcases, and rapid launch-ready marketing pages.',
    deliverables: [
      'Custom Framer Components & Overrides',
      'Scroll-Linked & Spring Animations',
      'CMS Collections & SEO Metadata',
      'Instant Publishing & Team Handover',
    ],
    timeline: '1 – 3 Weeks',
    preview: WHAT_WE_DO_SERVICES[3].images[1].src,
  },
  {
    route: '/services/saas-design',
    tag: 'SaaS Design',
    title: 'Intuitive SaaS Products',
    emWord: 'Users Love Daily',
    subtitle:
      'Multi-role enterprise portals, AI copilots, and analytics dashboards designed to slash onboarding friction and boost retention.',
    deliverables: [
      'Onboarding & Activation Funnel Optimization',
      'Data Visualization & Table Architecture',
      'Tokenized Multi-Theme Design Systems',
      'Developer-Ready Figma Specs & QA',
    ],
    timeline: '4 – 10 Weeks',
    preview: HERO_ROW_1[1].src,
  },
];

interface BlogPost {
  id: string;
  category: string;
  readTime: string;
  date: string;
  title: string;
  excerpt: string;
  cover: string;
  body: string[];
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 'ai-ui-ux-sprint',
    category: 'AI & Product',
    readTime: '6 min read',
    date: 'March 2026',
    title: 'How AI-Accelerated UX Research Cuts Discovery Time in Half Without Losing Human Empathy',
    excerpt:
      'Inside our hybrid workflow combining automated synthesis with senior product strategist judgment to uncover friction points faster.',
    cover: HERO_ROW_1[1].src,
    body: [
      'Traditional discovery phases often spend weeks transcribing interviews and clustering sticky notes before a single wireframe is sketched. By pairing structured LLM synthesis with real user observation, our team moves from raw customer calls to validated opportunity trees in 72 hours.',
      'Crucially, AI handles pattern clustering while senior designers own product taste, edge-case judgment, and brand differentiation. The result is faster sprints without generic templates.',
      'Across 200+ startup and enterprise launches, teams that pair rapid prototype validation with weekly user check-ins ship cleaner onboarding flows and cut post-launch rework significantly.',
    ],
  },
  {
    id: 'fintech-onboarding-trust',
    category: 'FinTech UX',
    readTime: '5 min read',
    date: 'February 2026',
    title: 'Designing Trust Into Mobile Finance: Lessons From Redesigning Plenty Pay',
    excerpt:
      'Why progressive disclosure, calm microcopy, and transparent fee previews outperform dense financial dashboards.',
    cover: HERO_ROW_1[5].src,
    body: [
      'When users move money across borders, every ambiguous label creates anxiety. During our work on Plenty Pay, simplifying KYC steps into bite-sized checkpoints immediately lifted completion.',
      'Instead of hiding exchange rates or delivery windows behind tooltips, surfacing clear confirmation summaries reduced support tickets and gave first-time senders confidence.',
    ],
  },
  {
    id: 'webflow-vs-framer-2026',
    category: 'Web & No-Code',
    readTime: '7 min read',
    date: 'January 2026',
    title: 'Webflow vs Framer in 2026: Choosing the Right Stack for High-Growth SaaS Marketing',
    excerpt:
      'A practical breakdown of CMS scalability, motion fidelity, localization, and engineering handoff for Series A–C teams.',
    cover: HERO_ROW_2[0].src,
    body: [
      'Both Webflow and Framer empower marketing teams to iterate without waiting on core product engineering sprints. Choosing between them comes down to content volume, custom integrations, and animation style.',
      'For heavy multi-region CMS libraries and structured enterprise governance, Webflow excels. For expressive product launches and ultra-fast campaign microsites, Framer shines.',
    ],
  },
  {
    id: 'brand-systems-fmcg',
    category: 'Branding',
    readTime: '4 min read',
    date: 'December 2025',
    title: 'Character-Led Packaging Systems: Turning Shelf Presence Into Instant Recall',
    excerpt:
      'How cohesive mascot systems and bold color architecture help emerging consumer brands punch above their weight.',
    cover: HERO_ROW_1[2].src,
    body: [
      'Consumers scan retail aisles in under two seconds. Strong silhouette contrast and expressive character systems create emotional recognition before shoppers read a single word of copy.',
      'With Gummiz, modular flavor mascots ensured every new SKU expanded the brand world while preserving shelf cohesion.',
    ],
  },
];

const ALL_TEAM_MEMBERS = [
  ...TEAM_PREVIEW,
  {
    name: 'Shaer Reaz',
    role: 'Head of Business',
    tags: ['Client Strategy', 'Growth Advisory'],
    avatar:
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6ac3523dd1d9af0efbaeaf24_2e5e96865d86189f255298303d6064bd_Shaer%20Reaz.avif',
  },
  {
    name: 'Nadia Islam',
    role: 'Lead UX Researcher',
    tags: ['Usability Testing', 'Information Arch'],
    avatar: INDUSTRY_WINS[0].authorAvatar,
  },
];

const PageShellHeader: React.FC<{
  tag: string;
  titlePrefix: string;
  titleEm: string;
  subtitle: string;
  onNavigate: (path: RoutePath) => void;
}> = ({ tag, titlePrefix, titleEm, subtitle, onNavigate }) => (
  <section className="relative overflow-hidden bg-[#0a0a0a] text-[#fafafa] pt-8 md:pt-10 pb-20 md:pb-24">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
      <img
        src={BRAND_ASSETS.heroBgPattern}
        alt=""
        referrerPolicy="no-referrer"
        className="h-full w-full object-cover object-top opacity-80"
      />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </div>

    <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-16 flex flex-col items-center text-center">
      <button
        type="button"
        onClick={() => onNavigate('/')}
        aria-label="Design Monks Home"
        className="mb-8 cursor-pointer"
      >
        <img
          src={BRAND_ASSETS.logoWhite}
          alt="Design Monks"
          referrerPolicy="no-referrer"
          className="h-8 md:h-9 w-auto"
        />
      </button>

      <span className="dm-section-tag-dark mb-4">{tag}</span>
      <h1 className="dm-heading font-title max-w-4xl text-[2.25rem] sm:text-[3.25rem] md:text-[4rem] font-bold leading-[1.1] text-[#fafafa] text-balance">
        {titlePrefix} <em>{titleEm}</em>
      </h1>
      <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-300">
        {subtitle}
      </p>
    </div>
  </section>
);

export const InternalPages: React.FC<InternalPagesProps> = ({
  currentRoute,
  onNavigate,
  onSelectCaseStudy,
}) => {
  const [projectFilter, setProjectFilter] = useState<string>('All');
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  // Career application form state
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPortfolio, setApplicantPortfolio] = useState('');
  const [applicantNote, setApplicantNote] = useState('');
  const [careerSubmitted, setCareerSubmitted] = useState(false);
  const [careerError, setCareerError] = useState('');

  // 1. /projects
  if (currentRoute === '/projects') {
    const categories = ['All', 'Branding', 'FinTech & Mobile', 'Web Design', 'SaaS & AI'];
    const showcaseCards = [
      ...INDUSTRY_WINS.map((c) => ({
        id: c.id,
        title: c.title,
        category:
          c.industry === 'FMCG'
            ? 'Branding'
            : c.industry === 'FinTech' || c.industry === 'Fitness'
            ? 'FinTech & Mobile'
            : 'SaaS & AI',
        scope: c.metric1Value,
        image: c.image,
        summary: c.description,
        bgColor: c.bgColor,
        caseStudy: c as CaseStudy | null,
      })),
      ...EXTRA_PROJECTS.map((p) => ({
        id: p.id,
        title: p.title,
        category: p.category,
        scope: p.scope,
        image: p.image,
        summary: p.summary,
        bgColor: '#f3f1ff',
        caseStudy: {
          id: p.id,
          industry: p.category,
          title: p.title,
          description: p.summary,
          metric1Label: 'Scope',
          metric1Value: p.scope,
          metric2Label: 'Delivery',
          metric2Value: '4 – 8 Weeks',
          authorName: 'Shaer Reaz',
          authorRole: 'Project Lead, Design Monks',
          authorAvatar:
            'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6ac3523dd1d9af0efbaeaf24_2e5e96865d86189f255298303d6064bd_Shaer%20Reaz.avif',
          image: p.image,
          bgColor: '#e8e0ff',
          stickyTop: '4rem',
          deliverables: ['Discovery & Strategy', 'Visual Identity / UI', 'Design System', 'Launch QA'],
          outcome: 'Delivered ahead of schedule with measurable conversion and brand-recall improvements.',
        } as CaseStudy,
      })),
    ];

    const filtered =
      projectFilter === 'All'
        ? showcaseCards
        : showcaseCards.filter((item) => item.category === projectFilter);

    return (
      <div className="bg-[#0a0a0a]">
        <PageShellHeader
          tag="Our Portfolio"
          titlePrefix="Work That Drives"
          titleEm="Real Business Wins"
          subtitle="Explore product designs, brand identities, and high-converting websites built for startups and global category leaders."
          onNavigate={onNavigate}
        />

        <section className="rounded-[2rem] bg-[#fafafa] text-[#0a0a0a] px-4 sm:px-8 lg:px-16 py-16 md:py-20">
          <div className="mx-auto max-w-[1280px]">
            {/* Filter Tabs */}
            <div className="mb-10 flex flex-wrap items-center justify-center gap-2.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setProjectFilter(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all cursor-pointer border ${
                    projectFilter === cat
                      ? 'bg-[#7d40ff] border-[#7d40ff] text-white shadow-sm'
                      : 'bg-white border-neutral-300 text-[#404040] hover:border-[#7d40ff]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((proj) => (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => proj.caseStudy && onSelectCaseStudy(proj.caseStudy)}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                >
                  <div
                    style={{ backgroundColor: proj.bgColor }}
                    className="aspect-[16/11] w-full overflow-hidden p-3"
                  >
                    <img
                      src={proj.image}
                      alt={proj.title}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="h-full w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6 space-y-3">
                    <div>
                      <div className="flex items-center justify-between gap-2 text-xs font-semibold text-[#7d40ff]">
                        <span>{proj.category}</span>
                        <span className="text-neutral-500">{proj.scope}</span>
                      </div>
                      <h2 className="font-title mt-2 text-xl font-bold text-[#0a0a0a] group-hover:text-[#7d40ff] transition-colors">
                        {proj.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                        {proj.summary}
                      </p>
                    </div>
                    <div className="pt-2 inline-flex items-center gap-1.5 text-sm font-bold text-[#0a0a0a] group-hover:text-[#7d40ff]">
                      <span>View Case Study</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // 2. /services and service sub-routes
  if (currentRoute === '/services' || currentRoute.startsWith('/services/')) {
    const activeDetail =
      SERVICE_DETAIL_CATALOG.find((s) => s.route === currentRoute) ?? SERVICE_DETAIL_CATALOG[0];

    return (
      <div className="bg-[#0a0a0a]">
        <PageShellHeader
          tag={activeDetail.tag}
          titlePrefix={activeDetail.title}
          titleEm={activeDetail.emWord}
          subtitle={activeDetail.subtitle}
          onNavigate={onNavigate}
        />

        <section className="rounded-[2rem] bg-[#fafafa] text-[#0a0a0a] px-4 sm:px-8 lg:px-16 py-16 md:py-20">
          <div className="mx-auto max-w-[1280px]">
            {/* Service Switcher Pills */}
            <div className="mb-12 flex flex-wrap justify-center gap-2.5">
              {SERVICE_DETAIL_CATALOG.map((svc) => (
                <button
                  key={svc.route}
                  type="button"
                  onClick={() => onNavigate(svc.route)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all cursor-pointer border ${
                    activeDetail.route === svc.route
                      ? 'bg-[#7d40ff] border-[#7d40ff] text-white'
                      : 'bg-white border-neutral-300 text-[#404040] hover:border-[#7d40ff]'
                  }`}
                >
                  {svc.tag}
                </button>
              ))}
            </div>

            {/* Active Service Showcase Card */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center rounded-[2rem] border border-neutral-200 bg-white p-6 sm:p-10 shadow-sm">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#f1eaff] px-3.5 py-1 text-xs font-semibold text-[#592db5]">
                  <Clock className="h-3.5 w-3.5" />
                  <span>Typical Timeline: {activeDetail.timeline}</span>
                </div>
                <h2 className="font-title text-2xl sm:text-3xl font-bold text-[#0a0a0a]">
                  What&apos;s Included in {activeDetail.tag}
                </h2>
                <p className="text-base leading-relaxed text-neutral-600">
                  {activeDetail.subtitle}
                </p>
                <ul className="space-y-3">
                  {activeDetail.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm sm:text-base text-[#262626]">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2 flex flex-wrap gap-4">
                  <GlowButton
                    label="Book a Free Discovery Call"
                    onClick={() => {
                      const el = document.getElementById('contact-cta');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => onNavigate('/projects')}
                    className="rounded-lg border border-neutral-300 px-5 py-3 text-sm font-semibold text-[#0a0a0a] hover:border-[#7d40ff] transition-colors cursor-pointer"
                  >
                    See Related Work
                  </button>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-950">
                <img
                  src={activeDetail.preview}
                  alt={activeDetail.tag}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // 3. /pricing
  if (currentRoute === '/pricing') {
    return (
      <div className="bg-[#0a0a0a]">
        <PageShellHeader
          tag="Transparent Pricing"
          titlePrefix="Flexible Plans For"
          titleEm="Every Growth Stage"
          subtitle="Start with a focused 2-week sprint, scale with a dedicated monthly design team, or partner end-to-end from strategy to launch."
          onNavigate={onNavigate}
        />

        <section className="rounded-[2rem] bg-[#fafafa] text-[#0a0a0a] px-4 sm:px-8 lg:px-16 py-16 md:py-24">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {PRICING_PLANS.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex flex-col justify-between rounded-[1.75rem] p-7 sm:p-8 border transition-transform duration-300 hover:-translate-y-1 ${
                    plan.highlighted
                      ? 'bg-[#0a0a0a] text-[#fafafa] border-[#7d40ff] shadow-[0_20px_50px_rgba(125,64,255,0.22)]'
                      : 'bg-white text-[#0a0a0a] border-neutral-200 shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          plan.highlighted
                            ? 'bg-[#7d40ff]/25 text-[#d7c6ff]'
                            : 'bg-[#f1eaff] text-[#592db5]'
                        }`}
                      >
                        {plan.badge}
                      </span>
                    </div>
                    <h2 className="font-title mt-4 text-2xl font-bold">{plan.name}</h2>
                    <div className="mt-4 flex items-baseline gap-1.5">
                      <span className="font-title text-4xl sm:text-[2.75rem] font-bold">
                        {plan.price}
                      </span>
                      <span
                        className={`text-sm ${
                          plan.highlighted ? 'text-neutral-400' : 'text-neutral-500'
                        }`}
                      >
                        {plan.period}
                      </span>
                    </div>
                    <p
                      className={`mt-3 text-sm leading-relaxed ${
                        plan.highlighted ? 'text-neutral-300' : 'text-neutral-600'
                      }`}
                    >
                      {plan.description}
                    </p>

                    <ul className="mt-6 space-y-3 border-t border-current/10 pt-6">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-sm">
                          <CheckCircle2
                            className={`h-4 w-4 mt-0.5 shrink-0 ${
                              plan.highlighted ? 'text-[#2cfa92]' : 'text-[#7d40ff]'
                            }`}
                          />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <GlowButton
                      label="Get Started"
                      className="w-full"
                      onClick={() => {
                        const el = document.getElementById('contact-cta');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ComparisonAndCareerSection onNavigate={onNavigate} />
      </div>
    );
  }

  // 4. /ai-excellency
  if (currentRoute === '/ai-excellency') {
    return (
      <div className="bg-[#0a0a0a]">
        <PageShellHeader
          tag="AI Excellency"
          titlePrefix="Human Taste Meets"
          titleEm="AI-Accelerated Speed"
          subtitle="We integrate modern AI workflows across discovery, wireframing, pitch decks, and product optimization so your team ships sharper work in half the time."
          onNavigate={onNavigate}
        />

        <SmarterDesignSection onNavigate={onNavigate} />

        <section className="rounded-[2rem] bg-[#fafafa] text-[#0a0a0a] px-4 sm:px-8 lg:px-16 py-16 md:py-20">
          <div className="mx-auto max-w-[1280px] grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'AI Website Redesign',
                desc: 'Rapid heuristic audits, heat-map hypothesis testing, and high-converting UI refreshes tailored for AI and SaaS products.',
              },
              {
                title: 'AI Pitch Deck Design',
                desc: 'Investor-ready storytelling, clear product architecture visuals, and crisp financial data slides built to help founders raise.',
              },
              {
                title: 'Copilot & Agentic UX',
                desc: 'Specialized interface patterns for prompts, streaming outputs, confidence indicators, and human-in-the-loop controls.',
              },
            ].map((cap) => (
              <div
                key={cap.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 space-y-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f1eaff] text-[#7d40ff]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h2 className="font-title text-xl font-bold text-[#0a0a0a]">{cap.title}</h2>
                <p className="text-sm leading-relaxed text-neutral-600">{cap.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // 5. /about or /teams
  if (currentRoute === '/about' || currentRoute === '/teams') {
    return (
      <div className="bg-[#0a0a0a]">
        <PageShellHeader
          tag={currentRoute === '/teams' ? 'The Monk Family' : 'About Design Monks'}
          titlePrefix="Research-Led Designers"
          titleEm="Across 8 Global Hubs"
          subtitle="We are a multidisciplinary collective of product designers, brand storytellers, and Webflow/Framer builders trusted by 200+ ambitious companies."
          onNavigate={onNavigate}
        />

        <section className="rounded-[2rem] bg-[#fafafa] text-[#0a0a0a] px-4 sm:px-8 lg:px-16 py-16 md:py-24">
          <div className="mx-auto max-w-[1280px] space-y-16">
            {/* Key Agency Numbers */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { stat: '200+', label: 'Global Brands Served' },
                { stat: '4.9 ★', label: 'Clutch & Google Rating' },
                { stat: '40+', label: 'Design & Build Specialists' },
                { stat: '8', label: 'Worldwide Offices' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-neutral-200 bg-white p-6 text-center"
                >
                  <div className="font-title text-3xl sm:text-4xl font-bold text-[#7d40ff]">
                    {item.stat}
                  </div>
                  <p className="mt-1 text-sm text-neutral-600">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Team Grid */}
            <div>
              <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="dm-section-tag-light">Leadership & Specialists</span>
                  <h2 className="dm-heading font-title mt-3 text-3xl sm:text-4xl font-bold text-[#0a0a0a]">
                    Meet the <em>Design Monks</em>
                  </h2>
                </div>
                <GlowButton label="Join Our Team" onClick={() => onNavigate('/career')} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {ALL_TEAM_MEMBERS.map((member) => (
                  <div
                    key={member.name}
                    className="rounded-2xl border border-neutral-200 bg-white p-6 flex items-center gap-4"
                  >
                    <img
                      src={member.avatar}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="h-16 w-16 rounded-full object-cover border border-neutral-200 shrink-0"
                    />
                    <div>
                      <h3 className="font-title text-lg font-bold text-[#0a0a0a]">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-[#7d40ff]">{member.role}</p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {member.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Global Offices + Brands Strip */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-2.5">
                <Globe2 className="h-5 w-5 text-[#7d40ff]" />
                <h2 className="font-title text-xl font-bold text-[#0a0a0a]">
                  Global Studio Presence
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                {OFFICE_LOCATIONS.map((loc) => (
                  <div key={loc.country} className="space-y-1">
                    <div className="text-sm font-bold text-[#0a0a0a]">{loc.country}</div>
                    <p className="text-xs leading-relaxed text-neutral-600 whitespace-pre-line">
                      {loc.address}
                    </p>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-neutral-200 flex flex-wrap items-center justify-center gap-6 opacity-70">
                {CLIENT_LOGOS.slice(0, 8).map((logo) => (
                  <img
                    key={logo.name}
                    src={logo.src}
                    alt={logo.name}
                    referrerPolicy="no-referrer"
                    className="h-6 w-auto brightness-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // 6. /blog
  if (currentRoute === '/blog') {
    return (
      <div className="bg-[#0a0a0a]">
        <PageShellHeader
          tag="Design Monks Journal"
          titlePrefix="Insights on Product,"
          titleEm="Brand & AI"
          subtitle="Playbooks, teardown notes, and product design lessons straight from our studio sprints."
          onNavigate={onNavigate}
        />

        <section className="rounded-[2rem] bg-[#fafafa] text-[#0a0a0a] px-4 sm:px-8 lg:px-16 py-16 md:py-24">
          <div className="mx-auto max-w-[1280px] grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post) => (
              <button
                key={post.id}
                type="button"
                onClick={() => setSelectedBlog(post)}
                className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
              >
                <div className="aspect-[16/9] w-full overflow-hidden bg-neutral-100">
                  <img
                    src={post.cover}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 sm:p-8 space-y-3">
                  <div className="flex items-center gap-3 text-xs font-semibold text-[#7d40ff]">
                    <span>{post.category}</span>
                    <span className="text-neutral-400">•</span>
                    <span className="text-neutral-500">{post.date}</span>
                    <span className="text-neutral-400">•</span>
                    <span className="text-neutral-500">{post.readTime}</span>
                  </div>
                  <h2 className="font-title text-xl sm:text-2xl font-bold text-[#0a0a0a] group-hover:text-[#7d40ff] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
                    {post.excerpt}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Article Reader Modal */}
        {selectedBlog && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            onClick={() => setSelectedBlog(null)}
          >
            <div
              className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 sm:p-10 text-[#0a0a0a] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedBlog(null)}
                aria-label="Close article"
                className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="text-xs font-semibold text-[#7d40ff]">
                {selectedBlog.category} • {selectedBlog.readTime}
              </div>
              <h2 className="font-title mt-2 text-2xl sm:text-3xl font-bold leading-snug pr-8">
                {selectedBlog.title}
              </h2>
              <img
                src={selectedBlog.cover}
                alt={selectedBlog.title}
                referrerPolicy="no-referrer"
                className="mt-5 w-full rounded-2xl object-cover aspect-[16/9]"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-700">
                {selectedBlog.body.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // 7. /career
  if (currentRoute === '/career') {
    const handleCareerSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!applicantName.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(applicantEmail)) {
        setCareerError('Please provide your name and a valid email address.');
        return;
      }
      setCareerError('');
      setCareerSubmitted(true);
    };

    return (
      <div className="bg-[#0a0a0a]">
        <PageShellHeader
          tag="Openings at Design Monks"
          titlePrefix="Be a Monk!"
          titleEm="Build With Us"
          subtitle="Work alongside senior product designers, brand directors, and international startup founders from anywhere."
          onNavigate={onNavigate}
        />

        <section className="rounded-[2rem] bg-[#fafafa] text-[#0a0a0a] px-4 sm:px-8 lg:px-16 py-16 md:py-24">
          <div className="mx-auto max-w-[1100px] grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10">
            {/* Role Spec */}
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap gap-2">
                {['Starting from BDT 40K', '1 Vacancy', 'Full Time', 'Remote'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#f1eaff] px-3 py-1 text-xs font-semibold text-[#592db5]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="font-title text-2xl sm:text-3xl font-bold text-[#0a0a0a]">
                Business Development Executive
              </h2>
              <p className="text-base leading-relaxed text-neutral-600">
                We&apos;re looking for a Business Development Executive with 2–4 years of
                experience to be the first point of contact for our international clients. You&apos;ll
                qualify leads, run outreach, book discovery meetings, and turn conversations into
                signed design partnerships.
              </p>

              <div className="space-y-3">
                <h3 className="font-title text-lg font-bold text-[#0a0a0a]">What You&apos;ll Do</h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  {[
                    'Qualify inbound inquiries from global SaaS, FinTech, and Web3 founders.',
                    'Conduct outbound outreach across LinkedIn, email, and design marketplaces.',
                    'Coordinate discovery calls and craft tailored project proposals with leads.',
                    'Maintain crisp CRM hygiene and hand off signed retainers smoothly.',
                  ].map((r) => (
                    <li key={r} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 mt-1 shrink-0 text-[#7d40ff]" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-[#fbfaf6] border border-neutral-200 p-4 flex items-center gap-3">
                <Users className="h-5 w-5 text-[#7d40ff] shrink-0" />
                <p className="text-sm text-neutral-700">
                  Full remote flexibility, performance bonuses, and direct mentorship from agency
                  leadership.
                </p>
              </div>
            </div>

            {/* Application Form */}
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
              {careerSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-title text-2xl font-bold text-[#0a0a0a]">
                    Application Received!
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Thanks {applicantName}. Our hiring team will review your profile and reach out
                    via email within 3 business days.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setCareerSubmitted(false);
                      setApplicantName('');
                      setApplicantEmail('');
                      setApplicantPortfolio('');
                      setApplicantNote('');
                    }}
                    className="rounded-lg border border-[#7d40ff] px-4 py-2 text-sm font-semibold text-[#7d40ff] hover:bg-[#7d40ff] hover:text-white transition-colors cursor-pointer"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCareerSubmit} className="space-y-4">
                  <h3 className="font-title text-xl font-bold text-[#0a0a0a]">
                    Apply for This Role
                  </h3>
                  <div>
                    <label
                      htmlFor="career-name"
                      className="block text-sm font-medium text-[#0a0a0a] mb-1"
                    >
                      Full Name*
                    </label>
                    <input
                      id="career-name"
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full rounded-lg border border-neutral-300 bg-[#fafafa] px-4 py-2.5 text-sm focus:border-[#7d40ff] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="career-email"
                      className="block text-sm font-medium text-[#0a0a0a] mb-1"
                    >
                      Email Address*
                    </label>
                    <input
                      id="career-email"
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-neutral-300 bg-[#fafafa] px-4 py-2.5 text-sm focus:border-[#7d40ff] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="career-link"
                      className="block text-sm font-medium text-[#0a0a0a] mb-1"
                    >
                      LinkedIn / CV Link
                    </label>
                    <input
                      id="career-link"
                      type="url"
                      value={applicantPortfolio}
                      onChange={(e) => setApplicantPortfolio(e.target.value)}
                      placeholder="https://linkedin.com/in/..."
                      className="w-full rounded-lg border border-neutral-300 bg-[#fafafa] px-4 py-2.5 text-sm focus:border-[#7d40ff] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="career-note"
                      className="block text-sm font-medium text-[#0a0a0a] mb-1"
                    >
                      Why Design Monks?
                    </label>
                    <textarea
                      id="career-note"
                      rows={3}
                      value={applicantNote}
                      onChange={(e) => setApplicantNote(e.target.value)}
                      placeholder="Share your B2B outreach or agency sales wins..."
                      className="w-full rounded-lg border border-neutral-300 bg-[#fafafa] px-4 py-2.5 text-sm focus:border-[#7d40ff] focus:bg-white focus:outline-none resize-none"
                    />
                  </div>
                  {careerError && <p className="text-xs font-medium text-red-600">{careerError}</p>}
                  <GlowButton type="submit" label="Submit Application" className="w-full" />
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // 8. /contact (persistent ContactAndFooterSection renders right below this header)
  return (
    <div className="bg-[#fafafa]">
      <PageShellHeader
        tag="Let's Talk"
        titlePrefix="Start Your Dream"
        titleEm="Design Journey"
        subtitle="Share your product goals below and claim a complimentary $799 product & brand strategy consultation."
        onNavigate={onNavigate}
      />
      <div className="h-10 bg-[#fafafa]" />
    </div>
  );
};
