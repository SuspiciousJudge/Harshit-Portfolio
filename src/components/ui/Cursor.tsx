import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const outerRef = useRef<HTMLDivElement>(null)
  const xLineRef = useRef<HTMLDivElement>(null)
  const yLineRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    let animationFrameId: number
    let currentX = window.innerWidth / 2
    let currentY = window.innerHeight / 2

    const updateCursor = () => {
      if (xLineRef.current) {
        xLineRef.current.style.transform = `translateY(${currentY}px)`
      }
      if (yLineRef.current) {
        yLineRef.current.style.transform = `translateX(${currentX}px)`
      }
      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${currentX - 16}px, ${currentY - 16}px) scale(${isHovering ? 1.5 : isClicking ? 0.8 : 1})`
      }
      if (textRef.current) {
        textRef.current.style.transform = `translate(${currentX + 20}px, ${currentY + 20}px)`
        textRef.current.innerHTML = `X:${Math.round(currentX).toString().padStart(4, '0')}<br/>Y:${Math.round(currentY).toString().padStart(4, '0')}`
      }
      animationFrameId = 0
    }

    const onMove = (e: MouseEvent) => {
      currentX = e.clientX
      currentY = e.clientY
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(updateCursor)
      }
    }

    const onDown = () => setIsClicking(true)
    const onUp = () => setIsClicking(false)

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    updateCursor()

    const bindInteractive = () => {
      const els = document.querySelectorAll('a, button, [role="button"], input, textarea, select, label')
      els.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true))
        el.addEventListener('mouseleave', () => setIsHovering(false))
      })
    }
    bindInteractive()
    const observer = new MutationObserver(bindInteractive)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
      observer.disconnect()
    }
  }, [isHovering, isClicking])

  return (
    <>
      <div
        ref={xLineRef}
        className="pointer-events-none fixed left-0 right-0 top-0 z-[9998] will-change-transform"
        style={{ height: 1, background: 'rgba(0,212,255,0.25)' }}
      />
      <div
        ref={yLineRef}
        className="pointer-events-none fixed bottom-0 left-0 top-0 z-[9998] will-change-transform"
        style={{ width: 1, background: 'rgba(0,212,255,0.25)' }}
      />
      <div
        ref={outerRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] will-change-transform"
      >
        <svg width="32" height="32" viewBox="0 0 32 32">
          <circle
            cx="16" cy="16" r="10" fill="none"
            stroke={isHovering ? '#00D4FF' : 'rgba(0,212,255,0.4)'}
            strokeWidth={isHovering ? 1.5 : 1}
          />
          <line x1="16" y1="2" x2="16" y2="8" stroke="#00D4FF" strokeWidth="1.5" />
          <line x1="16" y1="24" x2="16" y2="30" stroke="#00D4FF" strokeWidth="1.5" />
          <line x1="2" y1="16" x2="8" y2="16" stroke="#00D4FF" strokeWidth="1.5" />
          <line x1="24" y1="16" x2="30" y2="16" stroke="#00D4FF" strokeWidth="1.5" />
          <circle cx="16" cy="16" r={isClicking ? 2.5 : 1.5} fill="#00D4FF" opacity={isClicking ? 1 : 0.8} />
        </svg>
      </div>
      <div
        ref={textRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] font-mono text-[9px] tracking-wider text-cyan-400/50 will-change-transform"
      />
    </>
  )
}
