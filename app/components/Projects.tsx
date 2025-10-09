// components/Projects.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Mandate Wizard',
      icon: '🧠',
      description: 'Mandate Wizard is an AI-powered platform that helps film and TV studios streamline the way they manage, extract, and query creative mandates. It automates the ingestion of mandate documents and emails, structures key information like genres.',
      image: '/projects/mandate-wizard.jpg',
    },
    {
      id: 2,
      name: 'Norric',
      icon: '⚖️',
      description: 'AI Assistant for Real Estate Developers. An AI-driven assistant built specifically for developers to navigate complex zoning laws, site feasibility, and mandate compliance—tailored for high-stakes real estate decision-making.',
      image: '/projects/norric.jpg',
    },
    {
      id: 3,
      name: 'CredBoost',
      icon: '💳',
      description: 'Smart credit management platform powered by AI to help users optimize their credit scores, track spending patterns, and receive personalized financial recommendations for better financial health.',
      image: '/projects/credboost.jpg',
    },
    {
      id: 4,
      name: 'HealthAI',
      icon: '🏥',
      description: 'AI-powered healthcare assistant providing instant medical information and guidance. Built with RAG technology for accurate, up-to-date medical knowledge retrieval and patient support.',
      image: '/projects/health-ai.jpg',
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black" id="showcase">
      
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #2bfbef 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      {/* Section Header */}
      <div className="container mx-auto px-6 lg:px-8 pt-20 pb-12 relative z-10">
        <div className="text-center">
          <span className="bg-white/10 backdrop-blur-sm text-gray-300 text-sm font-medium px-6 py-3 rounded-full border border-gray-700/50 inline-block mb-8">
            Our Projects
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-200 mb-6 leading-tight">
            Built with AI, Shipped Fast
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Real projects solving real problems with cutting-edge AI technology
          </p>
        </div>
      </div>

      {/* Scrollable Projects Sections */}
      <div className="relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-screen flex items-center py-20"
          >
            <div className="container mx-auto px-6 lg:px-8">
              
              <div className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}>
                
                {/* Product Screenshot */}
                <motion.div 
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden shadow-2xl p-8">
                    
                    {/* Product Preview - Replace with actual image */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center relative overflow-hidden">
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2bfbef]/10 to-cyan-600/10"></div>
                      
                      {/* Icon Display */}
                      <div className="relative z-10 text-center space-y-6">
                        <div className="text-8xl animate-float">
                          {project.icon}
                        </div>
                        <div className="text-3xl font-bold text-white">
                          {project.name}
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute top-4 left-4 w-24 h-24 bg-[#2bfbef]/20 rounded-full blur-2xl"></div>
                      <div className="absolute bottom-4 right-4 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl"></div>
                    </div>

                    {/* You can replace above with actual image: */}
                    {/* <Image 
                      src={project.image}
                      alt={project.name}
                      width={800}
                      height={600}
                      className="rounded-2xl w-full h-auto"
                    /> */}
                  </div>
                </motion.div>

                {/* Product Info */}
                <motion.div 
                  className="w-full lg:w-1/2 space-y-6"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#2bfbef]/20 to-cyan-600/20 rounded-3xl flex items-center justify-center border border-[#2bfbef]/30 shadow-lg shadow-[#2bfbef]/20">
                      <span className="text-4xl">{project.icon}</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-semibold text-gray-200">
                      {project.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                </motion.div>

              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Spacing */}
      <div className="h-20"></div>

      {/* Floating Animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px);
          }
          50% { 
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;
