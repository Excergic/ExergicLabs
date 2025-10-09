// components/WeBuildMVP.tsx
'use client';

const WeBuildMVP = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #2bfbef 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      {/* Gradient Glow Effect - Top Center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-20">
        <div className="absolute inset-0 bg-gradient-radial from-[#2bfbef] via-cyan-400/30 to-transparent blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="bg-white/10 backdrop-blur-sm text-gray-300 text-sm font-medium px-6 py-3 rounded-full border border-gray-700/50">
            3x Faster Execution
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-200 text-center mb-6 leading-tight max-w-5xl mx-auto">
          We build every kind of MVP fast
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Your product, Your way.
        </p>

        {/* Service Pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-5xl mx-auto mb-32">
          
          {/* Website Development */}
          <div className="group bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-sm border border-purple-500/30 rounded-full px-8 py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
            <span className="text-gray-200 font-medium text-lg">Web App Development</span>
          </div>

          {/* AI Agents */}
          <div className="group bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 backdrop-blur-sm border border-cyan-500/30 rounded-full px-8 py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            <span className="text-gray-200 font-medium text-lg">AI Agents</span>
          </div>

          {/* AI SaaS */}
          <div className="group bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 backdrop-blur-sm border border-emerald-500/30 rounded-full px-8 py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">
            <span className="text-gray-200 font-medium text-lg">AI SaaS</span>
          </div>

          {/* Chatbot Integration */}
          <div className="group bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm border border-blue-500/30 rounded-full px-8 py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
            <span className="text-gray-200 font-medium text-lg">RAG ChatBot Integration</span>
          </div>

        </div>

        {/* Comparison Section - 3x Faster */}
        <div className="max-w-5xl mx-auto">
          
          {/* Section Heading */}
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-200 text-center mb-6">
            3x Faster Than Traditional Teams
          </h3>

          {/* Subtitle */}
          <p className="text-lg text-gray-400 text-center mb-16 max-w-4xl mx-auto">
            We consistently ship launch-ready MVPs in just 25 days. Traditional teams often take 3 to 6 months to reach the same point
          </p>

          {/* Comparison Bars */}
          <div className="space-y-8 mb-8">
            
            {/* ExergicLabs Bar */}
            <div className="flex items-center gap-6">
              <div className="flex-1 flex items-center gap-4">
                <div className="bg-gradient-to-r from-emerald-400 to-green-500 rounded-full px-6 py-4 shadow-lg shadow-emerald-500/30 flex items-center gap-3 w-full max-w-md">
                  <span className="text-gray-900 font-semibold text-lg whitespace-nowrap">with ExergicLabs</span>
                  <span className="text-2xl">⏱</span>
                </div>
              </div>
              <span className="text-4xl font-bold text-emerald-400 min-w-[120px] text-right">25 Days</span>
            </div>

            {/* Others Bar */}
            <div className="flex items-center gap-6">
              <div className="flex-1 flex items-center gap-4">
                <div className="bg-gradient-to-r from-red-400 to-pink-500 rounded-full px-6 py-4 shadow-lg shadow-red-500/30 w-full">
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
