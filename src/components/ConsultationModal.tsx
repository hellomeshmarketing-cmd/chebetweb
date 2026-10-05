import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Phone, MessageSquare } from 'lucide-react';
import { FIRM_DETAILS, PRACTICE_AREAS } from '../data/legalData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialTopic = ''
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState(initialTopic);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialTopic) {
      setTopic(initialTopic);
    }
  }, [initialTopic]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const handleClose = () => {
    setSubmitted(false);
    setFullName('');
    setPhone('');
    setEmail('');
    setMessage('');
    onClose();
  };

  const whatsappLink = `https://wa.me/${FIRM_DETAILS.whatsappRaw}?text=${encodeURIComponent(
    `Hello Chebet & Mariita Advocates, I would like to schedule a consultation regarding ${topic || 'a legal matter'}.`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div className="relative bg-white w-full max-w-lg rounded-[8px] shadow-2xl border border-stone-200 overflow-hidden my-8">
        {/* Modal Header */}
        <div className="bg-[#0B1F3A] text-white px-6 py-4 flex items-center justify-between border-b border-[#C9A24B]/30">
          <div>
            <h3 id="modal-title" className="text-lg font-serif font-bold text-white">
              Book a Confidential Consultation
            </h3>
            <p className="text-xs text-slate-300">
              Chebet &amp; Mariita Advocates · Kisii Chambers
            </p>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="p-1 rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-serif font-bold text-[#0B1F3A]">
                Consultation Request Received
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, <strong className="text-slate-900">{fullName}</strong>. We have logged your request regarding <strong className="text-[#0B1F3A]">{topic}</strong>. An advocate will contact you at <strong className="text-slate-900">{phone}</strong> shortly.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-5 py-2.5 rounded-lg bg-[#0B1F3A] text-white text-xs font-semibold hover:bg-[#163259] transition-colors"
                >
                  Close Window
                </button>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg border border-emerald-600 text-emerald-700 text-xs font-semibold hover:bg-emerald-50 transition-colors inline-flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Follow up on WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Gladys Nyaboke"
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-stone-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0712 345678"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-stone-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="optional"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-stone-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Practice Area / Matter Type <span className="text-rose-600">*</span>
                </label>
                <select
                  required
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-stone-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B]"
                >
                  <option value="">-- Choose Matter --</option>
                  {PRACTICE_AREAS.map((a) => (
                    <option key={a.id} value={a.title}>
                      {a.title}
                    </option>
                  ))}
                  <option value="General Consultation">General Consultation / Other Matter</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Summary of Legal Need <span className="text-rose-600">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline key dates, property parcel or case numbers if available..."
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-stone-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0B1F3A] hover:bg-[#163259] text-white font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-lg shadow-sm transition-all focus:outline-none"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#C9A24B]" />
                      <span>Confirm Consultation Request</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct Call / WhatsApp alternative */}
              <div className="pt-3 border-t border-stone-200 text-center text-xs text-slate-500">
                <span>Prefer immediate contact? </span>
                <a href={`tel:${FIRM_DETAILS.phoneRaw}`} className="text-[#0B1F3A] font-semibold underline">
                  Call {FIRM_DETAILS.phoneDisplay}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
