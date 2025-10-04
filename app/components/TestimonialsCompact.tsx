// components/TestimonialsCompact.tsx
'use client';
import { useState } from 'react';

const testimonials = [
  {
    quote: "Working with Dhaivat transformed our approach to AI implementation. He delivered a production-ready RAG system for our healthcare platform in just 3 weeks, complete with observability and governance frameworks. Patient query accuracy improved by 40%.",
    name: "Dr. Sarah Mitchell",
    role: "Chief Technology Officer",
    company: "MediCore Systems",
    image: "/testimonials/sarah.jpg", // Optional: Add real photos
    linkedin: "https://linkedin.com/in/sarahmitchell", // Optional: Add LinkedIn links
    results: "40% accuracy improvement"
  },
  {
    quote: "Dhaivat doesn't just build AI systems—he ensures they're battle-tested for production. His work on our automated trading intelligence platform included comprehensive monitoring, A/B testing frameworks, and clear KPIs. We saw a 25% increase in trade execution efficiency within the first month.",
    name: "Michael Rodriguez",
    role: "VP of Engineering",
    company: "QuantEdge Capital",
    image: "/testimonials/michael.jpg",
    linkedin: "https://linkedin.com/in/mrodriguez",
    results: "25% efficiency gain"
  },
  {
    quote: "The combination of technical expertise and knowledge transfer was game-changing. Dhaivat built our student assessment AI while simultaneously upskilling our engineering team. Six months later, they're independently shipping AI features with confidence.",
    name: "Lisa Park",
    role: "Head of Product",
    company: "EduNext Platform",
    image: "/testimonials/lisa.jpg",
    linkedin: "https://linkedin.com/in/lisapark",
    results: "Team fully autonomous in 6 months"
  },
];

const TestimonialsCompact = () => {

  return (
    <section id="testimonials-section" className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-10"></div>
      
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-cyan-400 text-sm font-medium mb-4">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>CLIENT TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real results from real clients. See how we have helped companies ship production-ready AI solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/10"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-6xl text-cyan-400/10 font-serif group-hover:text-cyan-400/20 transition-colors">"</div>
              
              {/* Results Badge */}
              {t.results && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-semibold mb-4">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {t.results}
                </div>
              )}
              
              {/* Quote */}
              <p className="text-gray-200 leading-relaxed mb-6 relative z-10">
                {t.quote}
              </p>
              
              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-700/50">
                {/* Avatar Placeholder - Replace with real images */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center gap-2">
                    <div className="text-white font-semibold">{t.name}</div>
                    {t.linkedin && (
                      <a 
                        href={t.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                        aria-label="LinkedIn Profile"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                  <div className="text-sm text-gray-400">{t.role}</div>
                  <div className="text-sm text-cyan-400 font-medium">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">15+</div>
              <div className="text-gray-400 text-sm">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">5+</div>
              <div className="text-gray-400 text-sm">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">3 Weeks</div>
              <div className="text-gray-400 text-sm">Avg. Time to MVP</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Want to share your experience working with me?</p>
          <a 
            href="https://www.linkedin.com/in/dhaivat-jambudia/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105"
          >
            <span>Leave a LinkedIn Recommendation</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsCompact;
