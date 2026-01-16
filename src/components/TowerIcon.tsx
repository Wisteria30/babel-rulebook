import { motion } from 'framer-motion'
import './TowerIcon.css'

interface TowerIconProps {
  size?: 'small' | 'medium' | 'large'
  animate?: boolean
}

const layers = [0, 1, 2, 3, 4, 5] as const

export default function TowerIcon({ size = 'medium', animate = true }: TowerIconProps) {
  return (
    <div className={`tower-icon-container ${size}`}>
      <div className="tower-glow" />
      <div className="tower-structure">
        {/* Peak triangle */}
        <motion.div
          className="tower-peak"
          initial={animate ? { opacity: 0, scale: 0 } : false}
          animate={animate ? { opacity: 1, scale: 1 } : false}
          transition={{ delay: 0, duration: 0.4, type: 'spring' }}
        />
        
        {/* Tower layers - top to bottom, getting wider */}
        {layers.map((_, index) => (
          <motion.div
            key={index}
            className="tower-block"
            initial={animate ? { opacity: 0, y: -10 } : false}
            animate={animate ? { opacity: 1, y: 0 } : false}
            transition={{ delay: 0.1 + index * 0.08, duration: 0.3 }}
            style={{ 
              width: `${40 + index * 10}%`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
