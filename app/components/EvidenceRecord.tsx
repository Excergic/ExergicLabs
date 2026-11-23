export default function EvidenceRecord() {
  return (
    <dl className="record-fields">
      <div><dt>Current employer</dt><dd>FinBursa</dd></div>
      <div><dt>Returned email domain</dt><dd><code>blackrock.com</code></dd></div>
      <div><dt>Email verification</dt><dd><span className="badge">Deliverable</span></dd></div>
      <div className="decision-field"><dt>Campaign decision</dt><dd><span className="badge hold">Hold for review</span></dd></div>
    </dl>
  );
}
