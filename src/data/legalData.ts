import { PracticeArea, FAQItem, ClientStory, ReviewItem } from '../types';

export const FIRM_DETAILS = {
  name: 'Chebet & Mariita Advocates',
  tagline: 'Advocates, Commissioners for Oaths & Notaries Public',
  location: 'Back Street, Kisii, Kenya',
  plusCode: '8QG9+HVC',
  phoneDisplay: '0753 409029',
  phoneInternational: '+254 753 409 029',
  phoneRaw: '+254753409029',
  whatsappRaw: '254753409029',
  hours: 'Open daily, closes 5:30 pm',
  hoursNote: '[PLACEHOLDER: Confirm weekday & weekend hours: Mon–Fri: 8:00 AM – 5:30 PM | Sat: 9:00 AM – 1:00 PM | Sun: Closed / By Emergency Appointment]',
  googleRating: 4.4,
  reviewCount: 16,
  email: 'info@chebetmariita.co.ke [PLACEHOLDER - Confirm firm email]',
  mapDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=8QG9%2BHVC+Kisii+Kenya',
  googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Chebet+%26+Mariita+Advocates+Back+Street+Kisii+Kenya'
};

export const PRACTICE_AREAS: PracticeArea[] = [
  // 1. Corporate litigation
  {
    id: 'corporate-litigation',
    title: 'Corporate litigation',
    category: 'Business & Commercial',
    icon: 'Briefcase',
    description: 'We represent registered corporations in shareholder conflicts, regulatory compliance disputes, and breach of commercial contracts. Our advocates guard your enterprise assets while pursuing pragmatic, court-tested solutions in the Commercial Court.'
  },
  // 2. Criminal defence litigation
  {
    id: 'criminal-defence',
    title: 'Criminal defence litigation',
    category: 'Litigation & Defence',
    icon: 'Shield',
    description: 'We deliver zealous, immediate constitutional defence from police arraignments through to trial and appeal at the Kisii Law Courts. We protect your fundamental liberties, secure favorable bail terms, and build principled courtroom defences.'
  },
  // 3. Debt settlement
  {
    id: 'debt-settlement',
    title: 'Debt settlement',
    category: 'Business & Commercial',
    icon: 'Coins',
    description: 'We negotiate and litigate commercial debt recoveries, structured repayment agreements, and distressed asset restructuring. Our team acts decisively to recover outstanding funds while minimizing protracted, costly tribunal delays.'
  },
  // 4. Disability benefits litigation
  {
    id: 'disability-benefits',
    title: 'Disability benefits litigation',
    category: 'Litigation & Defence',
    icon: 'HeartHandshake',
    description: 'We represent clients facing denied or delayed statutory disability claims, workplace injury awards, and long-term insurance benefit denials. We pursue full statutory compensation and lawful medical cover before tribunals and the High Court.'
  },
  // 5. Insurance litigation
  {
    id: 'insurance-litigation',
    title: 'Insurance litigation',
    category: 'Litigation & Defence',
    icon: 'FileCheck2',
    description: 'We challenge bad-faith claim repudiations, third-party liability disputes, and disputed indemnity payouts under Kenyan insurance statutes. We hold insurance providers strictly accountable to the provisions of your signed policy.'
  },
  // 6. Landlord and tenant litigation
  {
    id: 'landlord-tenant',
    title: 'Landlord and tenant litigation',
    category: 'Property & Land',
    icon: 'Building2',
    description: 'We resolve commercial lease disputes, residential tenancy conflicts, distress for rent actions, and unlawful eviction notices. We represent both property owners and commercial tenants before the Rent Restriction Tribunal and Land Courts.'
  },
  // 7. Legal consulting
  {
    id: 'legal-consulting',
    title: 'Legal consulting',
    category: 'Business & Commercial',
    icon: 'BookOpen',
    description: 'We provide structured corporate advisory, regulatory audits, and commercial contract drafting for businesses and non-governmental entities. Our forward-looking counsel minimizes transactional exposure and ensures statutory compliance.'
  },
  // 8. Legal malpractice litigation
  {
    id: 'legal-malpractice',
    title: 'Legal malpractice litigation',
    category: 'Litigation & Defence',
    icon: 'Scale',
    description: 'We represent clients who have suffered financial injury or procedural prejudice due to professional negligence or breach of fiduciary trust. We advocate firmly to recover remedies under established professional liability standards.'
  },
  // 9. Power of attorney
  {
    id: 'power-of-attorney',
    title: 'Power of attorney',
    category: 'Family & Estates',
    icon: 'FileSignature',
    description: 'We draft and register general and specific Powers of Attorney for trusted family members or appointed agents. This gives you peace of mind that your land, finances, and personal matters are lawfully managed when you are away or incapacitated.'
  },
  // 10. Probate litigation
  {
    id: 'probate-litigation',
    title: 'Probate litigation',
    category: 'Family & Estates',
    icon: 'Landmark',
    description: 'We guide families through contentious succession petitions, objections to letters of administration, and distribution battles at the Kisii High Court. We navigate the Law of Succession Act with dignity, tact, and unyielding legal rigor.'
  },
  // 11. Property damage litigation
  {
    id: 'property-damage',
    title: 'Property damage litigation',
    category: 'Property & Land',
    icon: 'AlertTriangle',
    description: 'We secure court injunctions and financial compensation for unlawful demolition, construction encroachment, or environmental degradation of your real estate. We work with certified land valuers to substantiate and recover full restitution.'
  },
  // 12. Property dispute litigation
  {
    id: 'property-dispute',
    title: 'Property dispute litigation',
    category: 'Property & Land',
    icon: 'MapPin',
    description: 'We handle contested land boundary conflicts, fraudulent title deed cancellations, and adverse possession claims in Kisii County and Western Kenya. We defend your title deed rights before the Environment and Land Court.'
  },
  // 13. Small business litigation
  {
    id: 'small-business',
    title: 'Small business litigation',
    category: 'Business & Commercial',
    icon: 'Store',
    description: 'We protect local shops, enterprises, transport operators, and agricultural merchants in supplier and partnership disputes. We offer cost-effective, decisive representation so your day-to-day operations remain protected.'
  },
  // 14. Trusts and estates litigation
  {
    id: 'trusts-estates',
    title: 'Trusts and estates litigation',
    category: 'Family & Estates',
    icon: 'Users',
    description: 'We litigate breach of fiduciary duty by trustees, wrongful asset alienation, and disputed testamentary provisions. Our advocates protect multi-generational family inheritances and enforce lawful distribution terms.'
  },
  // 15. Water litigation
  {
    id: 'water-litigation',
    title: 'Water litigation',
    category: 'Property & Land',
    icon: 'Droplets',
    description: 'We advise agricultural landowners and community trusts on riparian rights, unlawful river diversion, and water utility disputes. We represent clients before the Water Appeals Tribunal and judicial benches to defend vital access.'
  },
  // 16. Will writing
  {
    id: 'will-writing',
    title: 'Will writing',
    category: 'Family & Estates',
    icon: 'Scroll',
    description: 'We draft clear, unambiguous, and legally ironclad wills to ensure your estate is divided according to your true intentions. A properly drafted will prevents family acrimony and protects your beneficiaries from lengthy intestate succession delays.'
  }
];

export const CATEGORIES = [
  'All',
  'Property & Land',
  'Family & Estates',
  'Business & Commercial',
  'Litigation & Defence'
] as const;

export const HOW_WE_HELP_STEPS = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We listen attentively to the specifics of your matter in a confidential session, reviewing all relevant title deeds, summons, contracts, or notices.',
    icon: 'MessagesSquare'
  },
  {
    step: '02',
    title: 'Case Assessment',
    description: 'Our advocates conduct a rigorous legal assessment against Kenyan statutes, High Court precedents, and court jurisdiction to establish the merits of your position.',
    icon: 'SearchCheck'
  },
  {
    step: '03',
    title: 'Legal Strategy',
    description: 'We formulate a transparent, customized action plan detailing the procedural trajectory, estimated timelines, dispute resolution alternatives, and fee structure.',
    icon: 'Compass'
  },
  {
    step: '04',
    title: 'Representation and Resolution',
    description: 'We execute your legal strategy decisively—whether through rigorous negotiation, mediation, or steadfast advocacy before judicial tribunals and the courts.',
    icon: 'Gavel'
  }
];

export const CLIENT_STORIES: ClientStory[] = [
  {
    id: 'landlord-rent-dispute',
    title: 'Commercial Landlord Facing Defaulting Lease & Tenancy Conflict',
    category: 'Property & Land',
    situation: 'A property owner in Kisii Town experienced recurring defaults on lease payments from a commercial tenant who also disputed terms and refused vacant possession, threatening property viability.',
    legalApproach: 'Our advocates issued statutory notices under the Landlord and Tenant (Shops, Hotels and Catering Establishments) Act, instituted formal tribunal proceedings, and negotiated a structured distress and vacant handover agreement.',
    outcomePlaceholder: '[PLACEHOLDER - Real, approved case resolution details will be inserted here with client consent]'
  },
  {
    id: 'family-estate-succession',
    title: 'Family Navigating Succession & Division of Ancestral Land',
    category: 'Family & Estates',
    situation: 'Following the demise of a patriarch owning agricultural and township parcels across Kisii, siblings faced conflicting inheritance claims and contested the validity of informal boundary allocations.',
    legalApproach: 'We filed a petition for Letters of Administration Intestate at the High Court in Kisii, engaged a licensed surveyor for accurate boundary verification, and guided the beneficiaries through lawful estate confirmation.',
    outcomePlaceholder: '[PLACEHOLDER - Real, approved case resolution details will be inserted here with client consent]'
  },
  {
    id: 'small-business-debt-recovery',
    title: 'Local Enterprise Seeking Recovery of Unpaid Supply Debts',
    category: 'Business & Commercial',
    situation: 'A Kisii-based wholesale supplier delivered agricultural goods on 30-day commercial terms, but the purchaser defaulted on invoices exceeding hundreds of thousands of shillings over six months.',
    legalApproach: 'We served a formal Advocate Demand Letter with statutory interest notices, preserved key delivery acknowledgments, and initiated expedited summary proceedings in the subordinate Commercial Court.',
    outcomePlaceholder: '[PLACEHOLDER - Real, approved case resolution details will be inserted here with client consent]'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'D. Ondieki',
    rating: 5,
    date: '3 months ago',
    text: 'Chebet & Mariita Advocates handled our land title succession matter at the Kisii High Court with deep professionalism and clarity. Their regular updates gave our family true peace of mind.',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'M. Kerubo',
    rating: 5,
    date: '5 months ago',
    text: 'Prompt, respectful and knowledgeable advocates. They assisted my business in reviewing tenancy contracts and recovering overdue arrears without court delays. Highly recommended in Kisii.',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'P. Nyachae',
    rating: 4,
    date: '7 months ago',
    text: 'Sound legal advice and transparent consultation fees. Located conveniently on Back Street. They explained the legal procedures in plain terms that made complete sense.',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'J. Mogaka',
    rating: 5,
    date: '9 months ago',
    text: 'Very capable legal defence and property consultation. The team was responsive on phone and WhatsApp whenever urgent court filing deadlines approached.',
    verified: true
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What should I bring to my first legal consultation?',
    answer: 'Please bring your national ID card or passport, any summons or court orders served upon you, relevant title deeds, allotment letters, lease agreements, contracts, receipts, or police occurrence book (OB) numbers related to your matter. Having an organized chronology of events helps us evaluate your case swiftly.'
  },
  {
    id: 'faq-2',
    question: 'How are legal fees structured at the firm?',
    answer: 'In Kenya, advocate legal fees are regulated by the Advocates Remuneration Order (ARO) as issued by the Chief Justice under the Advocates Act. Depending on the nature of the matter (e.g. consultation, conveyancing, probate, or litigation), fees may consist of a fixed consultation fee, scale fees for property and probate, or instruction fees with milestone retainers. We provide transparent fee estimates before commencement.'
  },
  {
    id: 'faq-3',
    question: 'How do I start a probate or succession matter in Kenya?',
    answer: 'To initiate succession proceedings, you require the original Death Certificate of the deceased, identification documents of the administrators and beneficiaries, a letter from the local Chief confirming survivors, and certified ownership documents (title deeds, share certificates, vehicle logbooks). If there is a valid Will, we file for Grant of Probate; if intestate, we petition for Letters of Administration.'
  },
  {
    id: 'faq-4',
    question: 'What should I do immediately if I or a family member is arrested in Kisii?',
    answer: 'Exercise your constitutional right under Article 49 of the Constitution of Kenya to remain silent and contact an advocate immediately. Note the police station name and the assigned Investigating Officer. Call our emergency advocate line at 0753 409029 promptly so we can visit the station, ensure proper recording in the OB, and apply for police bond or court bail.'
  },
  {
    id: 'faq-5',
    question: 'How long do land and boundary dispute cases take in Kisii?',
    answer: 'Timelines vary depending on whether the matter is resolved through the County Land Registrar, Alternative Dispute Resolution (ADR), or the Environment and Land Court (ELC). While court litigation can take several months or longer due to court trial calendars, seeking interlocutory injunctions to preserve status quo can often be achieved within days or weeks of filing.'
  },
  {
    id: 'faq-6',
    question: 'Can you assist with resolving commercial or debt disputes out of court?',
    answer: 'Yes. We frequently utilize Alternative Dispute Resolution (ADR) including direct advocate-to-advocate negotiations and formal mediation. Court-annexed mediation is actively supported in Kenyan courts and frequently resolves commercial disputes faster and with substantially reduced legal expense.'
  },
  {
    id: 'faq-7',
    question: 'Do I need an advocate to draft a legally binding Will or Power of Attorney?',
    answer: 'While individuals can write a document, an advocate ensures strict compliance with statutory execution requirements under the Law of Succession Act (such as proper attestation by independent witnesses, clear revocation of previous wills, and testamentary capacity). This guards your document against subsequent challenges in court.'
  },
  {
    id: 'faq-8',
    question: 'Can I consult with the firm if I live in Nairobi, Mombasa, or in the diaspora?',
    answer: 'Yes. We regularly represent clients across Kenya and in the diaspora (such as the UK, USA, Europe, and Middle East) who own properties, investments, or inheritance matters in Kisii and Western Kenya. We provide secure virtual consultations via WhatsApp, phone, and email, with formal powers of attorney executed through Kenyan embassies or notaries.'
  }
];
