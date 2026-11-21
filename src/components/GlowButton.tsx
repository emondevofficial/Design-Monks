import React from 'react';
import { BRAND_ASSETS } from '../data/designMonksData';

interface GlowButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  size?: 'md' | 'lg';
  curvedArrow?: boolean;
  type?: 'button' | 'submit';
}

export const GlowButton: React.FC<GlowButtonProps> = ({
  label,
  onClick,
  className = '',
  size = 'md',
  curvedArrow = false,
  type = 'button',
}) => {
  const heightClass = size === 'lg' ? 'h-14 px-8' : 'h-12 px-7';
  const arrowSrc = curvedArrow
    ? BRAND_ASSETS.ctaArrowCurvedWhite
    : BRAND_ASSETS.ctaArrowWhite;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center rounded-lg p-[1.5px] overflow-hidden cursor-pointer select-none transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87fff] ${className}`}
    >
      {/* Animated conic gradient border */}
      <span
        aria-hidden="true"
        className="dm-nav-btn-border pointer-events-none absolute inset-0 rounded-lg"
      />
      {/* Inner glowing purple pill */}
      <span
        className={`dm-primary-btn relative z-10 inline-flex w-full items-center justify-center gap-2 rounded-[7px] ${heightClass}`}
      >
        <span className="text-[1rem] font-bold leading-[120%] tracking-[0.02rem] text-[#fafafa] whitespace-nowrap">
          {label}
        </span>
        <img
          src={arrowSrc}
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          className="h-6 w-6 object-contain transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </span>
      {/* Faint decorative glass star at top-right */}
      <img
        src={BRAND_ASSETS.faintStar}
        alt=""
        aria-hidden="true"
        referrerPolicy="no-referrer"
        className="pointer-events-none absolute -top-2 -right-2 z-20 h-9 w-9 opacity-80 transition-transform duration-300 group-hover:rotate-45"
      />
    </button>
  );
};
