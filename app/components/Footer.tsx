// components/Footer.tsx
'use client';

import Link from 'next/link';

const Footer = () => {

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
    <footer className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand & Description */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#2bfbef] to-cyan-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <h2 className="text-2xl font-bold text-white">ExergicLabs</h2>
          </div>
          <p className="text-gray-400 max-w-xs mb-6">
          Turn AI into Revenue-Ready MVP in 25 days
          </p>
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} ExergicLabs. All rights reserved.</p>
        </div>

        {/* Navigation */}
        <nav>
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a 
                href="#home" 
                onClick={(e) => smoothScroll(e, 'home')}
                className="hover:text-[#2bfbef] transition-colors duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </a>
            </li>
            <li>
              <a 
                href="#showcase" 
                onClick={(e) => smoothScroll(e, 'showcase')}
                className="hover:text-[#2bfbef] transition-colors duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => smoothScroll(e, 'contact')}
                className="hover:text-[#2bfbef] transition-colors duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Book a Call
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact Info + Social */}
        <div>
          <h3 className="font-semibold text-white mb-4">Get in Touch</h3>
          <p className="mb-6">
            Email:{' '}
            <a 
              href="mailto:excergiclabs@gmail.com" 
              className="hover:text-[#2bfbef] transition-colors duration-200"
            >
              excergiclabs@gmail.com
            </a>
          </p>
          
          <div className="flex space-x-4">
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/dhaivat-jambudia/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#2bfbef] hover:text-black transition-all duration-300 hover:scale-110" 
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.23 0H1.77C.79 0 0 .774 0 1.729V22.27C0 23.226.79 24 1.77 24H22.23c.98 0 1.77-.774 1.77-1.729V1.73C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.475a2.07 2.07 0 1 1 0-4.139 2.07 2.07 0 0 1 0 4.139zM20.452 20.452h-3.556v-5.752c0-1.37-.027-3.134-1.909-3.134-1.91 0-2.201 1.491-2.201 3.031v5.855H9.44V9h3.415v1.561h.047c.476-.901 1.637-1.852 3.367-1.852 3.601 0 4.267 2.368 4.267 5.45v6.293z"/>
              </svg>
            </a>
            
            {/* Twitter / X */}
            <a 
              href="https://x.com/dhaivat00" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#2bfbef] hover:text-black transition-all duration-300 hover:scale-110" 
              aria-label="X Twitter"
            >
              <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            {/* GitHub */}
            <a 
              href="https://github.com/Excergic" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#2bfbef] hover:text-black transition-all duration-300 hover:scale-110" 
              aria-label="GitHub"
            >
              <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.388-1.334-1.757-1.334-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.808 1.305 3.492.997.107-.775.42-1.305.763-1.605-2.665-.3-5.466-1.33-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.304-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.46 11.46 0 0 1 3-.405c1.018.005 2.042.137 3 .405 2.28-1.552 3.288-1.23 3.288-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.803 5.624-5.475 5.92.43.37.815 1.096.815 2.21 0 1.595-.015 2.882-.015 3.274 0 .32.216.697.825.578C20.565 21.795 24 17.295 24 12c0-6.63-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
