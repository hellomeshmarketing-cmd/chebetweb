import React from 'react';
import { FIRM_DETAILS, PRACTICE_AREAS } from '../data/legalData';
import { Phone, MapPin, Mail, Clock, MessageSquare, ArrowUp, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071527] text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-[#C9A24B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Chambers Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="text-2xl font-serif font-bold text-white tracking-normal block">
              Chebet & Mariita Advocates
            </a>
            <p className="text-xs text-[#C9A24B] font-medium tracking-wide">
              Advocates · Commissioners for Oaths · Notaries Public
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Providing ethical, steadfast courtroom representation and advisory services to individuals, land owners, and commercial enterprises across Kisii County, Nyanza, and Western Kenya.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C9A24B]" />
                <span>Back Street, Kisii, Kenya (Plus Code: {FIRM_DETAILS.plusCode})</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C9A24B]" />
                <a href={`tel:${FIRM_DETAILS.phoneRaw}`} className="hover:text-white transition-colors">
                  {FIRM_DETAILS.phoneInternational}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C9A24B]" />
                <span>{FIRM_DETAILS.hours}</span>
              </p>
            </div>
          </div>

          {/* Quick Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#home" className="hover:text-[#C9A24B] transition-colors">Home</a></li>
              <li><a href="#practice-areas" className="hover:text-[#C9A24B] transition-colors">Practice Areas</a></li>
              <li><a href="#about" className="hover:text-[#C9A24B] transition-colors">About the Firm</a></li>
              <li><a href="#how-we-help" className="hover:text-[#C9A24B] transition-colors">How We Help</a></li>
              <li><a href="#reviews" className="hover:text-[#C9A24B] transition-colors">Client Reviews</a></li>
              <li><a href="#faq" className="hover:text-[#C9A24B] transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-[#C9A24B] transition-colors">Contact & Location</a></li>
            </ul>
          </div>

          {/* Selected Practice Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Key Practice Areas
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {PRACTICE_AREAS.slice(0, 7).map((area) => (
                <li key={area.id}>
                  <a href="#practice-areas" className="hover:text-[#C9A24B] transition-colors">
                    {area.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#practice-areas" className="text-[#C9A24B] font-semibold hover:underline inline-block mt-1">
                  View all 16 practice areas →
                </a>
              </li>
            </ul>
          </div>

          {/* Emergency & Regional Reach (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Emergency & Arrest Response
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Arrest or urgent property injunction? Call our advocate line immediately for urgent station attendance and bond applications.
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${FIRM_DETAILS.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#C9A24B] text-[#0B1F3A] font-semibold text-xs py-2.5 px-4 rounded-lg hover:bg-[#B8923A] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {FIRM_DETAILS.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${FIRM_DETAILS.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 border border-emerald-600/40 text-emerald-400 font-semibold text-xs py-2 px-4 rounded-lg hover:bg-emerald-950/30 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Advocate</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mandatory Legal Disclaimer Banner */}
        <div className="py-6 border-b border-white/10 text-xs text-slate-400 leading-relaxed">
          <div className="flex items-start gap-2 max-w-4xl">
            <Shield className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-200">Legal Disclaimer: </strong>
              The information on this website is for general guidance only and does not constitute legal advice or create an advocate-client relationship. Prior case outcomes or illustrative scenarios do not guarantee identical future results. Formal representation is subject to a conflict-of-interest check and execution of an advocate retainer in accordance with the Advocates Act and Law Society of Kenya (LSK) practice rules.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Chebet & Mariita Advocates. All rights reserved. Back Street, Kisii, Kenya.
          </p>
          <div className="flex items-center gap-4">
            <span>[PLACEHOLDER: LSK Registration / Compliance No.]</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
