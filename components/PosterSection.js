import Image from "next/image";
import { SectionHeader } from "./Shared";

export function PosterSection() {
  return (
    <section id="poster" style={{ background: "var(--charcoal-2)", padding: "100px 80px" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <SectionHeader
          label="Batch 3"
          heading="Official Poster"
          sub="The journey begins here — share it, display it, carry the message forward."
          light
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "4rem", alignItems: "center" }} className="two-col">
          {/* Poster frame */}
          <div className="poster-frame reveal" style={{ aspectRatio: "3/4" }}>
            {/* Inner decorative border */}
            <div style={{ position: "absolute", inset: 16, border: "1px solid rgba(184,136,60,0.25)", zIndex: 1, pointerEvents: "none" }} />

            {/* Background pattern */}
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: `
                radial-gradient(ellipse 70% 50% at 50% 30%, rgba(184,136,60,0.10) 0%, transparent 60%),
                repeating-linear-gradient(45deg, rgba(184,136,60,0.03) 0, rgba(184,136,60,0.03) 1px, transparent 1px, transparent 50px),
                repeating-linear-gradient(-45deg, rgba(184,136,60,0.03) 0, rgba(184,136,60,0.03) 1px, transparent 1px, transparent 50px)
              `,
            }} />

      <Image 
        src="/poster.png"
        alt="Blinded Muslim Batch 3 Official Poster"
        fill
        unoptimized={true}
        style={{ objectFit: "contain" }}
      />
          </div>

          {/* Right — poster details */}
          <div>
            <div className="reveal" style={{ marginBottom: "2.5rem" }}>
              <p className="f-display" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", color: "var(--parchment)", lineHeight: 1.3, marginBottom: "1rem", fontStyle: "italic" }}>
                "Batch 3 marks a new chapter in structured Islamic clarity for university students."
              </p>
              <p style={{ color: "var(--text-faint)", fontSize: "0.9rem", lineHeight: 1.8 }}>
                After two successful batches across UET Taxila, HITEC University.<br />Batch 3 opens with expanded reach, deeper content, and a refined approach.
              </p>
            </div>

            {[
              { label: "Format", value: "4 sessions per month · 3 months" },
              { label: "Mode", value: "Structured discussion-based learning" },
              { label: "Audience", value: "University students only" },
              { label: "Language", value: "Urdu / English" },
              { label: "Batch Size", value: "Limited spots available" },
            ].map((item) => (
              <div
                key={item.label}
                className="reveal"
                style={{
                  display: "grid",
                  gridTemplateColumns: "130px 1fr",
                  gap: "1rem",
                  padding: "1rem 0",
                  borderBottom: "1px solid rgba(184,136,60,0.12)",
                  alignItems: "baseline",
                }}
              >
                <span style={{ color: "var(--gold)", fontSize: "0.75rem", letterSpacing: "0.10em", textTransform: "uppercase", fontWeight: 500 }}>{item.label}</span>
                <span style={{ color: "var(--parchment-2)", fontSize: "0.92rem", fontWeight: 300 }}>{item.value}</span>
              </div>
            ))}

            <div className="reveal" style={{ marginTop: "2.5rem" }}>
              <a href="#enroll" className="btn-primary">
                Reserve Your Spot →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
