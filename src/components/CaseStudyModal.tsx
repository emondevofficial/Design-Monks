import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { CaseStudy, RoutePath } from '../data/designMonksData';
import { GlowButton } from './GlowButton';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  onNavigate: (path: RoutePath) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  study,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (!study) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [study, onClose]);

  if (!study) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-modal-title"
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 p-3 sm:p-6 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[1.75rem] bg-[#fafafa] text-[#0a0a0a] shadow-2xl border border-black/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Colored Header Strip */}
        <div
          style={{ backgroundColor: study.bgColor }}
          className="relative px-6 sm:px-10 pt-8 pb-8 border-b border-black/10"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-[#0a0a0a] hover:bg-black/20 transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>

          <span className="font-playfair-em inline-block text-lg text-[#0a0a0a]/85">
            {study.industry}
          </span>
          <h2
            id="case-study-modal-title"
            className="font-title mt-2 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-[#0a0a0a] pr-10"
          >
            {study.title}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#262626]">
            {study.description}
          </p>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Hero Showcase Image */}
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-neutral-100">
            <img
              src={study.image}
              alt={study.title}
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Metrics & Client Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-2xl border border-neutral-200 bg-white p-5">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                {study.metric1Label}
              </p>
              <p className="font-title mt-1 text-lg font-bold text-[#0a0a0a]">
                {study.metric1Value}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                {study.metric2Label}
              </p>
              <p className="font-title mt-1 text-lg font-bold text-[#0a0a0a]">
                {study.metric2Value}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src={study.authorAvatar}
                alt={study.authorName}
                referrerPolicy="no-referrer"
                className="h-11 w-11 rounded-full object-cover border border-black/10 shrink-0"
              />
              <div>
                <div className="text-sm font-bold text-[#0a0a0a]">{study.authorName}</div>
                <div className="text-xs text-neutral-600">{study.authorRole}</div>
              </div>
            </div>
          </div>

          {/* Deliverables & Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-neutral-200 bg-white p-5 space-y-3">
              <h3 className="font-title text-lg font-bold text-[#0a0a0a]">Key Deliverables</h3>
              <ul className="space-y-2">
                {study.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-[#404040]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#7d40ff]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[#7d40ff]/25 bg-[#f1eaff]/60 p-5 space-y-2.5">
              <h3 className="font-title text-lg font-bold text-[#0a0a0a]">Measured Outcome</h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#262626]">
                {study.outcome}
              </p>
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-200 pt-6">
            <p className="text-sm text-neutral-600">
              Want a similar transformation for your product or brand?
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                Close
              </button>
              <GlowButton
                label="Start a Similar Project"
                onClick={() => {
                  onClose();
                  const el = document.getElementById('contact-cta');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    onNavigate('/contact');
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
