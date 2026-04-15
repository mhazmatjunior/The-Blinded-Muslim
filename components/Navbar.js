"use client";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        padding: "0 48px",
        height: 68,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(247,242,232,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        transition: "all 0.35s",
      }}
    >
      {/* Logo */}
      <div className="f-display" style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L22 12L12 22L2 12L12 2Z" stroke="var(--gold)" strokeWidth="1.5"/>
          <path d="M12 7L17 12L12 17L7 12L12 7Z" fill="var(--gold)" fillOpacity="0.25"/>
          <circle cx="12" cy="12" r="1.5" fill="var(--gold)"/>
        </svg>
        <span style={{ 
          fontSize: "1.15rem", 
          fontWeight: 600, 
          letterSpacing: "0.04em", 
          color: "var(--charcoal)",
          textTransform: "uppercase",
          display: "flex",
          alignItems: "baseline",
          gap: "6px"
        }}>
          Blinded 
          <span style={{ 
            color: "var(--gold)", 
            fontStyle: "italic", 
            textTransform: "none",
            fontSize: "1.25rem",
            fontWeight: 400
          }}>
            Muslim
          </span>
        </span>
      </div>

      {/* Nav links */}
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        {[["#course", "Course"], ["#poster", "Batch 3"], ["#enroll", "Enroll"]].map(([href, label]) => (
          <a
            key={label}
            href={href}
            style={{
              color: "var(--text-muted)",
              textDecoration: "none",
              fontSize: "0.82rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--text-muted)")}
          >
            {label}
          </a>
        ))}
        <a href="#enroll" className="btn-primary" style={{ padding: "10px 28px", fontSize: "0.78rem" }}>
          Join Now
        </a>
      </div>
    </nav>
  );
}
