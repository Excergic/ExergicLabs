// app/page.tsx (App Router) or pages/index.tsx (Pages Router)
import Navigation from '@/app/components/Navigation';
import Hero from '@/app/components/Hero';
import AboutSection from '@/app/components/AboutSection'
import ContactSection from './components/ContactSection';
import CoreMLServiceSection from './components/CoreMLServiceSection';
import GenerativeAISection from './components/GenerativeAISection';
import ProductBuildingSection from './components/ProductBuildingSection';
import AIEducationConsultingSection from './components/AIEducationConsultingSection';
//import TestimonialsCompact from './components/TestimonialsCompact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutSection />
      <CoreMLServiceSection />
      <GenerativeAISection />
      <ProductBuildingSection />
      <AIEducationConsultingSection />
      {/*<TestimonialsCompact /> */}
      <ContactSection />
      <Footer />
    </main>
  );
}