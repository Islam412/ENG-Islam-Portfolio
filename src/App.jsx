import React, { useEffect, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CursorEffect from './components/CursorEffect';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  useEffect(() => {
    let animationId;
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);

    const particles = [];
    const particleCount = Math.min(50, window.innerWidth / 10);

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 4 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particlesContainer.appendChild(particle);
      particles.push(particle);
    }

    const animateParticles = () => {
      animationId = requestAnimationFrame(animateParticles);
    };
    
    if (window.innerWidth > 768) {
      animateParticles();
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      particlesContainer.remove();
    };
  }, []);

  return (
    <div className="bg-dark-bg min-h-screen min-h-[100dvh] flex flex-col relative">
      {window.innerWidth > 768 && <CursorEffect />}
      
      <div className="animated-bg" />
      
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      {window.innerWidth > 768 && <div className="glow-orb glow-orb-3" />}
      {window.innerWidth > 1024 && <div className="glow-orb glow-orb-4" />}
      {window.innerWidth > 1024 && <div className="glow-orb glow-orb-5" />}
      
      {window.innerWidth > 768 && (
        <div className="light-rays">
          <div className="ray" />
          <div className="ray" />
          <div className="ray" />
          <div className="ray" />
          <div className="ray" />
          <div className="ray" />
        </div>
      )}
      
      <div className="light-effect" />
      
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;