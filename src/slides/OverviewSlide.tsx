import { motion } from 'framer-motion'
import SlideWrapper from '../components/SlideWrapper'
import './OverviewSlide.css'

interface SlideProps {
  direction: number
  onNext: () => void
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function OverviewSlide({ direction }: SlideProps) {
  return (
    <SlideWrapper direction={direction}>
      <motion.div
        className="overview-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants}>ゲームの概要</motion.h2>

        <motion.div className="overview-concept" variants={itemVariants}>
          <p className="concept-text">
            4人で<span className="highlight">協力</span>してAIに指示を出し、<br className="mobile-br" />
            <span className="highlight">アプリ（塔）</span>を完成させる。
          </p>
        </motion.div>

        <motion.div className="god-system-box" variants={itemVariants}>
          <div className="god-icon">⚡</div>
          <div className="god-text">
            <h4>神（システム）の妨害</h4>
            <p>神は塔の完成を許さない。<br />ランダムに「沈黙」や「言葉の反転」で妨害してくる。</p>
          </div>
        </motion.div>

        <motion.div className="plus-badge" variants={itemVariants}>
          ＋
        </motion.div>

        <motion.div className="traitor-box" variants={itemVariants}>
          <div className="traitor-icon">👿</div>
          <div className="traitor-text">
            <h4>内通者の存在</h4>
            <p>プレイヤーの中に<span className="danger">神の使い</span>が潜んでいる。<br />協力の中に裏切りが混ざる——誰を信じる？</p>
          </div>
        </motion.div>

        <motion.div className="divider" variants={itemVariants} />

        <motion.p className="overview-goal" variants={itemVariants}>
          <strong>協力 × 推理 × 心理戦。<br />4ラウンド後、塔は完成するか？</strong>
        </motion.p>
      </motion.div>
    </SlideWrapper>
  )
}
