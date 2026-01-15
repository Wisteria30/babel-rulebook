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
      staggerChildren: 0.2,
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
            4人でAIに指示を出し、<span className="highlight">アプリ（塔）</span>を完成させる。<br />
            だが、その中に<span className="danger">妨害者</span>が紛れ込んでいる——
          </p>
        </motion.div>

        <motion.div className="divider" variants={itemVariants} />

        <motion.div className="teams-container" variants={itemVariants}>
          <div className="team-card human-team">
            <div className="team-icon">👥</div>
            <h3>人間陣営</h3>
            <p className="team-goal">協力して塔を完成させる</p>
            <ul>
              <li>占い師</li>
              <li>霊媒師</li>
              <li>市民</li>
            </ul>
          </div>

          <div className="vs-badge">VS</div>

          <div className="team-card god-team">
            <div className="team-icon">⚡</div>
            <h3>神陣営</h3>
            <p className="team-goal">塔の完成を阻止する</p>
            <ul>
              <li>神の使い</li>
              <li>神（システム）</li>
            </ul>
          </div>
        </motion.div>

        <motion.p className="overview-goal" variants={itemVariants}>
          <strong>4ラウンド後、塔は完成するか？</strong>
        </motion.p>
      </motion.div>
    </SlideWrapper>
  )
}
