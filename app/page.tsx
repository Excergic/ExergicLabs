// app/page.tsx (App Router) or pages/index.tsx (Pages Router)
import Navigation from '@/app/components/Navigation';
import Hero from '@/app/components/Hero';
import ServicesSection from '@/app/components/ServicesSection';
import AboutSection from '@/app/components/AboutSection'
import PortfolioSection from '@/app/components/PortfolioSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
    </main>
  );
}
