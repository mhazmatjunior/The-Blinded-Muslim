import { SectionHeader } from "./Shared";

export function SolutionSection() {
  const solutions = [
    { text: "Authentic and Unbiased Knowledge" },
    { text: "A clear intellectual framework" },
    { text: "A reconstruction of core beliefs from the ground up" },
    { text: "A way to connect Islam with today’s reality" },
    { text: "A method to think, not just what to think" },
  ];

  return (
    <section id="solution" style={{ background: "var(--parchment-2)", padding: "var(--section-pv) var(--section-ph)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <SectionHeader
          label="The Solution"
          heading="What If The Problem Was Never Your Intelligence ... But Your Framework?"
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem", alignItems: "stretch" }} className="two-col">
          {/* Left — Statement */}
          <div className="reveal" style={{ borderLeft: "2px solid var(--gold)", paddingLeft: "2rem" }}>
            <p className="f-display" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "var(--charcoal)", lineHeight: 1.4, fontStyle: "italic", marginBottom: "1.5rem" }}>
              You strive. You stay sincere. You put in the effort.
            </p>
            <p className="f-display" style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", color: "var(--gold)", lineHeight: 1.6, fontStyle: "italic", marginBottom: "2rem" }}>
              Yet what you absorbed were wrong interpretations, flawed concepts, and beliefs without true understanding. 
            </p>

            <div style={{ padding: "1.5rem", background: "var(--white)", border: "1px solid var(--border)", boxShadow: "0 10px 30px rgba(184,136,60,0.05)" }}>
              <p style={{ color: "var(--gold)", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "0.4rem" }}>
                The Solution Is Not “More Content”
              </p>
              <p className="f-display" style={{ color: "var(--charcoal)", fontSize: "1.2rem", fontWeight: 700, lineHeight: 1.3 }}>
                It’s Correct Understanding of Islam
              </p>
            </div>
          </div>

          {/* Right — Needs List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(184,136,60,0.12)" }}>
            {solutions.map((s, i) => (
              <div
                key={i}
                className={`reveal d${i + 1}`}
                style={{
                  background: "var(--white)",
                  padding: "1.2rem 1.5rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  flex: 1,
                  justifyContent: "center",
                  flexDirection: "column"
                }}
              >
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--gold)", marginTop: 3, flexShrink: 0, fontSize: "0.8rem" }}>◆</span>
                  <span style={{ color: "var(--charcoal)", fontSize: "0.92rem", fontWeight: 300, lineHeight: 1.4 }}>{s.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
