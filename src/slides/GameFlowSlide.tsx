import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import SlideWrapper from '../components/SlideWrapper'
import './GameFlowSlide.css'

interface SlideProps {
  direction: number
  onNext: () => void
}

const days = [
  { day: 0, key: 'setup', icon: '🂴' },
  { day: 1, key: 'day1', icon: '🌅' },
  { day: 2, key: 'day2', icon: '☀️' },
  { day: 3, key: 'day3', icon: '🌤️' },
  { day: 4, key: 'day4', icon: '🌙' },
]

const phases = [
  { num: 1, key: 'action' },
  { num: 2, key: 'divine' },
  { num: 3, key: 'talk' },
  { num: 4, key: 'exile' },
  { num: 5, key: 'implement' },
  { num: 6, key: 'check' },
]

export default function GameFlowSlide({ direction }: SlideProps) {
  const { t } = useTranslation()

  return (
    <SlideWrapper direction={direction}>
      <div className="flow-content">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t('gameFlow.heading')}
        </motion.h2>

        <motion.p
          className="flow-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.08 }}
        >
          {t('gameFlow.subtitle')}
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
                <h4>{t(`gameFlow.days.${d.key}.name`)}</h4>
                <p>{t(`gameFlow.days.${d.key}.desc`)}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="round-phases"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <h3>{t('gameFlow.roundTitle')}</h3>
          <div className="phases-grid">
            <div className="phases-row">
              {phases.slice(0, 3).map((phase, i) => (
                <>
                  <div key={phase.num} className="phase-mini">
                    <span className="phase-num">{phase.num}</span>
                    <span>{t(`gameFlow.phases.${phase.key}`)}</span>
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
                    <span>{t(`gameFlow.phases.${phase.key}`)}</span>
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
          transition={{ delay: 0.2 }}
        >
          <div className="time-badge">
            <span className="time-icon">⏱️</span>
            <span>{t('gameFlow.talkTime')}</span>
          </div>
          <div className="time-badge">
            <span className="time-icon">⌨️</span>
            <span>{t('gameFlow.charLimit')}</span>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
