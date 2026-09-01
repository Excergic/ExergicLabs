import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(154,74,38,.22)",
        background: "#efe4cf",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "34px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
          fontSize: 13,
          color: "#6a6353",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-cormorant), Garamond, serif",
            fontSize: 16,
            letterSpacing: ".14em",
            textTransform: "uppercase",
            color: "#16150f",
          }}
        >
          ExergicLabs
        </span>
        <span>Helping businesses and teams become AI-native.</span>
        <div style={{ display: "flex", gap: 22 }}>
          <Link href="/projects">Projects</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
