import { SectionHeader } from "./Shared";

export function WhyDifferentSection() {
  return (
    <section style={{ background: "var(--white)", padding: "var(--section-pv) var(--section-ph)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionHeader
          label="Distinction"
          heading="What This Course Actually Is"
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: "3rem" }} className="two-col">
          {/* NOT */}
          <div className="reveal">
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent-red)", fontWeight: 600, marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ display: "inline-block", width: 20, height: 1, background: "var(--accent-red)" }} />
              This is Not
            </p>
            {[
              "A motivational talk series",
              "A surface-level Islamic introduction",
              "A sectarian or biased narrative",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "12px", marginBottom: "1.2rem", alignItems: "flex-start" }}>
                <span style={{ color: "var(--accent-red)", flexShrink: 0, fontSize: "0.75rem", marginTop: 4 }}>✕</span>
                <span style={{ color: "var(--text-muted)", fontSize: "0.93rem" }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ background: "var(--border)", width: 1 }} className="reveal" />

          {/* IS */}
          <div className="reveal d2">
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent-teal)", fontWeight: 600, marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ display: "inline-block", width: 20, height: 1, background: "var(--accent-teal)" }} />
              This Is
            </p>
            {[
              "Structured intellectual clarity",
              "Deep Islamic understanding",
              "Contextual explanation for modern student life",
              "A system to rebuild thinking, not just memorize information",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "12px", marginBottom: "1.2rem", alignItems: "flex-start" }}>
                <span style={{ color: "var(--gold)", flexShrink: 0, fontSize: "0.75rem", marginTop: 4 }}>◆</span>
                <span style={{ color: "var(--charcoal)", fontSize: "0.93rem", fontWeight: 400 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
