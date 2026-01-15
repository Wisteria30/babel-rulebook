import { motion } from 'framer-motion'
import './TowerIcon.css'

interface TowerIconProps {
  size?: 'small' | 'medium' | 'large'
  animate?: boolean
}

export default function TowerIcon({ size = 'medium', animate = true }: TowerIconProps) {
  const layers = [1, 2, 3, 4, 5, 6, 7]
  
  return (
    <div className={`tower-icon-container ${size}`}>
      <div className="tower-glow" />
      <div className="tower-structure">
        {layers.map((layer, index) => (
          <motion.div
            key={layer}
            className="tower-block"
            initial={animate ? { opacity: 0, y: -20 } : false}
            animate={animate ? { opacity: 1, y: 0 } : false}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            style={{
              width: `${100 - index * 12}%`,
            }}
          />
        ))}
        <motion.div 
          className="tower-peak"
          initial={animate ? { opacity: 0, scale: 0 } : false}
          animate={animate ? { opacity: 1, scale: 1 } : false}
          transition={{ delay: 0.8, duration: 0.3 }}
        />
      </div>
      <div className="tower-base-ground" />
    </div>
  )
}
