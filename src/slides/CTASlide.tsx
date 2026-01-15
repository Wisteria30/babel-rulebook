import { motion } from 'framer-motion'
import SlideWrapper from '../components/SlideWrapper'
import './CTASlide.css'

interface SlideProps {
  direction: number
  onNext: () => void
}

export default function CTASlide({ direction }: SlideProps) {
  return (
    <SlideWrapper direction={direction}>
      <div className="cta-content">
        <motion.div
          className="cta-tower-visual"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="tower-layers">
            <div className="tower-layer layer-4">4</div>
            <div className="tower-layer layer-3">3</div>
            <div className="tower-layer layer-2">2</div>
            <div className="tower-layer layer-1">1</div>
          </div>
          <div className="tower-base">🏗️</div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          塔を築け。
        </motion.h2>

        <motion.p
          className="cta-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          信頼と疑念。協力と裏切り。
          <br />
          AIと人間が織りなす、新しい推理体験。
        </motion.p>

        <motion.div
          className="divider"
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        />

        <motion.div
          className="cta-summary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="summary-item">
            <span className="summary-icon">👥</span>
            <span>4人専用</span>
          </div>
          <div className="summary-item">
            <span className="summary-icon">⏱️</span>
            <span>30〜40分</span>
          </div>
          <div className="summary-item">
            <span className="summary-icon">🎯</span>
            <span>推理 × 協力</span>
          </div>
          <div className="summary-item">
            <span className="summary-icon">🤖</span>
            <span>AI連携</span>
          </div>
        </motion.div>

        <motion.div
          className="cta-features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <div className="feature-badge">
            <span>🎲</span> 人狼系ゲームの新潮流
          </div>
          <div className="feature-badge">
            <span>💻</span> リアルタイムAI実行
          </div>
          <div className="feature-badge">
            <span>✨</span> 指示が実際に動く
          </div>
        </motion.div>

        <motion.div
          className="cta-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <motion.button
            className="btn btn-primary cta-main-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🎮 遊んでみる
          </motion.button>
        </motion.div>

        <motion.p
          className="cta-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          ← → キーで最初から確認できます
        </motion.p>
      </div>
    </SlideWrapper>
  )
}
