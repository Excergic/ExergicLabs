// components/AboutSection.tsx
'use client';

const AboutSection = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact-section');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="about-section" className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">ExergicLabs</span>
          </h2>
          <p className="text-lg text-gray-300 mt-4">
            Building dependable AI products—end to end. From Core ML and GenAI to product engineering, education, and production readiness, we prioritize tangible business outcomes over demos.
          </p>
        </div>

        {/* Mission • Values • Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-gray-900 border border-gray-700/50">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Mission</h3>
            <p className="text-gray-300">
              Turn AI from experiments into profit—secure, observable, and reliable in real workflows.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-900 border border-gray-700/50">
            <div className="text-3xl mb-3">🧭</div>
            <h3 className="text-xl font-semibold mb-2">Principles</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Solve one valuable workflow first</li>
              <li>• Measure quality, cost, and latency</li>
              <li>• Ship, observe, iterate</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-gray-900 border border-gray-700/50">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Why Us</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Production-first architecture</li>
              <li>• Clear KPIs & evaluation harnesses</li>
              <li>• Secure, governed deployments</li>
            </ul>
          </div>
        </div>

        {/* What we do snapshot */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-gray-900 border border-gray-700/50">
            <h4 className="font-semibold mb-1">Core ML</h4>
            <p className="text-gray-300 text-sm">Time series, regression, classification, churn & risk models.</p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-900 border border-gray-700/50">
            <h4 className="font-semibold mb-1">GenAI</h4>
            <p className="text-gray-300 text-sm">RAG, agents, multimodal (text, image, audio, video).</p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-900 border border-gray-700/50">
            <h4 className="font-semibold mb-1">Product Building</h4>
            <p className="text-gray-300 text-sm">MVP to production: CI/CD, tracing, guardrails, cost control.</p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-900 border border-gray-700/50">
            <h4 className="font-semibold mb-1">Education & Consulting</h4>
            <p className="text-gray-300 text-sm">Role-based training and production readiness audits.</p>
          </div>
        </div>

        {/* Impact metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400">5+</div>
            <div className="text-gray-400 text-sm">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">100%</div>
            <div className="text-gray-400 text-sm">Ship Rate (MVPs)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">24/7</div>
            <div className="text-gray-400 text-sm">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">3w</div>
            <div className="text-gray-400 text-sm">Typical MVP</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
