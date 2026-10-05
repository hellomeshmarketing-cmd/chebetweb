import React, { useState } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { FIRM_DETAILS } from '../data/legalData';

interface NavbarProps {
  onOpenConsultationModal: (topic?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultationModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Practice Areas', href: '#practice-areas' },
    { label: 'About', href: '#about' },
    { label: 'How We Help', href: '#how-we-help' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0B1F3A]/95 backdrop-blur-md border-b border-[#C9A24B]/20 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Single text element wordmark in Cormorant Garamond */}
          <a
            href="#home"
            className="text-xl sm:text-2xl font-serif tracking-normal text-white hover:text-[#C9A24B] transition-colors whitespace-nowrap"
          >
            Chebet & Mariita Advocates
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#C9A24B] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A24B] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${FIRM_DETAILS.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-[#C9A24B] hover:bg-[#B8923A] text-[#0B1F3A] font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-lg shadow-sm transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#C9A24B] focus:ring-offset-2 focus:ring-offset-[#0B1F3A]"
              aria-label={`Call Chebet & Mariita Advocates at ${FIRM_DETAILS.phoneDisplay}`}
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>

            <button
              type="button"
              onClick={() => onOpenConsultationModal()}
              className="hidden sm:inline-flex items-center gap-1.5 border border-[#C9A24B]/40 hover:border-[#C9A24B] text-slate-200 hover:text-white text-xs sm:text-sm px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C9A24B]" />
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#C9A24B]/20 bg-[#0B1F3A] px-4 pt-3 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-200 hover:text-[#C9A24B] hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultationModal();
              }}
              className="w-full text-center py-2.5 px-4 rounded-lg bg-white/10 text-white font-medium text-sm hover:bg-white/20 transition-colors"
            >
              Book a Confidential Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
