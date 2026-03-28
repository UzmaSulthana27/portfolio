import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W, H, raf
    const stars = [], nodes = [], nebula = []
    let mouse = { x: -9999, y: -9999 }
    let shooters = []
    let lastShoot = 0

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', e => { mouse.x = e.clientX / W; mouse.y = e.clientY / H })

    // Stars
    for (let i = 0; i < 220; i++) {
      stars.push({
        x: Math.random(), y: Math.random(),
        r: Math.random() * 1.2 + .3,
        alpha: Math.random() * .6 + .2,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * .0008 + .0002
      })
    }
    // Nebula blobs
    for (let i = 0; i < 18; i++) {
      nebula.push({
        x: Math.random(), y: Math.random(),
        r: Math.random() * 180 + 80,
        vx: (Math.random() - .5) * .00006, vy: (Math.random() - .5) * .00006,
        hue: Math.random() < .5 ? '139,92,246' : '192,132,252'
      })
    }
    // Nodes
    for (let i = 0; i < 55; i++) {
      nodes.push({
        x: Math.random(), y: Math.random(),
        vx: (Math.random() - .5) * .0003, vy: (Math.random() - .5) * .0003,
        r: Math.random() * 1.5 + .5
      })
    }

    let t = 0
    const draw = (now) => {
      ctx.clearRect(0, 0, W, H)
      t += 1

      // Nebula
      nebula.forEach(n => {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0) n.x = 1; if (n.x > 1) n.x = 0
        if (n.y < 0) n.y = 1; if (n.y > 1) n.y = 0
        const g = ctx.createRadialGradient(n.x*W,n.y*H,0,n.x*W,n.y*H,n.r)
        g.addColorStop(0, `rgba(${n.hue},.022)`)
        g.addColorStop(1, 'transparent')
        ctx.fillStyle = g
        ctx.beginPath(); ctx.arc(n.x*W,n.y*H,n.r,0,Math.PI*2); ctx.fill()
      })

      // Stars
      stars.forEach(s => {
        s.phase += s.speed
        const a = s.alpha * (.7 + .3 * Math.sin(s.phase))
        ctx.globalAlpha = a
        ctx.fillStyle = '#fff'
        ctx.beginPath(); ctx.arc(s.x*W, s.y*H, s.r, 0, Math.PI*2); ctx.fill()
      })
      ctx.globalAlpha = 1

      // Nodes
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > 1) n.vx *= -1
        if (n.y < 0 || n.y > 1) n.vy *= -1
        const dx = n.x - mouse.x, dy = n.y - mouse.y
        const dist = Math.sqrt(dx*dx + dy*dy)
        if (dist < .12) {
          const f = (.12 - dist) / .12 * .0004
          n.vx += dx * f; n.vy += dy * f
        }
      })
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i+1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          const dx = (a.x-b.x)*W, dy = (a.y-b.y)*H
          const d = Math.sqrt(dx*dx+dy*dy)
          if (d < 120) {
            ctx.globalAlpha = (1-d/120) * .15
            ctx.strokeStyle = 'rgba(167,139,250,1)'
            ctx.lineWidth = .8
            ctx.beginPath(); ctx.moveTo(a.x*W,a.y*H); ctx.lineTo(b.x*W,b.y*H); ctx.stroke()
          }
        }
        ctx.globalAlpha = .4
        ctx.fillStyle = 'rgba(167,139,250,.8)'
        ctx.beginPath(); ctx.arc(nodes[i].x*W,nodes[i].y*H,nodes[i].r,0,Math.PI*2); ctx.fill()
      }
      ctx.globalAlpha = 1

      // Shooting stars
      if (now - lastShoot > 2800) {
        lastShoot = now
        const sy = Math.random() * H * .4
        shooters.push({ x: -10, y: sy, vx: 6, vy: 2.2, life: 0, maxLife: 80, len: Math.random()*120+60 })
      }
      shooters = shooters.filter(s => s.life < s.maxLife)
      shooters.forEach(s => {
        s.life++; s.x += s.vx; s.y += s.vy
        const prog = s.life / s.maxLife
        const alpha = prog < .1 ? prog/.1 : prog > .9 ? (1-prog)/.1 : 1
        ctx.globalAlpha = alpha * .7
        const g = ctx.createLinearGradient(s.x-s.len,s.y-s.len*.37,s.x,s.y)
        g.addColorStop(0,'transparent'); g.addColorStop(1,'rgba(255,255,255,.9)')
        ctx.strokeStyle = g; ctx.lineWidth = 1.5
        ctx.beginPath(); ctx.moveTo(s.x-s.len,s.y-s.len*.37); ctx.lineTo(s.x,s.y); ctx.stroke()
        ctx.globalAlpha = alpha
        const rg = ctx.createRadialGradient(s.x,s.y,0,s.x,s.y,5)
        rg.addColorStop(0,'rgba(255,255,255,1)'); rg.addColorStop(1,'transparent')
        ctx.fillStyle = rg; ctx.beginPath(); ctx.arc(s.x,s.y,5,0,Math.PI*2); ctx.fill()
      })
      ctx.globalAlpha = 1

      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} />
}
