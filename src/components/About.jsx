import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  { num: '8.9', label: 'CGPA / 10.0' },
  { num: '3+', label: 'Projects Built' },
  { num: '12+', label: 'Technologies' },
  { num: '2', label: 'Certifications' },
]

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="about" style={{ position: 'relative', zIndex: 1 }}>
      <div className="wrapper">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .6 }}
          style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '.6rem' }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.7rem', letterSpacing: '.2em', color: 'var(--accent)', textTransform: 'uppercase' }}>01</span>
            <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          </div>
          <h2 style={{ fontFamily: "'Instrument Serif',serif", fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 400, letterSpacing: '-.02em' }}>About Me</h2>
        </motion.div>

        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '5rem', alignItems: 'start' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: .7, delay: .1 }}>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--muted2)', marginBottom: '1.2rem' }}>
              Hey! I'm Uzma — a <strong style={{ color: 'var(--text)' }}>Full Stack Developer</strong> from Bangalore
              who loves building things that are both <em style={{ color: 'var(--accent)' }}>functional and beautiful</em>.
              I recently graduated with a BCA from Sri Aurobindo College with a CGPA of <strong style={{ color: 'var(--text)' }}>8.9</strong>.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--muted2)', marginBottom: '1.2rem' }}>
              I'm comfortable across the full stack — from crafting <strong style={{ color: 'var(--text)' }}>responsive React UIs</strong> with Tailwind
              to building <strong style={{ color: 'var(--text)' }}>REST APIs with Spring Boot and Node.js</strong>.
              I did my frontend internship at JSpiders where I built a full e-commerce site from scratch.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--muted2)', marginBottom: '2rem' }}>
              I'm also curious about AI tooling — I hold an <strong style={{ color: 'var(--text)' }}>Anthropic AI Fluency Certification</strong> and
              actively use GitHub Copilot in my workflow. Currently seeking an <em style={{ color: 'var(--accent)' }}>entry-level role</em> where I can grow and contribute.
            </p>
            <a href="#work" className="btn-ghost" style={{ display: 'inline-flex' }}>View Projects ↓</a>
          </motion.div>

          <motion.div className="about-stats" initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: .7, delay: .2 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: .3 + i * .1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(167,139,250,.15)' }}
                style={{ 
                  background: 'var(--surface)', 
                  border: '1px solid var(--border)', 
                  padding: '1.5rem', 
                  textAlign: 'center', 
                  minWidth: 120,
                  transition: 'all .3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                {/* Animated background glow on hover */}
                <motion.div 
                  style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: 'radial-gradient(circle at 50% 0%, rgba(167,139,250,.1), transparent)', 
                    pointerEvents: 'none',
                    opacity: 0
                  }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: .3 }}
                />
                <motion.div style={{ position: 'relative', zIndex: 1 }}>
                  <motion.div 
                    style={{ fontFamily: "'Instrument Serif',serif", fontSize: '2.2rem', color: 'var(--accent)', marginBottom: '.3rem' }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: .2 }}
                  >
                    {s.num}
                  </motion.div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.6rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', transition: 'color .3s' }}>{s.label}</div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
