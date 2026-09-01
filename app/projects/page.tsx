import Link from "next/link";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

export default function ProjectsPage() {
  return (
    <main>
      <Navigation />

      <section
        id="projects"
        style={{
          background: "#f7f0e2",
          borderBottom: "1px solid rgba(154,74,38,.22)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "110px 40px 120px",
          }}
        >
          <p
            style={{
              fontSize: 12.5,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: "#9a4a26",
              margin: "0 0 16px",
            }}
          >
            Projects
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), Garamond, serif",
              fontWeight: 400,
              fontSize: 52,
              lineHeight: 1.08,
              margin: "0 0 20px",
              maxWidth: "22ch",
            }}
          >
            Selected work.
          </h2>
          <p
            style={{
              fontSize: 16.5,
              lineHeight: 1.72,
              color: "#423b2d",
              margin: "0 0 56px",
              maxWidth: "56ch",
            }}
          >
            Write-ups of recent engagements are being prepared. In the
            meantime, the 45-day protocol on the home page sets out how each
            project runs.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 30,
            }}
          >
            {["Project 01", "Project 02", "Project 03"].map((label) => (
              <div
                key={label}
                style={{
                  minWidth: 0,
                  border: "1px dashed rgba(154,74,38,.4)",
                  borderRadius: 4,
                  padding: "34px 30px",
                  minHeight: 260,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-cormorant), Garamond, serif",
                    fontSize: 15,
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                    color: "#9a4a26",
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-cormorant), Garamond, serif",
                    fontSize: 24,
                    color: "#6a6353",
                  }}
                >
                  Title, client, what changed
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ background: "#efe4cf" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "74px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 36,
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-cormorant), Garamond, serif",
              fontSize: 34,
              lineHeight: 1.14,
              margin: 0,
              maxWidth: "26ch",
            }}
          >
            Start with the five-day Workflow X-Ray.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              className="cta"
              href="https://calendly.com/dhaivat-jambudia/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
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
              Book a time
            </a>
            <Link
              href="/#contact"
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
              Send the details instead
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
