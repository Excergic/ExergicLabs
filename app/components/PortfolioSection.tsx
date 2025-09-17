// components/ProjectsSection.tsx
'use client';
import React from 'react';

const projects = [
  {
    id: 1,
    title: 'ML System (Code Only)',
    description:
      'Robust Machine Learning system designed for predictive analysis. Fully functional codebase, optimized for performance, but currently without cloud deployment due to AWS credit limits.',
    status: 'Code Only',
    techStack: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Feature Engineering'],
    demoUrl: null,
    githubUrl: '#', // Update with real repo URL
  },
  {
    id: 2,
    title: 'Newton LLM (RAG System)',
    description:
      'A fine-tuned Retrieval-Augmented Generation LLM for scientific reasoning. Backend via FastAPI and user interface through Streamlit for seamless domain-specific querying.',
    status: 'Deployed',
    techStack: ['FastAPI', 'Python', 'HuggingFace', 'LangChain', 'Streamlit'],
    demoUrl: 'https://your-streamlit-ui-demo-url',
    githubUrl: '#', // Update with real repo URL
  },
  {
    id: 3,
    title: 'Alexa for WhatsApp (Ongoing)',
    description:
      'Multimodal AI assistant combining voice, image generation, and text interaction inspired by personal AI assistants for intelligent conversational experiences on WhatsApp.',
    status: 'In Development',
    techStack: ['Voice Recognition', 'Image Generation', 'NLP', 'WhatsApp API'],
    demoUrl: null,
    githubUrl: '#',
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects-section"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Showcasing our cutting-edge production-grade AI systems and innovations.</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-br from-gray-800/60 to-gray-900/70 rounded-2xl p-8 shadow-lg ring-1 ring-gray-700/50 hover:ring-cyan-400 transition"
            >
              <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4 min-h-[4.5rem]">{project.description}</p>

              <p className="text-cyan-400 font-semibold mb-4">Status: <span className="font-normal text-gray-300">{project.status}</span></p>

              <div className="mb-4">
                <h4 className="text-white font-medium mb-2">Technology Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded-full border border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-600 hover:bg-cyan-700 text-black px-4 py-2 rounded-lg font-semibold transition"
                  >
                    Source Code
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
