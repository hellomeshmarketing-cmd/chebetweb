import React from 'react';
import { Phone, Calendar, Star, MapPin, CheckCircle2, Shield } from 'lucide-react';
import { FIRM_DETAILS } from '../data/legalData';
import heroChambersImg from '../assets/images/hero_law_chambers_1791199871463.jpg';

interface HeroProps {
  onOpenConsultationModal: (topic?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultationModal }) => {
  return (
    <section id="home" className="relative bg-[#0B1F3A] text-white overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
      {/* Background with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroChambersImg}
          alt="Chebet & Mariita Advocates law chamber library and consultation desk"
          className="w-full h-full object-cover object-center opacity-20 filter brightness-90"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/95 to-[#0B1F3A]/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto sm:mx-0 flex flex-col items-center sm:items-start text-center sm:text-left">
          {/* Subtle location kicker - centered on mobile */}
          <div className="inline-flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm font-medium text-[#C9A24B] tracking-wide mb-4 py-1.5 px-3.5 sm:px-0 bg-white/5 sm:bg-transparent rounded-full sm:rounded-none border border-[#C9A24B]/20 sm:border-0 shadow-sm sm:shadow-none">
            <MapPin className="w-3.5 h-3.5 text-[#C9A24B] shrink-0" />
            <span>Back Street, Kisii Town · Serving Nyanza & Western Kenya</span>
          </div>

          {/* Headline - beautifully balanced and centered on mobile */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.2] sm:leading-[1.15] mb-5 text-balance max-w-2xl sm:max-w-none">
            Trusted Legal Representation in Kisii & the Wider Nyanza Region
          </h1>

          {/* Subheadline - centered on mobile with comfortable measure */}
          <p className="text-sm sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed mb-8 max-w-xl sm:max-w-2xl">
            Steadfast advocacy, principled counsel, and diligent courtroom representation tailored to defend your land, business, and family rights.
          </p>

          {/* Action buttons - stacked and full-width on mobile with clear hierarchy */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-9">
            <button
              type="button"
              onClick={() => onOpenConsultationModal()}
              className="inline-flex items-center justify-center gap-2.5 bg-[#C9A24B] hover:bg-[#B8923A] text-[#0B1F3A] font-semibold text-sm sm:text-base px-6 sm:px-7 py-3.5 rounded-lg shadow-md transition-all active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#C9A24B] focus:ring-offset-2 focus:ring-offset-[#0B1F3A]"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Book a Consultation</span>
            </button>

            <a
              href={`tel:${FIRM_DETAILS.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2.5 border border-white/30 hover:border-white hover:bg-white/10 text-white font-medium text-sm sm:text-base px-5 sm:px-6 py-3.5 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-white/50 active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A24B]" />
              <span>Call {FIRM_DETAILS.phoneDisplay}</span>
            </a>
          </div>

          {/* Trust Strip - centered and structured cleanly on mobile */}
          <div className="w-full pt-6 border-t border-white/15 flex flex-wrap items-center justify-center sm:justify-start gap-y-2.5 gap-x-3.5 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-1.5 text-white font-medium">
              <div className="flex text-[#C9A24B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C9A24B]" />
                ))}
              </div>
              <span className="font-semibold text-white">4.4★</span>
              <span>Google Rating</span>
            </div>

            <span className="text-slate-500 hidden sm:inline" aria-hidden="true">·</span>

            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24B]" />
              <span>16 Client Reviews</span>
            </div>

            <span className="text-slate-500 hidden sm:inline" aria-hidden="true">·</span>

            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#C9A24B] sm:hidden" />
              <span>Based in Kisii Town</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

