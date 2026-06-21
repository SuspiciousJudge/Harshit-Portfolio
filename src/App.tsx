import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { LanguageProvider } from './context/LanguageContext'
import Preloader from './components/layout/Preloader'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import Projects from './components/sections/Projects'
import Courses from './components/sections/Courses'
import Languages from './components/sections/Languages'
import Contact from './components/sections/Contact'
import Toast from './components/ui/Toast'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <LanguageProvider>

      <AnimatePresence mode="wait">
        {!loaded && <Preloader key="preloader" onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      {loaded && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <Courses />
            <Languages />
            <Contact />
          </main>
          <Footer />
          <Toast />
        </>
      )}
    </LanguageProvider>
  )
}
