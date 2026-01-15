import { useState, useEffect, useCallback, useMemo } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useSwipeable } from 'react-swipeable'
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
] as const

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setDirection(prev => index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
  }, [currentSlide])

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1)
      setCurrentSlide(prev => prev + 1)
    }
  }, [currentSlide])

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1)
      setCurrentSlide(prev => prev - 1)
    }
  }, [currentSlide])

  // Keyboard navigation
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
  }, [nextSlide, prevSlide])

  // Swipe handlers - memoized config
  const swipeConfig = useMemo(() => ({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: false,
    trackTouch: true,
    delta: 50,
    swipeDuration: 500,
    preventScrollOnSwipe: false,
  }), [nextSlide, prevSlide])

  const swipeHandlers = useSwipeable(swipeConfig)

  const CurrentSlideComponent = slides[currentSlide]
  const totalSlides = slides.length

  return (
    <div className="app" {...swipeHandlers}>
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
        totalSlides={totalSlides}
        onNavigate={goToSlide}
        onPrev={prevSlide}
        onNext={nextSlide}
        isMobile={isMobile}
      />
    </div>
  )
}

export default App
