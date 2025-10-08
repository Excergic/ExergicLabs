// components/Navigation.tsx - Dark theme with cyan hover effects
'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
  const navRef = useRef<HTMLDivElement>(null);

  // Smooth scroll handler
  const smoothScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-b border-gray-800"
      ref={navRef}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/logo.png"
              alt="ExergicLabs logo"  
              width={40}
              height={40}
              className='h-10 w-10 rounded-full object-cover'
              priority
            />
            <span className="text-white font-bold text-2xl">ExergicLabs</span>
          </Link>

          {/* Desktop Nav - Centered Links */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <a 
              href="#home"
              onClick={(e) => { e.preventDefault(); smoothScroll('home'); }}
              className="text-grey-300 font-medium hover:text-[#2bfbef] transition-colors duration-200"
            >
              Home
            </a>
            
            <a 
              href="#pricing"
              onClick={(e) => { e.preventDefault(); smoothScroll('pricing'); }}
              className="text-gray-300 font-medium hover:text-[#2bfbef] transition-colors duration-200"
            >
              Pricing
            </a>
            
            <a 
              href="#blog"
              onClick={(e) => { e.preventDefault(); smoothScroll('blog'); }}
              className="text-gray-300 font-medium hover:text-[#2bfbef] transition-colors duration-200"
            >
              Process
            </a>
            
            <a 
              href="#showcase"
              onClick={(e) => { e.preventDefault(); smoothScroll('showcase'); }}
              className="text-gray-300 font-medium hover:text-[#2bfbef] transition-colors duration-200"
            >
              Showcase
            </a>
          </div>

          {/* Book a Call Button */}
          <div className="hidden md:block">
            <a 
              href="#contact-section"
              onClick={(e) => { e.preventDefault(); smoothScroll('contact-section'); }}
              className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2bcdfb] transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-[#2bcdfb]/20 hover:scale-90"
            >
              Book a call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-[#2bfbef] transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navigation;
