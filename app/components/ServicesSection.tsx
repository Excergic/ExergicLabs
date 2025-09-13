// components/ServicesSection.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "AI Agents Development",
      description: "Intelligent autonomous agents that can perform complex tasks, make decisions, and interact with users naturally using advanced LLMs and reasoning frameworks.",
      image: "/services/ai-agents.jpg",
      gradient: "from-blue-500/20 to-cyan-500/20",
      icon: "🤖",
      technologies: ["LangChain", "CrewAI", "AutoGPT", "LangGraph"]
    },
    {
      id: 2,
      title: "FinTech AI Solutions",
      description: "Cutting-edge AI integration for financial services including fraud detection, risk assessment, algorithmic trading, and personalized financial advisory systems.",
      image: "/services/fintech-ai.jpg", 
      gradient: "from-green-500/20 to-emerald-500/20",
      icon: "₹",
      technologies: ["Risk Models", "Fraud Detection", "Trading Bots", "Credit Scoring"]
    },
    {
      id: 3,
      title: "Healthcare AI Systems",
      description: "Revolutionary AI applications for healthcare including medical imaging analysis, patient data insights, diagnostic assistance, and treatment optimization.",
      image: "/services/healthcare-ai.jpg",
      gradient: "from-red-500/20 to-pink-500/20", 
      icon: "⚕️",
      technologies: ["Medical Imaging", "Diagnostics", "Patient Care", "Drug Discovery"]
    },
    {
      id: 4,
      title: "RAG Systems & Vector DBs",
      description: "Retrieval-Augmented Generation systems with advanced vector databases for enterprise knowledge management and intelligent document processing.",
      image: "/services/rag-systems.jpg",
      gradient: "from-purple-500/20 to-violet-500/20",
      icon: "🔍",
      technologies: ["Pinecone", "Qdrant", "ChromaDB", "OpenAI Embeddings"]
    },
    {
      id: 5,
      title: "Custom Model Fine-Tuning",
      description: "Specialized model training and fine-tuning services for domain-specific applications, ensuring optimal performance for your unique business requirements.",
      image: "/services/model-training.jpg",
      gradient: "from-orange-500/20 to-yellow-500/20",
      icon: "🧠",
      technologies: ["PyTorch", "HuggingFace", "LoRA", "PEFT"]
    },
    {
      id: 6,
      title: "AI API Development",
      description: "Robust, scalable API development and deployment solutions for AI models with enterprise-grade security, monitoring, and performance optimization.",
      image: "/services/api-deployment.jpg",
      gradient: "from-teal-500/20 to-blue-500/20",
      icon: "⚡",
      technologies: ["FastAPI", "Docker", "AWS", "Kubernetes"]
    }
  ];

  return (
    <section id="services-section" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-10"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mb-2">
              <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              <span className="text-white">OUR SERVICES</span>
            </div>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Explore Best{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI Services
            </span>
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                   style={{ backgroundImage: `url(${service.image})` }}>
              </div>
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Icon */}
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-full border border-gray-600/50 group-hover:border-cyan-500/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Learn More Button */}
                <button className="flex items-center gap-2 text-cyan-400 font-medium group-hover:text-white transition-colors duration-300">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Hover Effect Lines */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4">
            <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold px-8 py-4 rounded-full hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
            <button className="border border-cyan-400/50 text-cyan-400 font-semibold px-8 py-4 rounded-full hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
