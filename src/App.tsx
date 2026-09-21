import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsBar } from './components/StatsBar';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { LocationContactSection } from './components/LocationContactSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { AboutModal } from './components/AboutModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { ServiceItem } from './types';
import { SERVICES_DATA } from './data/dentalData';

export default function App() {
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedServiceForAppointment, setSelectedServiceForAppointment] = useState<string>('root-canal');
  const [detailService, setDetailService] = useState<ServiceItem | null>(null);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);

  const handleOpenAppointment = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceForAppointment(serviceId);
    }
    setAppointmentModalOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectRootCanal = () => {
    const rootCanal = SERVICES_DATA.find((s) => s.id === 'root-canal') || null;
    setDetailService(rootCanal);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1E1035] font-sans antialiased selection:bg-[#6B21A8] selection:text-white">
      {/* Navigation Header */}
      <Navbar
        onOpenAppointment={() => handleOpenAppointment()}
        onNavigate={handleNavigate}
      />

      {/* Main Landing Sections */}
      <main className="grow">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenAppointment={() => handleOpenAppointment()}
          onExploreServices={() => handleNavigate('services')}
        />

        {/* 2. Stats Bar */}
        <StatsBar />

        {/* 3. Comprehensive Dental Care Services */}
        <ServicesSection
          onSelectService={(service) => setDetailService(service)}
          onBookService={(serviceId) => handleOpenAppointment(serviceId)}
        />

        {/* 4. Experience the Difference (Why Choose Us) */}
        <WhyChooseUsSection />

        {/* 5. About HappyLipzz Dental Care */}
        <AboutSection onOpenAboutModal={() => setAboutModalOpen(true)} />

        {/* 5.5 Our Clinic in Action / Before & After */}
        <GallerySection />

        <section id="instagram" className="bg-[#FAF5FF] py-16 sm:py-24 border-t border-purple-100/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-8 sm:mb-12">
              <span className="text-[#6B21A8] text-xs sm:text-sm font-bold tracking-[0.14em] uppercase">
                FOLLOW US
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#1E1035] tracking-tight">
                Instagram
              </h2>
            </div>

            <div className="mx-auto max-w-[820px] lg:max-w-[900px]">
              <a
                href="https://www.instagram.com/doctor_isha.s?stkn=bTRyaml6NTNyYmQx"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Follow @doctor_isha.s on Instagram"
                className="block overflow-hidden rounded-[28px] shadow-xl border border-purple-100/80 bg-white transition-transform duration-200 hover:scale-[1.01]"
              >
                <img
                  src="/insta section.png"
                  alt="HappyLipzz Instagram section"
                  className="block w-full h-auto object-contain"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </section>

        {/* 7. Frequently Asked Questions (SEO & Schema) */}
        <FaqSection onOpenAppointment={() => handleOpenAppointment()} />

        {/* 8. Localities & Catchment Areas (Local SEO) */}
        <ServiceAreasSection />

        {/* 9. Location & Contact with Google Map */}
        <LocationContactSection
          onOpenAppointment={() => handleOpenAppointment()}
        />

        {/* 10. Call To Action Banner */}
        <CtaSection onOpenAppointment={() => handleOpenAppointment()} />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectRootCanal={handleSelectRootCanal}
      />

      {/* Floating WhatsApp Booking Button at bottom right */}
      <WhatsAppFloatingButton onOpenAppointment={() => handleOpenAppointment()} />

      {/* Interactive Modals */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        initialServiceId={selectedServiceForAppointment}
      />

      <ServiceDetailModal
        service={detailService}
        onClose={() => setDetailService(null)}
        onBookThisService={(serviceId) => handleOpenAppointment(serviceId)}
      />

      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        onOpenAppointment={() => handleOpenAppointment()}
      />

    </div>
  );
}
