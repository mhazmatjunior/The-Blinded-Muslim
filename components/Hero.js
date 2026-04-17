import Image from "next/image";
import { Ornament } from "./Shared";

export function Hero() {
  return (
    <section
      className="texture-bg"
      style={{
        padding: "calc(var(--section-pv) + 60px) var(--section-ph) var(--section-pv)",
        background: `
          radial-gradient(ellipse 90% 70% at 60% 40%, rgba(184,136,60,0.06) 0%, transparent 65%),
          var(--parchment)
        `,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
        <div 
          className="two-col"
          style={{ 
            display: "grid", 
            gridTemplateColumns: "1.2fr 1fr", 
            gap: "4rem", 
            alignItems: "center" 
          }}
        >
          {/* Left — text */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div className="reveal" style={{ marginBottom: "1.5rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Ornament />
              <span className="label-tag">Batch 3 · Now Open</span>
            </div>

            {/* Arabic */}
            <p
              className="f-arabic reveal d1"
              style={{
                fontSize: "clamp(1.4rem, 4vw, 1.8rem)",
                color: "var(--gold)",
                letterSpacing: "0.04em",
                marginBottom: "1.25rem",
                lineHeight: 1.6,
              }}
            >
              اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
            </p>

            <h1
              className="f-display reveal d2"
              style={{
                fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "var(--charcoal)",
                marginBottom: "1.5rem",
              }}
            >
              Reconnecting
              <br />
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Students</em> with Islam
              <br />
              in a World of Confusion
            </h1>

            <p
              className="reveal d3"
              style={{
                color: "var(--text-muted)",
                fontSize: "1.02rem",
                maxWidth: 460,
                margin: "0 auto 2.5rem",
                fontWeight: 300,
              }}
            >
              A structured 3-month journey designed to help students rediscover
              clarity, purpose, and the true understanding of Islam in today's intellectual
              and ideological chaos.
            </p>

            {/* Trust signals */}
            <div className="reveal d4" style={{ display: "flex", gap: "2rem", marginBottom: "2.5rem", flexWrap: "wrap", justifyContent: "center" }}>
              {[
                { num: "300+", label: "Students Enrolled" },
                { num: "3rd", label: "Batch Running" },
                { num: "3", label: "Universities" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="f-display" style={{ fontSize: "2rem", fontWeight: 700, color: "var(--charcoal)", lineHeight: 1 }}>{s.num}</p>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</p>
                </div>
              ))}
            </div>

            <div className="reveal d5" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
              <a href="#enroll" className="btn-primary">Join Batch 3 Now →</a>
              <a href="#course" className="btn-ghost">View Course</a>
            </div>
          </div>

          {/* Right — decorative framed visual */}
          <div className="reveal d3" style={{ position: "relative" }}>
            {/* Offset frame */}
            <div style={{
              position: "absolute",
              inset: -12,
              border: "1px solid var(--border)",
              zIndex: 0,
            }} />
            <div style={{
              position: "relative",
              zIndex: 1,
              background: "var(--charcoal)",
              aspectRatio: "3/4",
              overflow: "hidden",
            }}>
              <Image 
                src="/poster.png"
                alt="Blinded Muslim Batch 3"
                fill
                priority
                unoptimized={true}
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
