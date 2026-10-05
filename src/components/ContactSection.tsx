import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Mail,
  Send,
  CheckCircle2,
  ExternalLink,
  Navigation
} from 'lucide-react';
import { FIRM_DETAILS, PRACTICE_AREAS } from '../data/legalData';

interface ContactSectionProps {
  preselectedPracticeArea?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedPracticeArea }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    practiceArea: preselectedPracticeArea || '',
    preferredContactMethod: 'phone',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync if preselectedPracticeArea changes from parent
  React.useEffect(() => {
    if (preselectedPracticeArea) {
      setFormData((prev) => ({ ...prev, practiceArea: preselectedPracticeArea }));
    }
  }, [preselectedPracticeArea]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulated form submission with Formspree readiness
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      practiceArea: '',
      preferredContactMethod: 'phone',
      message: ''
    });
    setSubmitted(false);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Chebet & Mariita Advocates, I would like to inquire about legal representation regarding ${
      formData.practiceArea || 'a legal matter'
    }.`
  );

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#C9A24B] uppercase mb-2">
            Get In Touch · Kisii Chambers
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0B1F3A] leading-tight mb-4">
            Contact & Location
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether you require immediate bail representation, property title defense, succession filings, or commercial dispute advice, schedule your appointment with our advocates today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column (5 cols): Chamber Details, Map Embed, Directions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-[8px] bg-[#F7F5F0] border border-stone-200 space-y-5">
              <h3 className="text-xl font-serif font-bold text-[#0B1F3A]">
                Office & Contact Information
              </h3>

              {/* Physical Address */}
              <div className="flex items-start gap-3.5 text-xs sm:text-sm">
                <MapPin className="w-5 h-5 text-[#C9A24B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900">Physical Chambers</h4>
                  <p className="text-slate-600">Back Street, Kisii Town, Kenya</p>
                  <p className="text-slate-500 font-mono text-xs mt-0.5">Plus Code: {FIRM_DETAILS.plusCode}</p>
                </div>
              </div>

              {/* Phone & Direct Dial */}
              <div className="flex items-start gap-3.5 text-xs sm:text-sm">
                <Phone className="w-5 h-5 text-[#C9A24B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900">Telephone / Calls</h4>
                  <a
                    href={`tel:${FIRM_DETAILS.phoneRaw}`}
                    className="text-[#0B1F3A] hover:text-[#C9A24B] font-semibold transition-colors block"
                  >
                    {FIRM_DETAILS.phoneInternational} ({FIRM_DETAILS.phoneDisplay})
                  </a>
                  <span className="text-[11px] text-slate-500">Available during working hours & emergency arrests</span>
                </div>
              </div>

              {/* WhatsApp Quick Chat */}
              <div className="flex items-start gap-3.5 text-xs sm:text-sm">
                <MessageSquare className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900">WhatsApp Chat</h4>
                  <a
                    href={`https://wa.me/${FIRM_DETAILS.whatsappRaw}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-semibold transition-colors"
                  >
                    <span>Click to chat on WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <p className="text-[11px] text-slate-500">Fast response for case inquiries</p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5 text-xs sm:text-sm">
                <Clock className="w-5 h-5 text-[#C9A24B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900">Working Hours</h4>
                  <p className="text-slate-700 font-medium">{FIRM_DETAILS.hours}</p>
                  <p className="text-[11px] text-slate-500 italic mt-0.5">
                    {FIRM_DETAILS.hoursNote}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 text-xs sm:text-sm">
                <Mail className="w-5 h-5 text-[#C9A24B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900">Email Inquiries</h4>
                  <p className="text-slate-600 font-mono text-xs">{FIRM_DETAILS.email}</p>
                </div>
              </div>
            </div>

            {/* Embedded Map & Directions Container */}
            <div className="rounded-[8px] overflow-hidden border border-stone-200 bg-white shadow-sm">
              <div className="p-3 bg-stone-100 flex items-center justify-between text-xs border-b border-stone-200">
                <span className="font-medium text-slate-700 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C9A24B]" />
                  Back Street, Kisii Location
                </span>
                <a
                  href={FIRM_DETAILS.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#0B1F3A] hover:text-[#C9A24B] font-semibold transition-colors"
                >
                  <Navigation className="w-3 h-3 text-[#C9A24B]" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Responsive Google Maps Iframe */}
              <div className="relative w-full h-64 bg-stone-200">
                <iframe
                  title="Chebet & Mariita Advocates Location Map"
                  src="https://maps.google.com/maps?q=Back+Street,+Kisii,+Kenya&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-3 bg-[#F7F5F0] flex items-center justify-between text-[11px] text-slate-500">
                <span>Google Plus Code: 8QG9+HVC</span>
                <a
                  href={FIRM_DETAILS.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B1F3A] font-semibold underline underline-offset-2"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Consultation Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F7F5F0] p-6 sm:p-8 rounded-[8px] border border-stone-200 shadow-sm">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0B1F3A]">
                  Request an Advocate Consultation
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Fill in the details below. All consultations are privileged and confidential under Kenyan legal practice rules.
                </p>
              </div>

              {/* 
                ======================================================================
                NOTE FOR LIVE DEPLOYMENT (Formspree or Google Forms Endpoint):
                To connect to Formspree, change the form tag to:
                <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
                Or send JSON payload to your custom backend / Google Apps Script.
                ======================================================================
              */}
              {submitted ? (
                <div className="p-8 bg-white rounded-lg border border-emerald-200 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-[#0B1F3A]">
                    Inquiry Received
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-800">{formData.fullName || 'Client'}</strong>. Our legal team will review your inquiry regarding <span className="font-medium text-[#0B1F3A]">{formData.practiceArea || 'your matter'}</span> and reach out via {formData.phone ? `phone (${formData.phone})` : 'your provided contact'} promptly.
                  </p>
                  <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs font-semibold text-[#0B1F3A] hover:underline"
                    >
                      Submit Another Inquiry
                    </button>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <a
                      href={`https://wa.me/${FIRM_DETAILS.whatsappRaw}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
                    >
                      <span>Urgent? Chat directly on WhatsApp</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Samuel Ondieki"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B]"
                    />
                  </div>

                  {/* Phone & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone / WhatsApp <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 0712 345678 or +254..."
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B]"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. client@example.com"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B]"
                      />
                    </div>
                  </div>

                  {/* Practice Area Dropdown */}
                  <div>
                    <label htmlFor="practiceArea" className="block text-xs font-semibold text-slate-700 mb-1">
                      Legal Practice Area / Issue <span className="text-rose-600">*</span>
                    </label>
                    <select
                      id="practiceArea"
                      name="practiceArea"
                      required
                      value={formData.practiceArea}
                      onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded-lg text-slate-900 focus:outline-none focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B]"
                    >
                      <option value="">-- Select a Practice Area --</option>
                      {PRACTICE_AREAS.map((area) => (
                        <option key={area.id} value={area.title}>
                          {area.title} ({area.category})
                        </option>
                      ))}
                      <option value="General Legal Consultation">General Legal Consultation / Other Matter</option>
                    </select>
                  </div>

                  {/* Message / Matter Brief */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1">
                      Brief Description of Your Matter <span className="text-rose-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please summarize the key dates, documents available, and the legal assistance you require..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-stone-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#C9A24B] focus:ring-1 focus:ring-[#C9A24B]"
                    />
                  </div>

                  {/* Privacy note */}
                  <p className="text-[11px] text-slate-500 leading-normal">
                    Submission of this form does not establish a formal advocate-client relationship until an engagement letter is executed following a conflict check.
                  </p>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0B1F3A] hover:bg-[#163259] text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-sm transition-all disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#C9A24B]"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#C9A24B]" />
                        <span>Submit Consultation Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
