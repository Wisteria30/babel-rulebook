import { motion } from 'framer-motion'
import { useState } from 'react'
import SlideWrapper from '../components/SlideWrapper'
import './VictorySlide.css'

interface SlideProps {
  direction: number
  onNext: () => void
}

export default function VictorySlide({ direction }: SlideProps) {
  const [showResult, setShowResult] = useState<'human' | 'god' | null>(null)

  return (
    <SlideWrapper direction={direction}>
      <div className="victory-content">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          勝敗条件
        </motion.h2>

        <motion.p
          className="victory-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          4日目終了時に判定
        </motion.p>

        <motion.div
          className="checklist-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3>チェックリスト</h3>
          <p className="checklist-desc">最終ラウンド終了時に以下が全て満たされているか？</p>
          <div className="checklist-items">
            <div className="checklist-item">
              <span className="check-icon">☐</span>
              <span>画面が表示される</span>
            </div>
            <div className="checklist-item">
              <span className="check-icon">☐</span>
              <span>ユーザーが操作できる</span>
            </div>
            <div className="checklist-item">
              <span className="check-icon">☐</span>
              <span>操作に対する反応がある</span>
            </div>
            <div className="checklist-item">
              <span className="check-icon">☐</span>
              <span>明らかな破綻（進行不能）がない</span>
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
            <span>チェックリスト確認</span>
          </div>
          <div className="flow-arrow">↓</div>
          <div className="flow-branch">
            <div className="branch-fail">✘ 1つでも未達成</div>
            <div className="branch-pass">✔ 全て達成</div>
          </div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step">
            <span className="step-num">2</span>
            <span>AI最終二値チェック</span>
          </div>
        </motion.div>

        <motion.div
          className="result-cards"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.div
            className={`result-card human-win ${showResult === 'human' ? 'expanded' : ''}`}
            onClick={() => setShowResult(showResult === 'human' ? null : 'human')}
            whileHover={{ scale: 1.02 }}
          >
            <div className="result-header">
              <span className="result-icon">🏗️</span>
              <h4>人間陣営の勝利</h4>
            </div>
            {showResult === 'human' && (
              <motion.div
                className="result-body"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
              >
                <p>チェックリストが全て埋まっている</p>
                <p>かつ</p>
                <p>AI二値チェックに合格</p>
                <div className="result-message success">
                  🎉 塔は完成した！
                </div>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            className={`result-card god-win ${showResult === 'god' ? 'expanded' : ''}`}
            onClick={() => setShowResult(showResult === 'god' ? null : 'god')}
            whileHover={{ scale: 1.02 }}
          >
            <div className="result-header">
              <span className="result-icon">⚡</span>
              <h4>神陣営の勝利</h4>
            </div>
            {showResult === 'god' && (
              <motion.div
                className="result-body"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
              >
                <p>上記を満たさなかった場合全て</p>
                <ul>
                  <li>チェックリスト未達成</li>
                  <li>AIチェック不合格</li>
                </ul>
                <div className="result-message failure">
                  💨 塔は崩壊した...
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
