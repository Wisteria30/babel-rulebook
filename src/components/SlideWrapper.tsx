import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useMemo } from 'react'

interface SlideWrapperProps {
  children: ReactNode
  direction: number
  className?: string
  isInitial?: boolean
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : direction < 0 ? '-100%' : 0,
    opacity: direction === 0 ? 1 : 0,
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

const transition = {
  x: { type: 'tween' as const, duration: 0.2, ease: 'easeOut' as const },
  opacity: { duration: 0.1 },
}

export default function SlideWrapper({ children, direction, className = '' }: SlideWrapperProps) {
  const classNames = useMemo(() => `slide ${className}`.trim(), [className])

  return (
    <motion.div
      className={classNames}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={transition}
    >
      {children}
    </motion.div>
  )
}
