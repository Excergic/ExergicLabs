// components/Footer.tsx
'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-400 py-12">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Exergic Labs</h2>
          <p className="text-gray-400 max-w-xs">
            Empowering businesses with production-ready AI, machine learning, and generative AI solutions.
          </p>
          <p className="text-sm mt-6">&copy; {new Date().getFullYear()} Exergic Labs. All rights reserved.</p>
        </div>

        {/* Navigation */}
        <nav>
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#about-section" className="hover:text-cyan-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#core-ml" className="hover:text-cyan-400 transition">
                Core ML
              </Link>
            </li>
            <li>
              <Link href="#genai" className="hover:text-cyan-400 transition">
                Generative AI
              </Link>
            </li>
            <li>
              <Link href="#product-building" className="hover:text-cyan-400 transition">
                Product Building
              </Link>
            </li>
            <li>
              <Link href="#ai-training-coaching" className="hover:text-cyan-400 transition">
                AI Education & Consulting
              </Link>
            </li>
            <li>
              <Link href="#contact-section" className="hover:text-cyan-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Updated Contact Info + Social */}
        <div>
        <h3 className="font-semibold text-white mb-4">Contact</h3>
        <p>Email: <a href="mailto:excergiclabs@gmail.com" className="hover:text-cyan-400 transition">excergiclabs@gmail.com</a></p>
        <div className="flex mt-6 space-x-4">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/dhaivat-jambudia/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400" aria-label="LinkedIn">
            <svg className="w-6 h-6 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>LinkedIn</title>
                <path d="M22.23 0H1.77C.79 0 0 .774 0 1.729V22.27C0 23.226.79 24 1.77 24H22.23c.98 0 1.77-.774 1.77-1.729V1.73C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.475a2.07 2.07 0 1 1 0-4.139 2.07 2.07 0 0 1 0 4.139zM20.452 20.452h-3.556v-5.752c0-1.37-.027-3.134-1.909-3.134-1.91 0-2.201 1.491-2.201 3.031v5.855H9.44V9h3.415v1.561h.047c.476-.901 1.637-1.852 3.367-1.852 3.601 0 4.267 2.368 4.267 5.45v6.293z"/>
            </svg>
            </a>
            {/* Twitter / X Logo */}
            <a href="https://x.com/dhaivat00" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400" aria-label="X Twitter">
            <svg className="w-6 h-6 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>X Twitter</title>
                <path d="M23.954 4.569c-.885.394-1.83.654-2.825.775 1.014-.607 1.794-1.569 2.163-2.723-.949.561-2.005.97-3.127 1.195-.896-.957-2.173-1.555-3.591-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.728 8.087 4.1 6.128 1.671 3.149c-.427.722-.666 1.561-.666 2.475 0 1.708.869 3.215 2.188 4.099-.807-.026-1.566-.25-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.415-1.68 1.316-3.808 2.1-6.102 2.1-.397 0-.79-.023-1.17-.067 2.179 1.398 4.768 2.212 7.548 2.212 9.056 0 14-7.506 14-14 0-.209 0-.42-.015-.63.965-.695 1.8-1.562 2.46-2.548l-.047-.02z"/>
            </svg>
            </a>
            {/* GitHub */}
            <a href="https://github.com/Excergic" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400" aria-label="GitHub">
            <svg className="w-6 h-6 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>GitHub</title>
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
