export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid rgba(154,74,38,.22)",
      }}
    >
      {/* Background placeholder */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(154,74,38,.04)",
        }}
      />
      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(180deg, rgba(247,240,226,.96) 0%, rgba(247,240,226,.9) 55%, rgba(247,240,226,.78) 100%)",
        }}
      />
      {/* Content */}
      <div
        style={{
          position: "relative",
          maxWidth: 1000,
          margin: "0 auto",
          padding: "128px 40px 112px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 12.5,
            letterSpacing: ".22em",
            textTransform: "uppercase",
            color: "#9a4a26",
            margin: "0 0 28px",
          }}
        >
          The 45-day AI-native transformation
        </p>
        <h1
          style={{
            fontFamily: "var(--font-cormorant), Garamond, serif",
            fontWeight: 400,
            fontSize: 80,
            lineHeight: 1.03,
            letterSpacing: "-.02em",
            margin: "0 auto 26px",
            maxWidth: "20ch",
          }}
        >
          Using GPT is not the same as being AI-native.
        </h1>
        <p
          style={{
            fontSize: 20,
            lineHeight: 1.6,
            maxWidth: "60ch",
            margin: "0 auto 40px",
            color: "#322d22",
          }}
        >
          We redesign your recurring responsibilities, not your tool list, into
          one measured AI operating system in 45 days.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 18,
            flexWrap: "wrap",
          }}
        >
          <a
            className="cta"
            href="#contact"
            style={{
              background: "#cbd63f",
              color: "#1d2006",
              border: "1px solid #aab52c",
              fontFamily: "var(--font-cormorant), Garamond, serif",
              fontSize: 17,
              fontWeight: 600,
              letterSpacing: ".03em",
              padding: "15px 30px",
              borderRadius: 4,
              textDecoration: "none",
            }}
          >
            Book a Workflow X-Ray
          </a>
          <a
            href="#protocol"
            style={{
              fontFamily: "var(--font-cormorant), Garamond, serif",
              fontSize: 17,
              fontWeight: 600,
              letterSpacing: ".03em",
              padding: "15px 26px",
              border: "1px solid rgba(154,74,38,.55)",
              borderRadius: 4,
              color: "#9a4a26",
              textDecoration: "none",
            }}
          >
            See the 45-day protocol
          </a>
        </div>
      </div>
    </section>
  );
}
