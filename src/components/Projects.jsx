import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    num: '01',
    featured: true,
    title: 'BuddyBot',
    subtitle: 'AI Collaboration Platform',
    desc: 'A real-time team chat platform (Slack-style) with an AI assistant powered by Hugging Face DialoGPT. Features WebSocket messaging, file sharing, typing indicators, JWT auth — and a 3D animated robot built with Three.js on the login screen.',
    tags: ['React', 'Node.js', 'Socket.io', 'MySQL', 'Three.js', 'JWT', 'Hugging Face AI'],
    github: 'https://github.com/UzmaSulthana27/BuddyBot',
    live: null,
    url: 'github.com/UzmaSulthana27/BuddyBot',
    mockup: 'buddybot',
    gradient: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(139,92,246,.12), transparent)',
    orbColor: 'rgba(139,92,246,.08)',
    orbPos: { right: '10%', top: '10%' },
  },
  {
    num: '02',
    title: 'ShopWave',
    subtitle: 'E-Commerce Platform',
    desc: 'A full-featured React e-commerce app with product catalog, cart management, checkout flow, and API integration. Built during my JSpiders internship — fully deployed and live.',
    tags: ['React.js', 'Vite', 'JavaScript', 'CSS3', 'REST API', 'Node.js'],
    github: 'https://github.com/UzmaSulthana27/ecommerce',
    live: 'https://shopwave-e.vercel.app',
    url: 'shopwave-e.vercel.app',
    mockup: 'ecommerce',
    gradient: 'radial-gradient(ellipse 80% 60% at 30% 50%, rgba(192,132,252,.1), transparent)',
    orbColor: 'rgba(192,132,252,.07)',
    orbPos: { left: '8%', bottom: '15%' },
  },
  {
    num: '03',
    title: 'ImgNest',
    subtitle: 'Image Explorer',
    desc: 'A sleek image discovery and download app powered by the Unsplash API. Search millions of high-quality photos, preview them in a responsive masonry grid, and download instantly.',
    tags: ['React.js', 'Vite', 'Unsplash API', 'JavaScript', 'CSS3'],
    github: 'https://github.com/UzmaSulthana27/ImgNest',
    live: 'https://imgnest.netlify.app',
    url: 'imgnest.netlify.app',
    mockup: 'imgnest',
    gradient: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(244,114,182,.08), transparent)',
    orbColor: 'rgba(244,114,182,.06)',
    orbPos: { right: '12%', bottom: '20%' },
  },
]

function TiltCard({ project, reverse }) {
  const cardRef = useRef(null)
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    let raf, tx = 0, ty = 0
    const MAX = 6

    const onMove = (e) => {
      const r = card.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      tx = x * MAX * 2
      ty = -y * MAX * 2
    }
    const onLeave = () => { tx = 0; ty = 0 }

    let cx = 0, cy = 0
    const animate = () => {
      cx += (tx - cx) * 0.08
      cy += (ty - cy) * 0.08
      card.style.transform = `perspective(1000px) rotateY(${cx}deg) rotateX(${cy}deg)`
      raf = requestAnimationFrame(animate)
    }
    card.addEventListener('mousemove', onMove)
    card.addEventListener('mouseleave', onLeave)
    raf = requestAnimationFrame(animate)
    return () => {
      card.removeEventListener('mousemove', onMove)
      card.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 60 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .8, ease: 'easeOut' }}
      style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'center', overflow: 'hidden', borderTop: '1px solid var(--border)' }}>

      {/* BG gradient */}
      <div style={{ position: 'absolute', inset: 0, background: project.gradient, pointerEvents: 'none' }} />

      {/* Giant ambient number */}
      <div style={{ position: 'absolute', fontFamily: "'Instrument Serif',serif", fontSize: '22vw', fontWeight: 400, color: 'rgba(167,139,250,.03)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none', right: reverse ? 'auto' : '2%', left: reverse ? '2%' : 'auto', top: '50%', transform: 'translateY(-50%)' }}>
        {project.num}
      </div>

      {/* Floating orb */}
      <div style={{ position: 'absolute', width: 280, height: 280, borderRadius: '50%', background: project.orbColor, filter: 'blur(60px)', animation: 'float-orb 8s ease-in-out infinite', pointerEvents: 'none', ...project.orbPos }} />

      <div className="wrapper" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div ref={cardRef} style={{ display: 'grid', gridTemplateColumns: reverse ? 'auto 1fr' : '1fr auto', gap: '4rem', alignItems: 'center', willChange: 'transform' }}>

          {/* Info */}
          <div style={{ order: reverse ? 2 : 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.65rem', color: 'var(--muted)', letterSpacing: '.15em' }}>Project {project.num}</span>
              {project.featured && <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.55rem', letterSpacing: '.15em', background: 'rgba(167,139,250,.15)', border: '1px solid rgba(167,139,250,.3)', color: 'var(--accent)', padding: '2px 8px' }}>FEATURED</span>}
            </div>
            <h3 style={{ fontFamily: "'Instrument Serif',serif", fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 400, letterSpacing: '-.02em', lineHeight: 1.1, marginBottom: '1.2rem' }}>
              {project.title}<br /><em style={{ color: 'var(--accent)' }}>{project.subtitle}</em>
            </h3>
            <p style={{ color: 'var(--muted2)', lineHeight: 1.8, marginBottom: '1.5rem', maxWidth: 460 }}>{project.desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '2rem' }}>
              {project.tags.map(t => (
                <span key={t} style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.6rem', letterSpacing: '.1em', border: '1px solid var(--border)', color: 'var(--muted2)', padding: '4px 10px' }}>{t}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: "'JetBrains Mono',monospace", fontSize: '.65rem', letterSpacing: '.1em', color: 'var(--accent)', textDecoration: 'none', border: '1px solid rgba(167,139,250,.3)', padding: '.6rem 1.2rem', transition: 'all .25s' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  Live Demo
                </a>
              )}
              <a href={project.github} target="_blank" rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: "'JetBrains Mono',monospace", fontSize: '.65rem', letterSpacing: '.1em', color: 'var(--muted2)', textDecoration: 'none', border: '1px solid var(--border)', padding: '.6rem 1.2rem', transition: 'all .25s' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                GitHub
              </a>
            </div>
          </div>

          {/* Browser mockup */}
          <div style={{ order: reverse ? 1 : 2, width: 420, maxWidth: '100%' }}>
            <div style={{ border: '1px solid rgba(167,139,250,.15)', borderRadius: 8, overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,.4)', transform: `rotateY(${reverse ? '6deg' : '-6deg'}) rotateX(3deg)`, transition: 'box-shadow .4s' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 14px', background: 'rgba(22,18,42,.9)', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.55rem', color: 'var(--muted)', marginLeft: 8 }}>{project.url}</span>
              </div>
              <img src={`/Projects/${project.mockup}.png`} alt={project.title} style={{ width: '100%', height: 240, objectFit: 'cover', display: 'block' }} />
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="work" style={{ position: 'relative', zIndex: 1, padding: '6rem 0 0' }}>
      <div className="wrapper">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .6 }}
          style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '.6rem' }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.7rem', letterSpacing: '.2em', color: 'var(--accent)', textTransform: 'uppercase' }}>03</span>
            <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          </div>
          <h2 style={{ fontFamily: "'Instrument Serif',serif", fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 400, letterSpacing: '-.02em' }}>Selected Work</h2>
        </motion.div>
      </div>
      {projects.map((p, i) => <TiltCard key={p.num} project={p} reverse={i % 2 === 1} />)}
    </section>
  )
}
