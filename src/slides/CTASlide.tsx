import { motion } from 'framer-motion'
import { useTranslation, Trans } from 'react-i18next'
import SlideWrapper from '../components/SlideWrapper'
import TowerIcon from '../components/TowerIcon'
import './CTASlide.css'

interface SlideProps {
  direction: number
  onNext: () => void
}

export default function CTASlide({ direction }: SlideProps) {
  const { t } = useTranslation()

  return (
    <SlideWrapper direction={direction}>
      <div className="cta-content">
        <motion.div
          className="cta-tower-visual"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <TowerIcon size="large" animate={true} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.25 }}
        >
          {t('cta.heading')}
        </motion.h2>

        <motion.p
          className="cta-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.25 }}
        >
          <Trans i18nKey="cta.tagline" components={{ br: <br /> }} />
        </motion.p>

        <motion.div
          className="divider"
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          transition={{ delay: 0.35, duration: 0.25 }}
        />

        <motion.div
          className="cta-summary"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.25 }}
        >
          <div className="summary-item">
            <span className="summary-icon">👥</span>
            <span>{t('cta.summary.players')}</span>
          </div>
          <div className="summary-item">
            <span className="summary-icon">⏱️</span>
            <span>{t('cta.summary.duration')}</span>
          </div>
          <div className="summary-item">
            <span className="summary-icon">🔍</span>
            <span>{t('cta.summary.deduction')}</span>
          </div>
          <div className="summary-item">
            <span className="summary-icon">⌨️</span>
            <span>{t('cta.summary.vibeCoding')}</span>
          </div>
        </motion.div>

        <motion.div
          className="cta-features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.25 }}
        >
          <div className="feature-badge">
            <span>🤝</span> {t('cta.features.coop')}
          </div>
          <div className="feature-badge">
            <span>💻</span> {t('cta.features.ai')}
          </div>
          <div className="feature-badge">
            <span>🎭</span> {t('cta.features.psych')}
          </div>
        </motion.div>

        <motion.div
          className="cta-actions"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.25 }}
        >
          <motion.button className="btn cta-main-btn disabled" disabled>
            {t('cta.button')}
          </motion.button>
          <p className="coming-soon">{t('cta.comingSoon')}</p>
        </motion.div>

        <motion.p
          className="cta-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.25 }}
        >
          {t('common.reviewHint')}
        </motion.p>
      </div>
    </SlideWrapper>
  )
}
