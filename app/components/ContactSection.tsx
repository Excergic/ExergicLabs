// components/ContactSection.tsx - Updated with new form fields
'use client';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyEmail: '',
    solution: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ firstName: '', lastName: '', companyEmail: '', solution: '' });
      }, 3000);
    }, 2000);
  };

  const socialLinks = [
    {
      name: 'Twitter/X',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      url: 'https://x.com/dhaivat00',
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-400/10'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: 'https://www.linkedin.com/in/dhaivat-jambudia/',
      color: 'hover:text-blue-600',
      bgColor: 'hover:bg-blue-600/10'
    },
    {
      name: 'Email',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      url: 'excergiclabs@gmail.com',
      color: 'hover:text-green-500',
      bgColor: 'hover:bg-green-500/10'
    },
  ];

  return (
    <section 
      id="contact-section"
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
            <span className="text-white">CONTACT US</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Let's{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Ready to transform your business with AI? Get in touch and let's discuss how we can help you stay ahead in the market.
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Methods */}
          <div className="space-y-8">
            
            {/* Social Media Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <p className="text-gray-400 mb-8">
                Choose your preferred way to reach out. I'm active on all these platforms and typically respond within 24 hours.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 ${social.bgColor} ${social.color} transition-all duration-300 hover:scale-105 hover:border-gray-600`}
                  >
                    <div className="flex-shrink-0">
                      {social.icon}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{social.name}</div>
                      <div className="text-gray-400 text-sm">
                        {social.name === 'Email' ? 'contact@exergiclabs.com' : 
                         social.name === 'Discord' ? 'Join our server' :
                         social.name === 'LinkedIn' ? 'Professional network' :
                         'Follow for updates'}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50">
            
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold text-white mb-6">Tell Us About Your Project</h3>
                <p className="text-gray-400 mb-8">
                  Fill out this form to get personalized AI solutions for your needs. The more details you provide, the better I can help you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* First Name and Last Name - Side by side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-medium mb-2" htmlFor="firstName">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                        placeholder="Enter your first name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2" htmlFor="lastName">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  {/* Company Email Field */}
                  <div>
                    <label className="block text-white font-medium mb-2" htmlFor="companyEmail">
                      Your Company Email
                    </label>
                    <input
                      type="email"
                      id="companyEmail"
                      name="companyEmail"
                      value={formData.companyEmail}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      placeholder="Enter your company email address"
                    />
                  </div>

                  {/* Solution Field */}
                  <div>
                    <label className="block text-white font-medium mb-2" htmlFor="solution">
                      Tell us what type of solution you are looking for *
                    </label>
                    <textarea
                      id="solution"
                      name="solution"
                      value={formData.solution}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                      placeholder="Describe your project, challenges, or AI solution needs. For example: 'I need a RAG system for my healthcare data' or 'Looking to automate customer service with AI chatbots'"
                    />
                    <div className="text-gray-500 text-xs mt-1">
                      Be specific about your industry, use case, budget range, and timeline if possible.
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-3">
                        <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <span>Send Message</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </div>
                    )}
                  </button>

                </form>
              </>
            ) : (
              /* Success Message */
              <div className="text-center py-12">
                <div className="text-6xl mb-6">✅</div>
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-400 mb-6">
                  Thank you for reaching out! I'll review your message and get back to you within 24 hours with a personalized response.
                </p>
                <div className="text-cyan-400 font-medium">
                  Check your email for a confirmation message.
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
            Prefer a quick chat? Book a free 30-minute consultation call
          </p>
          <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-8 py-3 rounded-full hover:from-green-400 hover:to-emerald-500 transition-all duration-300 hover:scale-105">
            📅 Schedule Free Call
          </button>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;