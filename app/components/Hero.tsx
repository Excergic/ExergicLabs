// components/Hero.tsx - Simple hero with free trial badge only
'use client';

const Hero = () => {
  // Function to handle smooth scroll to services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

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
          Integrate AI into your{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Workflow
          </span>{' '}
          and stay ahead in market
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto font-medium">
          No matter which field you are in{' '}
          <span className="text-cyan-400">Education</span> |{' '}
          <span className="text-green-400">Healthcare</span> |{' '}
          <span className="text-blue-400">Finance</span> |{' '}
          <span className="text-purple-400">Everyday work Automation</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-10 py-4 rounded-full text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2"
          >
            📞 Schedule a Call
          </button>
          
          <button 
            onClick={scrollToServices}
            className="bg-transparent border-2 border-gray-500 text-gray-300 font-semibold px-10 py-4 rounded-full text-lg hover:border-white hover:text-white transition-all duration-300"
          >
            Explore Services
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-12 mt-16 opacity-70">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">5+</div>
            <div className="text-gray-400 text-sm">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">5 Days</div>
            <div className="text-gray-400 text-sm">Free Trial</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-gray-400 text-sm">Support</div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
