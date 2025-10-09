// components/OurProcess.tsx
'use client';
import Image from 'next/image';

const OurProcess = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #2bfbef 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="bg-gray-800/50 text-gray-300 text-sm font-medium px-6 py-3 rounded-full border border-gray-700 inline-block mb-8">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-200 mb-6 leading-tight">
            From Idea to Revenue in 25 days
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Our proven 4-step process transforms your vision into a market-ready MVP that generates revenue and attracts investors.
          </p>
        </div>

        {/* Process Grid */}
        <div className="max-w-7xl mx-auto">
          
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-8 lg:mb-16">
            
            {/* Step 1: MVP Roadmap */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 shadow-2xl hover:scale-[1.02] transition-transform duration-300 h-full">
              
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2bfbef] to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-[#2bfbef]/30">
                  <span className="text-white font-bold text-2xl">E</span>
                </div>
                <button className="text-gray-400 hover:text-gray-300 text-xl">⋯</button>
              </div>

              <h3 className="text-2xl font-semibold text-gray-200 mb-6">MVP Roadmap</h3>
              
              <div className="flex items-center justify-between text-base mb-3">
                <span className="text-gray-400">Week 1</span>
                <span className="text-gray-400">Strategy</span>
              </div>
              
              <div className="w-full bg-gray-700/40 rounded-full h-2.5 mb-8">
                <div className="bg-gradient-to-r from-[#2bfbef] to-cyan-400 h-2.5 rounded-full shadow-lg shadow-[#2bfbef]/50" style={{width: '35%'}}></div>
              </div>

              <h4 className="text-3xl font-semibold text-gray-200 mb-4">Step 1: MVP Roadmap</h4>
              <p className="text-gray-400 leading-relaxed">
                Client consultation, idea validation, and strategic planning to define the fastest path to version 1
              </p>
            </div>

            {/* Step 2: Strategy */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 shadow-2xl hover:scale-[1.02] transition-transform duration-300 h-full">
              
              {/* Strategy Icon */}
              <div className="flex items-center justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-3xl flex items-center justify-center border border-purple-500/30">
                  <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-200 mb-6 text-center">Strategy Planning</h3>

              <h4 className="text-3xl font-semibold text-gray-200 mb-4">Step 2: Strategy</h4>
              <p className="text-gray-400 leading-relaxed">
                We map out features, prioritize what to build first, and align the roadmap around fast validation and clear outcomes.
              </p>
            </div>

          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            
            {/* Step 3: Code - With AI Tools Image */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 shadow-2xl hover:scale-[1.02] transition-transform duration-300 h-full lg:order-2">
              
              {/* AI Tools Image */}
              <div className="mb-8 rounded-2xl overflow-hidden">
                <Image 
                  src="/Screenshot 2025-10-09 at 10.10.38 AM.png"
                  alt="Powered by Latest AI Tools - Cursor, GitHub Copilot, ZED, Windsurf, Bolt.new, Replit, v0"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>

              <h3 className="text-2xl font-semibold text-gray-200 mb-6 text-center">AI-Powered Development</h3>

              <h4 className="text-3xl font-semibold text-gray-200 mb-4">Step 3: Code</h4>
              <p className="text-gray-400 leading-relaxed">
                We use industry-standard AI tools like Lovable and Cursor to write clean, scalable code faster.
              </p>
            </div>

            {/* Step 4: Launch */}
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border-2 border-dashed border-gray-700/50 rounded-3xl p-8 shadow-2xl hover:scale-[1.02] transition-transform duration-300 h-full lg:order-1">
              
              {/* Launch Rocket Animation */}
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center border border-orange-500/30 animate-pulse">
                    <span className="text-6xl">🚀</span>
                  </div>
                  {/* Sparkles */}
                  <div className="absolute -top-2 -right-2 text-2xl animate-bounce">✨</div>
                  <div className="absolute -bottom-2 -left-2 text-2xl animate-bounce" style={{animationDelay: '0.5s'}}>⭐</div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-200 mb-6 text-center">Ready to Launch</h3>

              <h4 className="text-3xl font-semibold text-gray-200 mb-4">Step 4: Launch</h4>
              <p className="text-gray-400 leading-relaxed">
                Once launched, your product is ready to test with users, pitch to investors, or go to market with support from us along the way
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default OurProcess;
