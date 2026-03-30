import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: .7, delay, ease: 'easeOut' }
})

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', zIndex: 1, padding: '0 2rem' }}>
      <div className="hero-grid" style={{ maxWidth: 1200, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: '4rem' }}>

        {/* Left: Text */}
        <div>
          <motion.div {...fade(0.1)}
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.7rem', letterSpacing: '.25em', color: 'var(--accent)', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
            <span style={{ width: 28, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
            Full Stack Developer
            <span style={{ background: 'var(--accent)', color: 'var(--bg)', padding: '2px 10px', fontSize: '.6rem', letterSpacing: '.15em' }}>● OPEN TO WORK</span>
          </motion.div>

          <motion.h1 {...fade(0.25)}
            style={{ fontFamily: "'Instrument Serif',serif", fontSize: 'clamp(3.5rem,8vw,7rem)', fontWeight: 400, lineHeight: 1.0, letterSpacing: '-.03em', marginBottom: '1.5rem' }}>
            Uzma<br />
            <em style={{ background: 'linear-gradient(90deg,var(--accent),var(--accent3))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Sulthana S.
            </em>
          </motion.h1>

          <motion.p {...fade(0.4)}
            style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--muted2)', maxWidth: 480, marginBottom: '2.5rem' }}>
            I'm a <strong style={{ color: 'var(--text)' }}>Full Stack Developer</strong> who crafts seamless digital experiences —
            from pixel-perfect React UIs to robust Spring Boot backends.
            Fresh BCA graduate from Sri Aurobindo College, Bangalore · CGPA 8.9.
          </motion.p>

          <motion.div {...fade(0.55)} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#work" className="btn-primary">
              See My Work
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="#contact" className="btn-ghost">Get In Touch</a>
          </motion.div>
        </div>

        {/* Right: Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }} 
          animate={{ opacity: 1, scale: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          style={{ flexShrink: 0, position: 'relative' }}
        >
          <motion.img 
            src="/hero-image.png" 
            alt="Uzma Sulthana - Full Stack Developer"
            style={{ 
              width: '100%', 
              height: 'auto', 
              maxWidth: 550, 
              display: 'block',
              filter: 'drop-shadow(0 20px 40px rgba(124, 111, 154, 0.15))'
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, delay: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

      </div>

      {/* Scroll hint */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: 1, height: 60, background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.6rem', color: 'var(--muted)', letterSpacing: '.15em', textTransform: 'uppercase' }}>Scroll</span>
      </motion.div>
    </section>
  )
}
