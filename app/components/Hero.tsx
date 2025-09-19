// components/Hero.tsx - Killer version with 5-day free trial offer
'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const animatedTexts = [
    "AI Solutions",
    "Production Systems", 
    "Voice Models",
    "Image Recognition",
    "RAG Systems",
    "Multimodal Apps"
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % animatedTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-black overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20 animate-pulse"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-ping"></div>
      
      {/* Main Content Container */}
      <div className="container mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            
            {/* Killer Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/50 px-6 py-3 rounded-full">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-green-400 font-semibold text-sm tracking-wide">🚀 5-DAY FREE TRIAL • NO CREDIT CARD REQUIRED</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Build Your
              <br />
              <span className="inline-flex items-center gap-4">
                {/* AI Icons */}
                <div className="flex gap-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center animate-bounce">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center animate-pulse">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                {mounted && animatedTexts[currentText]}
              </span>
            </h1>

            {/* Power Tagline */}
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                At The{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Speed of Light ⚡
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Transform your business with production-grade AI systems that actually work. 
                <span className="text-cyan-400 font-semibold"> Try our services for 5 days completely FREE</span> - 
                no strings attached, no credit card required.
              </p>
            </div>

            {/* Value Proposition */}
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Our Killer Guarantee 🎯</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <span className="text-green-400 text-xl">✅</span>
                  <span><strong className="text-white">5 Days FREE</strong> - Use our full service portfolio</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400 text-xl">✅</span>
                  <span><strong className="text-white">Zero Risk</strong> - No payment until you're 100% satisfied</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400 text-xl">✅</span>
                  <span><strong className="text-white">Your Feedback</strong> - Help us improve, get killer results</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400 text-xl">✅</span>
                  <span><strong className="text-white">Pay Only If</strong> - You love the results & want to continue</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button 
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-green-400 via-cyan-500 to-blue-600 text-black font-bold px-10 py-5 rounded-full text-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/50 animate-pulse"
              >
                🚀 START 5-DAY FREE TRIAL
                <svg className="inline-block w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5-5 5M6 12h12" />
                </svg>
              </button>
              
              <button 
                onClick={scrollToServices}
                className="bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold px-10 py-5 rounded-full text-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-105"
              >
                Explore Services
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">50+</div>
                <div className="text-gray-400 text-sm">AI Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">100%</div>
                <div className="text-gray-400 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">⚡</div>
                <div className="text-gray-400 text-sm">Lightning Fast</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative">
            {/* Main Tech Stack Showcase */}
            <div className="relative z-10 bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-3xl p-8 backdrop-blur-sm border border-gray-600/30">
              
              {/* Tech Icons Grid */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-2xl text-center hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl mb-2">🤖</div>
                  <div className="text-white font-semibold text-sm">AI Agents</div>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl text-center hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl mb-2">🧠</div>
                  <div className="text-white font-semibold text-sm">RAG Systems</div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-2xl text-center hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="text-white font-semibold text-sm">Fast Deploy</div>
                </div>
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-2xl text-center hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl mb-2">🎙️</div>
                  <div className="text-white font-semibold text-sm">Voice AI</div>
                </div>
                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-4 rounded-2xl text-center hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl mb-2">🖼️</div>
                  <div className="text-white font-semibold text-sm">Computer Vision</div>
                </div>
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 rounded-2xl text-center hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl mb-2">🚀</div>
                  <div className="text-white font-semibold text-sm">Production Ready</div>
                </div>
              </div>

              {/* Live Demo Indicator */}
              <div className="bg-green-500/20 border border-green-400/50 rounded-xl p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-green-400 font-semibold">LIVE SYSTEMS RUNNING</span>
                </div>
                <div className="text-white text-sm">Our AI systems are processing requests right now!</div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-green-600 to-cyan-600 py-4">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white font-semibold">
            ⏰ <strong>LIMITED TIME:</strong> Get 5 days of premium AI development services absolutely FREE - No catch, no gimmicks!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
