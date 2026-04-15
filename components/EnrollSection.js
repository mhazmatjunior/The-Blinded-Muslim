import { Ornament } from "./Shared";

export function EnrollSection() {
  return (
    <section id="enroll" style={{
      background: "var(--charcoal)",
      padding: "120px 80px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background radial */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(184,136,60,0.10) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 640, margin: "0 auto" }}>
        <Ornament />
        <span className="label-tag reveal" style={{ color: "var(--gold-pale)", borderColor: "var(--gold-pale)" }}>
          Enrollment Open
        </span>

        <h2
          className="f-display reveal d1"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 700,
            color: "var(--parchment)",
            lineHeight: 1.1,
            margin: "1rem 0",
          }}
        >
          Batch 3 Is
          <br />
          <em style={{ color: "var(--gold)" }}>Now Open</em>
        </h2>

        <p className="reveal d2" style={{ color: "var(--text-faint)", fontSize: "0.95rem", marginBottom: "0.5rem" }}>
          Spots are limited due to structured mentorship and discussion-based learning format.
        </p>
        <p className="reveal d3" style={{ color: "var(--parchment-2)", fontSize: "0.95rem", marginBottom: "3rem", fontWeight: 400 }}>
          Enrollment is currently active for university students.
        </p>

        <div className="reveal d4" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#" className="btn-primary" style={{ background: "var(--gold)", borderColor: "var(--gold)", color: "var(--charcoal)", padding: "18px 52px", fontSize: "0.92rem" }}>
            Join Blinded Muslim Course →
          </a>
        </div>
      </div>
    </section>
  );
}
