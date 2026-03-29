import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [progress, setProgress] = useState(0)
  const [hoveredLink, setHoveredLink] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const el = document.documentElement
      const pct = (window.scrollY / (el.scrollHeight - el.clientHeight)) * 100
      setProgress(pct)

      const sections = ['about', 'skills', 'work', 'experience', 'contact']
      let cur = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 200) cur = id
      }
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <div className="progress-bar" style={{ width: progress + '%' }} />
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .6, ease: 'easeOut' }}
        className="md:fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ background: scrolled ? 'rgba(10,8,18,.85)' : 'transparent', backdropFilter: scrolled ? 'blur(12px)' : 'none', borderBottom: scrolled ? '1px solid rgba(167,139,250,.08)' : 'none' }}
      >
        <div className="wrapper flex items-center justify-between py-5">
          <motion.a 
            href="#" 
            whileHover={{ color: 'var(--accent)' }}
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.8rem', color: 'var(--accent)', textDecoration: 'none', letterSpacing: '.1em' }}>
            uzmasulthana.dev
          </motion.a>
          <div className="desktop-links hidden md:flex items-center gap-1">
            {links.map(l => (
              <motion.div
                key={l.href}
                onMouseEnter={() => setHoveredLink(l.href)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{ position: 'relative', padding: '8px 0' }}
              >
                <motion.a
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: "'JetBrains Mono',monospace", fontSize: '.65rem',
                    letterSpacing: '.15em', textTransform: 'uppercase', textDecoration: 'none',
                    color: active === l.href.slice(1) ? 'var(--accent)' : 'var(--muted2)',
                    transition: 'color .2s',
                    display: 'block',
                    padding: '0 12px',
                    position: 'relative',
                    zIndex: 1
                  }}
                  whileHover={{ color: 'var(--accent)' }}
                >
                  {l.label}
                </motion.a>
                <motion.div
                  initial={false}
                  animate={{
                    width: active === l.href.slice(1) || hoveredLink === l.href ? '100%' : '0%',
                    opacity: active === l.href.slice(1) || hoveredLink === l.href ? 1 : 0
                  }}
                  transition={{ duration: .3, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: 'linear-gradient(90deg, var(--accent), rgba(167,139,250,.4))',
                    borderRadius: 1
                  }}
                />
                <motion.div
                  animate={{
                    opacity: hoveredLink === l.href && active !== l.href.slice(1) ? 0.5 : 0
                  }}
                  transition={{ duration: .2 }}
                  style={{
                    position: 'absolute',
                    inset: -4,
                    background: 'radial-gradient(circle, rgba(167,139,250,.1), transparent)',
                    borderRadius: 4,
                    pointerEvents: 'none'
                  }}
                />
              </motion.div>
            ))}
          </div>

          <motion.a 
            href="https://github.com/UzmaSulthana27" 
            target="_blank" 
            rel="noreferrer"
            whileHover={{ 
              borderColor: 'var(--accent)',
              boxShadow: '0 0 20px rgba(167,139,250,.2)'
            }}
            style={{ 
              fontFamily: "'JetBrains Mono',monospace", 
              fontSize: '.65rem', 
              letterSpacing: '.12em', 
              textTransform: 'uppercase', 
              border: '1px solid rgba(255,255,255,.12)', 
              color: 'var(--text)', 
              padding: '.5rem 1.1rem', 
              textDecoration: 'none', 
              transition: 'all .25s',
              borderRadius: 4,
              cursor: 'pointer'
            }}>
            GitHub ↗
          </motion.a>

          <button
            className="hamburger md:hidden p-2 rounded border border-white/20 text-white/80 hover:text-white hover:border-white/40 ml-3"
            onClick={() => setMobileOpen(open => !open)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>&times;</span>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              zIndex: 200,
              background: 'rgba(10,8,18,0.97)',
              display: 'flex',
              flexDirection: 'column',
            }}
            className="md:hidden"
          >
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '2rem',
                border: 'none',
                background: 'transparent',
                color: 'var(--text)',
                cursor: 'pointer',
                fontSize: '1.4rem'
              }}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem', padding: '2rem' }}>
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * (i + 1), duration: 0.33 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'JetBrains Mono',monospace",
                    fontWeight: 400,
                    fontSize: 'clamp(1.1rem, 4vw, 1.6rem)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: 'var(--muted2)',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    width: '100%'
                  }}
                  whileHover={{ color: 'var(--text)' }}
                >
                  <span style={{ fontSize: '0.7rem', color: 'var(--accent)', marginRight: '0.5rem' }}>{String(i + 1).padStart(2, '0')}.</span>
                  {l.label.toUpperCase()}
                </motion.a>
              ))}

              {links.map((_, i) => (
                i < links.length - 1 ? (
                  <div key={`divider-${i}`} style={{ width: '120px', height: '1px', background: 'var(--border)' }} />
                ) : null
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
