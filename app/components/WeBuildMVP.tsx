// components/WeBuildMVP.tsx
'use client';

const WeBuildMVP = () => {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0c0c0c 0%, #111111 50%, #0c0c0c 100%)' }}
    >
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #2bfbef 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-10 pointer-events-none" style={{ background: 'radial-gradient(ellipse, #2bfbef 0%, transparent 70%)' }}></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">

        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="bg-white/[0.06] backdrop-blur-sm text-gray-300 text-sm font-medium px-6 py-3 rounded-full border border-white/10">
            3x Faster Execution
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white text-center mb-6 leading-tight max-w-5xl mx-auto">
          We build every kind of MVP fast
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Your product, Your way.
        </p>

        {/* Service Pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-5xl mx-auto mb-32">

          <div className="bg-white/[0.04] backdrop-blur-sm border border-purple-500/25 rounded-full px-8 py-4 hover:scale-105 transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/5">
            <span className="text-white font-medium text-lg">Web App Development</span>
          </div>

          <div className="bg-white/[0.04] backdrop-blur-sm border border-cyan-500/25 rounded-full px-8 py-4 hover:scale-105 transition-all duration-300 hover:border-cyan-500/50 hover:bg-cyan-500/5">
            <span className="text-white font-medium text-lg">AI Agents</span>
          </div>

          <div className="bg-white/[0.04] backdrop-blur-sm border border-emerald-500/25 rounded-full px-8 py-4 hover:scale-105 transition-all duration-300 hover:border-emerald-500/50 hover:bg-emerald-500/5">
            <span className="text-white font-medium text-lg">AI SaaS</span>
          </div>

          <div className="bg-white/[0.04] backdrop-blur-sm border border-blue-500/25 rounded-full px-8 py-4 hover:scale-105 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/5">
            <span className="text-white font-medium text-lg">RAG ChatBot Integration</span>
          </div>

        </div>

        {/* Comparison Section */}
        <div className="max-w-5xl mx-auto">

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-center mb-6">
            3x Faster Than Traditional Teams
          </h3>

          <p className="text-lg text-gray-400 text-center mb-16 max-w-4xl mx-auto">
            We consistently ship launch-ready MVPs in just 25 days. Traditional teams often take 3 to 6 months to reach the same point
          </p>

          <div className="space-y-8 mb-8">

            <div className="flex items-center gap-6">
              <div className="flex-1 flex items-center gap-4">
                <div className="bg-gradient-to-r from-emerald-400 to-green-500 rounded-full px-6 py-4 shadow-lg shadow-emerald-500/20 flex items-center gap-3 w-full max-w-md">
                  <span className="text-gray-900 font-semibold text-lg whitespace-nowrap">with ExergicLabs</span>
                  <span className="text-2xl">⏱</span>
                </div>
              </div>
              <span className="text-4xl font-bold text-emerald-400 min-w-[120px] text-right">25 Days</span>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex-1 flex items-center gap-4">
                <div className="bg-gradient-to-r from-red-400 to-pink-500 rounded-full px-6 py-4 shadow-lg shadow-red-500/20 w-full">
                  <span className="text-white font-semibold text-lg">with others</span>
                </div>
              </div>
              <span className="text-4xl font-bold text-red-400 min-w-[120px] text-right">90-180 Days</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WeBuildMVP;
