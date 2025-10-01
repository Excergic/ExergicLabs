// components/AIEducationConsultingSection.tsx
'use client';

const AIEducationConsultingSection = () => {
  const smoothScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="ai-training-coaching" className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">

        {/* Attention Banner */}
        <div className="mb-8 rounded-2xl border border-red-500/30 bg-gradient-to-r from-red-900/20 via-gray-900/30 to-transparent p-6">
          <div className="text-sm text-red-300 mb-2">Industry Alert</div>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            “By 2026, <span className="text-red-400">95% of AI pilots fail to deliver ROI</span> — not because AI is weak, but because teams lack <span className="text-white">production‑ready workflow integration</span> and a learning culture.” 
          </h2>
          <p className="text-gray-300 mt-3">
            Don’t ship demos. Ship reliable systems. Education plus consulting is the fastest path across the gap from prototype to profit.
          </p>
        </div>

        {/* Title */}
        <h3 className="text-4xl font-bold mb-6">
          AI Education & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Consulting</span>
        </h3>
        <p className="text-lg text-gray-300 mb-10">
          Transform teams into operators of production AI. We combine targeted training with hands‑on advisory to embed models into real workflows—securely, observably, and measurably.
        </p>

        {/* Two-column: Teaching + Consulting */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Teaching */}
          <div className="p-6 rounded-2xl bg-gray-900 border border-gray-700/50">
            <div className="text-3xl mb-3">🎓</div>
            <h4 className="text-xl font-semibold mb-3">Teaching That Changes Outcomes</h4>
            <ul className="text-gray-300 space-y-2">
              <li>• Foundations that matter: vector search, tokenization, prompt patterns, evaluation design.</li>
              <li>• Labs: RAG pipelines, agents vs. workflows, guardrails, PII handling, latency/cost budgets.</li>
              <li>• Role‑based tracks for PMs, engineers, DS/ML, and leadership—aligned to KPIs and ROI.</li>
              <li>• Reusable playbooks, golden datasets, and internal “how we ship AI” guides.</li>
            </ul>
          </div>

          {/* Consulting */}
          <div className="p-6 rounded-2xl bg-gray-900 border border-gray-700/50">
            <div className="text-3xl mb-3">🧭</div>
            <h4 className="text-xl font-semibold mb-3">Consulting That Ships to Prod</h4>
            <ul className="text-gray-300 space-y-2">
              <li>• Discovery → MVP → Production with explicit success metrics and eval harnesses.</li>
              <li>• Architecture choices: retrieval vs. fine‑tuning, agent vs. deterministic workflow, caching tiers.</li>
              <li>• Security & governance: RBAC, audit trails, secrets, data retention, redaction, policy guardrails.</li>
              <li>• Observability: tracing, dashboards, offline/online evals, quality drift & incident runbooks.</li>
            </ul>
          </div>
        </div>

        {/* Why AI Startups Fail in Production */}
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700/50">
          <h4 className="text-2xl font-semibold mb-4 text-cyan-400">Why Most AI Startups Fail in Production</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="text-gray-300 space-y-2">
              <li>• Demo‑driven builds: no golden datasets, no eval gates, no rollback plan.</li>
              <li>• Brittle prompts/agents: no fallbacks, no semantic cache, unclear SLOs for cost/latency/quality.</li>
              <li>• Data gaps: stale sources, missing contracts/ownership, low signal‑to‑noise.</li>
              <li>• Security debt: PII leaks, shadow tools, weak secrets, missing auditability & RBAC.</li>
            </ul>
            <ul className="text-gray-300 space-y-2">
              <li>• Zero observability: no tracing, no label‑based error taxonomy, no drift monitoring.</li>
              <li>• Premature complexity: agents before proven workflows; custom models before PMF.</li>
              <li>• Ops immaturity: no on‑call, no feature flags/canaries, no incident playbooks.</li>
              <li>• Misaligned metrics: vanity dashboards over adoption, retention, and P&L impact.</li>
            </ul>
          </div>

          {/* Our De‑Risking Recipe */}
          <div className="mt-6 p-4 rounded-xl bg-gray-800 border border-gray-700">
            <h5 className="font-semibold mb-2">Our De‑Risking Recipe</h5>
            <ul className="text-gray-300 space-y-2">
              <li>• Define quality KPIs (accuracy, coverage, hallucination rate, TTFT, cost per hundred). Tie to business KPIs.</li>
              <li>• Build golden datasets + eval harness; add guardrails, fallbacks, semantic caches, circuit breakers.</li>
              <li>• Ship with tracing, dashboards, alerts; run canaries/shadow traffic before full rollout.</li>
              <li>• Governance by design: data contracts, retention policies, RBAC, audit trails, policy-as-code.</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-400 mb-4">Want a focused workshop or a production‑readiness audit?</p>
          <button
            onClick={() => smoothScroll('contact-section')}
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all"
          >
            Book Training / Audit
          </button>
        </div>

      </div>
    </section>
  );
};

export default AIEducationConsultingSection;
