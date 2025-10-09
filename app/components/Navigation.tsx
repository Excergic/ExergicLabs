// components/Navigation.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {

  // Smooth scroll handler
  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-b border-gray-800"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#2bfbef] to-cyan-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className="text-white font-bold text-2xl">ExergicLabs</span>
          </Link>

          {/* Desktop Nav - Centered Links */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <a 
              href="#home"
              onClick={(e) => smoothScroll(e, 'home')}
              className="text-[#2bfbef] font-medium hover:text-[#2bfbef] transition-colors duration-200"
            >
              Home
            </a>
            
            {/*<a 
              href="#pricing"
              onClick={(e) => smoothScroll(e, 'pricing')}
              className="text-gray-300 font-medium hover:text-[#2bfbef] transition-colors duration-200"
            >
              Pricing
            </a>*/}
            
            <a 
              href="#showcase"
              onClick={(e) => smoothScroll(e, 'showcase')}
              className="text-gray-300 font-medium hover:text-[#2bfbef] transition-colors duration-200"
            >
              Projects
            </a>
             
          </div>

          {/* Book a Call Button */}
          <div className="hidden md:block">
            <a 
              href="#contact"
              onClick={(e) => smoothScroll(e, 'contact')}
              className="bg-gradient-to-r from-[#2bfbef] to-cyan-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-[#24d9cf] transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-[#2bfbef]/50 hover:scale-105"
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
