import { motion } from 'framer-motion'
import { useTranslation, Trans } from 'react-i18next'
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
  const { t } = useTranslation()

  return (
    <SlideWrapper direction={direction}>
      <motion.div
        className="overview-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants}>{t('overview.heading')}</motion.h2>

        <motion.div className="overview-concept" variants={itemVariants}>
          <p className="concept-text">
            <Trans
              i18nKey="overview.concept"
              components={{
                1: <span className="highlight" />,
                br: <br className="mobile-br" />,
              }}
            />
          </p>
        </motion.div>

        <motion.div className="god-system-box" variants={itemVariants}>
          <div className="god-icon">⚡</div>
          <div className="god-text">
            <h4>{t('overview.godSystem.title')}</h4>
            <p>
              <Trans
                i18nKey="overview.godSystem.desc"
                components={{ br: <br /> }}
              />
            </p>
          </div>
        </motion.div>

        <motion.div className="plus-badge" variants={itemVariants}>
          ＋
        </motion.div>

        <motion.div className="traitor-box" variants={itemVariants}>
          <div className="traitor-icon">👿</div>
          <div className="traitor-text">
            <h4>{t('overview.traitor.title')}</h4>
            <p>
              <Trans
                i18nKey="overview.traitor.desc"
                components={{
                  1: <span className="danger" />,
                  br: <br />,
                }}
              />
            </p>
          </div>
        </motion.div>

        <motion.div className="divider" variants={itemVariants} />

        <motion.p className="overview-goal" variants={itemVariants}>
          <strong>
            <Trans i18nKey="overview.goal" components={{ br: <br /> }} />
          </strong>
        </motion.p>
      </motion.div>
    </SlideWrapper>
  )
}
