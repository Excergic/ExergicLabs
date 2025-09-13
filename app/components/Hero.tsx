// components/Hero.tsx - Complete version with video
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-black overflow-hidden">
      {/* Background Pattern/Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20"></div>
      
      {/* Main Content Container */}
      <div className="container mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading - Updated for ExergicLabs */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Empowering
              <br />
              <span className="inline-flex items-center gap-4">
                {/* AI Icons */}
                <div className="flex gap-2">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>
                The
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Future With AI
              </span>
            </h1>

            {/* Description - Updated for ExergicLabs services */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Integrating cutting-edge AI solutions into FinTech, Healthcare, 
              and everyday applications. From AI Agents and RAG systems to 
              custom model fine-tuning and seamless API deployments.
            </p>

            {/* CTA Button */}
            <div className="flex items-center gap-6">
              <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold px-8 py-4 rounded-full hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                Explore Our Services
              </button>
              
              {/* Trust Indicator */}
              <div className="text-white">
                <div className="text-4xl font-bold">50+</div>
                <div className="text-gray-400 text-sm">AI Solutions Delivered</div>
              </div>
            </div>
          </div>

          {/* Right Content - AI Robot Girl Video */}
          <div className="relative">
            {/* Glowing Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
            
            {/* Main Video Container */}
            <div className="relative z-10">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-contain rounded-2xl"
                style={{ maxHeight: '800px' }}
              >
                <source src="/robot-girl-greeting.mp4" type="video/mp4" />
                <source src="/robot-girl-greeting.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Additional Glow Effects */}
            <div className="absolute top-1/4 right-0 w-32 h-32 bg-cyan-400/30 rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/4 left-0 w-24 h-24 bg-blue-500/30 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Bottom Services Section - Updated for ExergicLabs */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center gap-8 opacity-60 flex-wrap">
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">₹</span>
              </div>
              <span className="text-sm font-medium">FinTech AI</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-pink-500 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">+</span>
              </div>
              <span className="text-sm font-medium">Healthcare AI</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-indigo-500 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">🤖</span>
              </div>
              <span className="text-sm font-medium">AI Agents</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">⚡</span>
              </div>
              <span className="text-sm font-medium">RAG Systems</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-cyan-500 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">🔧</span>
              </div>
              <span className="text-sm font-medium">Fine-Tuning</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">☁️</span>
              </div>
              <span className="text-sm font-medium">Deployment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
