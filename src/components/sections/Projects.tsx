import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { projects } from '../../data/content'
import { useLanguage } from '../../context/LanguageContext'
import ProjectCard from '../ui/ProjectCard'
import AnimatedSection from '../ui/AnimatedSection'

export default function Projects() {
  const { lang } = useLanguage()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', skipSnaps: false },
    [Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })],
  )

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
      emblaApi.slideNodes().forEach((node, i) => {
        node.classList.toggle('is-selected', i === emblaApi.selectedScrollSnap())
      })
    }
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi])

  return (
    <section id="projects" className="bg-cyber-dark py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="mb-4 font-mono text-sm text-cyan-400/60">
            {lang === 'de' ? '05 — PROJEKTE' : '05 — PROJECTS'}
          </p>
          <h2 className="section-heading mb-12">
            {lang === 'de' ? 'Akademische Projekte' : 'Academic Projects'}
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {projects.map((project) => (
                <div
                  key={project.title.en}
                  className="embla__slide is-selected min-w-0 flex-[0_0_100%] px-3 md:flex-[0_0_80%] lg:flex-[0_0_65%]"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          <motion.button
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/30 bg-cyber-panel/90 text-cyber-cyan backdrop-blur-sm hover:bg-cyber-cyan hover:text-cyber-black md:left-6"
          >
            <FaChevronLeft size={18} />
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollNext}
            className="absolute right-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/30 bg-cyber-panel/90 text-cyber-cyan backdrop-blur-sm hover:bg-cyber-cyan hover:text-cyber-black md:right-6"
          >
            <FaChevronRight size={18} />
          </motion.button>

          <div className="mt-6 flex justify-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollTo(i)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: selectedIndex === i ? 24 : 8,
                  background: selectedIndex === i ? '#00D4FF' : 'rgba(0,212,255,0.25)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
