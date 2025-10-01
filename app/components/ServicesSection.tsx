// components/ServicesSection.tsx
'use client';
import React, { useState } from 'react';

const services = [
  {
    id: 1,
    title: 'Voice Model Systems',
    description: 'Robust voice AI systems for speech recognition, synthesis, and conversational agents built to operate reliably in production environments.',
    gradient: 'from-blue-600/30 to-cyan-600/30',
    icon: '🎙️',
    domains: ['Healthcare', 'Customer Service', 'Finance', 'Personal Use'],
    technologies: ['Speech-to-Text', 'Text-to-Speech', 'Voice Cloning', 'NLP', 'Stable Production'],
  },
  {
    id: 2,
    title: 'Image Model Systems',
    description: 'Scalable and accurate image recognition and generation AI built for medical diagnostics, retail analytics, security, and creative applications.',
    gradient: 'from-pink-600/30 to-purple-600/30',
    icon: '🖼️',
    domains: ['Healthcare', 'Retail', 'Security', 'Creative Arts', 'Personal Use'],
    technologies: ['Computer Vision', 'GANs', 'Image Classification', 'Segmentation', 'Production-grade'],
  },
  {
    id: 3,
    title: 'Text Model Systems',
    description: 'State-of-the-art text AI systems delivering chatbots, sentiment analysis, summarization, and NLP models with fine-tuning and deployment expertise.',
    gradient: 'from-purple-600/30 to-indigo-600/30',
    icon: '📝',
    domains: ['Education', 'Finance', 'Customer Service', 'Personal Use'],
    technologies: ['LLMs', 'Fine-tuning', 'Text Generation', 'Sentiment Analysis', 'API Integration'],
  },
  {
    id: 4,
    title: 'Video Model Systems',
    description: 'Advanced AI for video recognition, object tracking, and generative models ensuring real-time performance for surveillance, entertainment, and industry use.',
    gradient: 'from-yellow-600/30 to-orange-600/30',
    icon: '🎥',
    domains: ['Entertainment', 'Security', 'Education', 'Personal Use'],
    technologies: ['Video Recognition', 'Action Detection', 'Video Synthesis', 'Production-ready'],
  },
  {
    id: 5,
    title: 'Multimodal AI Systems',
    description: 'Cross-modal AI solutions integrating voice, image, text, and video to deliver powerful multimodal applications tailored to enterprise and personal needs.',
    gradient: 'from-green-600/30 to-emerald-600/30',
    icon: '🤖',
    domains: ['Healthcare', 'Finance', 'Entertainment', 'Customer Service', 'Personal Use'],
    technologies: ['Multimodal Learning', 'Cross-Modal Retrieval', 'Transformer Architectures', 'Robust Deployment'],
  },
  {
    id: 6,
    title: 'RAG, Fine-tuning, MCP & API Integration',
    description: 'Expert development and deployment of Retrieval-Augmented Generation models, fine-tuning of AI systems, scalable API design, and seamless integration.',
    gradient: 'from-cyan-500/30 to-blue-500/30',
    icon: '⚙️',
    domains: ['All Industries'],
    technologies: ['RAG', 'Fine-tuning', 'API Development', 'Cloud Deployment', 'Monitoring'],
  },
  {
    id: 7,
    title: 'AI & CS Education',
    description: 'Comprehensive courses and workshops teaching core AI concepts and computer science topics to professionals and enthusiasts.',
    gradient: 'from-red-500/30 to-pink-500/30',
    icon: '🎓',
    domains: ['Students', 'Professionals', 'Enthusiasts'],
    technologies: ['AI Fundamentals', 'Deep Learning', 'Machine Learning Theory', 'Coding Workshops'],
  },
];

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      id="services-section"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-10"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mb-2">
              <span>HOME</span>
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              <span className="text-white">OUR SERVICES</span>
            </div>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Explore Best{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI Solutions
            </span>
          </h2>

          <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20 cursor-pointer"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="text-6xl mb-6">{service.icon}</div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-300 flex-grow">{service.description}</p>

                <div className="mt-4 text-cyan-400 text-xs font-semibold tracking-wide">
                  Domains: {service.domains.join(', ')}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;