// components/AboutSection.tsx
'use client';
import { useState, useEffect } from 'react';

const AboutSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skills = [
    { name: 'AI/ML Development', value: 95, color: 'cyan' },
    { name: 'Production Systems', value: 90, color: 'cyan' },
    { name: 'Client Satisfaction', value: 98, color: 'cyan' }
  ];

  const achievements = [
    { number: '50+', label: 'AI Projects Delivered', icon: '🚀' },
    { number: '3+', label: 'Years Experience', icon: '⭐' },
    { number: '100%', label: 'Client Success Rate', icon: '🎯' },
    { number: '24/7', label: 'Support Available', icon: '🛠️' }
  ];

  const expertise = [
    {
      title: 'Production-Grade AI Systems',
      description: 'Building robust AI systems that don\'t collapse in production environments',
      icon: '⚡',
      technologies: ['FastAPI', 'Docker', 'AWS', 'Monitoring', 'Scalability']
    },
    {
      title: 'Deep Learning Expertise',
      description: 'From neural networks built from scratch to state-of-the-art model implementations',
      icon: '🧠',
      technologies: ['PyTorch', 'TensorFlow', 'Custom Architectures', 'Fine-tuning', 'Optimization']
    },
    {
      title: 'Full-Stack Development',
      description: 'Complete end-to-end application development with modern web technologies',
      icon: '🌐',
      technologies: ['React', 'Next.js', 'Node.js', 'Blockchain', 'Web3', 'TypeScript']
    },
    {
      title: 'AI Education & Training',
      description: 'Teaching core AI concepts and computer science fundamentals to professionals',
      icon: '🎓',
      technologies: ['Workshops', 'Courses', 'Mentoring', 'Documentation', 'Best Practices']
    }
  ];

  return (
    <section 
      id="about-section"
      className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* About Label */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-4 h-4 bg-cyan-400 rounded-sm"></div>
              <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">ABOUT EXERGICLABS</span>
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
              
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  <strong className="text-white">ExergicLabs</strong> is a cutting-edge AI agency specializing in building 
                  <strong className="text-cyan-400"> production-grade AI systems that don't collapse</strong> in real-world environments.
                </p>
                
                <p className="text-gray-400 leading-relaxed">
                  From <strong className="text-white">Voice and Image Models</strong> to advanced <strong className="text-white">RAG systems</strong> and 
                  <strong className="text-white"> multimodal applications</strong>, we deliver AI solutions across FinTech, Healthcare, 
                  and enterprise applications that drive exceptional business value.
                </p>

                <p className="text-gray-400 leading-relaxed">
                  Beyond development, we also <strong className="text-white">educate professionals</strong> on core AI concepts and 
                  computer science fundamentals, bridging the gap between theory and practical implementation.
                </p>
              </div>
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
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-2000 ease-out"
                      style={{ 
                        width: mounted ? `${skill.value}%` : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold px-8 py-4 rounded-full hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="border border-cyan-400/50 text-cyan-400 font-semibold px-8 py-4 rounded-full hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>

          {/* Right Content - Achievements & Stats */}
          <div className="space-y-8">
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 p-6 rounded-2xl border border-gray-600/30 text-center hover:border-cyan-400/50 transition-colors duration-300">
                  <div className="text-4xl mb-3">{achievement.icon}</div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{achievement.number}</div>
                  <div className="text-gray-300 text-sm font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>

            {/* Personal Touch */}
            <div className="bg-gradient-to-br from-gray-700/20 to-gray-800/20 p-8 rounded-2xl border border-gray-600/20">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl text-white">👨‍💻</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Meet the Founder</h4>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    "I believe in building AI systems that work reliably in production, not just in notebooks. 
                    Every project is an opportunity to push the boundaries of what's possible with AI."
                  </p>
                  <div className="text-cyan-400 font-semibold">- ExergicLabs Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            Core{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl text-white">{item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-full border border-gray-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              ExergicLabs?
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl text-white">🛡️</span>
              </div>
              <h4 className="text-xl font-bold text-white">Production Ready</h4>
              <p className="text-gray-400">Our AI systems are built to work reliably in real-world production environments, not just demos.</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h4 className="text-xl font-bold text-white">Cutting Edge Tech</h4>
              <p className="text-gray-400">We stay at the forefront of AI technology, implementing the latest models and techniques.</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h4 className="text-xl font-bold text-white">Results Focused</h4>
              <p className="text-gray-400">Every solution is tailored to deliver measurable business impact and ROI for our clients.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
