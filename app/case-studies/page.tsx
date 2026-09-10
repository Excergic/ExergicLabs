"use client";
import { useRef, useEffect } from "react";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

const cases = [
  {
    id: "meeting",
    tag: "Meeting to follow-through",
    title: "Walk in prepared. Leave with commitments that close.",
    body: "Before the meeting the system retrieves last decisions, unresolved commitments, relevant metrics, stakeholder positions and likely questions. Afterwards it extracts decisions, owners, risks and follow-ups, prepares approved updates, and monitors whether commitments actually close.",
    metric: "Measured on: preparation time, dropped commitments",
  },
  {
    id: "research",
    tag: "Research to decision",
    title: "An evidence workflow, not one search and a fluent summary.",
    body: "The question is decomposed, source classes are searched in parallel, contradictions are reconciled, claims stay attached to their source, and coverage is checked. The system must be able to report insufficient evidence instead of completing the narrative by invention.",
    metric: "Measured on: cycle time, evidence coverage, rework",
  },
  {
    id: "reporting",
    tag: "Management reporting",
    title: "Stop spending the week collecting status.",
    body: "Status aggregation, task dispatch and routine proofreading move to the system; you keep outcome framing, exception judgment and stakeholder alignment. Scheduled and event-driven runs hold durable state, so nothing depends on one open chat session.",
    metric: "Measured on: hours returned, adoption, exceptions",
  },
];

export default function CaseStudiesPage() {
  const railRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const tweenRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function step() {
    const r = railRef.current;
    if (!r) return 0;
    const first = r.firstElementChild as HTMLElement | null;
    return first ? first.getBoundingClientRect().width + 30 : r.clientWidth;
  }

  function glide(to: number) {
    const r = railRef.current;
    if (!r) return;
    const max = r.scrollWidth - r.clientWidth;
    const target = Math.max(0, Math.min(max, to));
    const from = r.scrollLeft;
    if (Math.abs(target - from) < 2) return;
    if (tweenRef.current) clearInterval(tweenRef.current);
    r.style.scrollSnapType = "none";
    const t0 = Date.now();
    const dur = 460;
    tweenRef.current = setInterval(() => {
      const p = Math.min(1, (Date.now() - t0) / dur);
      const e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      r.scrollLeft = from + (target - from) * e;
      if (p >= 1) {
        clearInterval(tweenRef.current!);
        tweenRef.current = null;
        r.style.scrollSnapType = "x proximity";
      }
    }, 16);
  }

  function advance(dir: number) {
    const r = railRef.current;
    if (!r) return;
    const max = r.scrollWidth - r.clientWidth;
    if (dir > 0 && r.scrollLeft >= max - 8) glide(0);
    else glide(r.scrollLeft + dir * step());
  }

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) advance(1);
    }, 4500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (tweenRef.current) clearInterval(tweenRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <Navigation />

      <section id="case-studies" className="wrap">
        <div style={{ maxWidth: 760, margin: "0 0 40px" }}>
          <p
            style={{
              fontSize: 12.5,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "#9a4a26",
              margin: "0 0 16px",
            }}
          >
            Case studies
          </p>
          <h2 className="h2-lg" style={{ margin: "0 0 20px" }}>
            Three responsibilities we redesign most often.
          </h2>
          <p className="lede" style={{ color: "#423b2d", margin: 0 }}>
            Each one starts as a baseline and ends as a measured
            before-and-after. Slide through them, or hold the pointer over the
            deck to stop and read.
          </p>
        </div>

        {/* Carousel deck */}
        <div
          className="deck"
          style={{ position: "relative" }}
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
          onTouchStart={() => { pausedRef.current = true; }}
          onTouchEnd={() => { pausedRef.current = false; }}
        >
          <div
            className="rail"
            ref={railRef}
            style={{
              display: "flex",
              gap: 30,
              overflowX: "auto",
              scrollSnapType: "x proximity",
              padding: "4px 2px 10px",
            }}
          >
            {cases.map((c) => (
              <article
                key={c.id}
                className="lift deck-card"
                style={{
                  border: "1px solid rgba(154,74,38,.3)",
                  borderRadius: 4,
                  background: "#f7f0e2",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Image placeholder */}
                <div
                  style={{
                    height: 190,
                    borderBottom: "1px solid rgba(154,74,38,.25)",
                    background: "rgba(154,74,38,.06)",
                  }}
                />
                <div
                  style={{
                    padding: "28px 28px 30px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <p
                    style={{
                      fontSize: 12.5,
                      letterSpacing: ".14em",
                      textTransform: "uppercase",
                      color: "#9a4a26",
                      margin: "0 0 12px",
                    }}
                  >
                    {c.tag}
                  </p>
                  <h3 className="h3" style={{ margin: "0 0 14px" }}>
                    {c.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 15.5,
                      lineHeight: 1.72,
                      color: "#423b2d",
                      margin: "0 0 22px",
                      flex: 1,
                    }}
                  >
                    {c.body}
                  </p>
                  <div
                    style={{
                      borderTop: "1px solid rgba(154,74,38,.25)",
                      paddingTop: 18,
                      fontSize: 13,
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      color: "#6a6353",
                    }}
                  >
                    {c.metric}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            className="arrow prev"
            type="button"
            aria-label="Previous case study"
            onClick={() => advance(-1)}
          >
            ‹
          </button>
          <button
            className="arrow next"
            type="button"
            aria-label="Next case study"
            onClick={() => advance(1)}
          >
            ›
          </button>
        </div>

        {/* Risk-adjusted autonomy */}
        <div className="risk-panel">
          <div className="grid-2-risk">
            <div style={{ minWidth: 0 }}>
              <p
                style={{
                  fontSize: 12.5,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: "#9a4a26",
                  margin: "0 0 14px",
                }}
              >
                Risk-adjusted autonomy
              </p>
              <h3 className="h2" style={{ margin: "0 0 14px" }}>
                Autonomy falls as consequence rises.
              </h3>
              <p
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.72,
                  color: "#423b2d",
                  margin: 0,
                }}
              >
                Every action in a redesigned workflow is placed in one of four
                tiers. Confidentiality, recipients, approvals and destructive
                actions are enforced outside the model, through identity,
                application settings and tool permissions.
              </p>
            </div>
            <div style={{ minWidth: 0 }}>
              {[
                { tier: "Tier 1", desc: "Low: autonomous execution with logging and sampling audit." },
                { tier: "Tier 2", desc: "Moderate: human-on-loop monitoring and exception review." },
                { tier: "Tier 3", desc: "High: hard approval before consequential tool execution." },
                { tier: "Tier 4", desc: "Critical: AI advises; authorised humans execute, dual control where required." },
              ].map((t, i) => (
                <div
                  key={t.tier}
                  style={{
                    display: "flex",
                    gap: 14,
                    padding: "14px 0",
                    borderTop: "1px solid rgba(154,74,38,.25)",
                    borderBottom: i === 3 ? "1px solid rgba(154,74,38,.25)" : undefined,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant), Garamond, serif",
                      fontSize: 15,
                      color: "#9a4a26",
                      width: 72,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      flex: "none",
                    }}
                  >
                    {t.tier}
                  </span>
                  <span style={{ fontSize: 15.5, lineHeight: 1.6 }}>{t.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
