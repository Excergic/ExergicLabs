// components/AboutSection.tsx - Complete with animated progress bars
'use client';
import { useState, useEffect } from 'react';

const AboutSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skills = [
    { name: 'Artificial Intelligence', value: 90, color: 'cyan' },
    { name: 'Client Service', value: 71, color: 'cyan' },
    { name: 'Quality', value: 85, color: 'cyan' }
  ];

  return (
    <section 
      id="about-section"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-10"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-cyan-400 text-sm font-medium mb-4">
            <span>HOME</span>
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <span className="text-white">ABOUT US</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Artificial Intelligence{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* About Label */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-4 h-4 bg-cyan-400 rounded-sm"></div>
              <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">ABOUT US</span>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                Transform Your Business{' '}
                <br />
                With{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  AI Technology
                </span>
              </h3>
              
              <p className="text-gray-400 leading-relaxed text-lg">
                ExergicLabs specializes in cutting-edge AI solutions that revolutionize FinTech, 
                Healthcare, and enterprise applications. Our expert team delivers custom AI agents, 
                RAG systems, model fine-tuning, and seamless API deployments that drive exceptional 
                business value and competitive advantage.
              </p>
            </div>

            {/* Animated Progress Bars */}
            <div className="space-y-6 mt-10">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium text-lg">{skill.name}</span>
                    <span className="text-cyan-400 font-bold text-lg">{skill.value}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-2000 ease-out`}
                      style={{ 
                        width: mounted ? `${skill.value}%` : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* More About Button */}
            <div className="mt-10">
              <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold px-8 py-4 rounded-full hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                More About
              </button>
            </div>
          </div>

          {/* Right Content - AI Robot Image */}
          <div className="relative">
            {/* Glowing Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
            
            {/* Main Image Container */}
            <div className="relative z-10 bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-2xl p-4 backdrop-blur-sm border border-gray-600/30">
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-600/40 to-gray-700/40 rounded-xl overflow-hidden">
                {/* Add your AI robot image here */}
                <img 
                  src="/about-robot.jpg" 
                  alt="AI Robot representing ExergicLabs innovation" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback placeholder if image fails to load
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-blue-900/40 to-cyan-900/40 items-center justify-center hidden">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-4xl text-white">🤖</span>
                    </div>
                    <p className="text-gray-300 text-sm">AI Robot Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional Glow Effects */}
            <div className="absolute top-1/4 right-0 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/4 left-0 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
