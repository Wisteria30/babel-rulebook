import { motion } from 'framer-motion'
import SlideWrapper from '../components/SlideWrapper'
import './GameFlowSlide.css'

interface SlideProps {
  direction: number
  onNext: () => void
}

const days = [
  { day: 0, name: 'セットアップ', desc: '役職配布', icon: '🎴' },
  { day: 1, name: '1日目', desc: '最初の探り合い', icon: '🌅' },
  { day: 2, name: '2日目', desc: '情報が集まる', icon: '☀️' },
  { day: 3, name: '3日目', desc: '確信か疑念か', icon: '🌤️' },
  { day: 4, name: '4日目', desc: '最後の決断', icon: '🌙' },
]

const phases = [
  { num: 1, name: '役職アクション' },
  { num: 2, name: '神の審判' },
  { num: 3, name: '会話' },
  { num: 4, name: '追放' },
  { num: 5, name: '実装' },
  { num: 6, name: 'チェック' },
]

export default function GameFlowSlide({ direction }: SlideProps) {
  return (
    <SlideWrapper direction={direction}>
      <div className="flow-content">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ゲームの流れ
        </motion.h2>

        <motion.p
          className="flow-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          4ラウンド（＝4日）で勝敗が決まる
        </motion.p>

        <div className="timeline">
          {days.map((d, i) => (
            <motion.div
              key={d.day}
              className={`timeline-item ${d.day === 0 ? 'setup' : ''}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <div className="timeline-icon">{d.icon}</div>
              <div className="timeline-connector" />
              <div className="timeline-content">
                <h4>{d.name}</h4>
                <p>{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="round-phases"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3>各ラウンドの構成</h3>
          <div className="phases-grid">
            <div className="phases-row">
              {phases.slice(0, 3).map((phase, i) => (
                <>
                  <div key={phase.num} className="phase-mini">
                    <span className="phase-num">{phase.num}</span>
                    <span>{phase.name}</span>
                  </div>
                  {i < 2 && <div className="phase-arrow">→</div>}
                </>
              ))}
            </div>
            <div className="phases-row">
              {phases.slice(3, 6).map((phase, i) => (
                <>
                  <div key={phase.num} className="phase-mini">
                    <span className="phase-num">{phase.num}</span>
                    <span>{phase.name}</span>
                  </div>
                  {i < 2 && <div className="phase-arrow">→</div>}
                </>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="time-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="time-badge">
            <span className="time-icon">⏱️</span>
            <span>会話フェーズ：約4分</span>
          </div>
          <div className="time-badge">
            <span className="time-icon">⌨️</span>
            <span>AI指示：100文字以内</span>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
