import React, { useState } from 'react';
import { ChevronDown, HelpCircle, AlertCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/legalData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-[#F7F5F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#C9A24B] uppercase mb-2">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0B1F3A] leading-tight mb-4">
            Common Legal Inquiries
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Clear answers to common questions about legal consultations, fees under the Advocates Act, court representation, and preparing your case.
          </p>
        </div>

        {/* 8 Accordion Items */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-[8px] border border-stone-200 shadow-sm transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus:bg-stone-50"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#C9A24B] font-bold">
                      0{index + 1}.
                    </span>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-[#0B1F3A]">
                      {item.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#C9A24B]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-stone-100">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Legal Disclaimer Note */}
        <div className="mt-10 p-4 rounded-[8px] bg-amber-50/70 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-900 leading-relaxed">
          <AlertCircle className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
          <p>
            <strong>Legal Notice:</strong> The answers provided in this FAQ section are for general informational purposes only and do not constitute formal legal advice or create an advocate-client relationship. Legal statutes and court rules may vary based on the specific facts and jurisdictions of your case. For customized legal assistance, schedule a formal consultation with our advocates.
          </p>
        </div>
      </div>
    </section>
  );
};
