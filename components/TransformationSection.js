import { SectionHeader } from "./Shared";

export function TransformationSection() {
  const shifts = [
    ["Confusion", "Clarity"],
    ["Doubt", "Understanding"],
    ["Passive Belief", "Conscious Conviction"],
    ["External Influence", "Internal Grounding"],
    ["Searching", "Purpose-Driven Living"],
  ];
  return (
    <section style={{ background: "var(--charcoal)", padding: "var(--section-pv) var(--section-ph)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <SectionHeader
          label="Transformation"
          heading="Who You Become After This Course"
          sub="By the end of this journey, you are not the same person."
          light
        />

        <div 
          className="two-col"
          style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr 1fr", 
            gap: "2rem",
            alignItems: "stretch" 
          }}
        >
          {shifts.map(([from, to], i) => (
            <div 
              key={i} 
              className="reveal"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(184,136,60,0.15)",
                padding: "1.25rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
                position: "relative"
              }}
            >
              <div style={{ position: "absolute", top: "50%", right: "-1rem", transform: "translateY(-50%) translateX(-50%) rotate(-45deg)", width: "8px", height: "8px", borderRight: "1px solid var(--gold)", borderBottom: "1px solid var(--gold)", opacity: 0.5 }} className="nav-desktop" />
              <p style={{ color: "var(--text-faint)", fontSize: "0.75rem", textDecoration: "line-through", opacity: 0.6 }}>{from}</p>
              <p style={{ color: "var(--parchment)", fontSize: "1.05rem", fontWeight: 500 }}>{to}</p>
            </div>
          ))}
        </div>

        <p className="f-display reveal" style={{ textAlign: "center", color: "var(--gold-light)", fontStyle: "italic", fontSize: "1.1rem", marginTop: "3rem" }}>
          This is not just learning — it is realignment of thought, belief, and direction.
        </p>
      </div>
    </section>
  );
}
