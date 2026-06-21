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
    video.addEventListener('canplay', play)
    return () => video.removeEventListener('canplay', play)
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
