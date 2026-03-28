import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const links = [
  {
    label: 'Email',
    value: 'uzmasulthana2725@gmail.com',
    href: 'mailto:uzmasulthana2725@gmail.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91 85489 29280',
    href: 'tel:+918548929280',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/uzma-sulthana-s',
    href: 'https://linkedin.com/in/uzma-sulthana-s',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/UzmaSulthana27',
    href: 'https://github.com/UzmaSulthana27',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
]

const inputStyle = {
  width: '100%',
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  color: 'var(--text)',
  padding: '.8rem 1rem',
  fontFamily: "'Syne',sans-serif",
  fontSize: '.9rem',
  outline: 'none',
}

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="contact" style={{ position: 'relative', zIndex: 1, minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(167,139,250,.06), transparent)', pointerEvents: 'none' }} />
      <div className="wrapper" style={{ width: '100%' }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .6 }}
          style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '.6rem' }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.7rem', letterSpacing: '.2em', color: 'var(--accent)', textTransform: 'uppercase' }}>05</span>
            <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: .7, delay: .1 }}>
            <h2 style={{ fontFamily: "'Instrument Serif',serif", fontSize: 'clamp(2.5rem,5vw,4.5rem)', fontWeight: 400, letterSpacing: '-.03em', lineHeight: 1.0, marginBottom: '1.5rem' }}>
              Let's build<br />
              something <em style={{ background: 'linear-gradient(90deg,var(--accent),var(--accent3))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>brilliant.</em>
            </h2>
            <p style={{ color: 'var(--muted2)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
              I'm actively looking for entry-level full stack roles. If you have an opportunity or just want to connect — my inbox is open.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {links.map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                  className="contact-link"
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.2rem', border: '1px solid var(--border)', textDecoration: 'none', color: 'var(--text)' }}>
                  <div style={{ width: 34, height: 34, background: 'rgba(167,139,250,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                    {l.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.58rem', color: 'var(--muted)', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: 2 }}>{l.label}</div>
                    <div style={{ fontSize: '.85rem' }}>{l.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: .7, delay: .2 }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '.8rem' }} onSubmit={e => e.preventDefault()}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.8rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.35rem' }}>
                  <label style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.6rem', color: 'var(--muted)', letterSpacing: '.15em', textTransform: 'uppercase' }}>Name</label>
                  <input style={inputStyle} placeholder="Your name" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.35rem' }}>
                  <label style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.6rem', color: 'var(--muted)', letterSpacing: '.15em', textTransform: 'uppercase' }}>Email</label>
                  <input style={inputStyle} type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.35rem' }}>
                <label style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.6rem', color: 'var(--muted)', letterSpacing: '.15em', textTransform: 'uppercase' }}>Subject</label>
                <input style={inputStyle} placeholder="What's this about?" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.35rem' }}>
                <label style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.6rem', color: 'var(--muted)', letterSpacing: '.15em', textTransform: 'uppercase' }}>Message</label>
                <textarea style={{ ...inputStyle, height: 130, resize: 'none' }} placeholder="Tell me about the opportunity..." />
              </div>
              <button type="submit"
                style={{ width: '100%', padding: '.9rem', background: 'var(--accent)', color: 'var(--bg)', fontFamily: "'JetBrains Mono',monospace", fontSize: '.75rem', fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', border: 'none', transition: 'background .25s' }}>
                Send Message →
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
