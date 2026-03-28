import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const tabs = {
  'frontend.ts': [
    { name: 'React.js', w: 88, kw: 'const' },
    { name: 'JavaScript (ES6+)', w: 85, kw: 'const' },
    { name: 'HTML5 / CSS3', w: 92, kw: 'const' },
    { name: 'Tailwind CSS', w: 85, kw: 'const' },
    { name: 'Responsive Design', w: 90, kw: 'const' },
    { name: 'Three.js', w: 65, kw: 'const' },
  ],
  'backend.ts': [
    { name: 'Node.js / Express', w: 78, kw: 'import' },
    { name: 'Spring Boot', w: 75, kw: 'import' },
    { name: 'Java (Core / OOP)', w: 80, kw: 'import' },
    { name: 'MySQL / PL-SQL', w: 75, kw: 'import' },
    { name: 'MongoDB', w: 72, kw: 'import' },
    { name: 'Socket.io', w: 70, kw: 'import' },
    { name: 'REST APIs / JDBC', w: 82, kw: 'import' },
  ],
  'design.ts': [
    { name: 'UI / UX Thinking', w: 80, kw: 'export' },
    { name: 'Mobile-First Design', w: 88, kw: 'export' },
    { name: 'CSS Animations', w: 85, kw: 'export' },
    { name: '3D UI (Three.js)', w: 65, kw: 'export' },
  ],
  'tools.ts': [
    { name: 'Git / GitHub', w: 90, kw: 'use' },
    { name: 'VS Code / Eclipse', w: 92, kw: 'use' },
    { name: 'Vercel', w: 88, kw: 'use' },
    { name: 'Postman', w: 82, kw: 'use' },
    { name: 'GitHub Copilot', w: 85, kw: 'use' },
    { name: 'ChatGPT / Claude', w: 90, kw: 'use' },
  ],
}

function SkillBar({ name, w, kw, ln, animate }) {
  const fillRef = useRef(null)
  useEffect(() => {
    if (fillRef.current) {
      fillRef.current.style.width = animate ? w + '%' : '0%'
    }
  }, [animate, w])

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '.6rem 1.2rem', borderBottom: '1px solid rgba(255,255,255,.03)' }}>
      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.6rem', color: 'rgba(255,255,255,.2)', width: 14 }}>{ln}</span>
      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.72rem', color: '#c084fc', width: 52, flexShrink: 0 }}>{kw}&nbsp;</span>
      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.72rem', color: 'var(--text)', width: 170, flexShrink: 0 }}>{name}</span>
      <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,.05)', borderRadius: 2, overflow: 'hidden' }}>
        <div ref={fillRef} className="skill-bar-fill" />
      </div>
      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.62rem', color: 'var(--accent)', width: 32, textAlign: 'right' }}>{w}%</span>
    </div>
  )
}

export default function Skills() {
  const [active, setActive] = useState('frontend.ts')
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="skills" style={{ position: 'relative', zIndex: 1 }}>
      <div className="wrapper">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .6 }}
          style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '.6rem' }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.7rem', letterSpacing: '.2em', color: 'var(--accent)', textTransform: 'uppercase' }}>02</span>
            <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          </div>
          <h2 style={{ fontFamily: "'Instrument Serif',serif", fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 400, letterSpacing: '-.02em' }}>Skills & Technologies</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .7, delay: .15 }}
          style={{ border: '1px solid var(--border)', background: 'rgba(22,18,42,.8)', backdropFilter: 'blur(12px)', overflow: 'hidden' }}>
          {/* IDE top bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 14px', background: 'rgba(255,255,255,.02)', borderBottom: '1px solid var(--border)' }}>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.65rem', color: 'var(--muted)', marginLeft: '1rem' }}>skills.ts — uzma-portfolio</span>
          </div>
          {/* Tabs */}
          <div style={{ display: 'flex', borderBottom: '1px solid var(--border)' }}>
            {Object.keys(tabs).map(tab => (
              <button key={tab} onClick={() => setActive(tab)}
                style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.65rem', padding: '.7rem 1.3rem', border: 'none', borderBottom: active === tab ? '2px solid var(--accent)' : '2px solid transparent', background: active === tab ? 'rgba(167,139,250,.06)' : 'transparent', color: active === tab ? 'var(--accent)' : 'var(--muted)', letterSpacing: '.08em', transition: 'all .2s' }}>
                {tab}
              </button>
            ))}
          </div>
          {/* Skills */}
          <div style={{ padding: '.5rem 0' }}>
            {tabs[active].map((s, i) => (
              <SkillBar key={s.name} {...s} ln={i + 1} animate={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
