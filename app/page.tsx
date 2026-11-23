import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import EvidenceRecord from "./components/EvidenceRecord";
import Work from "./components/Work";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        <Hero />
        <section className="result-section" aria-labelledby="result-heading">
          <div className="wrap result-grid">
            <div className="result-copy"><p className="eyebrow">One decision that mattered</p><h2 id="result-heading"><span className="result-number">32</span> contacts held back before outreach</h2><p>The enrichment returned deliverable emails at previous employers. I held those contacts out of the campaign and filled their places with the next qualified matches.</p><p className="result-caveat">These contacts were held back from this campaign. They were still marked ready in the warehouse.</p></div>
            <div className="evidence-card"><div className="evidence-card-heading"><span>Evidence behind the decision</span><span>Example record</span></div><EvidenceRecord /><p className="record-footnote">Email verification checks deliverability.<br />Campaign qualification checks fit.</p></div>
          </div>
        </section>
        <Work />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
