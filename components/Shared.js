"use client";

export const Ornament = () => (
  <div className="ornament">
    <div className="ornament-line" />
    <div className="ornament-diamond" />
    <div className="ornament-line" />
  </div>
);

export const SectionHeader = ({ label, heading, sub, light = false }) => (
  <div className="section-header" style={{ textAlign: "center" }}>
    <div className="reveal" style={{ marginBottom: "1rem" }}>
      <Ornament />
      <span className="label-tag" style={light ? { color: "var(--gold-pale)", borderColor: "var(--gold-pale)" } : {}}>
        {label}
      </span>
    </div>
    <h2
      className="f-display reveal d1"
      style={{
        fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
        fontWeight: 600,
        lineHeight: 1.15,
        color: light ? "var(--parchment)" : "var(--charcoal)",
        maxWidth: 860,
        margin: "0.75rem auto 0",
      }}
    >
      {heading}
    </h2>
    {sub && (
      <p
        className="reveal d2"
        style={{
          marginTop: "1rem",
          color: light ? "var(--gold-pale)" : "var(--text-muted)",
          maxWidth: 860,
          margin: "1rem auto 0",
          fontSize: "1rem",
          fontWeight: 300,
        }}
      >
        {sub}
      </p>
    )}
  </div>
);
