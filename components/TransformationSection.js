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
    <section style={{ background: "var(--charcoal)", padding: "100px 80px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionHeader
          label="Transformation"
          heading="Who You Become After This Course"
          sub="By the end of this journey, you are not the same person."
          light
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "0", alignItems: "stretch" }}>
          {/* From column */}
          <div>
            <p style={{ color: "var(--text-faint)", fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase", textAlign: "center", padding: "0 0 1rem", borderBottom: "1px solid rgba(184,136,60,0.15)" }}>Before</p>
            {shifts.map(([from]) => (
              <div key={from} style={{ padding: "1.25rem 2rem 1.25rem 0", borderBottom: "1px solid rgba(184,136,60,0.08)", textAlign: "right" }}>
                <span style={{ color: "var(--text-faint)", fontSize: "0.97rem", textDecoration: "line-through" }}>{from}</span>
              </div>
            ))}
          </div>

          {/* Arrow column */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ height: "3rem" }} />
            {shifts.map((_, i) => (
              <div key={i} style={{ height: "3.5rem", display: "flex", alignItems: "center" }}>
                <span style={{ color: "var(--gold)", fontSize: "1.1rem", padding: "0 1.5rem" }}>→</span>
              </div>
            ))}
          </div>

          {/* To column */}
          <div>
            <p style={{ color: "var(--text-faint)", fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase", textAlign: "center", padding: "0 0 1rem", borderBottom: "1px solid rgba(184,136,60,0.15)" }}>After</p>
            {shifts.map(([_, to]) => (
              <div key={to} style={{ padding: "1.25rem 0 1.25rem 2rem", borderBottom: "1px solid rgba(184,136,60,0.08)" }}>
                <span style={{ color: "var(--parchment)", fontSize: "0.97rem", fontWeight: 500 }}>{to}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="f-display reveal" style={{ textAlign: "center", color: "var(--gold-light)", fontStyle: "italic", fontSize: "1.1rem", marginTop: "3rem" }}>
          This is not just learning — it is realignment of thought, belief, and direction.
        </p>
      </div>
    </section>
  );
}
