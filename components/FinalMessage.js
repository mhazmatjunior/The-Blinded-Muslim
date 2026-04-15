export function FinalMessage() {
  return (
    <section style={{ background: "var(--parchment)", padding: "100px 80px", textAlign: "center" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <svg width="1" height="60" style={{ display: "block", margin: "0 auto 2.5rem" }}>
          <line x1="0" y1="0" x2="0" y2="60" stroke="var(--gold)" strokeWidth="1" />
        </svg>

        <p
          className="f-display reveal"
          style={{
            fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
            color: "var(--charcoal)",
            lineHeight: 1.65,
            fontStyle: "italic",
            fontWeight: 400,
          }}
        >
          "If you are at a stage where knowledge feels scattered, beliefs feel challenged,
          and clarity feels distant — this course is designed to help you rebuild your
          understanding step by step."
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center", margin: "2rem 0" }}>
          <div style={{ width: 32, height: 1, background: "var(--gold)" }} />
          <span style={{ color: "var(--gold)", fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase" }}>Not through assumptions. Through structured clarity.</span>
          <div style={{ width: 32, height: 1, background: "var(--gold)" }} />
        </div>

        <svg width="1" height="60" style={{ display: "block", margin: "0 auto" }}>
          <line x1="0" y1="0" x2="0" y2="60" stroke="var(--gold)" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
}
