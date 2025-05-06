import React from 'react';
import SystemCards from './CardPage';
import HeroSection from './Hero';
import SecuritySection from './CTAPage';
import ContactSection from './ContactHome';
import AboutHome from './AboutHome';

const Home = () => {
  return (
    <div className="bg-[#f3f9ff] dark:bg-black flex flex-col gap-20">
      <HeroSection />
      <SystemCards />
      <AboutHome />
      <SecuritySection />
      <ContactSection />
    </div>
  );
}

export default Home;