"use client";

import { useRef, useState } from "react";
import EvidenceRecord from "./EvidenceRecord";

export default function Hero() {
  const [inspecting, setInspecting] = useState(false);
  const inspectionRef = useRef<HTMLDivElement>(null);

  function explore() {
    setInspecting(true);
    inspectionRef.current?.focus({ preventScroll: true });
    inspectionRef.current?.scrollIntoView({ behavior: "instant", block: "nearest" });
  }

  return (
    <section className="hero wrap" id="top" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="eyebrow">Independent GTM Engineer</p>
        <h1 id="hero-heading">Data to <span className="accent-word">Deal</span></h1>
        <p className="intro">Help B2B businesses make <span className="accent-word">intelligent GTM systems</span> with their data</p>
        <div className="actions">
          <button className="button" onClick={explore} aria-controls="workflow-inspection" aria-expanded={inspecting}>Explore the workflow</button>
          <a className="text-link" href="#contact">Work with me</a>
        </div>
        <p className="hero-note">AI-assisted systems. Inside the tools you already use.</p>
      </div>
      <figure className="workflow-figure">
        <div className="operator-tool">
          <div className="tool-top"><span className="tool-symbol" aria-hidden="true">↳</span><span>Prospect qualification</span><span className="tool-label">Example record</span></div>
          <div className="tool-body">
            <div className="tool-heading"><span>Campaign review</span><span className="record-count">1 record selected</span></div>
            <div className="account-row"><span className="selected-mark" aria-hidden="true">✓</span><span className="account-monogram" aria-hidden="true">F</span><div><strong>FinBursa</strong><span>Current employer</span></div><span className="role-tag">CRO</span></div>
            <div id="workflow-inspection" className="inspection" ref={inspectionRef} tabIndex={-1}>
              {inspecting ? (
                <>
                  <div className="inspection-heading"><span>Decision inspection</span><button className="reset-button" onClick={() => setInspecting(false)}>Reset view</button></div>
                  <EvidenceRecord />
                  <div className="inspection-outcome"><strong>Deliverable doesn’t mean campaign-qualified.</strong><p>The returned domain does not match the current employer. Hold this contact and fill the place with the next qualified match.</p></div>
                  <p className="warehouse-note">Warehouse status: Ready — unchanged.</p>
                </>
              ) : (
                <div className="inspection-prompt"><div className="inspection-icon" aria-hidden="true">≠</div><h2>Right account.<br />Right email?</h2><p>See why a deliverable email was held out of the campaign.</p><button className="inspect-button" onClick={() => setInspecting(true)} aria-controls="workflow-inspection" aria-expanded={false}>Inspect decision</button></div>
              )}
            </div>
          </div>
          <div className="tool-bottom"><span>Account → Evidence → Campaign decision</span><span>Human review</span></div>
        </div>
        <figcaption>Inside the prospect qualification workflow.</figcaption>
      </figure>
    </section>
  );
}
