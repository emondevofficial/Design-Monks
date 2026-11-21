import React, { useEffect, useRef, useState } from 'react';
import { BRAND_ASSETS, RoutePath } from '../data/designMonksData';

interface FloatingNavbarProps {
  currentRoute: RoutePath;
  onNavigate: (path: RoutePath) => void;
}

const SERVICES_MENU: { title: string; desc: string; path: RoutePath }[] = [
  { title: 'UI UX', desc: 'Creating user-friendly digital experiences.', path: '/services/ui-ux' },
  { title: 'Logo & Branding', desc: 'Creating memorable identities for brands.', path: '/services/logo-branding' },
  { title: 'Web Design', desc: 'Building visually appealing & functional websites.', path: '/services/web-design' },
  { title: 'Webflow Design', desc: 'Developing responsive websites effortlessly.', path: '/services/webflow-design' },
  { title: 'Framer Design', desc: 'Interactive web designs are made simple.', path: '/services/framer-design' },
  { title: 'SaaS Design', desc: 'Intuitive interfaces that boost user engagement.', path: '/services/saas-design' },
];

const MORE_MENU: { title: string; desc: string; path: RoutePath }[] = [
  { title: 'Home', desc: 'Home is where the monk lives', path: '/' },
  { title: 'About us', desc: 'The journey of Design Monks', path: '/about' },
  { title: 'Meet the team', desc: 'An overview of the Monk family', path: '/teams' },
  { title: 'Blogs', desc: 'A collection of informative blogs', path: '/blog' },
  { title: 'Career', desc: 'Work with top global brands, grow your skills', path: '/career' },
  { title: 'Contact us', desc: 'Start your dream design journey from here', path: '/contact' },
];

export const FloatingNavbar: React.FC<FloatingNavbarProps> = ({ currentRoute, onNavigate }) => {
  const [openMenu, setOpenMenu] = useState<'services' | 'more' | null>(null);
  const [showBackTop, setShowBackTop] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [servicesMuted, setServicesMuted] = useState(true);
  const [moreMuted, setMoreMuted] = useState(true);

  const navRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const servicesVideoRef = useRef<HTMLVideoElement>(null);
  const moreVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setShowBackTop(y > 500);
      setPastHero(y > 320);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenMenu(null);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const scheduleClose = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => setOpenMenu(null), 180);
  };

  const cancelClose = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
  };

  const handleLinkClick = (path: RoutePath) => {
    setOpenMenu(null);
    onNavigate(path);
  };

  const toggleServicesMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = !servicesMuted;
    setServicesMuted(next);
    if (servicesVideoRef.current) servicesVideoRef.current.muted = next;
  };

  const toggleMoreMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = !moreMuted;
    setMoreMuted(next);
    if (moreVideoRef.current) moreVideoRef.current.muted = next;
  };

  return (
    <>
      {/* Backdrop blur overlay when dropdown open */}
      <div
        aria-hidden="true"
        onClick={() => setOpenMenu(null)}
        className={`fixed inset-0 z-[9998] bg-[#7d40ff]/10 backdrop-blur-[10px] transition-opacity duration-300 ${
          openMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Floating Bottom Dock Wrapper */}
      <div
        ref={navRef}
        className="fixed bottom-0 left-0 right-0 z-[9999] mx-auto max-w-[44.5625rem] md:pb-6 pointer-events-none"
      >
        {/* Dropdown Popover Container (renders above the dock) */}
        {openMenu && (
          <div
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            className="pointer-events-auto mb-4 px-3 md:px-0"
          >
            <div className="relative mx-auto flex flex-col md:flex-row items-stretch gap-5 rounded-2xl bg-[#fafafa] p-5 md:p-6 shadow-[0_24px_60px_rgba(10,10,10,0.35)] border border-black/10 text-[#0a0a0a]">
              {/* Menu items list */}
              <div className="grid flex-1 grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(openMenu === 'services' ? SERVICES_MENU : MORE_MENU).map((item) => (
                  <button
                    key={item.path + item.title}
                    type="button"
                    onClick={() => handleLinkClick(item.path)}
                    className={`group flex items-start justify-between rounded-xl p-3 text-left transition-colors cursor-pointer ${
                      currentRoute === item.path
                        ? 'bg-[#7d40ff]/10 text-[#592db5]'
                        : 'hover:bg-neutral-200/70'
                    }`}
                  >
                    <div>
                      <div className="text-[1rem] font-semibold leading-tight text-[#0a0a0a] group-hover:text-[#7d40ff] transition-colors">
                        {item.title}
                      </div>
                      <p className="mt-1 text-[0.8125rem] leading-snug text-[#525252]">
                        {item.desc}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Promo Vertical Video in Dropdown (Desktop) */}
              <div className="hidden md:block relative w-[180px] shrink-0 overflow-hidden rounded-xl bg-black aspect-[9/14]">
                {openMenu === 'services' ? (
                  <>
                    <video
                      ref={servicesVideoRef}
                      src={BRAND_ASSETS.navServicesVideo}
                      autoPlay
                      loop
                      muted={servicesMuted}
                      playsInline
                      className="h-full w-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={toggleServicesMute}
                      aria-label={servicesMuted ? 'Unmute video' : 'Mute video'}
                      className="absolute bottom-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm hover:bg-[#7d40ff] transition-colors cursor-pointer"
                    >
                      <img
                        src={BRAND_ASSETS.muteIcon}
                        alt=""
                        referrerPolicy="no-referrer"
                        className={`h-4 w-4 ${servicesMuted ? 'opacity-100' : 'opacity-60'}`}
                      />
                    </button>
                  </>
                ) : (
                  <>
                    <video
                      ref={moreVideoRef}
                      src={BRAND_ASSETS.navMoreVideo}
                      autoPlay
                      loop
                      muted={moreMuted}
                      playsInline
                      className="h-full w-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={toggleMoreMute}
                      aria-label={moreMuted ? 'Unmute video' : 'Mute video'}
                      className="absolute bottom-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm hover:bg-[#7d40ff] transition-colors cursor-pointer"
                    >
                      <img
                        src={BRAND_ASSETS.muteIcon}
                        alt=""
                        referrerPolicy="no-referrer"
                        className={`h-4 w-4 ${moreMuted ? 'opacity-100' : 'opacity-60'}`}
                      />
                    </button>
                  </>
                )}
              </div>

              {/* Bottom Triangle Pointer */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="24"
                viewBox="0 0 36 24"
                fill="none"
                aria-hidden="true"
                className={`hidden md:block absolute -bottom-4 ${
                  openMenu === 'services' ? 'left-[28%]' : 'right-[8%]'
                }`}
              >
                <path
                  d="M20.9984 22.6044C19.4061 24.4076 16.5939 24.4076 15.0016 22.6043L1.3532 7.14759C-0.927141 4.56511 0.906416 0.5 4.35158 0.5L31.6484 0.500003C35.0936 0.500003 36.9271 4.56511 34.6468 7.14759L20.9984 22.6044Z"
                  fill="#FAFAFA"
                />
              </svg>
            </div>
          </div>
        )}

        {/* Main Navigation Bar */}
        <nav
          aria-label="Primary Navigation"
          className="pointer-events-auto relative grid grid-cols-[1fr_1fr_auto_1fr_1fr] items-center md:rounded-2xl md:bg-[#0a0a0a]/95 md:px-2 md:py-2 md:border md:border-white/10 md:shadow-[0_12px_40px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(48,255,151,0.22)] md:backdrop-blur-xl"
        >
          {/* Mobile Curve Shape SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 375 92"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="md:hidden pointer-events-none absolute inset-0 h-full w-full -z-10"
          >
            <g filter="url(#dm_nav_curve)">
              <path
                d="M150 8C150 3.58172 146.418 0 142 0H18C8.05908 0 0 8.05859 0 18V92H375V18C375 8.05859 366.941 0 357 0H232C227.582 0 224 3.58172 224 8V21C224 34.8066 218.307 46 204.5 46H170C156.193 46 150 34.8066 150 21V8Z"
                fill="#0A0A0A"
              />
            </g>
            <defs>
              <filter
                id="dm_nav_curve"
                x="0"
                y="0"
                width="375"
                height="95"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.188235 0 0 0 0 1 0 0 0 0 0.592157 0 0 0 0.4 0"
                />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
              </filter>
            </defs>
          </svg>

          {/* 1. Projects */}
          <button
            type="button"
            onClick={() => handleLinkClick('/projects')}
            className={`flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 py-2.5 px-2 text-xs md:text-base font-medium transition-colors cursor-pointer whitespace-nowrap ${
              currentRoute === '/projects'
                ? 'text-[#a87fff]'
                : 'text-[#fafafa] hover:text-[#a87fff]'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 24"
              fill="none"
              className="h-5 w-5 md:hidden"
            >
              <path
                d="M3.75 11.25H9.07594C9.24867 11.2502 9.41605 11.31 9.5498 11.4193C9.68354 11.5286 9.77545 11.6808 9.81 11.85C9.94771 12.5282 10.3156 13.1379 10.8514 13.5758C11.3873 14.0138 12.058 14.253 12.75 14.253C13.442 14.253 14.1127 14.0138 14.6486 13.5758C15.1844 13.1379 15.5523 12.5282 15.69 11.85C15.7245 11.6808 15.8165 11.5286 15.9502 11.4193C16.0839 11.31 16.2513 11.2502 16.4241 11.25H21.75M3.75 8.25H21.75M5.25 5.25H20.25C21.0784 5.25 21.75 5.92157 21.75 6.75V17.25C21.75 18.0784 21.0784 18.75 20.25 18.75H5.25C4.42157 18.75 3.75 18.0784 3.75 17.25V6.75C3.75 5.92157 4.42157 5.25 5.25 5.25Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Projects</span>
          </button>

          {/* 2. Services (Dropdown on desktop, page on click) */}
          <div
            onMouseEnter={() => {
              cancelClose();
              if (window.innerWidth >= 768) setOpenMenu('services');
            }}
            onMouseLeave={() => {
              if (window.innerWidth >= 768) scheduleClose();
            }}
            className="flex justify-center"
          >
            <button
              type="button"
              onClick={() => {
                if (window.innerWidth < 768) {
                  handleLinkClick('/services');
                } else {
                  setOpenMenu(openMenu === 'services' ? null : 'services');
                }
              }}
              aria-expanded={openMenu === 'services'}
              className={`flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 py-2.5 px-2 text-xs md:text-base font-medium transition-colors cursor-pointer whitespace-nowrap ${
                openMenu === 'services' || currentRoute.startsWith('/services')
                  ? 'text-[#a87fff]'
                  : 'text-[#fafafa] hover:text-[#a87fff]'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 24"
                fill="none"
                className="h-5 w-5 md:hidden"
              >
                <path
                  d="M19.75 5.25H16.35C16.37 4.41 15.91 3.11 15.31 2.41C14.3 1.25 12.18 1.25 10.28 2.87C9.9 3.38 9.68 3.99 9.63 4.63L9.65 5.25H6.25C5.42 5.25 4.75 5.92 4.75 6.75V9.77C3.4 9.6 1.91 10.45 1.19 11.98C0.6 13.34 1.35 15.3 2.55 16.08C3.2 16.45 3.95 16.58 4.75 16.48V19.5C4.75 20.33 5.42 21 6.25 21H19.75C20.58 21 21.25 20.33 21.25 19.5V15.5C20.5 14.5 18.8 14.5 17.73 14.03C17.2 13.5 17.2 12.1 17.73 11.54C18.5 11.0 20.4 11.2 21.25 10.75V6.75C21.25 5.92 20.58 5.25 19.75 5.25Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              <span>Services</span>
            </button>
          </div>

          {/* 3. Center Glowing Let's Talk CTA */}
          <div className="flex items-center justify-center px-1">
            <button
              type="button"
              onClick={() => handleLinkClick('/contact')}
              aria-label="Let's Talk"
              className="group relative -translate-y-4 md:translate-y-0 inline-flex items-center justify-center rounded-lg p-[1.5px] overflow-hidden cursor-pointer shadow-[0_8px_24px_rgba(125,64,255,0.45)]"
            >
              <span
                aria-hidden="true"
                className="dm-nav-btn-border pointer-events-none absolute inset-0 rounded-lg"
              />
              <span
                className={`relative z-10 flex items-center justify-center gap-2 rounded-[7px] px-4 py-3.5 md:px-7 md:py-3.5 transition-all duration-300 ${
                  pastHero
                    ? 'bg-gradient-to-b from-[#592db5] to-[#7d40ff] shadow-[inset_0_2px_3px_rgba(255,255,255,0.7)]'
                    : 'bg-[#0a0a0a] group-hover:bg-gradient-to-b group-hover:from-[#592db5] group-hover:to-[#7d40ff]'
                }`}
              >
                {/* Mobile chat smiley icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="h-6 w-6 text-white md:hidden"
                >
                  <path
                    d="M28.051 10.5433C27.4244 9.05909 26.504 7.71234 25.347 6.57944C24.19 5.44655 22.812 4.54278 21.2962 3.92923C19.783 3.31568 18.1606 3 16.52 3H15.0016C11.8192 3 8.7668 4.23728 6.5152 6.44197C4.2636 8.64666 3 11.6329 3 14.749V27.216C3 27.5444 3.1352 27.8601 3.3718 28.0943C3.611 28.326 3.9334 28.4584 4.2688 28.4584H17.001C18.5766 28.4584 20.1366 28.1529 21.5926 27.5622C23.0486 26.9716 24.372 26.1085 25.4874 25.0164C26.6002 23.9242 27.4842 22.6309 28.0874 21.2053C28.6906 19.7796 29 18.2496 29 16.7068V15.22C29 13.6136 28.6776 12.025 28.051 10.5433ZM22.4558 18.8351C20.6046 20.4237 18.379 21.2613 16.0182 21.2613C13.6574 21.2613 11.4292 20.4237 9.5806 18.8351C9.1464 18.466 9.1048 17.8219 9.4818 17.3992C9.8614 16.9741 10.5166 16.9334 10.9508 17.3025C12.4146 18.5601 14.167 19.2246 16.0182 19.2246C17.8694 19.2246 19.6192 18.5601 21.0856 17.3025C21.5172 16.9334 22.175 16.9766 22.552 17.3992C22.9316 17.8219 22.8874 18.466 22.4558 18.8351Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="hidden md:inline text-[1rem] font-bold tracking-[0.02em] text-[#fafafa] whitespace-nowrap">
                  Let&apos;s Talk
                </span>
                <img
                  src={BRAND_ASSETS.ctaArrowWhite}
                  alt=""
                  aria-hidden="true"
                  referrerPolicy="no-referrer"
                  className="hidden md:block h-5 w-5 object-contain"
                />
              </span>
            </button>
          </div>

          {/* 4. Pricing */}
          <button
            type="button"
            onClick={() => handleLinkClick('/pricing')}
            className={`flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 py-2.5 px-2 text-xs md:text-base font-medium transition-colors cursor-pointer whitespace-nowrap ${
              currentRoute === '/pricing'
                ? 'text-[#a87fff]'
                : 'text-[#fafafa] hover:text-[#a87fff]'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 26 26"
              fill="none"
              className="h-5 w-5 md:hidden"
            >
              <circle cx="13" cy="13" r="11" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M15.5 10C15.5 8.9 14.4 8 13 8C11.6 8 10.5 8.9 10.5 10C10.5 11.5 15.5 11.5 15.5 13.5C15.5 14.8 14.4 15.8 13 15.8C11.6 15.8 10.5 14.8 10.5 13.5M13 6.5V8M13 15.8V17.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span>Pricing</span>
          </button>

          {/* 5. More Dropdown */}
          <div
            onMouseEnter={() => {
              cancelClose();
              if (window.innerWidth >= 768) setOpenMenu('more');
            }}
            onMouseLeave={() => {
              if (window.innerWidth >= 768) scheduleClose();
            }}
            className="flex justify-center"
          >
            <button
              type="button"
              onClick={() => setOpenMenu(openMenu === 'more' ? null : 'more')}
              aria-expanded={openMenu === 'more'}
              className={`flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 py-2.5 px-2 text-xs md:text-base font-medium transition-colors cursor-pointer whitespace-nowrap ${
                openMenu === 'more' ? 'text-[#a87fff]' : 'text-[#fafafa] hover:text-[#a87fff]'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 24"
                fill="none"
                className="h-5 w-5 md:hidden"
              >
                <path
                  d="M4 6H20.5M4 12H20.5M4 18H20.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              <span>More</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Back to Top Floating Button */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`fixed bottom-24 right-4 md:bottom-7 md:right-7 z-[9990] flex items-center gap-2 rounded-full bg-[#0a0a0a]/90 border border-white/15 px-3.5 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:border-[#7d40ff] hover:bg-[#171717] cursor-pointer ${
          showBackTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <img
          src={BRAND_ASSETS.arrowCircleUp}
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          className="h-5 w-5"
        />
        <span className="hidden sm:inline">Back to Top</span>
        <span className="sm:hidden">Top</span>
      </button>
    </>
  );
};
