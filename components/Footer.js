export function Footer() {
  return (
    <footer style={{
      background: "var(--charcoal-3)",
      padding: "2.5rem 80px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "1rem",
      borderTop: "1px solid rgba(184,136,60,0.12)",
    }}>
      <div className="f-display" style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
          <rect x="8.5" y="0.707" width="11.5" height="11.5" transform="rotate(45 8.5 0.707)" fill="none" stroke="var(--gold)" strokeWidth="1"/>
          <rect x="8.5" y="3.536" width="7" height="7" transform="rotate(45 8.5 3.536)" fill="var(--gold)" opacity="0.35"/>
        </svg>
        <span style={{ color: "var(--parchment-3)", fontWeight: 600, fontSize: "0.95rem" }}>Blinded Muslim Course</span>
      </div>
      <p style={{ color: "var(--text-faint)", fontSize: "0.78rem", letterSpacing: "0.06em" }}>Batch 3 · For University Students · Structured Islamic Clarity</p>
    </footer>
  );
}
