import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SlideWrapperProps {
  children: ReactNode
  direction: number
  className?: string
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
}

export default function SlideWrapper({ children, direction, className = '' }: SlideWrapperProps) {
  return (
    <motion.div
      className={`slide ${className}`}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      }}
    >
      {children}
    </motion.div>
  )
}
