const techs = ['React.js','JavaScript','Tailwind CSS','Node.js','Express.js','Spring Boot','Java','MySQL','MongoDB','Git / GitHub','Socket.io','Vercel','Postman','GitHub Copilot']

export default function Marquee() {
  const items = [...techs, ...techs]
  return (
    <div className="marquee-wrap" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', overflow: 'hidden', padding: '1.1rem 0', background: 'rgba(167,139,250,.02)' }}>
      <div className="marquee-track">
        {items.map((t, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', padding: '0 2rem', fontFamily: "'JetBrains Mono',monospace", fontSize: '.7rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted2)', whiteSpace: 'nowrap' }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', flexShrink: 0 }} />
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
