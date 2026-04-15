import { SectionHeader } from "./Shared";

export function CredibilitySection() {
  const unis = [
    { name: "UET Taxila", sub: "Batch 01" },
    { name: "HITEC University", sub: "Batch 02" },
    { name: "University of Chenab", sub: "Launching" },
  ];
  return (
    <section style={{ background: "var(--parchment-2)", padding: "100px 80px" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <SectionHeader
          label="Credibility"
          heading={
            <>
              Built Inside <span style={{ color: "var(--gold)", fontStyle: "italic" }}>Universities</span>, For <span style={{ color: "var(--gold)", fontStyle: "italic" }}>University</span> Minds
            </>
          }
          sub="This is not a distant lecture series. It is a response to real intellectual and spiritual struggles faced by students today."
        />

        {/* University cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginBottom: "4rem" }} className="three-col">
          {unis.map((u, i) => (
            <div
              key={u.name}
              className={`reveal d${i + 1}`}
              style={{
                background: "var(--white)",
                border: "1px solid var(--border)",
                padding: "2.5rem 2rem",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "var(--gold)" }} />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ marginBottom: "1.5rem" }}>
                <path d="M12 2L22 12L12 22L2 12L12 2Z" stroke="var(--gold)" strokeWidth="1"/>
                <circle cx="12" cy="12" r="2" fill="var(--gold)" fillOpacity="0.3"/>
              </svg>
              <h3 className="f-display" style={{ 
                fontSize: "1.25rem", 
                fontWeight: 700, 
                color: "var(--charcoal)", 
                marginBottom: "0.5rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                lineHeight: 1.2
              }}>
                {u.name}
              </h3>
              <p style={{ 
                color: "var(--gold)", 
                fontSize: "0.72rem", 
                letterSpacing: "0.08em", 
                textTransform: "uppercase",
                fontWeight: 600,
                opacity: 0.8
              }}>
                {u.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Quote from CBS President */}
        <div className="reveal" style={{
          padding: "2.5rem 3rem",
          background: "var(--charcoal)",
          border: "1px solid var(--border)",
          position: "relative",
          maxWidth: 720,
          margin: "0 auto",
        }}>
          <span className="f-display" style={{ position: "absolute", top: -20, left: 32, fontSize: "5rem", color: "var(--gold)", lineHeight: 1, opacity: 0.4 }}>"</span>
          <p className="f-display" style={{ color: "var(--parchment)", fontSize: "1.2rem", fontStyle: "italic", lineHeight: 1.65, position: "relative", zIndex: 1 }}>
            The President of CBS personally participated in Batch 02 and strongly advocated bringing this course to the University of Chenab, considering it essential for university students.
          </p>
          <div style={{ marginTop: "1.25rem", display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: 32, height: 1, background: "var(--gold)" }} />
            <p style={{ color: "var(--text-faint)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>President, CBS</p>
          </div>
        </div>
      </div>
    </section>
  );
}
