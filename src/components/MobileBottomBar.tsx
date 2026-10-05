import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { FIRM_DETAILS } from '../data/legalData';

export const MobileBottomBar: React.FC = () => {
  return (
    <aside
      aria-label="Mobile quick contact actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0B1F3A] border-t border-[#C9A24B]/30 px-3 py-2 shadow-2xl flex items-center justify-between gap-2.5 h-[56px]"
    >
      {/* Call button */}
      <a
        href={`tel:${FIRM_DETAILS.phoneRaw}`}
        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#C9A24B] hover:bg-[#B8923A] text-[#0B1F3A] font-bold text-xs py-2.5 px-3 rounded-lg shadow transition-colors active:scale-[0.98] min-h-[42px]"
      >
        <Phone className="w-4 h-4 fill-[#0B1F3A]" />
        <span>Call {FIRM_DETAILS.phoneDisplay}</span>
      </a>

      {/* WhatsApp button */}
      <a
        href={`https://wa.me/${FIRM_DETAILS.whatsappRaw}?text=${encodeURIComponent(
          'Hello Chebet & Mariita Advocates, I would like to inquire about legal representation.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs py-2.5 px-3 rounded-lg shadow transition-colors active:scale-[0.98] min-h-[42px]"
      >
        <MessageSquare className="w-4 h-4 fill-white" />
        <span>WhatsApp</span>
      </a>
    </aside>
  );
};
