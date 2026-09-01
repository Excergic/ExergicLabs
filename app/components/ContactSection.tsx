"use client";
import { useState } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const els = e.currentTarget.elements;
    const val = (n: string) => {
      const el = els.namedItem(n) as HTMLInputElement | HTMLTextAreaElement | null;
      return el?.value ?? "not given";
    };
    const name = val("name");
    const body = [
      "Name: " + name,
      "Work email: " + val("email"),
      "Role and team size: " + val("role"),
      "",
      "Responsibility that eats the week:",
      val("responsibility"),
    ].join("\n");
    const mailto =
      "mailto:dhaivat@exergiclabs.com" +
      "?subject=" +
      encodeURIComponent("Workflow X-Ray request: " + name) +
      "&body=" +
      encodeURIComponent(body);
    setSent(true);
    window.open(
      "https://calendly.com/dhaivat-jambudia/new-meeting",
      "_blank",
      "noopener"
    );
    window.location.href = mailto;
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 14px",
    border: "1px solid rgba(154,74,38,.35)",
    borderRadius: 3,
    background: "#f7f0e2",
    fontFamily: "var(--font-lora), Georgia, serif",
    fontSize: 15,
    color: "#16150f",
    boxSizing: "border-box",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 12.5,
    letterSpacing: ".12em",
    textTransform: "uppercase",
    color: "#6a6353",
  };

  return (
    <section id="contact" style={{ background: "#f7f0e2" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "100px 40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 72,
            alignItems: "start",
          }}
        >
          {/* Left column */}
          <div style={{ minWidth: 0 }}>
            <p style={{ fontSize: 12.5, letterSpacing: ".2em", textTransform: "uppercase", color: "#9a4a26", margin: "0 0 16px" }}>
              Contact
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), Garamond, serif",
                fontWeight: 400,
                fontSize: 46,
                lineHeight: 1.1,
                margin: "0 0 24px",
                maxWidth: "20ch",
              }}
            >
              Bring one responsibility. We&apos;ll X-ray it.
            </h2>
            <p
              style={{
                fontSize: 16.5,
                lineHeight: 1.75,
                textAlign: "justify",
                hyphens: "auto",
                color: "#322d22",
                margin: "0 0 30px",
                maxWidth: "44ch",
              }}
            >
              Name the recurring work that eats your week. On the call we
              classify it as Keep, Augment, Delegate, Automate, Agentify or
              Eliminate, and tell you what a redesign would change. If the
              honest answer is a rule rather than an agent, we say so.
            </p>
            <div
              style={{
                borderTop: "1px solid rgba(154,74,38,.25)",
                paddingTop: 24,
                display: "grid",
                gap: 14,
                fontSize: 15.5,
              }}
            >
              <div style={{ display: "flex", gap: 14 }}>
                <span style={{ width: 90, fontSize: 12.5, letterSpacing: ".12em", textTransform: "uppercase", color: "#6a6353", paddingTop: 3, flex: "none" }}>
                  Email
                </span>
                <a href="mailto:dhaivat@exergiclabs.com">dhaivat@exergiclabs.com</a>
              </div>
              <div style={{ display: "flex", gap: 14 }}>
                <span style={{ width: 90, fontSize: 12.5, letterSpacing: ".12em", textTransform: "uppercase", color: "#6a6353", paddingTop: 3, flex: "none" }}>
                  Programme
                </span>
                <span>45 days, one-to-one, embedded</span>
              </div>
              <div style={{ display: "flex", gap: 14 }}>
                <span style={{ width: 90, fontSize: 12.5, letterSpacing: ".12em", textTransform: "uppercase", color: "#6a6353", paddingTop: 3, flex: "none" }}>
                  Starts with
                </span>
                <span>A five-day Workflow X-Ray</span>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <form
            onSubmit={handleSubmit}
            style={{
              minWidth: 0,
              border: "1px solid rgba(154,74,38,.3)",
              borderRadius: 4,
              background: "#fdf9ef",
              padding: "34px 34px 36px",
              display: "grid",
              gap: 18,
              boxShadow: "0 12px 30px rgba(45,38,26,.1)",
            }}
          >
            <div style={{ display: "grid", gap: 7 }}>
              <label htmlFor="contact-name" style={labelStyle}>Name</label>
              <input
                id="contact-name"
                className="input"
                name="name"
                type="text"
                placeholder="Your name"
                required
                style={inputStyle}
              />
            </div>
            <div style={{ display: "grid", gap: 7 }}>
              <label htmlFor="contact-email" style={labelStyle}>Work email</label>
              <input
                id="contact-email"
                className="input"
                name="email"
                type="email"
                placeholder="you@company.com"
                required
                style={inputStyle}
              />
            </div>
            <div style={{ display: "grid", gap: 7 }}>
              <label htmlFor="contact-role" style={labelStyle}>Role &amp; team size</label>
              <input
                id="contact-role"
                className="input"
                name="role"
                type="text"
                placeholder="e.g. Head of Operations, 40 staff"
                style={inputStyle}
              />
            </div>
            <div style={{ display: "grid", gap: 7 }}>
              <label htmlFor="contact-responsibility" style={labelStyle}>
                Which recurring responsibility eats your week?
              </label>
              <textarea
                id="contact-responsibility"
                className="input"
                name="responsibility"
                rows={4}
                required
                placeholder="Meeting follow-through, research to decision, management reporting…"
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>
            <button
              className="cta"
              type="submit"
              style={{
                background: "#cbd63f",
                color: "#1d2006",
                border: "1px solid #aab52c",
                fontFamily: "var(--font-cormorant), Garamond, serif",
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: ".03em",
                padding: "14px 22px",
                borderRadius: 4,
                cursor: "pointer",
                marginTop: 6,
              }}
            >
              Book my Workflow X-Ray
            </button>
            <a
              href="https://calendly.com/dhaivat-jambudia/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textAlign: "center",
                fontFamily: "var(--font-cormorant), Garamond, serif",
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: ".03em",
                padding: "12px 20px",
                border: "1px solid rgba(154,74,38,.55)",
                borderRadius: 4,
                color: "#9a4a26",
                textDecoration: "none",
              }}
            >
              Or pick a time on Calendly
            </a>
            <p style={{ fontSize: 12.5, lineHeight: 1.6, color: "#6a6353", margin: 0 }}>
              {sent
                ? "Your details are on their way to dhaivat@exergiclabs.com. Pick a time on Calendly and we will come prepared."
                : "We reply within one working day. No sales sequence."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
