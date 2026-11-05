import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ConsultationModal from './components/ConsultationModal';
import DDQModal from './components/DDQModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TechnologyPage from './pages/TechnologyPage';
import IndustriesPage from './pages/IndustriesPage';
import CompliancePage from './pages/CompliancePage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isDDQOpen, setIsDDQOpen] = useState(false);

  const handleNavigate = (pageId, hash = null) => {
    const targetId = hash || pageId;
    
    // If user requests a section on the landing page
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return (
          <AboutPage 
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onOpenDDQ={() => setIsDDQOpen(true)}
          />
        );
      case 'services':
        return (
          <ServicesPage 
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onOpenDDQ={() => setIsDDQOpen(true)}
          />
        );
      case 'technology':
        return (
          <TechnologyPage 
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onOpenDDQ={() => setIsDDQOpen(true)}
          />
        );
      case 'industries':
        return (
          <IndustriesPage 
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onOpenDDQ={() => setIsDDQOpen(true)}
          />
        );
      case 'compliance':
      case 'governance':
        return (
          <CompliancePage 
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onOpenDDQ={() => setIsDDQOpen(true)}
          />
        );
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return (
          <HomePage 
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onOpenDDQ={() => setIsDDQOpen(true)}
            onNavigate={handleNavigate}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-blue-600 selection:text-white">
      {/* Global Navigation */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={handleNavigate}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Main Dynamic Page Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Global Footer */}
      <Footer 
        setCurrentPage={handleNavigate}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Floating Bottom-to-Top Button */}
      <ScrollToTop />

      {/* Global Interactive Modals */}
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
      />

      <DDQModal 
        isOpen={isDDQOpen} 
        onClose={() => setIsDDQOpen(false)} 
      />
    </div>
  );
}
