// components/Hero.tsx - Simple hero with free trial badge only
'use client';


const Hero = () => {

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center">
      
      {/* Main Content Container */}
      <div className="container mx-auto px-6 lg:px-8 text-center">
      

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-8">
          Turn AI into{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Revenue
          </span>{' '}
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto font-medium">
          Helping you realize power of AI through your Data{' '}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-10 py-4 rounded-full text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2"
          >
            Get in touch
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;