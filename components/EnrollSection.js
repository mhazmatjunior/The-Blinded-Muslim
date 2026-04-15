import { Ornament } from "./Shared";

export function EnrollSection() {
  return (
    <section id="enroll" style={{
      background: "var(--charcoal)",
      padding: "calc(var(--section-pv) * 1.25) var(--section-ph)",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
      minHeight: "60vh",
      display: "flex",
      alignItems: "center"
    }}>
      {/* Background radial */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(184,136,60,0.12) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 640, margin: "0 auto", width: "100%" }}>
        <Ornament />
        <div className="reveal">
          <span className="label-tag" style={{ color: "var(--gold-pale)", borderColor: "var(--gold-pale)" }}>
            Enrollment Open
          </span>
        </div>

        <h2
          className="f-display reveal d1"
          style={{
            fontSize: "clamp(2.2rem, 8vw, 4rem)",
            fontWeight: 700,
            color: "var(--parchment)",
            lineHeight: 1.1,
            margin: "1.5rem 0",
          }}
        >
          Batch 3 Is
          <br />
          <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Now Open</em>
        </h2>

        <p className="reveal d2" style={{ color: "var(--text-faint)", fontSize: "clamp(0.85rem, 2.5vw, 0.95rem)", marginBottom: "0.5rem" }}>
          Spots are limited due to structured mentorship and discussion-based learning format.
        </p>
        <p className="reveal d3" style={{ color: "var(--parchment-2)", fontSize: "clamp(0.85rem, 2.5vw, 0.95rem)", marginBottom: "3rem", fontWeight: 400 }}>
          Enrollment is currently active for students.
        </p>

        <div className="reveal d4" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#" className="btn-primary" style={{ 
            background: "var(--gold)", 
            borderColor: "var(--gold)", 
            color: "var(--charcoal)", 
            padding: "clamp(14px, 3vw, 18px) clamp(24px, 6vw, 52px)", 
            fontSize: "clamp(0.75rem, 2.5vw, 0.92rem)",
            letterSpacing: "0.06em"
          }}>
            Join Blinded Muslim Course →
          </a>
        </div>
      </div>
    </section>
  );
}
