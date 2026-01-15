import { memo, useMemo } from 'react'

interface NavigationProps {
  currentSlide: number
  totalSlides: number
  onNavigate: (index: number) => void
  onPrev: () => void
  onNext: () => void
  isMobile: boolean
}

const Navigation = memo(function Navigation({ 
  currentSlide, 
  totalSlides, 
  onNavigate,
  onPrev,
  onNext,
  isMobile
}: NavigationProps) {
  const dots = useMemo(() => 
    Array.from({ length: totalSlides }, (_, i) => i),
    [totalSlides]
  )

  return (
    <nav className={`navigation ${isMobile ? 'mobile' : ''}`}>
      {!isMobile && (
        <button 
          className="nav-arrow" 
          onClick={onPrev}
          disabled={currentSlide === 0}
          aria-label="Previous slide"
        >
          ←
        </button>
      )}
      
      <div className="nav-dots">
        {dots.map((index) => (
          <button
            key={index}
            className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => onNavigate(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {!isMobile && (
        <button 
          className="nav-arrow" 
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          aria-label="Next slide"
        >
          →
        </button>
      )}
      
      {isMobile && (
        <div className="swipe-hint">
          ← スワイプ →
        </div>
      )}
    </nav>
  )
})

export default Navigation
