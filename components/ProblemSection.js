import { SectionHeader } from "./Shared";

export function ProblemSection() {
  const problems = [
    { icon: "◈", text: "Confusion between modern ideologies and Islamic teachings" },
    { icon: "◈", text: "Constant internal conflict about belief and identity" },
    { icon: "◈", text: "Exposure to narratives that distort Islamic understanding" },
    { icon: "◈", text: "Lack of clarity about purpose and direction" },
    { icon: "◈", text: "Feeling 'educated' but not truly grounded" },
  ];
  return (
    <section id="problem" style={{ background: "var(--charcoal)", padding: "var(--section-pv) var(--section-ph)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <SectionHeader
          label="The Problem"
          heading="Why So Many Educated Students Still Feel Lost"
          light
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="two-col">
          {/* Left — statement */}
          <div className="reveal" style={{ borderLeft: "2px solid var(--gold)", paddingLeft: "2rem" }}>
            <p className="f-display" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "var(--parchment)", lineHeight: 1.4, fontStyle: "italic", marginBottom: "1.5rem" }}>
              You study. You achieve grades. You build skills.
            </p>
            <p className="f-display" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "var(--gold-light)", lineHeight: 1.4, fontStyle: "italic" }}>
              But somewhere inside, something still feels missing.
            </p>

            <div style={{ marginTop: "2.5rem", padding: "1.5rem", background: "rgba(184,136,60,0.07)", border: "1px solid rgba(184,136,60,0.15)" }}>
              <p style={{ color: "var(--gold-pale)", fontSize: "0.9rem", lineHeight: 1.8 }}>
                The real issue is not ignorance.<br />
                <strong style={{ color: "var(--parchment)", fontWeight: 500 }}>
                "It is misunderstanding ... shaped by environment, narratives, and incomplete knowledge."
                </strong>
              </p>
            </div>
          </div>

          {/* Right — problem list */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(184,136,60,0.12)" }}>
            {problems.map((p, i) => (
              <div
                key={i}
                className={`reveal d${i + 1}`}
                style={{
                  background: "var(--charcoal-2)",
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
                  <span style={{ color: "var(--parchment-2)", fontSize: "0.92rem", fontWeight: 300 }}>{p.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
