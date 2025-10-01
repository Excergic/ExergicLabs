// components/TestimonialsCompact.tsx
'use client';

const testimonials = [
  {
    quote: "They shipped a reliable RAG system in weeks—finally something our team can trust in production.",
    name: "Sarah Chen",
    role: "CTO, HealthTech",
  },
  {
    quote: "Clear KPIs, airtight governance, and observability from day one. We saw conversion lift in the first month.",
    name: "Michael Rodriguez",
    role: "VP Engineering, FinTech",
  },
  {
    quote: "Their teaching plus advisory model accelerated our roadmap. The team now speaks the same ‘production’ language.",
    name: "Lisa Park",
    role: "Product Lead, EdTech",
  },
];

const TestimonialsCompact = () => {
  return (
    <section id="testimonials-section" className="py-16 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <h2 className="text-3xl font-bold mb-8">
          Client <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Testimonials</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 rounded-2xl bg-gray-900 border border-gray-700/50">
              <div className="text-4xl text-cyan-400/70 mb-4">“</div>
              <p className="text-gray-200 mb-6">{t.quote}</p>
              <div className="text-sm text-gray-400">
                <div className="text-white font-semibold">{t.name}</div>
                <div>{t.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional trust logos row placeholder */}
        {/* <div className="mt-10 opacity-70 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">HealthTech</div>
          <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">FinTech</div>
          <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">EdTech</div>
          <div className="p-4 rounded-xl bg-gray-900 border border-gray-800">Automation</div>
        </div> */}
      </div>
    </section>
  );
};

export default TestimonialsCompact;
