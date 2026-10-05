import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PracticeAreas } from './components/PracticeAreas';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { ClientStoriesSection } from './components/ClientStoriesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState<string | undefined>(undefined);
  const [selectedPracticeAreaForForm, setSelectedPracticeAreaForForm] = useState<string | undefined>(undefined);

  const handleOpenConsultationModal = (topic?: string) => {
    setModalTopic(topic || '');
    setModalOpen(true);
  };

  const handleSelectPracticeArea = (areaTitle: string) => {
    setSelectedPracticeAreaForForm(areaTitle);
    // Smooth scroll down to contact section
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenConsultationModal(areaTitle);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#1E293B] flex flex-col font-sans selection:bg-[#C9A24B]/30 selection:text-[#0B1F3A]">
      {/* 1. Sticky Navbar */}
      <Navbar onOpenConsultationModal={handleOpenConsultationModal} />

      {/* Main Content Stream */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenConsultationModal={handleOpenConsultationModal} />

        {/* 3. Practice Areas (Categorized filter tabs + 16 cards) */}
        <PracticeAreas onSelectPracticeArea={handleSelectPracticeArea} />

        {/* 4. About the Firm (Dignified paragraph + placeholders for advocates & photos) */}
        <AboutSection />

        {/* 5. How We Help (4-Step process icon timeline) */}
        <ProcessSection onOpenConsultationModal={() => handleOpenConsultationModal()} />

        {/* 6. Client Stories (3 Anonymized typical scenarios) */}
        <ClientStoriesSection onSelectPracticeArea={handleSelectPracticeArea} />

        {/* 7. Reviews (4.4 Rating, 16 reviews, carousel & Google button) */}
        <ReviewsSection />

        {/* 8. FAQ (8 Accordion questions + legal disclaimer note) */}
        <FaqSection />

        {/* 9. Contact and Location (Form, Map, Directions, Phone, WhatsApp, Hours) */}
        <ContactSection preselectedPracticeArea={selectedPracticeAreaForForm} />
      </main>

      {/* 10. Footer with Mandatory Disclaimer */}
      <Footer />

      {/* Mobile-First Fixed Bottom Bar (<15% viewport height) */}
      <MobileBottomBar />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTopic={modalTopic}
      />
    </div>
  );
}
