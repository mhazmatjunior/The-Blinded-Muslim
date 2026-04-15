import { SectionHeader } from "./Shared";

export function ModulesSection() {
  const modules = [
    {
      n: "I",
      color: "var(--accent-red)",
      colorBg: "rgba(139,46,46,0.07)",
      label: "Module One · The Problem",
      title: "Understanding Why Confusion Exists",
      points: [
        "Meaning and importance of true knowledge",
        "Difference between information and understanding",
        "Psychological and intellectual distortion in modern life",
        "Misalignment in core beliefs — Tauheed, fear, fascination",
        "Influence of environment on thinking patterns",
        "Introduction to the true concept of Ibadah",
      ],
      close: "\"You don't just learn the problem, you learn how it formed.\"",
    },
    {
      n: "II",
      color: "var(--accent-teal)",
      colorBg: "rgba(31,92,82,0.07)",
      label: "Module Two · The Solution",
      title: "Rebuilding Clarity From the Foundation",
      points: [
        "Deep understanding of Iman and its components",
        "Clearing misconceptions about core beliefs",
        "Detailed discussion on Akhirah and Al-Qadr",
        "Answering doubts commonly faced by students",
        "Establishing Islam as a complete and authoritative system of life",
      ],
      close: "This module reconstructs clarity from the ground up.",
    },
    {
      n: "III",
      color: "var(--accent-blue)",
      colorBg: "rgba(30,61,107,0.07)",
      label: "Module Three · The Way Forward",
      title: "Living With Awareness and Direction",
      points: [
        "Understanding ideological and cultural influences",
        "How narratives are shaped in modern society",
        "Intellectual and spiritual awareness in daily life",
        "Practical roadmap after gaining clarity",
        "Implementation of understanding into real-world behavior",
      ],
      close: "This is where clarity turns into action.",
    },
  ];

  return (
    <section id="course" style={{ background: "var(--parchment)", padding: "var(--section-pv) var(--section-ph)" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <SectionHeader
          label="Course Structure"
          heading={
            <>
              A Complete <span style={{ color: "var(--gold)" }}><em style={{ fontStyle: "italic" }}>3</em>-<em style={{ fontStyle: "italic" }}>Month</em></span> Intellectual & Spiritual Framework
            </>
          }
          sub="Three structured modules · One month each · Four guided sessions per module"
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "2px", background: "var(--border)" }}>
          {modules.map((mod, i) => (
            <div
              key={mod.n}
              className={`reveal d${i + 1}`}
              style={{
                background: "var(--white)",
                display: "grid",
                gridTemplateColumns: "clamp(60px, 10vw, 80px) 1fr",
                overflow: "hidden",
              }}
            >
              {/* Number column */}
              <div style={{
                background: mod.colorBg,
                borderRight: `2px solid ${mod.color}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem 1rem",
              }}>
                <span className="f-display" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 700, color: mod.color, lineHeight: 1 }}>{mod.n}</span>
              </div>

              {/* Content column */}
              <div style={{ padding: "clamp(1.5rem, 4vw, 2.5rem) clamp(1rem, 5vw, 3rem)" }}>
                <p style={{ color: mod.color, fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.4rem" }}>{mod.label}</p>
                <h3 className="f-display" style={{ fontSize: "clamp(1.3rem, 4vw, 1.6rem)", fontWeight: 600, color: "var(--charcoal)", marginBottom: "1.5rem" }}>{mod.title}</h3>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem 2rem", marginBottom: "1.5rem" }} className="two-col">
                  {mod.points.map((pt) => (
                    <div key={pt} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <span style={{ color: mod.color, fontSize: "0.5rem", flexShrink: 0, marginTop: 7 }}>◆</span>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.6 }}>{pt}</span>
                    </div>
                  ))}
                </div>

                <p className="f-display" style={{ color: "var(--gold)", fontStyle: "italic", fontSize: "0.95rem", borderTop: "1px solid var(--border)", paddingTop: "1.2rem" }}>
                  → {mod.close}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
