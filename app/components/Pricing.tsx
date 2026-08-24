// components/Pricing.tsx
'use client';

const Pricing = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden" id="pricing">
      
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #2bfbef 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Badge */}
        <div className="flex justify-center mb-8">
          <span className="bg-white/10 backdrop-blur-sm text-gray-300 text-sm font-medium px-6 py-3 rounded-full border border-gray-700/50">
            Pricing
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-200 text-center mb-6 leading-tight">
          Transparent Pricing, No Hidden Costs
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Choose the perfect plan for your startup journey. All plans include unlimited revisions and dedicated support.
        </p>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
          
          {/* Card 1: RAG Chatbot Integration */}
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 h-full flex flex-col">
            
            <h3 className="text-2xl font-semibold text-gray-200 mb-6">RAG Chatbot Integration</h3>
            
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-gray-400 text-xl">$</span>
                <span className="text-5xl font-bold text-white">1,200</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-[#2bfbef] to-cyan-600 text-black font-semibold py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#2bfbef]/50 mb-8">
              Get Started
            </button>

            <div className="space-y-4 flex-1">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#2bfbef] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-400">Full stack RAG pipeline</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#2bfbef] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-400">Backend deployment</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#2bfbef] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-400">Vector database integration</span>
              </div>
            </div>
          </div>

          {/* Card 2: MVP Building - Most Popular */}
          <div className="relative bg-gradient-to-br from-[#2bfbef]/20 to-cyan-600/20 backdrop-blur-sm border-2 border-[#2bfbef] rounded-3xl p-8 hover:scale-[1.05] transition-all duration-300 shadow-2xl shadow-[#2bfbef]/30 h-full flex flex-col">
            
            {/* Most Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-white text-gray-900 text-sm font-semibold px-6 py-2 rounded-full shadow-lg">
                Most Popular
              </span>
            </div>

            {/* Logo Badge */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center transform rotate-12">
              <span className="text-[#2bfbef] font-bold text-2xl">E</span>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-6 mt-4">MVP Building</h3>
            
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-gray-300 text-xl">$</span>
                <span className="text-5xl font-bold text-white">2,500</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-white to-gray-100 text-black font-semibold py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg mb-8">
              Start Your MVP
            </button>

            <div className="space-y-4 flex-1">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#2bfbef] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-300">Complete MVP development in 25 days</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#2bfbef] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-300">Full Stack Development</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#2bfbef] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-300">Deployment and launch support</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#2bfbef] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-300">PRD-based revisions included</span>
              </div>
            </div>
          </div>

          {/* Card 3: AI Agents */}
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 h-full flex flex-col">
            
            <h3 className="text-2xl font-semibold text-gray-200 mb-6">AI Agents</h3>
            
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-gray-400 text-xl">$</span>
                <span className="text-5xl font-bold text-white">1,500</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-[#2bfbef] to-cyan-600 text-black font-semibold py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#2bfbef]/50 mb-8">
              Get Started
            </button>

            <div className="space-y-4 flex-1">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#2bfbef] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-400">Every kind of AI agent</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#2bfbef] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-400">Custom agent workflows</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#2bfbef] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-400">Integration support</span>
              </div>
            </div>
          </div>

        </div>

        {/* Additional Pricing Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mt-8">
          
          {/* Card 4: AI SaaS */}
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300">
            
            <h3 className="text-2xl font-semibold text-gray-200 mb-6">AI SaaS</h3>
            
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-gray-400 text-xl">$</span>
                <span className="text-5xl font-bold text-white">2,500</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-[#2bfbef] to-cyan-600 text-black font-semibold py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#2bfbef]/50 mb-8">
              Get Started
            </button>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#2bfbef] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-400">Business requirements analysis</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#2bfbef] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-400">AI Models integration</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#2bfbef] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-400">Full deployment</span>
              </div>
            </div>
          </div>

          {/* Card 5: Custom Plan */}
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border-2 border-dashed border-gray-700/50 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300">
            
            <h3 className="text-2xl font-semibold text-gray-200 mb-6">Custom Solutions</h3>
            
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-gray-400 text-sm">Starting at</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-gray-400 text-xl">$</span>
                <span className="text-5xl font-bold text-white">5,000</span>
                <span className="text-gray-400 text-lg">+</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-[#2bfbef] to-cyan-600 text-black font-semibold py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#2bfbef]/50 mb-8">
              Contact Us
            </button>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#2bfbef] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-400">Tailored to your specific needs</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#2bfbef] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-400">Enterprise-grade solutions</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#2bfbef] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-400">Dedicated support team</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Pricing;
