// components/Navigation.tsx - Updated with smooth scrolling for all dropdown links including About Us
'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const openDropdown = (dropdown: string) => setActiveDropdown(dropdown);
  const closeDropdown = () => setActiveDropdown(null);

  // Smooth scroll handler
  const smoothScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-lg border-b border-gray-800"
      ref={navRef}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-white to-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">E</span>
            </div>
            <span className="text-white font-bold text-xl">ExergicLabs</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">

            {/* What We Do */}
            <div 
              className="relative"
              onMouseEnter={() => openDropdown('services')}
              onMouseLeave={closeDropdown}
            >
              <button className="text-gray-300 hover:text-white flex items-center gap-1 py-2 transition-colors duration-200">
                What We Do
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-gradient-to-r from-black to-gray-900 border border-gray-700 rounded-lg shadow-xl py-2">
                  <a 
                    href="#core-ml-service"
                    onClick={(e) => { e.preventDefault(); smoothScroll('core-ml-service'); closeDropdown(); }}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 transition-colors"
                  >
                    Core ML Service
                  </a>
                  <a 
                    href="#product-building"
                    onClick={(e) => { e.preventDefault(); smoothScroll('product-building'); closeDropdown(); }}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 transition-colors"
                  >
                    Product Building
                  </a>
                  <a 
                    href="#genai"
                    onClick={(e) => { e.preventDefault(); smoothScroll('genai'); closeDropdown(); }}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 transition-colors"
                  >
                    GenAI
                  </a>
                  <a 
                    href="#ai-training-coaching"
                    onClick={(e) => { e.preventDefault(); smoothScroll('ai-training-coaching'); closeDropdown(); }}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 transition-colors"
                  >
                    AI Training and Coaching
                  </a>
                </div>
              )}
            </div>

            {/* Industries */}
            <div 
              className="relative"
              onMouseEnter={() => openDropdown('industries')}
              onMouseLeave={closeDropdown}
            >
              <button className="text-gray-300 hover:text-white flex items-center gap-1 py-2 transition-colors duration-200">
                Industries
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeDropdown === 'industries' && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-gradient-to-r from-black to-gray-900 border border-gray-700 rounded-lg shadow-xl py-2">
                  <a 
                    href="#finance"
                    onClick={(e) => { e.preventDefault(); smoothScroll('finance'); closeDropdown(); }}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 transition-colors"
                  >
                    Finance / FinTech
                  </a>
                  <a 
                    href="#education"
                    onClick={(e) => { e.preventDefault(); smoothScroll('education'); closeDropdown(); }}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 transition-colors"
                  >
                    Education / EdTech
                  </a>
                  <a 
                    href="#healthcare"
                    onClick={(e) => { e.preventDefault(); smoothScroll('healthcare'); closeDropdown(); }}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 transition-colors"
                  >
                    HealthCare
                  </a>
                  <a 
                    href="#automation"
                    onClick={(e) => { e.preventDefault(); smoothScroll('automation'); closeDropdown(); }}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 transition-colors"
                  >
                    Automation
                  </a>
                </div>
              )}
            </div>

            {/* About Us */}
            <div 
              className="relative"
              onMouseEnter={() => openDropdown('about')}
              onMouseLeave={closeDropdown}
            >
              <button className="text-gray-300 hover:text-white flex items-center gap-1 py-2 transition-colors duration-200">
                About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-gradient-to-r from-black to-gray-900 border border-gray-700 rounded-lg shadow-xl py-2">
                  <a 
                    href="#about-section"
                    onClick={(e) => { e.preventDefault(); smoothScroll('about-section'); closeDropdown(); }}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 transition-colors"
                  >
                    Our Story
                  </a>
                  <a 
                    href="#our-mission"
                    onClick={(e) => { e.preventDefault(); smoothScroll('our-mission'); closeDropdown(); }}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 transition-colors"
                  >
                    Our Mission
                  </a>
                  <a 
                    href="#portfolio-section"
                    onClick={(e) => { e.preventDefault(); smoothScroll('portfolio-section'); closeDropdown(); }}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 transition-colors"
                  >
                    Our Work
                  </a>
                  <a 
                    href="#testimonials-section"
                    onClick={(e) => { e.preventDefault(); smoothScroll('testimonials-section'); closeDropdown(); }}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 transition-colors"
                  >
                    Client Success
                  </a>
                </div>
              )}
            </div>

            {/* Our Work */}
            <Link 
              href="#portfolio-section"
              onClick={(e) => { e.preventDefault(); smoothScroll('portfolio-section'); }}
              className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
            >
              Our Work
            </Link>

          </div>

          {/* Contact Us */}
          <div className="hidden md:block">
            <a 
              href="#contact-section"
              onClick={(e) => { e.preventDefault(); smoothScroll('contact-section'); }}
              className="bg-gradient-to-r from-white to-gray-300 text-black px-6 py-2 rounded-lg font-medium hover:from-gray-200 hover:to-white transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navigation;
