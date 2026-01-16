import { motion } from 'framer-motion'
import { useMemo } from 'react'
import './TowerIcon.css'

interface TowerIconProps {
  size?: 'small' | 'medium' | 'large'
  animate?: boolean
}

const layers = [1, 2, 3, 4, 5, 6, 7] as const

export default function TowerIcon({ size = 'medium', animate = true }: TowerIconProps) {
  const layerWidths = useMemo(() => 
    layers.map((_, index) => `${100 - index * 12}%`),
    []
  )

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
            transition={{ delay: index * 0.03, duration: 0.12 }}
            style={{ width: layerWidths[index] }}
          />
        ))}
        <motion.div 
          className="tower-peak"
          initial={animate ? { opacity: 0, scale: 0 } : false}
          animate={animate ? { opacity: 1, scale: 1 } : false}
          transition={{ delay: 0.25, duration: 0.12 }}
        />
      </div>
      <div className="tower-base-ground" />
    </div>
  )
}
