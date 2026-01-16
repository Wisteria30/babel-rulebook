import { motion } from 'framer-motion'
import { useTranslation, Trans } from 'react-i18next'
import SlideWrapper from '../components/SlideWrapper'
import TowerIcon from '../components/TowerIcon'
import './TitleSlide.css'

interface SlideProps {
  direction: number
  onNext: () => void
}

export default function TitleSlide({ direction, onNext }: SlideProps) {
  const { t } = useTranslation()

  return (
    <SlideWrapper direction={direction}>
      <div className="title-content">
        <motion.div
          className="tower-icon-wrapper"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          <TowerIcon size="large" animate={true} />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {t('title.heading')}
        </motion.h1>
        
        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          {t('title.subtitle')}
        </motion.p>
        
        <motion.div
          className="divider"
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        />
        
        <motion.div
          className="genre-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.3 }}
        >
          {t('title.genre')}
        </motion.div>
        
        <motion.p
          className="tagline"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.3 }}
        >
          <Trans i18nKey="title.tagline" components={{ br: <br /> }} />
        </motion.p>
        
        <motion.div
          className="game-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.3 }}
        >
          <span>{t('title.players')}</span>
          <span>·</span>
          <span>{t('title.duration')}</span>
        </motion.div>
        
        <motion.button
          className="btn btn-primary start-btn"
          onClick={onNext}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>{t('title.startButton')}</span>
          <span className="arrow">→</span>
        </motion.button>
        
        <motion.p
          className="scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        >
          {t('common.keyHint')}
        </motion.p>
      </div>
    </SlideWrapper>
  )
}
