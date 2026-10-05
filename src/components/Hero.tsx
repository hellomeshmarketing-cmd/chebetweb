import React from 'react';
import { Phone, Calendar, Star, MapPin, CheckCircle2 } from 'lucide-react';
import { FIRM_DETAILS } from '../data/legalData';
import heroChambersImg from '../assets/images/hero_law_chambers_1791199871463.jpg';

interface HeroProps {
  onOpenConsultationModal: (topic?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultationModal }) => {
  return (
    <section id="home" className="relative bg-[#0B1F3A] text-white overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28">
      {/* Background with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroChambersImg}
          alt="Chebet & Mariita Advocates law chamber library and consultation desk"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-95"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/90 to-[#0B1F3A]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Subtle location kicker */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#C9A24B] tracking-wide mb-4">
            <MapPin className="w-4 h-4 text-[#C9A24B] shrink-0" />
            <span>Back Street, Kisii Town · Serving Nyanza & Western Kenya</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.15] mb-6 text-balance">
            Trusted Legal Representation in Kisii & the Wider Nyanza Region
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed mb-8 max-w-2xl">
            Steadfast advocacy, principled counsel, and diligent courtroom representation tailored to defend your land, business, and family rights.
          </p>

          {/* Two primary action buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              type="button"
              onClick={() => onOpenConsultationModal()}
              className="inline-flex items-center justify-center gap-2.5 bg-[#C9A24B] hover:bg-[#B8923A] text-[#0B1F3A] font-semibold text-base px-7 py-3.5 rounded-lg shadow-md transition-all active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#C9A24B] focus:ring-offset-2 focus:ring-offset-[#0B1F3A]"
            >
              <Calendar className="w-5 h-5" />
              <span>Book a Consultation</span>
            </button>

            <a
              href={`tel:${FIRM_DETAILS.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2.5 border border-white/30 hover:border-white hover:bg-white/10 text-white font-medium text-base px-6 py-3.5 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <Phone className="w-5 h-5 text-[#C9A24B]" />
              <span>Call {FIRM_DETAILS.phoneDisplay}</span>
            </a>
          </div>

          {/* Trust Strip: Zero-pill, unboxed, typographic separators */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-1.5 text-white font-medium">
              <div className="flex text-[#C9A24B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C9A24B]" />
                ))}
              </div>
              <span className="font-semibold text-white">4.4★</span>
              <span>Google Rating</span>
            </div>

            <span className="text-slate-500" aria-hidden="true">·</span>

            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#C9A24B]" />
              <span>16 Client Reviews</span>
            </div>

            <span className="text-slate-500" aria-hidden="true">·</span>

            <div className="flex items-center gap-1.5">
              <span>Based in Kisii Town</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
