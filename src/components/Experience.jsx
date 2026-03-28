import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const items = [
  {
    type: 'Internship',
    typeColor: 'var(--accent)',
    date: 'Feb 2025 — May 2025',
    role: 'Frontend Developer Intern',
    company: 'JSpiders, Bengaluru',
    desc: 'Designed and developed a fully responsive e-commerce website from scratch using HTML5, CSS3, and JavaScript. Built key pages including Home, Product Listing, and About with consistent navigation and a mobile-first design approach.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Mobile-First'],
  },
  {
    type: 'Certification',
    typeColor: 'var(--accent2)',
    date: '2025',
    role: 'Java Full Stack Development',
    company: 'JSpiders — Certification Course',
    desc: 'Completed an intensive full stack course covering Core Java, OOP, Collections, Spring Boot, Servlets, JDBC, and React.js. Built hands-on projects applying full stack concepts end-to-end.',
    tags: ['Java', 'Spring Boot', 'Servlets / JDBC', 'React.js'],
  },
  {
    type: 'Certification',
    typeColor: 'var(--accent2)',
    date: '2026',
    role: 'AI Fluency Certification',
    company: 'Anthropic',
    desc: "Completed Anthropic's AI Fluency certification covering AI concepts, tools, and responsible application of AI in real-world engineering workflows.",
    tags: ['AI Concepts', 'Responsible AI', 'AI Tooling'],
  },
  {
    type: 'Education',
    typeColor: 'var(--accent3)',
    date: '2022 — 2025',
    role: 'Bachelor of Computer Applications (BCA)',
    company: 'Sri Aurobindo College · Bangalore University',
    desc: 'Graduated with a CGPA of 8.9 / 10.0. Focused on web technologies, data structures, and software engineering. Built multiple projects including a phishing detection system and an AI-powered team collaboration platform.',
    tags: ['BCA', 'CGPA 8.9', 'Web Technologies', 'Bangalore University'],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="experience" style={{ position: 'relative', zIndex: 1 }}>
      <div className="wrapper">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .6 }}
          style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '.6rem' }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.7rem', letterSpacing: '.2em', color: 'var(--accent)', textTransform: 'uppercase' }}>04</span>
            <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          </div>
          <h2 style={{ fontFamily: "'Instrument Serif',serif", fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 400, letterSpacing: '-.02em' }}>Experience</h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {items.map((item, i) => {
            const [itemRef, itemInView] = useInView({ threshold: 0.1, triggerOnce: true })
            return (
              <motion.div key={i} ref={itemRef}
                initial={{ opacity: 0, x: -30 }} animate={itemInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: .6, delay: i * .1 }}
                style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '2rem', padding: '2rem 0', borderBottom: '1px solid var(--border)', position: 'relative', paddingLeft: '2rem' }}>

                {/* Timeline line */}
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 1, background: 'var(--border)' }} />
                <div style={{ position: 'absolute', left: -4, top: '2.5rem', width: 9, height: 9, borderRadius: '50%', background: item.typeColor, border: '2px solid var(--bg)', boxShadow: `0 0 12px ${item.typeColor}` }} />

                {/* Left: date */}
                <div>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.58rem', letterSpacing: '.12em', textTransform: 'uppercase', border: `1px solid`, borderColor: item.typeColor, color: item.typeColor, padding: '3px 8px', display: 'inline-block', marginBottom: '0.6rem' }}>{item.type}</span>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.65rem', color: 'var(--muted)', letterSpacing: '.05em' }}>{item.date}</div>
                </div>

                {/* Right: content */}
                <div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text)', marginBottom: '.2rem' }}>{item.role}</div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.7rem', color: 'var(--accent)', letterSpacing: '.05em', marginBottom: '.8rem' }}>{item.company}</div>
                  <p style={{ color: 'var(--muted2)', lineHeight: 1.75, fontSize: '.9rem', marginBottom: '1rem' }}>{item.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {item.tags.map(t => (
                      <span key={t} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.58rem', letterSpacing: '.08em', border: '1px solid var(--border)', color: 'var(--muted)', padding: '3px 8px' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
