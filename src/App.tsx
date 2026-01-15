import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import TitleSlide from './slides/TitleSlide'
import OverviewSlide from './slides/OverviewSlide'
import RolesSlide from './slides/RolesSlide'
import GameFlowSlide from './slides/GameFlowSlide'
import PhasesSlide from './slides/PhasesSlide'
import VictorySlide from './slides/VictorySlide'
import CTASlide from './slides/CTASlide'
import Navigation from './components/Navigation'
import './App.css'

const slides = [
  TitleSlide,
  OverviewSlide,
  RolesSlide,
  GameFlowSlide,
  PhasesSlide,
  VictorySlide,
  CTASlide,
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1)
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1)
      setCurrentSlide(currentSlide - 1)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide()
      } else if (e.key === 'ArrowLeft') {
        prevSlide()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide])

  const CurrentSlideComponent = slides[currentSlide]

  return (
    <div className="app">
      <div className="background-effects">
        <div className="tower-silhouette" />
        <div className="particles" />
        <div className="divine-glow" />
      </div>
      
      <AnimatePresence mode="wait" custom={direction}>
        <CurrentSlideComponent 
          key={currentSlide} 
          direction={direction}
          onNext={nextSlide}
        />
      </AnimatePresence>
      
      <Navigation 
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNavigate={goToSlide}
        onPrev={prevSlide}
        onNext={nextSlide}
      />
    </div>
  )
}

export default App
