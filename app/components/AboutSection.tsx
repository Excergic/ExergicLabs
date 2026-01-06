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
          <span className="text-[#2bfbef] text-lg font-medium tracking-wider">
            Why Choose Our Data & AI Services?
          </span>
        </div>

        {/* Main Heading - Reduced brightness and boldness */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-200 mb-6 max-w-5xl leading-tight">
          Too many businesses struggle with data pipelines that break, models that never deploy, and infrastructure that doesn't scale.
        </h2>

        {/* Highlighted Text - Softer colors */}
        <div className="mb-16">
          <p className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-5xl">
            <span className="bg-gradient-to-r from-[#2bfbef]/80 to-cyan-400/80 text-gray-900 px-4 py-2 inline-block">
              We build robust real-time data pipelines, deploy scalable cloud infrastructure, and deliver
            </span>
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-200 mt-4 max-w-5xl leading-tight">
            production-ready ML systems so you can focus on insights, not infrastructure.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 - Real-Time Data Pipelines */}
          <div className="group bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400/80 to-purple-600/80 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Real-Time Data Pipelines</h3>
            <p className="text-gray-500 leading-relaxed font-normal">
              Build robust, scalable data pipelines that process streaming data in real-time. From ingestion to transformation, we ensure your data flows seamlessly and reliably.
            </p>
          </div>

          {/* Card 2 - Cloud Deployment */}
          <div className="group bg-gradient-to-br from-orange-900/20 to-orange-800/10 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400/80 to-orange-600/80 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Cloud Deployment</h3>
            <p className="text-gray-500 leading-relaxed font-normal">
              Deploy your data infrastructure on cloud platforms with best practices. We handle scalability, security, and cost optimization so your systems run efficiently at scale.
            </p>
          </div>

          {/* Card 3 - MLOps Engineering */}
          <div className="group bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-[#2bfbef]/80 to-cyan-600/80 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#2bfbef]/30">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-200 mb-4">MLOps Engineering</h3>
            <p className="text-gray-500 leading-relaxed font-normal">
              From model training to production deployment, we build end-to-end ML pipelines with monitoring, versioning, and automated workflows that keep your models performing at their best.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyExergicLabs;
