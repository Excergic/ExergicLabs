// components/ProductBuildingSection.tsx
'use client';

const ProductBuildingSection = () => {
  return (
    <section id="product-building" className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-6">
          Product <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Building</span>
        </h2>
        <p className="text-lg text-gray-300 mb-10">
          From zero to launch: rapid discovery, focused MVP, and production-grade releases with observability, security, and a clean handoff playbook.
        </p>

        {/* Value pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-gray-900 border border-gray-700/50">
            <div className="text-3xl mb-3">🔎</div>
            <h3 className="text-xl font-semibold mb-2">Discovery → Scope</h3>
            <p className="text-gray-300">Problem framing, user journeys, success metrics, technical feasibility, and ROI mapping to avoid overbuilding.</p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-900 border border-gray-700/50">
            <div className="text-3xl mb-3">⚙️</div>
            <h3 className="text-xl font-semibold mb-2">MVP → Iterations</h3>
            <p className="text-gray-300">Ship a lovable MVP fast; iterate weekly with analytics, user feedback loops, and measurable adoption lift.</p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-900 border border-gray-700/50">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="text-xl font-semibold mb-2">Production Ready</h3>
            <p className="text-gray-300">CI/CD, monitoring, cost controls, RBAC, PII safeguards, evaluations, tracing, and incident runbooks.</p>
          </div>
        </div>

        {/* Process steps */}
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700/50 mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-cyan-400">How we build</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex gap-3">
                <span>1️⃣</span>
                <div>
                  <div className="font-semibold">Define the core use case</div>
                  <div className="text-gray-300">Persona, pain, one high-value workflow, and a clear “definition of done”.</div>
                </div>
              </div>
              <div className="flex gap-3">
                <span>2️⃣</span>
                <div>
                  <div className="font-semibold">Architecture & stack</div>
                  <div className="text-gray-300">Next.js, FastAPI, Postgres, Redis, object storage, Docker; for AI: RAG, vector DBs, LangChain, LangGraph.</div>
                </div>
              </div>
              <div className="flex gap-3">
                <span>3️⃣</span>
                <div>
                  <div className="font-semibold">MVP in weeks</div>
                  <div className="text-gray-300">Feature slicing, human-in-the-loop where needed, analytics from day one.</div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span>4️⃣</span>
                <div>
                  <div className="font-semibold">Security & governance</div>
                  <div className="text-gray-300">Auth, RBAC, audit trails, PII redaction, environment isolation, cost/latency budgets.</div>
                </div>
              </div>
              <div className="flex gap-3">
                <span>5️⃣</span>
                <div>
                  <div className="font-semibold">Observability</div>
                  <div className="text-gray-300">Tracing, logs, dashboards, golden datasets, offline/online evaluation for AI features.</div>
                </div>
              </div>
              <div className="flex gap-3">
                <span>6️⃣</span>
                <div>
                  <div className="font-semibold">Scale & handoff</div>
                  <div className="text-gray-300">SRE checklists, runbooks, growth experiments, pricing, onboarding, and success playbooks.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What we ship */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-gray-900 border border-gray-700/50">
            <div className="text-3xl mb-3">🧩</div>
            <h4 className="font-semibold mb-2">AI SaaS & APIs</h4>
            <p className="text-gray-300">RAG, AI Agents, Domain Adapters, Evaluation Harness, Scalable Multi-tenant APIs.</p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-900 border border-gray-700/50">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="font-semibold mb-2">Operations</h4>
            <p className="text-gray-300">CI/CD, IaC, alerting, cost guardrails, zero-downtime deploys, blue/green, canaries.</p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ProductBuildingSection;

