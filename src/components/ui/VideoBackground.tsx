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

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.playbackRate = 1
    const play = () => video.play().catch(() => setFailed(true))
    play()

    const handleCanPlay = () => {
      document.dispatchEvent(new CustomEvent('hero-video-ready'))
    }

    video.addEventListener('canplay', handleCanPlay)

    // Fallback: reveal hero content if video doesn't fire canplay in time
    const fallback = setTimeout(() => document.dispatchEvent(new CustomEvent('hero-video-ready')), 1500)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
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
    </>
  )
}
