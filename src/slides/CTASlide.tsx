import { motion } from 'framer-motion'
import SlideWrapper from '../components/SlideWrapper'
import TowerIcon from '../components/TowerIcon'
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
          <TowerIcon size="large" animate={true} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          協力して、塔を築け。
        </motion.h2>

        <motion.p
          className="cta-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          信頼と疑念。協力と裏切り。<br />
          神の妨害に抗いながら、みんなでアプリを完成させろ。
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
            <span>4人協力</span>
          </div>
          <div className="summary-item">
            <span className="summary-icon">⏱️</span>
            <span>30〜40分</span>
          </div>
          <div className="summary-item">
            <span className="summary-icon">🔍</span>
            <span>人狼系推理</span>
          </div>
          <div className="summary-item">
            <span className="summary-icon">⌨️</span>
            <span>Vibe Coding</span>
          </div>
        </motion.div>

        <motion.div
          className="cta-features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <div className="feature-badge">
            <span>🤝</span> 協力ベース
          </div>
          <div className="feature-badge">
            <span>💻</span> リアルタイムAI
          </div>
          <div className="feature-badge">
            <span>🎭</span> 心理戦
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
