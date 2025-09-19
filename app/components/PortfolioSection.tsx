// components/PortfolioSection.tsx
'use client';
import React, { useState } from 'react';

const projects = [
  // AI/ML Projects
  {
    id: 1,
    title: 'ML System (Vehicle Insurance Churn)',
    description: 'Advanced Machine Learning system for vehicle insurance churn prediction. Fully functional codebase with 89% accuracy, optimized for performance, but currently without cloud deployment due to AWS credit limits.',
    status: 'Code Only',
    category: 'AI/ML',
    techStack: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Feature Engineering'],
    gradient: 'from-purple-600/30 to-indigo-600/30',
    icon: '🚗',
    demoUrl: null,
    githubUrl: '#',
    mediumUrl: '#',
  },
  {
    id: 2,
    title: 'Newton LLM (RAG System)',
    description: 'A fine-tuned Retrieval-Augmented Generation LLM for scientific reasoning. Backend via FastAPI and user interface through Streamlit for seamless domain-specific querying.',
    status: 'Deployed',
    category: 'AI/ML',
    techStack: ['FastAPI', 'Python', 'HuggingFace', 'LangChain', 'Streamlit'],
    gradient: 'from-green-600/30 to-emerald-600/30',
    icon: '🧠',
    demoUrl: 'https://your-newton-llm-demo.streamlit.app/',
    githubUrl: '#',
    mediumUrl: '#',
  },
  {
    id: 3,
    title: 'Alexa for WhatsApp (Ongoing)',
    description: 'Multimodal AI assistant combining voice, image generation, and text interaction inspired by personal AI assistants for intelligent conversational experiences on WhatsApp.',
    status: 'In Development',
    category: 'AI/ML',
    techStack: ['Voice Recognition', 'Image Generation', 'NLP', 'WhatsApp API'],
    gradient: 'from-yellow-600/30 to-orange-600/30',
    icon: '🤖',
    demoUrl: null,
    githubUrl: '#',
    mediumUrl: '#',
  },
  // Foundational Projects
  {
    id: 4,
    title: 'Neural Network from Scratch',
    description: 'Complete implementation of neural network architecture built from scratch using only NumPy. Includes forward propagation, backpropagation, and various activation functions for deep understanding of ML fundamentals.',
    status: 'Complete',
    category: 'Foundational',
    techStack: ['Python', 'NumPy', 'Matplotlib', 'Mathematics', 'Deep Learning'],
    gradient: 'from-blue-600/30 to-cyan-600/30',
    icon: '🧮',
    demoUrl: null,
    githubUrl: '#',
    mediumUrl: '#',
  },
  {
    id: 5,
    title: 'Custom CNN Implementation',
    description: 'Hand-coded Convolutional Neural Network implementation showcasing deep understanding of computer vision fundamentals, including convolution operations, pooling layers, and gradient descent optimization.',
    status: 'Complete',
    category: 'Foundational',
    techStack: ['Python', 'NumPy', 'Computer Vision', 'CNN', 'Image Processing'],
    gradient: 'from-indigo-600/30 to-purple-600/30',
    icon: '👁️',
    demoUrl: null,
    githubUrl: '#',
    mediumUrl: '#',
  },
  // Full-Stack Projects
  {
    id: 6,
    title: 'Decentralized Exchange (DEX)',
    description: 'Full-stack decentralized cryptocurrency exchange platform built on Ethereum blockchain. Features automated market making, liquidity pools, and secure smart contract architecture.',
    status: 'Deployed',
    category: 'Full-Stack',
    techStack: ['Solidity', 'React', 'Web3.js', 'Ethereum', 'Smart Contracts', 'DeFi'],
    gradient: 'from-orange-600/30 to-red-600/30',
    icon: '🪙',
    demoUrl: 'https://your-dex-demo.vercel.app/',
    githubUrl: '#',
    mediumUrl: '#',
  },
  {
    id: 7,
    title: 'Blockchain Wiki Frontend',
    description: 'Interactive web application providing comprehensive blockchain education and documentation. Features modern UI/UX, responsive design, and educational content management system.',
    status: 'Deployed',
    category: 'Full-Stack',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'API Integration'],
    gradient: 'from-teal-600/30 to-green-600/30',
    icon: '📚',
    demoUrl: 'https://your-blockchain-wiki.vercel.app/',
    githubUrl: '#',
    mediumUrl: '#',
  },
  {
    id: 8,
    title: 'Crypto Portfolio Tracker',
    description: 'Full-stack application for tracking cryptocurrency portfolios with real-time price updates, portfolio analytics, and advanced charting features. Built with modern web technologies.',
    status: 'Deployed',
    category: 'Full-Stack',
    techStack: ['Node.js', 'Express', 'MongoDB', 'React', 'Chart.js', 'CoinGecko API'],
    gradient: 'from-pink-600/30 to-rose-600/30',
    icon: '📈',
    demoUrl: 'https://your-crypto-tracker.vercel.app/',
    githubUrl: '#',
    mediumUrl: '#',
  },
];

const PortfolioSection = () => {
  const [showDemoPopup, setShowDemoPopup] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI/ML', 'Foundational', 'Full-Stack'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleDemoClick = (project: any) => {
    if (project.demoUrl === null || project.demoUrl === '' || project.demoUrl === undefined || !project.demoUrl) {
      setShowDemoPopup(true);
    } else {
      window.open(project.demoUrl, '_blank');
    }
  };

  return (
    <section
      id="portfolio-section"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-10"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-cyan-400 text-sm font-medium mb-4">
            <span>HOME</span>
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <span className="text-white">PORTFOLIO</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Showcasing AI/ML systems, foundational implementations, and full-stack applications across multiple domains
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 bg-gray-800/50 p-2 rounded-full border border-gray-700/50">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/80 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`}></div>
              
              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col">
                {/* Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-5xl">{project.icon}</div>
                  <span className="px-2 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-full border border-gray-600/50">
                    {project.category}
                  </span>
                </div>
                
                {/* Title & Status */}
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Deployed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    project.status === 'In Development' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                    project.status === 'Complete' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-4 flex-grow text-sm">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2 text-sm">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-full border border-gray-600/50 group-hover:border-cyan-500/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-full border border-gray-600/50">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-auto">
                  <button
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="flex items-center gap-1 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg font-medium transition-colors text-xs flex-1"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Code
                  </button>
                  
                  <button
                    onClick={() => handleDemoClick(project)}
                    className="flex items-center gap-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-3 py-2 rounded-lg font-medium transition-colors text-xs flex-1"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a2.5 2.5 0 002.5-2.5V6a2.5 2.5 0 00-2.5-2.5H9a2.5 2.5 0 00-2.5 2.5v1.5A2.5 2.5 0 009 10z" />
                    </svg>
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4">
            <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold px-8 py-4 rounded-full hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
              View All Projects
            </button>
            <button className="border border-cyan-400/50 text-cyan-400 font-semibold px-8 py-4 rounded-full hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300">
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>

      {/* Demo Not Available Popup */}
      {showDemoPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setShowDemoPopup(false)}
          ></div>
          
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-700/50 shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="text-center">
              <div className="text-6xl mb-4">😔</div>
              <h3 className="text-2xl font-bold text-white mb-4">Demo Not Available</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Sorry, demo is not available because of not enough credits.
              </p>
              <button
                onClick={() => setShowDemoPopup(false)}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
