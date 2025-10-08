// components/WhyExergicLabs.tsx
'use client';

const WhyExergicLabs = () => {
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
        
        {/* Section Tag */}
        <div className="mb-8">
          <span className="text-[#2bfbef] text-sm font-medium uppercase tracking-wider">
            Why ExergicLabs?
          </span>
        </div>

        {/* Main Heading - Reduced brightness and boldness */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-200 mb-6 max-w-5xl leading-tight">
          Too many founders waste months just trying to get their MVP off the ground.
        </h2>

        {/* Highlighted Text - Softer colors */}
        <div className="mb-16">
          <p className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-5xl">
            <span className="bg-gradient-to-r from-[#2bfbef]/80 to-cyan-400/80 text-gray-900 px-4 py-2 inline-block">
              We move faster, build leaner, and deliver
            </span>
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-200 mt-4 max-w-5xl leading-tight">
            a working product in under a month so you can start validating, not waiting.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 - Speed to Market */}
          <div className="group bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400/80 to-purple-600/80 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Speed to Market</h3>
            <p className="text-gray-500 leading-relaxed font-normal">
              Launch your MVP in weeks, not months. Our streamlined build process prioritizes momentum without cutting corners.
            </p>
          </div>

          {/* Card 2 - Project Management */}
          <div className="group bg-gradient-to-br from-orange-900/20 to-orange-800/10 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400/80 to-orange-600/80 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Project Management</h3>
            <p className="text-gray-500 leading-relaxed font-normal">
              No chasing. No confusion. One team, one timeline, with updates, clarity, and momentum from start to ship.
            </p>
          </div>

          {/* Card 3 - Fixed Pricing */}
          <div className="group bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-[#2bfbef]/80 to-cyan-600/80 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#2bfbef]/30">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Fixed Pricing</h3>
            <p className="text-gray-500 leading-relaxed font-normal">
              No hourly surprises. Transparent pricing from day one, built for predictability and founder peace of mind.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyExergicLabs;
