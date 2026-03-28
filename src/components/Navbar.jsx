import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

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

  return (
    <>
      <div className="progress-bar" style={{ width: progress + '%' }} />
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ background: scrolled ? 'rgba(10,8,18,.85)' : 'transparent', backdropFilter: scrolled ? 'blur(12px)' : 'none', borderBottom: scrolled ? '1px solid rgba(167,139,250,.08)' : 'none' }}
      >
        <div className="wrapper flex items-center justify-between py-5">
          <motion.a 
            href="#" 
            whileHover={{ color: 'var(--accent)' }}
            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.8rem', color: 'var(--accent)', textDecoration: 'none', letterSpacing: '.1em' }}>
            uzmasulthana.dev
          </motion.a>
          <div className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <motion.div
                key={l.href}
                onMouseEnter={() => setHoveredLink(l.href)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{ position: 'relative', padding: '8px 0' }}
              >
                <motion.a
                  href={l.href}
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
                {/* Animated underline */}
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
                {/* Glow effect on hover */}
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
        </div>
      </motion.nav>
    </>
  )
}
