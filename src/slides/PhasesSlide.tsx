import { motion, AnimatePresence } from 'framer-motion'
import { useState, useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import SlideWrapper from '../components/SlideWrapper'
import './PhasesSlide.css'

interface SlideProps {
  direction: number
  onNext: () => void
}

const phases = [
  {
    id: 'action',
    icon: '🎯',
    detailKeys: [
      { labelKey: 'prophet', actionKey: 'prophetAction' },
      { labelKey: 'medium', actionKey: 'mediumAction' },
    ],
  },
  {
    id: 'divine',
    icon: '⚡',
    detailKeys: [
      { labelKey: 'silence', actionKey: 'silenceAction' },
      { labelKey: 'reversal', actionKey: 'reversalAction' },
    ],
    hasWarning: true,
  },
  {
    id: 'talk',
    icon: '💬',
    detailKeys: [
      { labelKey: 'deduce', actionKey: 'deduceAction' },
      { labelKey: 'share', actionKey: 'shareAction' },
      { labelKey: 'agree', actionKey: 'agreeAction' },
    ],
  },
  {
    id: 'exile',
    icon: '🚫',
    detailKeys: [
      { labelKey: 'note', actionKey: 'noteAction' },
      { labelKey: 'strategy', actionKey: 'strategyAction' },
    ],
  },
  {
    id: 'implement',
    icon: '⌨️',
    detailKeys: [
      { labelKey: 'human', actionKey: 'humanAction' },
      { labelKey: 'apostle', actionKey: 'apostleAction' },
    ],
    hasWarning: true,
  },
  {
    id: 'check',
    icon: '✅',
    detailKeys: [
      { labelKey: 'item1', isCheckbox: true },
      { labelKey: 'item2', isCheckbox: true },
      { labelKey: 'item3', isCheckbox: true },
      { labelKey: 'item4', isCheckbox: true },
    ],
  },
] as const

export default function PhasesSlide({ direction }: SlideProps) {
  const { t } = useTranslation()
  const [activePhase, setActivePhase] = useState('action')

  const current = useMemo(
    () => phases.find((p) => p.id === activePhase)!,
    [activePhase]
  )

  const handlePhaseClick = useCallback((phaseId: string) => {
    setActivePhase(phaseId)
  }, [])

  return (
    <SlideWrapper direction={direction}>
      <div className="phases-content">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t('phases.heading')}
        </motion.h2>

        <motion.p
          className="phases-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {t('phases.subtitle')}
        </motion.p>

        <motion.div
          className="phase-tabs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          {phases.map((phase) => (
            <button
              key={phase.id}
              className={`phase-tab ${activePhase === phase.id ? 'active' : ''}`}
              onClick={() => handlePhaseClick(phase.id)}
            >
              <span className="tab-icon">{phase.icon}</span>
              <span className="tab-name">{t(`phases.${phase.id}.name`)}</span>
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase}
            className="phase-detail-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="panel-header">
              <span className="panel-icon">{current.icon}</span>
              <div>
                <h3>{t(`phases.${current.id}.name`)}</h3>
                <p>{t(`phases.${current.id}.desc`)}</p>
              </div>
            </div>

            <div className="panel-body">
              {current.detailKeys.map((d, i) => (
                <div key={i} className="detail-item">
                  <span className="detail-label">
                    {'isCheckbox' in d && d.isCheckbox
                      ? '☐'
                      : t(`phases.${current.id}.${d.labelKey}`)}
                  </span>
                  <span className="detail-action">
                    {'actionKey' in d
                      ? t(`phases.${current.id}.${d.actionKey}`)
                      : t(`phases.${current.id}.${d.labelKey}`)}
                  </span>
                </div>
              ))}

              {'hasWarning' in current && current.hasWarning && (
                <div className="warning-box">
                  <span className="warning-icon">⚠️</span>
                  {t(`phases.${current.id}.warning`)}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </SlideWrapper>
  )
}
