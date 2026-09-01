import Link from "next/link";

export default function Navigation() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(247,240,226,.92)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(154,74,38,.22)",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "16px 32px",
          display: "flex",
          alignItems: "center",
          gap: 24,
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-cormorant), Garamond, serif",
            fontSize: 21,
            letterSpacing: ".14em",
            textTransform: "uppercase",
            color: "#16150f",
            whiteSpace: "nowrap",
            textDecoration: "none",
          }}
        >
          Exergic<span style={{ color: "#9a4a26" }}>Labs</span>
        </Link>
        <div style={{ flex: 1 }} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 22,
            fontSize: 13.5,
            letterSpacing: ".05em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          <Link
            className="navlink"
            href="/projects"
            style={{ color: "#16150f", textDecoration: "none" }}
          >
            Projects
          </Link>
          <Link
            className="navlink"
            href="/case-studies"
            style={{ color: "#16150f", textDecoration: "none" }}
          >
            Case Studies
          </Link>
          <Link
            className="navlink"
            href="/#about"
            style={{ color: "#16150f", textDecoration: "none" }}
          >
            About
          </Link>
          <Link
            className="navlink"
            href="/#contact"
            style={{ color: "#16150f", textDecoration: "none" }}
          >
            Contact
          </Link>
        </div>
        <Link
          className="cta"
          href="/#contact"
          style={{
            background: "#cbd63f",
            color: "#1d2006",
            border: "1px solid #aab52c",
            fontFamily: "var(--font-cormorant), Garamond, serif",
            fontSize: 15,
            fontWeight: 600,
            letterSpacing: ".04em",
            padding: "11px 22px",
            borderRadius: 4,
            whiteSpace: "nowrap",
            boxShadow: "0 1px 0 rgba(0,0,0,.06)",
            textDecoration: "none",
          }}
        >
          Book an X-Ray
        </Link>
      </nav>
    </header>
  );
}
