import { motion } from 'framer-motion'
import SlideWrapper from '../components/SlideWrapper'
import './TitleSlide.css'

interface SlideProps {
  direction: number
  onNext: () => void
}

export default function TitleSlide({ direction, onNext }: SlideProps) {
  return (
    <SlideWrapper direction={direction}>
      <div className="title-content">
        <motion.div
          className="tower-icon"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: 'spring' }}
        >
          🗼
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          BABEL
        </motion.h1>
        
        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          神の意志に抗え。塔を完成せよ。
        </motion.p>
        
        <motion.div
          className="divider"
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        />
        
        <motion.p
          className="tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          AIと人間の協力・裏切り・推理ゲーム
        </motion.p>
        
        <motion.div
          className="game-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <span>4人専用</span>
          <span>·</span>
          <span>30〜40分</span>
          <span>·</span>
          <span>4ラウンド</span>
        </motion.div>
        
        <motion.button
          className="btn btn-primary start-btn"
          onClick={onNext}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>ルールを見る</span>
          <span className="arrow">→</span>
        </motion.button>
        
        <motion.p
          className="scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 3, duration: 2, repeat: Infinity }}
        >
          ← → キーで操作
        </motion.p>
      </div>
    </SlideWrapper>
  )
}
