/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useState } from 'react';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ClientStoriesSection } from './components/ClientStoriesSection';
import { ComparisonAndCareerSection } from './components/ComparisonAndCareerSection';
import { ContactAndFooterSection } from './components/ContactAndFooterSection';
import { FloatingNavbar } from './components/FloatingNavbar';
import { HeroSection } from './components/HeroSection';
import { IndustryWinsSection } from './components/IndustryWinsSection';
import { InternalPages } from './components/InternalPages';
import { ServicesSection } from './components/ServicesSection';
import { ShowreelSection } from './components/ShowreelSection';
import { SmarterDesignSection } from './components/SmarterDesignSection';
import { TestimonialsAndFaqSection } from './components/TestimonialsAndFaqSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { CaseStudy, RoutePath } from './data/designMonksData';

const VALID_ROUTES = new Set<RoutePath>([
  '/',
  '/projects',
  '/services',
  '/services/ui-ux',
  '/services/web-design',
  '/services/logo-branding',
  '/services/webflow-design',
  '/services/framer-design',
  '/services/saas-design',
  '/pricing',
  '/about',
  '/teams',
  '/blog',
  '/career',
  '/contact',
  '/ai-excellency',
]);

function normalizeRoute(pathname: string): RoutePath {
  const cleaned = pathname.replace(/\/+$/, '') || '/';
  if (VALID_ROUTES.has(cleaned as RoutePath)) {
    return cleaned as RoutePath;
  }
  return '/';
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<RoutePath>(() =>
    normalizeRoute(window.location.pathname)
  );
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  useEffect(() => {
    const onPopState = () => {
      setCurrentRoute(normalizeRoute(window.location.pathname));
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const handleNavigate = useCallback((path: RoutePath) => {
    setSelectedCaseStudy(null);
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentRoute(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#0a0a0a] antialiased overflow-x-clip selection:bg-[#7d40ff] selection:text-white">
      <main>
        {currentRoute === '/' ? (
          <>
            <HeroSection onNavigate={handleNavigate} />
            <IndustryWinsSection
              onSelectCaseStudy={setSelectedCaseStudy}
              onNavigate={handleNavigate}
            />
            <ClientStoriesSection />
            <SmarterDesignSection onNavigate={handleNavigate} />
            <ShowreelSection />
            <ServicesSection onNavigate={handleNavigate} />
            <WhyChooseUsSection onNavigate={handleNavigate} />
            <ComparisonAndCareerSection onNavigate={handleNavigate} />
            <TestimonialsAndFaqSection />
          </>
        ) : (
          <InternalPages
            currentRoute={currentRoute}
            onNavigate={handleNavigate}
            onSelectCaseStudy={setSelectedCaseStudy}
          />
        )}

        <ContactAndFooterSection onNavigate={handleNavigate} />
      </main>

      <FloatingNavbar currentRoute={currentRoute} onNavigate={handleNavigate} />

      <CaseStudyModal
        study={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
