
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import EducationSection from '../components/EducationSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import PublicationsSection from '../components/PublicationsSection';
import AchievementsSection from '../components/AchievementsSection';
import CertificationsSection from '../components/CertificationsSection';
import ContactSection from '../components/ContactSection';
import ThemeToggle from '../components/ThemeToggle';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-slate-900/50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        
        <section id="about" className={`section-fade-in ${isVisible.about ? 'visible' : ''}`}>
          <AboutSection />
        </section>

        <section id="education" className={`section-fade-in ${isVisible.education ? 'visible' : ''}`}>
          <EducationSection />
        </section>

        <section id="skills" className={`section-fade-in ${isVisible.skills ? 'visible' : ''}`}>
          <SkillsSection />
        </section>

        <section id="projects" className={`section-fade-in ${isVisible.projects ? 'visible' : ''}`}>
          <ProjectsSection />
        </section>

        <section id="publications" className={`section-fade-in ${isVisible.publications ? 'visible' : ''}`}>
          <PublicationsSection />
        </section>

        <section id="achievements" className={`section-fade-in ${isVisible.achievements ? 'visible' : ''}`}>
          <AchievementsSection />
        </section>

        <section id="certifications" className={`section-fade-in ${isVisible.certifications ? 'visible' : ''}`}>
          <CertificationsSection />
        </section>

        <section id="contact" className={`section-fade-in ${isVisible.contact ? 'visible' : ''}`}>
          <ContactSection />
        </section>
      </div>

      <ScrollToTop />
    </div>
  );
};

export default Index;
