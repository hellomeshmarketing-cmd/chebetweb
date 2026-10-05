import React from 'react';
import { Award, BookOpen, ShieldCheck, Scale, User } from 'lucide-react';
import { FIRM_DETAILS } from '../data/legalData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#C9A24B] uppercase mb-2">
            Principled Counsel · Local Insight
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0B1F3A] leading-tight mb-4">
            About the Firm
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Chebet & Mariita Advocates was established with an unwavering commitment to deliver fearless, ethical, and solution-driven legal representation for the residents and enterprises of Kisii County, Nyanza, and Western Kenya. Rooted in Back Street, Kisii, our chambers combine deep familiarity with regional registries and courts with modern commercial acumen.
          </p>
        </div>

        {/* 2-Column Overview: Photo/Values & Institutional Background */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[8px] overflow-hidden border border-stone-200 shadow-md">
              <img
                src="/src/assets/images/advocate_chamber_meeting_1791199881782.jpg"
                alt="Chebet & Mariita Advocates conference and consultation desk"
                className="w-full h-80 sm:h-96 object-cover object-center"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/85 via-[#0B1F3A]/20 to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="font-serif text-lg font-bold text-[#C9A24B]">Kisii Law Chambers</p>
                  <p className="text-xs text-slate-200">Consultations conducted in complete confidence under advocate-client privilege.</p>
                </div>
              </div>
            </div>

            {/* Subtle institutional trust marker */}
            <div className="mt-4 flex items-center justify-between text-xs text-slate-500 px-1">
              <span>Back Street Chambers · Kisii Town</span>
              <span className="text-[#0B1F3A] font-medium">[PLACEHOLDER - Founded YYYY]</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-serif font-bold text-[#0B1F3A]">
              Our Professional Pledge to Every Client
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Legal challenges in land ownership, commercial contracts, and family succession can profoundly impact livelihoods and generations. Our practice operates on the fundamental tenets of transparency, procedural diligence, and unyielding defense of our clients&apos; lawful interests.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-[#F7F5F0] border border-stone-200">
                <ShieldCheck className="w-5 h-5 text-[#C9A24B] mb-2" />
                <h4 className="text-sm font-bold text-[#0B1F3A] mb-1">Courtroom Diligence</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Rigorous pleading drafting, meticulous evidence gathering, and steadfast appearance before High Courts, Magistrates, and Tribunals.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#F7F5F0] border border-stone-200">
                <Scale className="w-5 h-5 text-[#C9A24B] mb-2" />
                <h4 className="text-sm font-bold text-[#0B1F3A] mb-1">Ethical Transparency</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clear fee structures adhering strictly to the Advocates Remuneration Order and candid case risk assessments from day one.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-stone-50 border border-stone-200 text-xs text-slate-600 leading-relaxed">
              <strong className="text-[#0B1F3A] font-semibold">Regulatory Notice: </strong>
              All partners and legal associates are duly admitted Advocates of the High Court of Kenya and active members in good standing of the Law Society of Kenya (LSK).
            </div>
          </div>
        </div>

        {/* Advocates / Partners Roster with clearly marked Placeholders */}
        <div className="pt-12 border-t border-stone-200">
          <div className="max-w-3xl mb-8">
            <h3 className="text-2xl font-serif font-bold text-[#0B1F3A] mb-2">
              The Advocates & Legal Partners
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Profiles and admission credentials for the founding partners of Chebet & Mariita Advocates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Advocate 1 Profile Card */}
            <div className="p-6 rounded-[8px] border border-stone-200 bg-[#F7F5F0] flex flex-col sm:flex-row gap-5 items-start">
              {/* Photo Placeholder */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg bg-stone-300 border border-stone-400/40 flex flex-col items-center justify-center text-slate-500 shrink-0 text-center p-2">
                <User className="w-8 h-8 text-slate-400 mb-1" />
                <span className="text-[10px] font-semibold tracking-tight text-slate-600 uppercase">Photo</span>
                <span className="text-[9px] text-slate-500 leading-none">[PLACEHOLDER]</span>
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-[#C9A24B] uppercase tracking-wider">Partner Advocate</span>
                </div>
                <h4 className="text-lg font-serif font-bold text-[#0B1F3A]">
                  Adv. Chebet [PLACEHOLDER - Full Name]
                </h4>
                <p className="text-xs font-medium text-slate-700">
                  Advocate of the High Court of Kenya
                </p>
                <div className="text-xs text-slate-600 space-y-1 pt-1 border-t border-stone-200/80">
                  <p><strong className="text-slate-800">Qualifications:</strong> [PLACEHOLDER - LL.B (Hons), Dip. Law (KSL)]</p>
                  <p><strong className="text-slate-800">Admission Details:</strong> [PLACEHOLDER - Admitted to the Bar YYYY · LSK Member]</p>
                  <p><strong className="text-slate-800">Primary Focus:</strong> Land & Property Dispute Litigation, Probate & Succession, Commercial Contracts</p>
                </div>
              </div>
            </div>

            {/* Advocate 2 Profile Card */}
            <div className="p-6 rounded-[8px] border border-stone-200 bg-[#F7F5F0] flex flex-col sm:flex-row gap-5 items-start">
              {/* Photo Placeholder */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg bg-stone-300 border border-stone-400/40 flex flex-col items-center justify-center text-slate-500 shrink-0 text-center p-2">
                <User className="w-8 h-8 text-slate-400 mb-1" />
                <span className="text-[10px] font-semibold tracking-tight text-slate-600 uppercase">Photo</span>
                <span className="text-[9px] text-slate-500 leading-none">[PLACEHOLDER]</span>
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-[#C9A24B] uppercase tracking-wider">Partner Advocate</span>
                </div>
                <h4 className="text-lg font-serif font-bold text-[#0B1F3A]">
                  Adv. Mariita [PLACEHOLDER - Full Name]
                </h4>
                <p className="text-xs font-medium text-slate-700">
                  Advocate of the High Court of Kenya
                </p>
                <div className="text-xs text-slate-600 space-y-1 pt-1 border-t border-stone-200/80">
                  <p><strong className="text-slate-800">Qualifications:</strong> [PLACEHOLDER - LL.B (Hons), Dip. Law (KSL)]</p>
                  <p><strong className="text-slate-800">Admission Details:</strong> [PLACEHOLDER - Admitted to the Bar YYYY · LSK Member]</p>
                  <p><strong className="text-slate-800">Primary Focus:</strong> Criminal Defence Litigation, Civil Litigation, Debt Settlement & Corporate Dispute</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
