export type PracticeCategory = 
  | 'All' 
  | 'Property & Land' 
  | 'Family & Estates' 
  | 'Business & Commercial' 
  | 'Litigation & Defence';

export interface PracticeArea {
  id: string;
  title: string;
  category: 'Property & Land' | 'Family & Estates' | 'Business & Commercial' | 'Litigation & Defence';
  icon: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ClientStory {
  id: string;
  title: string;
  category: string;
  situation: string;
  legalApproach: string;
  outcomePlaceholder: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
}
