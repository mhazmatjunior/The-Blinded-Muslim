import { SectionHeader } from "./Shared";

export function WhoSection() {
  return (
    <section style={{ background: "var(--parchment)", padding: "80px 80px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionHeader label="Eligibility" heading="Is This Course For You?" />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="two-col">
          <div className="card-base reveal" style={{ borderTop: "2px solid var(--gold)" }}>
            <p className="f-display" style={{ color: "var(--gold)", fontSize: "1.1rem", fontWeight: 600, marginBottom: "1.25rem" }}>For You If…</p>
            {[
              "You are a university student facing ideological confusion",
              "You feel disconnected between modern life and faith",
              "You want structured understanding, not scattered information",
              "You want clarity, not just inspiration",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "12px", marginBottom: "1rem", alignItems: "flex-start" }}>
                <span style={{ color: "var(--gold)", fontSize: "0.75rem", flexShrink: 0, marginTop: 4 }}>◆</span>
                <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{item}</span>
              </div>
            ))}
          </div>

          <div className="card-base reveal d2" style={{ borderTop: "2px solid var(--parchment-3)" }}>
            <p className="f-display" style={{ color: "var(--text-faint)", fontSize: "1.1rem", fontWeight: 600, marginBottom: "1.25rem" }}>Not For You If…</p>
            {[
              "You are looking for quick motivational content",
              "You are not willing to think deeply",
              "You are uninterested in intellectual reflection",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "12px", marginBottom: "1rem", alignItems: "flex-start" }}>
                <span style={{ color: "var(--text-faint)", fontSize: "0.75rem", flexShrink: 0, marginTop: 4 }}>◇</span>
                <span style={{ color: "var(--text-faint)", fontSize: "0.9rem" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
