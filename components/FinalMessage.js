export function FinalMessage() {
  return (
    <section style={{ background: "var(--parchment)", padding: "var(--section-pv) var(--section-ph)", textAlign: "center" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <svg width="1" height="60" style={{ display: "block", margin: "0 auto 2rem" }}>
          <line x1="0" y1="0" x2="0" y2="60" stroke="var(--gold-light)" strokeWidth="1" opacity="0.6" />
        </svg>

        <p
          className="f-display reveal"
          style={{
            fontSize: "clamp(1.15rem, 4vw, 1.45rem)",
            color: "var(--charcoal)",
            lineHeight: 1.7,
            fontStyle: "italic",
            fontWeight: 400,
            maxWidth: 580,
            margin: "0 auto"
          }}
        >
          "If you are at a stage where knowledge feels scattered, beliefs feel challenged,
          and clarity feels distant — this course is designed to help you rebuild your
          understanding step by step."
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center", margin: "2.5rem 0", flexWrap: "wrap" }}>
          <div style={{ width: 24, height: 1, background: "var(--gold)", opacity: 0.5 }} className="nav-desktop" />
          <span style={{ 
            color: "var(--gold)", 
            fontSize: "0.7rem", 
            letterSpacing: "0.14em", 
            textTransform: "uppercase",
            fontWeight: 500,
            maxWidth: "280px",
            lineHeight: 1.6
          }}>
            Not through assumptions.<br className="nav-mobile-toggle" /> Through structured clarity.
          </span>
          <div style={{ width: 24, height: 1, background: "var(--gold)", opacity: 0.5 }} className="nav-desktop" />
        </div>

        <svg width="1" height="60" style={{ display: "block", margin: "0 auto" }}>
          <line x1="0" y1="0" x2="0" y2="60" stroke="var(--gold-light)" strokeWidth="1" opacity="0.6" />
        </svg>
      </div>
    </section>
  );
}
