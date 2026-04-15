"use client";
import { useState, useEffect } from "react";
import { Ornament } from "./Shared";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const navLinks = [
    ["#course", "Course"],
    ["#poster", "Batch 3"],
    ["#enroll", "Enroll"],
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1100,
          padding: "0 var(--section-ph)",
          height: 72,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: scrolled || isOpen ? "rgba(247,242,232,0.98)" : "transparent",
          borderBottom: scrolled || isOpen ? "1px solid var(--border)" : "none",
          backdropFilter: scrolled || isOpen ? "blur(16px)" : "none",
          transition: "all 0.4s cubic-bezier(.22,1,.36,1)",
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
            fontSize: "1.1rem", 
            fontWeight: 700, 
            letterSpacing: "0.04em", 
            color: "var(--charcoal)",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "baseline",
            gap: "6px"
          }}>
            Blinded 
            <span style={{ color: "var(--gold)", fontStyle: "italic", textTransform: "none", fontSize: "1.2rem", fontWeight: 400 }}>
              Muslim
            </span>
          </span>
        </div>

        {/* Desktop links */}
        <div className="nav-desktop" style={{ alignItems: "center", gap: "2.5rem" }}>
          {navLinks.map(([href, label]) => (
            <a
              key={label}
              href={href}
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: "0.8rem",
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                fontWeight: 600,
                transition: "color 0.2s",
              }}
            >
              {label}
            </a>
          ))}
          <a href="#enroll" className="btn-primary" style={{ padding: "10px 24px", fontSize: "0.75rem" }}>
            Join Now
          </a>
        </div>

        {/* Hamburger */}
        <div 
          className={`nav-mobile-toggle hamburger ${isOpen ? 'open' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div className={`mobile-overlay ${isOpen ? 'open' : ''}`}>
        {/* Branding in overlay */}
        <div style={{ marginBottom: "2rem", textAlign: "center", opacity: isOpen ? 1 : 0, transition: "opacity 0.6s 0.3s" }}>
          <Ornament />
          <p style={{ color: "var(--gold)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500 }}>
            Structured Islamic Clarity
          </p>
        </div>

        {navLinks.map(([href, label], i) => (
          <a key={label} href={href} onClick={() => setIsOpen(false)} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ fontSize: "0.65rem", color: "var(--gold)", letterSpacing: "0.1em", fontWeight: 700 }}>0{i + 1}</span>
            {label}
          </a>
        ))}
        
        <div style={{ marginTop: "2rem", opacity: isOpen ? 1 : 0, transition: "opacity 0.6s 0.6s" }}>
          <a href="#enroll" className="btn-primary" onClick={() => setIsOpen(false)} style={{ padding: "16px 48px" }}>
            Join Batch 3 Now
          </a>
        </div>
      </div>
    </>
  );
}
