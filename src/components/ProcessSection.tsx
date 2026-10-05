import React from 'react';
import { HOW_WE_HELP_STEPS } from '../data/legalData';
import { PracticeIcon } from './PracticeIcon';
import { ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onOpenConsultationModal: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenConsultationModal }) => {
  return (
    <section id="how-we-help" className="py-20 sm:py-24 bg-[#0B1F3A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#C9A24B] uppercase mb-2">
            Structured Client Journey
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-4">
            How We Help: Our 4-Step Legal Process
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Navigating the legal system can feel daunting. We demystify the legal process through structured, transparent milestones from your initial inquiry to final court decree.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {HOW_WE_HELP_STEPS.map((step, index) => (
            <div
              key={step.step}
              className="relative bg-white/5 border border-white/10 hover:border-[#C9A24B]/60 p-6 rounded-[8px] transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-serif font-bold text-[#C9A24B]">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-[#C9A24B]/10 text-[#C9A24B] flex items-center justify-center group-hover:bg-[#C9A24B] group-hover:text-[#0B1F3A] transition-colors">
                    <PracticeIcon name={step.icon} className="w-5 h-5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-serif font-bold text-white mb-3 group-hover:text-[#C9A24B] transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="pt-6 mt-6 border-t border-white/10 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Phase {index + 1} of 4</span>
                <span className="text-[#C9A24B] group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-[8px] bg-gradient-to-r from-white/10 to-white/5 border border-[#C9A24B]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-1">
              Have urgent court summons, police matters, or property deadlines?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Immediate statutory time limits apply in Kenya. Arrange an assessment today to safeguard your legal standing.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenConsultationModal}
            className="inline-flex items-center gap-2 bg-[#C9A24B] hover:bg-[#B8923A] text-[#0B1F3A] font-semibold text-xs sm:text-sm px-6 py-3 rounded-lg shadow-sm whitespace-nowrap transition-all focus:outline-none"
          >
            <span>Start Step 1: Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
