import { SectionHeader } from "./Shared";

export function ModulesSection() {
  const modules = [
    {
      n: "I",
      label: "Phase One · The Problem",
      title: "Understanding Why Confusion Exists",
      points: [
        "Meaning and importance of true knowledge",
        "Difference between information and understanding",
        "Psychological distortion in modern life",
        "Misalignment in core beliefs — Tauheed & fear",
        "Influence of environment on thinking patterns",
        "Introduction to the true concept of Ibadah",
      ],
      close: "You don't just learn the problem, you learn how it formed.",
    },
    {
      n: "II",
      label: "Phase Two · The Solution",
      title: "Rebuilding Clarity From the Foundation",
      points: [
        "Deep understanding of Iman and its components",
        "Clearing misconceptions about core beliefs",
        "Detailed discussion on Akhirah and Al-Qadr",
        "Answering doubts commonly faced by students",
        "Establishing Islam as a complete system of life",
      ],
      close: "This module reconstructs clarity from the ground up.",
    },
    {
      n: "III",
      label: "Phase Three · Way Forward",
      title: "Living With Awareness and Direction",
      points: [
        "Understanding ideological and cultural influences",
        "How narratives are shaped in modern society",
        "Intellectual and spiritual awareness in daily life",
        "Practical roadmap after gaining clarity",
        "Implementation into real-world behavior",
      ],
      close: "This is where clarity turns into action.",
    },
  ];

  return (
    <section id="course" style={{ background: "var(--parchment)", padding: "var(--section-pv) var(--section-ph)" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <SectionHeader
          label="Course Structure"
          heading={
            <>
              A Complete <span style={{ color: "var(--gold)" }}><em style={{ fontStyle: "italic" }}>3</em>-<em style={{ fontStyle: "italic" }}>Month</em></span> Framework
            </>
          }
          sub="Three structured modules · One month each · Four guided sessions per module"
        />

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(3, 1fr)", 
          gap: "1.5rem",
          alignItems: "stretch"
        }} className="three-col">
          {modules.map((mod, i) => (
            <div
              key={mod.n}
              className={`reveal d${i + 1}`}
              style={{
                background: "var(--white)",
                border: "1px solid var(--border)",
                padding: "2.5rem 2rem",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              {/* Premium Gold Top Bar */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "var(--gold)" }} />

              {/* Module Metadata */}
              <div style={{ marginBottom: "1.5rem" }}>
                <span className="f-display" style={{ 
                  fontSize: "3rem", 
                  fontWeight: 700, 
                  color: "var(--gold)", 
                  opacity: 0.15,
                  position: "absolute",
                  top: "1.5rem",
                  right: "2rem",
                  lineHeight: 1
                }}>
                  {mod.n}
                </span>
                <p style={{ color: "var(--gold)", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.5rem" }}>
                  {mod.label}
                </p>
                <h3 className="f-display" style={{ 
                  fontSize: "1.4rem", 
                  fontWeight: 700, 
                  color: "var(--charcoal)", 
                  lineHeight: 1.25,
                  maxWidth: "90%"
                }}>
                  {mod.title}
                </h3>
              </div>

              {/* Points */}
              <div style={{ flex: 1, marginBottom: "2rem" }}>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {mod.points.map((pt) => (
                    <li key={pt} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <span style={{ color: "var(--gold)", fontSize: "0.5rem", flexShrink: 0, marginTop: 7 }}>◆</span>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.5 }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Quote */}
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.25rem" }}>
                <p className="f-display" style={{ 
                  color: "var(--gold)", 
                  fontStyle: "italic", 
                  fontSize: "0.92rem", 
                  lineHeight: 1.4,
                  fontWeight: 600
                }}>
                  "{mod.close}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
