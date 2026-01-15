import { motion } from 'framer-motion'
import { useState } from 'react'
import SlideWrapper from '../components/SlideWrapper'
import './RolesSlide.css'

interface SlideProps {
  direction: number
  onNext: () => void
}

const roles = [
  {
    id: 'prophet',
    name: '占い師',
    team: 'human',
    icon: '🔮',
    color: '#6495ed',
    ability: '毎ラウンド、1人を占う',
    result: '「神の使い」か「人間」か分かる',
    tip: '情報を共有するか、最後まで隠すか。嘘をつくこともできる。',
  },
  {
    id: 'medium',
    name: '霊媒師',
    team: 'human',
    icon: '👁️',
    color: '#9370db',
    ability: '前ラウンドの全AI指示の要約を確認',
    result: '個人特定不可。全体の雰囲気のみ',
    tip: '「合意通り」「怪しい指示が混ざっている」などを知れる。',
  },
  {
    id: 'citizen',
    name: '市民',
    team: 'human',
    icon: '👤',
    color: '#3cb371',
    ability: '特殊能力なし',
    result: '—',
    tip: '推理と会話で貢献。疑われたら証明が難しい。',
  },
  {
    id: 'apostle',
    name: '神の使い',
    team: 'god',
    icon: '👿',
    color: '#dc143c',
    ability: '人間に化けて妨害指示を出す',
    result: '—',
    tip: 'バレずに指示を歪めろ。「言葉の反転」を利用せよ。',
  },
]

export default function RolesSlide({ direction }: SlideProps) {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  const selected = roles.find(r => r.id === selectedRole)

  return (
    <SlideWrapper direction={direction}>
      <div className="roles-content">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          役職紹介
        </motion.h2>

        <motion.p
          className="roles-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          カードをクリックして詳細を確認
        </motion.p>

        <motion.div
          className="roles-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {roles.map((role, index) => (
            <motion.div
              key={role.id}
              className={`role-card ${role.team}-role ${selectedRole === role.id ? 'selected' : ''}`}
              style={{ '--role-color': role.color } as React.CSSProperties}
              onClick={() => setSelectedRole(selectedRole === role.id ? null : role.id)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="role-icon">{role.icon}</div>
              <h3 className="role-name">{role.name}</h3>
              <span className="role-team-badge">
                {role.team === 'human' ? '人間陣営' : '神陣営'}
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
              <h3>{selected.name}</h3>
            </div>
            <div className="detail-body">
              <div className="detail-row">
                <span className="detail-label">能力</span>
                <span className="detail-value">{selected.ability}</span>
              </div>
              {selected.result !== '—' && (
                <div className="detail-row">
                  <span className="detail-label">結果</span>
                  <span className="detail-value">{selected.result}</span>
                </div>
              )}
              <div className="detail-tip">
                <span className="tip-icon">💡</span>
                {selected.tip}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </SlideWrapper>
  )
}
