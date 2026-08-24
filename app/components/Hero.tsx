// components/Hero.tsx - Hero with smooth scroll support
'use client';

const Hero = () => {

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pb-32"
      style={{
        background: 'radial-gradient(ellipse 90% 60% at 50% -10%, rgba(43,251,239,0.10) 0%, transparent 65%), linear-gradient(180deg, #080808 0%, #0c0c0c 100%)',
      }}
    >
      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `radial-gradient(circle, #2bfbef 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
      }}></div>

      {/* Top-left glow */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, #2bfbef 0%, transparent 65%)' }}></div>

      {/* Top-right glow */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] opacity-15 pointer-events-none" style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 65%)' }}></div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">

        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-8 drop-shadow-[0_0_40px_rgba(43,251,239,0.2)]">
          Turn your Data into{' '}
          <span className="bg-gradient-to-r from-[#2bfbef] to-cyan-400 bg-clip-text text-transparent">
            Revenue
          </span>
        </h2>

        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto font-medium">
          Helping businesses become AI native — and building the AI products that make it real.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-[#2bfbef] to-cyan-400 text-black font-semibold px-10 py-4 rounded-full text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-[#2bfbef]/25 hover:shadow-[#2bfbef]/50 flex items-center gap-2"
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
