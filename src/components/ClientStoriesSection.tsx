import React from 'react';
import { CLIENT_STORIES } from '../data/legalData';
import { ArrowRight, HelpCircle, FileText, CheckCircle } from 'lucide-react';

interface ClientStoriesProps {
  onSelectPracticeArea: (areaTitle: string) => void;
}

export const ClientStoriesSection: React.FC<ClientStoriesProps> = ({ onSelectPracticeArea }) => {
  return (
    <section className="py-20 sm:py-24 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#C9A24B] uppercase mb-2">
            Illustrative Legal Scenarios
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0B1F3A] leading-tight mb-4">
            Typical Situations We Help With
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Every legal challenge brings unique facts and pressures. Here are three representative scenarios illustrating how our advocates identify rights, manage risk, and formulate practical strategies for individuals and businesses in Kisii.
          </p>
        </div>

        {/* 3 Scenario Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CLIENT_STORIES.map((story) => (
            <article
              key={story.id}
              className="bg-white rounded-[8px] p-6 sm:p-7 border border-stone-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col justify-between"
            >
              <div>
                {/* Category kicker */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3 pb-3 border-b border-stone-100">
                  <span className="font-medium text-[#C9A24B] uppercase tracking-wider">{story.category}</span>
                  <span>Anonymized Scenario</span>
                </div>

                {/* Scenario Title */}
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0B1F3A] mb-4 leading-snug">
                  {story.title}
                </h3>

                {/* The Situation */}
                <div className="mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-[#0B1F3A]" />
                    <span>The Situation</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-[#F7F5F0] p-3 rounded border border-stone-200/60">
                    {story.situation}
                  </p>
                </div>

                {/* The Legal Approach */}
                <div className="mb-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#C9A24B]" />
                    <span>Advocate Strategy</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {story.legalApproach}
                  </p>
                </div>

                {/* Approved Result Placeholder */}
                <div className="p-3 rounded bg-amber-50/70 border border-amber-200/80 text-[11px] text-amber-900 leading-normal mb-6">
                  <strong className="font-semibold block mb-0.5">Approved Case Outcome:</strong>
                  <span>{story.outcomePlaceholder}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onSelectPracticeArea(story.category)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1F3A] hover:text-[#C9A24B] transition-colors"
                >
                  <span>Discuss a similar matter</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[11px] text-slate-400">Kisii Courts</span>
              </div>
            </article>
          ))}
        </div>

        {/* Ethical Note */}
        <p className="text-xs text-slate-500 mt-8 text-center max-w-2xl mx-auto italic">
          *Note: To protect client confidentiality and comply with Law Society of Kenya (LSK) professional conduct regulations, names, specific property parcel numbers, and financial details are anonymized. Past scenarios do not guarantee identical results.
        </p>
      </div>
    </section>
  );
};
