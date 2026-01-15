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
        
        <motion.div className="overview-story" variants={itemVariants}>
          <p className="story-text">
            古代、人々は<span className="highlight">天へ届く塔</span>を築こうとした。<br />
            しかし神はそれを許さず、人々の言葉を乱した——
          </p>
        </motion.div>

        <motion.div className="overview-modern" variants={itemVariants}>
          <p className="modern-text">
            現代。人々はAIと協力し、<span className="highlight">新たな塔（アプリ）</span>を完成させようとする。<br />
            だが、その中に<span className="danger">神の使い</span>が紛れ込んでいる——
          </p>
        </motion.div>

        <motion.div className="divider" variants={itemVariants} />

        <motion.div className="teams-container" variants={itemVariants}>
          <div className="team-card human-team">
            <div className="team-icon">👥</div>
            <h3>人間陣営</h3>
            <p>協力して塔を完成させる</p>
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
            <p>塔の完成を妨害する</p>
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
