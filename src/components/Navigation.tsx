interface NavigationProps {
  currentSlide: number
  totalSlides: number
  onNavigate: (index: number) => void
  onPrev: () => void
  onNext: () => void
  isMobile: boolean
}

export default function Navigation({ 
  currentSlide, 
  totalSlides, 
  onNavigate,
  onPrev,
  onNext,
  isMobile
}: NavigationProps) {
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
        {Array.from({ length: totalSlides }).map((_, index) => (
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
}
