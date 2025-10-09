// app/page.tsx (App Router) or pages/index.tsx (Pages Router)
import Navigation from '@/app/components/Navigation';
import Hero from '@/app/components/Hero';
import AboutSection from '@/app/components/AboutSection'
import ContactSection from './components/ContactSection';
//import TestimonialsCompact from './components/TestimonialsCompact';
import Footer from './components/Footer';
import OurProcess from './components/OurProcess';
import WeBuildMVP from './components/WeBuildMVP';
import Projects from './components/Projects';
//import Pricing from './components/Pricing';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutSection />
      <OurProcess />
      <WeBuildMVP />
      <Projects />
      {/*<Pricing />*/}
      {/*<TestimonialsCompact /> */}
      <ContactSection />
      <Footer />
    </main>
  );
}