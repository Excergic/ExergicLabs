// components/Hero.tsx - Hero with smooth scroll support
'use client';
import Image from 'next/image';

const Hero = () => {

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80; // Height of navbar
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pb-32">
      
      {/* Dark Background */}
      <div className="absolute inset-0 z-0 bg-black"></div>

      {/* Light Dots Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #2bfbef 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      {/* Spotlight from Top-Left Corner */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] opacity-30">
        <div className="absolute inset-0 bg-gradient-radial from-[#2bfbef] via-[#2bfbef]/30 to-transparent blur-3xl"></div>
      </div>

      {/* Spotlight from Top-Right Corner */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-30">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-400 via-cyan-400/30 to-transparent blur-3xl"></div>
      </div>

      {/* Spotlight from Bottom (subtle center glow) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-20">
        <div className="absolute inset-0 bg-gradient-radial from-[#2bfbef]/50 to-transparent blur-3xl"></div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">

        {/* Main Heading */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-8 drop-shadow-[0_0_40px_rgba(43,251,239,0.3)]">
          Turn your Data into{' '}
          <span className="bg-gradient-to-r from-[#2bfbef] to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(43,251,239,0.5)]">
            Revenue
          </span>
        </h2>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto font-medium">
        Building real-time data pipelines and AI systems that drive business decisions
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-[#2bfbef] to-cyan-400 text-black font-semibold px-10 py-4 rounded-full text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-[#2bfbef]/30 hover:shadow-[#2bfbef]/60 flex items-center gap-2"
          >
            Get in touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
      </div>

    </section>
  );
};

export default Hero;
