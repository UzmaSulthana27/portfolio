export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '2rem 0', position: 'relative', zIndex: 1 }}>
      <div className="wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.65rem', color: 'var(--muted)', letterSpacing: '.08em' }}>
          © 2026 Uzma Sulthana S — All rights reserved
        </span>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.65rem', color: 'var(--muted)', letterSpacing: '.08em' }}>
          Designed & Built with <span style={{ color: 'var(--accent2)' }}>♥</span> in Bengaluru
        </span>
      </div>
    </footer>
  )
}
