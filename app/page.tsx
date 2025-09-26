// app/page.tsx (App Router) or pages/index.tsx (Pages Router)
import Navigation from '@/app/components/Navigation';
import Hero from '@/app/components/Hero';
import ServicesSection from '@/app/components/ServicesSection';
import AboutSection from '@/app/components/AboutSection'
import PortfolioSection from '@/app/components/PortfolioSection';
import ContactSection from './components/ContactSection';
import CoreMLServiceSection from './components/CoreMLServiceSection';
import GenerativeAISection from './components/GenerativeAISection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <CoreMLServiceSection />
      <GenerativeAISection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
