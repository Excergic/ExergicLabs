import Navigation from "@/app/components/Navigation";
import Hero from "@/app/components/Hero";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />

      {/* Pain section */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 40px" }}>
        <div style={{ textAlign: "center", margin: "0 auto 56px" }}>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), Garamond, serif",
              fontWeight: 400,
              fontSize: 48,
              lineHeight: 1.08,
              margin: "0 auto",
              maxWidth: "18ch",
            }}
          >
            If any of this sounds familiar, you have access, not a system.
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
          }}
        >
          {[
            {
              tag: "Enablement illusion",
              title: "Everyone is busy with AI. Nothing measurable has changed.",
              body: "Plenty of AI activity, no change in end-to-end performance. The workday still runs in its old order, so minutes are saved on a document while the outcome stays the same.",
            },
            {
              tag: "Capacity leakage",
              title: "Time was saved. It went straight back into the inbox.",
              body: "Hours are saved, then absorbed by more messages and meetings. Time only becomes leverage when someone decides where it goes: scope, quality or faster decisions.",
            },
            {
              tag: "Tool sprawl & shadow AI",
              title: "Your team brought its own tools. And your data with them.",
              body: "People bring their own tools, and company data goes with them. No approved list, no owner, no policy. The risk is already live.",
            },
          ].map((card) => (
            <div
              key={card.tag}
              className="paincard"
              style={{
                background: "#fdf9ef",
                border: "1px solid rgba(154,74,38,.22)",
                borderTop: "3px solid #cbd63f",
                borderRadius: 4,
                padding: "36px 32px 34px",
                boxShadow: "0 16px 38px rgba(45,38,26,.14)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-cormorant), Garamond, serif",
                  fontSize: 13,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "#9a4a26",
                }}
              >
                {card.tag}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant), Garamond, serif",
                  fontWeight: 500,
                  fontSize: 28,
                  lineHeight: 1.16,
                  margin: "16px 0 14px",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.72,
                  color: "#423b2d",
                  margin: 0,
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Unit of transformation */}
      <section
        style={{
          background: "#efe4cf",
          borderTop: "1px solid rgba(154,74,38,.22)",
          borderBottom: "1px solid rgba(154,74,38,.22)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "94px 40px" }}>
          <p
            style={{
              fontSize: 12.5,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "#9a4a26",
              margin: "0 0 18px",
            }}
          >
            The unit of transformation
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), Garamond, serif",
              fontWeight: 400,
              fontSize: 46,
              lineHeight: 1.1,
              margin: "0 0 20px",
              maxWidth: "26ch",
            }}
          >
            We start with a recurring responsibility, not a prompt or a tool.
          </h2>
          <p
            style={{
              fontSize: 16.5,
              lineHeight: 1.75,
              maxWidth: "62ch",
              color: "#322d22",
              margin: "0 0 46px",
            }}
          >
            Every responsibility and every step inside it is classified before
            anything is built. This is what stops you from buying an agent for a
            task that needed a rule, or automating work that should simply stop.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1,
              background: "rgba(154,74,38,.28)",
              border: "1px solid rgba(154,74,38,.28)",
              borderRadius: 4,
              overflow: "hidden",
            }}
          >
            {[
              { label: "Keep", desc: "When accountable judgment, empathy or ambiguity is the value." },
              { label: "Augment", desc: "When AI improves a human performer who stays in the seat." },
              { label: "Delegate", desc: "When AI can produce a reviewable work product." },
              { label: "Automate", desc: "When rules and state transitions are stable and specifiable." },
              { label: "Agentify", desc: "When the goal is clear but the path must adapt through tools and observations." },
              { label: "Eliminate", desc: "When the activity no longer creates customer, control or learning value." },
            ].map((item) => (
              <div
                key={item.label}
                style={{ background: "#f7f0e2", padding: "28px 28px 26px" }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-cormorant), Garamond, serif",
                    fontSize: 24,
                  }}
                >
                  {item.label}
                </div>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "#423b2d",
                    margin: "10px 0 0",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 40px" }}>
        <div
          style={{
            maxWidth: 860,
            margin: "0 auto 72px",
            textAlign: "center",
            borderTop: "1px solid rgba(154,74,38,.25)",
            borderBottom: "1px solid rgba(154,74,38,.25)",
            padding: "44px 0",
          }}
        >
          <p
            style={{
              fontSize: 12.5,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "#9a4a26",
              margin: "0 0 18px",
            }}
          >
            What AI-native does not mean
          </p>
          <p
            style={{
              fontFamily: "var(--font-cormorant), Garamond, serif",
              fontSize: 32,
              lineHeight: 1.22,
              margin: "0 auto 18px",
              maxWidth: "26ch",
            }}
          >
            <span
              style={{
                background: "#cbd63f",
                color: "#1d2006",
                padding: "0 .18em",
                borderRadius: 2,
              }}
            >
              Nobody is replaced.
            </span>{" "}
            A system is deployed, and the people stay accountable for it.
          </p>
          <p
            style={{
              fontSize: 16.5,
              lineHeight: 1.72,
              color: "#423b2d",
              margin: "0 auto",
              maxWidth: "62ch",
            }}
          >
            This is not a headcount exercise and not a promise of a percentage.
            Domain experience is the input the system runs on: your judgment,
            your relationships, your rules, your examples. What changes is where
            the routine work goes, and we report the result from your own
            before-and-after numbers rather than an industry claim.
          </p>
        </div>
        <div style={{ textAlign: "center", margin: "0 auto 50px" }}>
          <p
            style={{
              fontSize: 12.5,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "#9a4a26",
              margin: "0 0 16px",
            }}
          >
            What you are actually buying
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), Garamond, serif",
              fontWeight: 400,
              fontSize: 46,
              lineHeight: 1.1,
              margin: "0 auto",
              maxWidth: "19ch",
            }}
          >
            Outcomes, and the controls that make them safe to keep.
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 30,
          }}
        >
          {[
            {
              num: "01 · Time returned",
              title: "Cycle time, measured end to end.",
              body: "We baseline frequency, active time, elapsed time and rework before anything is built, then report the same figures after. Not model latency, but the time from trigger to finished outcome.",
            },
            {
              num: "02 · Data security",
              title: "Least privilege, reads split from writes.",
              body: "Governed connections with approval gates, logging and rollback. Consequential writes arrive as a change set with evidence and a diff. Secrets stay in the execution environment, never in prompts or memory.",
            },
            {
              num: "03 · Revenue & scope",
              title: "Capacity converted, not absorbed.",
              body: "Recovered hours are reinvested by decision: wider scope, faster decisions, deeper stakeholder work, new initiatives. Each transformed responsibility carries an evidence ledger: baseline, target, actual, next improvement.",
            },
          ].map((card) => (
            <div
              key={card.num}
              className="lift"
              style={{
                border: "1px solid rgba(154,74,38,.3)",
                borderRadius: 4,
                padding: "32px 30px",
                background: "#f7f0e2",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-cormorant), Garamond, serif",
                  fontSize: 15,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: "#9a4a26",
                }}
              >
                {card.num}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant), Garamond, serif",
                  fontWeight: 500,
                  fontSize: 29,
                  lineHeight: 1.16,
                  margin: "16px 0 12px",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.72,
                  color: "#423b2d",
                  margin: 0,
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Protocol */}
      <section
        id="protocol"
        style={{
          background: "#efe4cf",
          borderTop: "1px solid rgba(154,74,38,.22)",
          borderBottom: "1px solid rgba(154,74,38,.22)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 40px" }}>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), Garamond, serif",
              fontWeight: 400,
              fontSize: 46,
              lineHeight: 1.1,
              margin: 0,
              maxWidth: "24ch",
            }}
          >
            The 45-day protocol, phase by phase.
          </h2>
          <div
            style={{
              height: 1,
              background: "rgba(154,74,38,.25)",
              margin: "44px 0 0",
            }}
          />
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}
          >
            {[
              {
                days: "D1–5",
                title: "Workflow X-Ray",
                body: "We map the work as it is actually done: responsibilities, decisions, meetings, information flows and hidden coordination, not the job description. Every item is baselined and classified Keep, Augment, Delegate, Automate, Agentify or Eliminate.",
                deliverable: "Deliverable: workflow map, opportunity map, time baseline, ranked changes",
                right: false,
              },
              {
                days: "D6–10",
                title: "AI Foundation",
                body: "Context, knowledge, retrieval and memory for the selected work: role, objectives, formats, domain language, recurring stakeholders, decision principles, policies and live priorities. Access, freshness and permission boundaries are tested.",
                deliverable: "Deliverable: a foundation that knows how you work without over-exposing information",
                right: true,
              },
              {
                days: "D11–17",
                title: "Redesign priority workflows",
                body: "Each priority responsibility is rebuilt as Trigger → Input → Context → Process → Decision → Output → Feedback. We define what you decide, what AI prepares or executes, what deterministic software controls, how quality is judged, and when the system must ask.",
                deliverable: "Deliverable: one live AI-native responsibility with before-and-after evidence",
                right: false,
              },
              {
                days: "D18–24",
                title: "Reusable skills & systems",
                body: "Recurring cognitive work (research, communication, analysis, meetings, planning, evaluation) becomes a small library of tested skills. Patterns are introduced through your own deliverables, never as a catalogue of technology.",
                deliverable: "Deliverable: tested AI skills used repeatedly in real work",
                right: true,
              },
              {
                days: "D25–31",
                title: "Connect the environment",
                body: "Approved communication, calendar, documents, knowledge, spreadsheets, CRM, project systems, browser, APIs and automation are connected under least privilege, with reads separated from writes, approval, logging and rollback.",
                deliverable: "Deliverable: governed connections that retrieve and act without copy-paste",
                right: false,
              },
              {
                days: "D32–38",
                title: "Agentic systems",
                body: "Planning, execution, tools, memory, handoffs, evaluation, bounded retry, approval and failure recovery, added only where the responsibility justifies them. The simplest topology that works, never a fleet of agents.",
                deliverable: "Deliverable: a personal AI workforce inside a defined authority envelope",
                right: true,
              },
              {
                days: "D39–42",
                title: "The AI operating system",
                body: "Skills, context, memory, workflows, automations, agents, evaluation, oversight and visibility combine into one coherent system covering planning, research, meetings, communication, analysis, follow-up and knowledge.",
                deliverable: "Deliverable: operating rules, ownership, dashboards, improvement backlog",
                right: false,
              },
              {
                days: "D43–45",
                title: "Stress test & transfer",
                body: "Normal and adverse cases: missing context, conflicting evidence, tool failure, policy conflict, low confidence, interruption, recovery, escalation. You must be able to operate, inspect, correct and extend the system without us.",
                deliverable: "Deliverable: stress-test results, AI Native Playbook, leverage scorecard, 90-day roadmap",
                right: true,
              },
            ].map((phase) => (
              <div
                key={phase.days}
                style={{
                  minWidth: 0,
                  padding: phase.right
                    ? "36px 0 36px 44px"
                    : "36px 44px 36px 0",
                  borderBottom: "1px solid rgba(154,74,38,.25)",
                  borderRight: phase.right
                    ? undefined
                    : "1px solid rgba(154,74,38,.25)",
                }}
              >
                <div style={{ display: "flex", gap: 20 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant), Garamond, serif",
                      fontSize: 16,
                      color: "#9a4a26",
                      paddingTop: 8,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {phase.days}
                  </span>
                  <div style={{ minWidth: 0 }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-cormorant), Garamond, serif",
                        fontWeight: 500,
                        fontSize: 30,
                        lineHeight: 1.14,
                        margin: "0 0 12px",
                      }}
                    >
                      {phase.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 15.5,
                        lineHeight: 1.72,
                        color: "#423b2d",
                        margin: "0 0 12px",
                      }}
                    >
                      {phase.body}
                    </p>
                    <p
                      style={{
                        fontSize: 13,
                        letterSpacing: ".08em",
                        textTransform: "uppercase",
                        color: "#6a6353",
                        margin: 0,
                      }}
                    >
                      {phase.deliverable}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies preview */}
      <section
        id="case-studies"
        style={{
          background: "#efe4cf",
          borderTop: "1px solid rgba(154,74,38,.22)",
          borderBottom: "1px solid rgba(154,74,38,.22)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "90px 40px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: ".9fr 1.1fr",
              gap: 72,
              alignItems: "start",
            }}
          >
            <div style={{ minWidth: 0 }}>
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
              <h2
                style={{
                  fontFamily: "var(--font-cormorant), Garamond, serif",
                  fontWeight: 400,
                  fontSize: 44,
                  lineHeight: 1.1,
                  margin: "0 0 20px",
                }}
              >
                Three responsibilities we redesign most often.
              </h2>
              <p
                style={{
                  fontSize: 16.5,
                  lineHeight: 1.72,
                  color: "#423b2d",
                  margin: "0 0 28px",
                }}
              >
                Each begins with a baseline and ends with a measured
                before-and-after.
              </p>
              <a
                className="cta"
                href="/case-studies"
                style={{
                  display: "inline-block",
                  background: "#cbd63f",
                  color: "#1d2006",
                  border: "1px solid #aab52c",
                  fontFamily: "var(--font-cormorant), Garamond, serif",
                  fontSize: 16,
                  fontWeight: 600,
                  letterSpacing: ".03em",
                  padding: "13px 26px",
                  borderRadius: 4,
                  textDecoration: "none",
                }}
              >
                Read the case studies
              </a>
            </div>
            <div style={{ minWidth: 0 }}>
              {[
                { num: "01", title: "Meeting to follow-through" },
                { num: "02", title: "Research to decision" },
                { num: "03", title: "Management reporting" },
              ].map((item, i) => (
                <a
                  key={item.num}
                  href="/case-studies"
                  style={{
                    display: "flex",
                    gap: 22,
                    alignItems: "baseline",
                    padding: "20px 0",
                    borderTop: "1px solid rgba(154,74,38,.25)",
                    borderBottom:
                      i === 2 ? "1px solid rgba(154,74,38,.25)" : undefined,
                    color: "#16150f",
                    textDecoration: "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant), Garamond, serif",
                      fontSize: 13,
                      letterSpacing: ".16em",
                      textTransform: "uppercase",
                      color: "#9a4a26",
                      width: 92,
                      flex: "none",
                    }}
                  >
                    {item.num}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant), Garamond, serif",
                      fontSize: 26,
                      lineHeight: 1.2,
                    }}
                  >
                    {item.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        style={{
          background: "#efe4cf",
          borderTop: "1px solid rgba(154,74,38,.22)",
          borderBottom: "1px solid rgba(154,74,38,.22)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 40px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.15fr 1fr",
              gap: 72,
              alignItems: "start",
            }}
          >
            <div style={{ minWidth: 0 }}>
              <p
                style={{
                  fontSize: 12.5,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: "#9a4a26",
                  margin: "0 0 16px",
                }}
              >
                About
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant), Garamond, serif",
                  fontWeight: 400,
                  fontSize: 46,
                  lineHeight: 1.1,
                  margin: "0 0 28px",
                  maxWidth: "24ch",
                }}
              >
                ExergicLabs builds the operating system, then hands you the
                keys.
              </h2>
              <p
                style={{
                  fontSize: 16.5,
                  lineHeight: 1.75,
                  color: "#322d22",
                  margin: "0 0 16px",
                }}
              >
                We work with mid-to-senior professionals and owner-led teams in
                strategy, operations, marketing, sales, finance, HR and
                programme management. People whose value is domain judgment, not
                code. Most have AI access already and no change in what they can
                own.
              </p>
              <p
                style={{
                  fontSize: 16.5,
                  lineHeight: 1.75,
                  color: "#322d22",
                  margin: "0 0 16px",
                }}
              >
                Our method organises more than seventy agentic and automation
                patterns into ten systems and applies only the ones a given
                responsibility justifies.
              </p>
              <p
                style={{
                  fontSize: 16.5,
                  lineHeight: 1.75,
                  color: "#322d22",
                  margin: 0,
                }}
              >
                You stay the accountable owner throughout. We supply the
                implementation and the coaching; you learn to direct the system,
                judge its output, handle exceptions and find the next
                opportunity.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 28,
                  marginTop: 44,
                  paddingTop: 30,
                  borderTop: "1px solid rgba(154,74,38,.25)",
                }}
              >
                {[
                  {
                    title: "Embedded, one-to-one",
                    desc: "Inside your real work, on live cases.",
                  },
                  {
                    title: "Evidence, not demos",
                    desc: "Baseline before, same measures after.",
                  },
                  {
                    title: "Ownership transferred",
                    desc: "Playbook, dashboards and backlog are yours.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <div
                      style={{
                        fontFamily: "var(--font-cormorant), Garamond, serif",
                        fontSize: 21,
                      }}
                    >
                      {item.title}
                    </div>
                    <p
                      style={{
                        fontSize: 14.5,
                        lineHeight: 1.65,
                        color: "#6a6353",
                        margin: "8px 0 0",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Portrait placeholder */}
            <div
              style={{
                height: 520,
                background: "rgba(154,74,38,.08)",
                borderRadius: 4,
                border: "1px solid rgba(154,74,38,.2)",
              }}
            />
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
