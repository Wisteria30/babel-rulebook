import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import SlideWrapper from '../components/SlideWrapper'
import './VictorySlide.css'

interface SlideProps {
  direction: number
  onNext: () => void
}

export default function VictorySlide({ direction }: SlideProps) {
  const { t } = useTranslation()
  const [showResult, setShowResult] = useState<'human' | 'god' | null>(null)

  return (
    <SlideWrapper direction={direction}>
      <div className="victory-content">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t('victory.heading')}
        </motion.h2>

        <motion.p
          className="victory-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {t('victory.subtitle')}
        </motion.p>

        <motion.div
          className="checklist-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3>{t('victory.checklistTitle')}</h3>
          <p className="checklist-desc">{t('victory.checklistDesc')}</p>
          <div className="checklist-items">
            <div className="checklist-item">
              <span className="check-icon">☐</span>
              <span>{t('victory.check1')}</span>
            </div>
            <div className="checklist-item">
              <span className="check-icon">☐</span>
              <span>{t('victory.check2')}</span>
            </div>
            <div className="checklist-item">
              <span className="check-icon">☐</span>
              <span>{t('victory.check3')}</span>
            </div>
            <div className="checklist-item">
              <span className="check-icon">☐</span>
              <span>{t('victory.check4')}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="judgment-flow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flow-step">
            <span className="step-num">1</span>
            <span>{t('victory.step1')}</span>
          </div>
          <div className="flow-arrow">↓</div>
          <div className="flow-branch">
            <div className="branch-fail">{t('victory.fail')}</div>
            <div className="branch-pass">{t('victory.pass')}</div>
          </div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step">
            <span className="step-num">2</span>
            <span>{t('victory.step2')}</span>
          </div>
        </motion.div>

        <motion.div
          className="result-cards"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.div
            className={`result-card human-win ${
              showResult === 'human' ? 'expanded' : ''
            }`}
            onClick={() =>
              setShowResult(showResult === 'human' ? null : 'human')
            }
            whileHover={{ scale: 1.02 }}
          >
            <div className="result-header">
              <span className="result-icon">🏗️</span>
              <h4>{t('victory.humanWin.title')}</h4>
            </div>
            {showResult === 'human' && (
              <motion.div
                className="result-body"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
              >
                <p>{t('victory.humanWin.condition1')}</p>
                <p>{t('victory.humanWin.and')}</p>
                <p>{t('victory.humanWin.condition2')}</p>
                <div className="result-message success">
                  {t('victory.humanWin.message')}
                </div>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            className={`result-card god-win ${
              showResult === 'god' ? 'expanded' : ''
            }`}
            onClick={() => setShowResult(showResult === 'god' ? null : 'god')}
            whileHover={{ scale: 1.02 }}
          >
            <div className="result-header">
              <span className="result-icon">⚡</span>
              <h4>{t('victory.godWin.title')}</h4>
            </div>
            {showResult === 'god' && (
              <motion.div
                className="result-body"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
              >
                <p>{t('victory.godWin.condition')}</p>
                <ul>
                  <li>{t('victory.godWin.reason1')}</li>
                  <li>{t('victory.godWin.reason2')}</li>
                </ul>
                <div className="result-message failure">
                  {t('victory.godWin.message')}
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
