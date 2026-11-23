export default function Work() {
  return (
    <section className="work-section wrap" id="selected-work" aria-labelledby="work-heading">
      <div className="section-heading"><p className="eyebrow">Case studies</p><h2 id="work-heading">How I decide who makes<br className="desktop-break" /> the outreach list</h2></div>
      <div className="steps-grid">
        <article className="step">
          <div className="step-visual"><div className="example-label">Example record</div><div className="account-identity"><span className="account-monogram" aria-hidden="true">F</span><strong>FinBursa</strong></div><dl className="mini-fields"><div><dt>Target account</dt><dd>FinBursa</dd></div><div><dt>Intended role</dt><dd>CRO</dd></div></dl></div>
          <h3>Find the account</h3><p>Start with the target company and the person the campaign is trying to reach.</p>
        </article>
        <article className="step">
          <div className="step-visual"><div className="example-label">Example record</div><dl className="mini-fields"><div><dt>Current employer</dt><dd>FinBursa</dd></div><div className="mismatch"><dt>Returned email domain</dt><dd><code>blackrock.com</code></dd></div></dl><div className="evidence-flag"><span aria-hidden="true">≠</span> Employer / domain mismatch</div><div className="verification-line">Email verification <span className="badge">Deliverable</span></div></div>
          <h3>Check the evidence</h3><p>Compare the returned email domain with the person’s current employer.</p>
        </article>
        <article className="step">
          <div className="step-visual"><div className="example-label">Example record</div><dl className="mini-fields"><div><dt>Campaign decision</dt><dd><span className="badge hold">Hold for review</span></dd></div></dl><div className="replacement"><span aria-hidden="true">↳</span><div><strong>Fill campaign place</strong><p>Next qualified match</p></div></div><p className="warehouse-note">Warehouse status: Ready — unchanged.</p></div>
          <h3>Make the decision</h3><p>Hold the contact for review and move the next qualified match into the campaign.</p>
        </article>
      </div>
    </section>
  );
}
