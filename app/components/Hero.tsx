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
      className="min-h-screen flex items-center justify-center"
      style={{ background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)' }}
    >
      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-8 text-center">

        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6">
          Don&apos;t lose your money and Time
        </h2>

        <p className="text-lg md:text-xl lg:text-2xl text-white mb-12 max-w-3xl mx-auto">
          Become AI native in 45 days
        </p>

        <button
          onClick={scrollToContact}
          className="text-white font-semibold px-10 py-4 rounded-full text-lg hover:scale-105 transition-all duration-300 border border-white/20"
          style={{ background: 'linear-gradient(180deg, #1a1a1a 0%, #000000 100%)' }}
        >
          Get in touch
        </button>

      </div>
    </section>
  );
};

export default Hero;
