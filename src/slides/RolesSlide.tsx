import { motion } from 'framer-motion'
import { useState, useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import SlideWrapper from '../components/SlideWrapper'
import './RolesSlide.css'

interface SlideProps {
  direction: number
  onNext: () => void
}

const roles = [
  {
    id: 'prophet',
    team: 'human',
    icon: '🦉',
    color: '#6495ed',
  },
  {
    id: 'medium',
    team: 'human',
    icon: '👁️',
    color: '#9370db',
  },
  {
    id: 'citizen',
    team: 'human',
    icon: '👤',
    color: '#3cb371',
  },
  {
    id: 'apostle',
    team: 'god',
    icon: '👿',
    color: '#dc143c',
  },
] as const

export default function RolesSlide({ direction }: SlideProps) {
  const { t } = useTranslation()
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  const selected = useMemo(
    () => roles.find((r) => r.id === selectedRole),
    [selectedRole]
  )

  const handleRoleClick = useCallback((roleId: string) => {
    setSelectedRole((prev) => (prev === roleId ? null : roleId))
  }, [])

  return (
    <SlideWrapper direction={direction}>
      <div className="roles-content">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t('roles.heading')}
        </motion.h2>

        <motion.p
          className="roles-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.08 }}
        >
          {t('roles.subtitle')}
        </motion.p>

        <motion.div
          className="roles-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.05 }}
        >
          {roles.map((role, index) => (
            <motion.div
              key={role.id}
              className={`role-card ${role.team}-role ${
                selectedRole === role.id ? 'selected' : ''
              }`}
              style={{ '--role-color': role.color } as React.CSSProperties}
              onClick={() => handleRoleClick(role.id)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="role-icon">{role.icon}</div>
              <h3 className="role-name">{t(`roles.${role.id}.name`)}</h3>
              <span className="role-team-badge">
                {role.team === 'human' ? t('roles.humanTeam') : t('roles.godTeam')}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {selected && (
          <motion.div
            className="role-detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ '--role-color': selected.color } as React.CSSProperties}
          >
            <div className="detail-header">
              <span className="detail-icon">{selected.icon}</span>
              <h3>{t(`roles.${selected.id}.name`)}</h3>
            </div>
            <div className="detail-body">
              <div className="detail-row">
                <span className="detail-label">{t('roles.ability')}</span>
                <span className="detail-value">
                  {t(`roles.${selected.id}.ability`)}
                </span>
              </div>
              {t(`roles.${selected.id}.result`) !== '—' && (
                <div className="detail-row">
                  <span className="detail-label">{t('roles.result')}</span>
                  <span className="detail-value">
                    {t(`roles.${selected.id}.result`)}
                  </span>
                </div>
              )}
              <div className="detail-goal">
                <span className="goal-icon">🎯</span>
                <span className="goal-label">{t('roles.goal')}</span>
                <span className="goal-text">
                  {t(`roles.${selected.id}.goal`)}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </SlideWrapper>
  )
}
