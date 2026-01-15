import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import SlideWrapper from '../components/SlideWrapper'
import './PhasesSlide.css'

interface SlideProps {
  direction: number
  onNext: () => void
}

const phases = [
  {
    id: 'action',
    name: '役職アクション',
    icon: '🎯',
    desc: '役職固有の行動を行う（非公開・会話禁止）',
    details: [
      { role: '占い師', action: '1人を占う → 「神の使い」か「人間」か判明' },
      { role: '霊媒師', action: '前ラウンドの全AI指示の要約を確認' },
    ],
  },
  {
    id: 'divine',
    name: '神の審判',
    icon: '⚡',
    desc: '神（システム）が2つの介入を判定',
    details: [
      { role: '沈黙の裁定', action: '発動すると会話・追放フェーズをスキップ' },
      { role: '言葉の反転', action: '発動すると形容詞が逆の意味に（シンプル→複雑）' },
    ],
    warning: 'これらはいつ発動するか分からない！',
  },
  {
    id: 'talk',
    name: '会話フェーズ',
    icon: '💬',
    desc: '約4分、自由に会話（沈黙時はスキップ）',
    details: [
      { role: '推理', action: '誰が神の使いか？' },
      { role: '共有', action: '占い・霊媒結果（嘘可）' },
      { role: '合意', action: '誰が何を作るか' },
    ],
  },
  {
    id: 'exile',
    name: '追放フェーズ',
    icon: '🚫',
    desc: '多数決で1人を「実装停止」に（沈黙時はスキップ）',
    details: [
      { role: '注意', action: '追放されても死なない。そのラウンドAI指示が出せないだけ' },
      { role: '戦略', action: '神の使いを特定できれば、毎ラウンド実質無力化！' },
    ],
  },
  {
    id: 'implement',
    name: '実装依頼フェーズ',
    icon: '⌨️',
    desc: '各自がAIに指示を出す（100文字以内・会話禁止）',
    details: [
      { role: '人間', action: '合意通りの指示を出す' },
      { role: '神の使い', action: 'バレないように妨害指示を混ぜる' },
    ],
    warning: '言葉の反転が発動していると、形容詞が逆になる！',
  },
  {
    id: 'check',
    name: 'チェックリスト更新',
    icon: '✅',
    desc: 'AIが実行後、塔の状態を確認',
    details: [
      { role: '☐', action: '画面が表示される' },
      { role: '☐', action: 'ユーザーが操作できる' },
      { role: '☐', action: '操作に対する反応がある' },
      { role: '☐', action: '明らかな破綻がない' },
    ],
  },
]

export default function PhasesSlide({ direction }: SlideProps) {
  const [activePhase, setActivePhase] = useState('action')

  const current = phases.find(p => p.id === activePhase)!

  return (
    <SlideWrapper direction={direction}>
      <div className="phases-content">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          フェーズ詳細
        </motion.h2>

        <motion.p
          className="phases-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          タブをクリックして各フェーズの詳細を確認
        </motion.p>

        <motion.div
          className="phase-tabs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {phases.map((phase) => (
            <button
              key={phase.id}
              className={`phase-tab ${activePhase === phase.id ? 'active' : ''}`}
              onClick={() => setActivePhase(phase.id)}
            >
              <span className="tab-icon">{phase.icon}</span>
              <span className="tab-name">{phase.name}</span>
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
            transition={{ duration: 0.3 }}
          >
            <div className="panel-header">
              <span className="panel-icon">{current.icon}</span>
              <div>
                <h3>{current.name}</h3>
                <p>{current.desc}</p>
              </div>
            </div>

            <div className="panel-body">
              {current.details.map((d, i) => (
                <div key={i} className="detail-item">
                  <span className="detail-label">{d.role}</span>
                  <span className="detail-action">{d.action}</span>
                </div>
              ))}

              {current.warning && (
                <div className="warning-box">
                  <span className="warning-icon">⚠️</span>
                  {current.warning}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </SlideWrapper>
  )
}
