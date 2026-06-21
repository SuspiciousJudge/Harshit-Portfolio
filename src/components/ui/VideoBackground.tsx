import { useRef, useEffect, useState } from 'react'

interface VideoBackgroundProps {
  src: string
  poster?: string
  className?: string
  overlayClassName?: string
  brightness?: number
}

export default function VideoBackground({
  src,
  poster,
  className = '',
  overlayClassName = '',
  brightness = 0.25,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [failed, setFailed] = useState(false)
  const [autoplayBlocked, setAutoplayBlocked] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.playbackRate = 1
    const play = () => video.play()

    play()
      .then(() => {
        // autoplay worked
        document.dispatchEvent(new CustomEvent('hero-video-ready'))
        setAutoplayBlocked(false)
      })
      .catch(() => {
        // autoplay blocked by browser — show play overlay
        setAutoplayBlocked(true)
      })

    const handleCanPlay = () => {
      document.dispatchEvent(new CustomEvent('hero-video-ready'))
    }

    const onPlay = () => {
      document.dispatchEvent(new CustomEvent('hero-video-ready'))
      setAutoplayBlocked(false)
      setFailed(false)
    }

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('play', onPlay)

    // Fallback: reveal hero content if video doesn't fire canplay in time
    const fallback = setTimeout(() => document.dispatchEvent(new CustomEvent('hero-video-ready')), 1500)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('play', onPlay)
      clearTimeout(fallback)
    }
  }, [src])

  if (failed) {
    return (
      <div className={`absolute inset-0 z-0 bg-gradient-to-br from-cyber-black via-cyber-dark to-cyber-panel ${className}`} />
    )
  }
  return (
    <>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={`absolute inset-0 z-0 h-full w-full object-cover ${className}`}
        style={{ filter: `brightness(${brightness}) saturate(0.8)` }}
        onError={() => setFailed(true)}
      />
      <div className={`absolute inset-0 z-[1] ${overlayClassName}`} />

      {autoplayBlocked && (
        <div className="absolute inset-0 z-[2] flex items-center justify-center">
          <button
            aria-label="Play background video"
            onClick={() => {
              const v = videoRef.current
              if (!v) return
              v.play().then(() => {
                setAutoplayBlocked(false)
                document.dispatchEvent(new CustomEvent('hero-video-ready'))
              }).catch(() => setAutoplayBlocked(true))
            }}
            className="rounded-full bg-cyber-cyan/80 p-6 text-cyber-black hover:scale-105 transition-transform"
          >
            ▶
          </button>
        </div>
      )}
    </>
  )
}
