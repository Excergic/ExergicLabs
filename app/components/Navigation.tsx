"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 900) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className="site-header" style={{ position: "sticky" }}>
      <nav className="nav-inner">
        <Link href="/" className="nav-brand" onClick={() => setOpen(false)}>
          Exergic<span style={{ color: "#9a4a26" }}>Labs</span>
        </Link>
        <div className="nav-spacer" />
        <div className="nav-links">
          {links.map((link) => (
            <Link
              key={link.href}
              className="navlink"
              href={link.href}
              style={{ color: "#16150f", textDecoration: "none" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          className="cta nav-cta-desktop"
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
        <button
          type="button"
          className={`nav-toggle${open ? " is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      {open ? (
        <div className="nav-drawer">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link className="cta" href="/#contact" onClick={() => setOpen(false)}>
            Book an X-Ray
          </Link>
        </div>
      ) : null}
    </header>
  );
}
