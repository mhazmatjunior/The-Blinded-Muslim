import Image from "next/image";
import { Ornament } from "./Shared";

export function Hero() {
  return (
    <section
      className="texture-bg"
      style={{
        minHeight: "100vh",
        background: `
          radial-gradient(ellipse 90% 70% at 60% 40%, rgba(184,136,60,0.06) 0%, transparent 65%),
          var(--parchment)
        `,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        gap: "4rem",
        padding: "120px 80px 80px",
        maxWidth: 1280,
        margin: "0 auto",
      }}
    >
      {/* Left — text */}
      <div>
        <div className="reveal" style={{ marginBottom: "1.5rem" }}>
          <Ornament />
          <span className="label-tag">Batch 3 · Now Open</span>
        </div>

        {/* Arabic */}
        <p
          className="f-arabic reveal d1"
          style={{
            fontSize: "1.8rem",
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
            fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
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
            marginBottom: "2.5rem",
            fontWeight: 300,
          }}
        >
          A structured 3-month journey designed to help university students rediscover
          clarity, purpose, and the true understanding of Islam in today's intellectual
          and ideological chaos.
        </p>

        {/* Trust signals */}
        <div className="reveal d4" style={{ display: "flex", gap: "2rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
          {[
            { num: "300+", label: "Students Enrolled" },
            { num: "3rd", label: "Batch Running" },
            { num: "3", label: "Universities" },
          ].map((s) => (
            <div key={s.label}>
              <p className="f-display" style={{ fontSize: "2rem", fontWeight: 700, color: "var(--charcoal)", lineHeight: 1 }}>{s.num}</p>
              <p style={{ fontSize: "0.75rem", color: "var(--text-faint)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>{s.label}</p>
            </div>
          ))}
        </div>

        <div className="reveal d5" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
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
    </section>
  );
}
