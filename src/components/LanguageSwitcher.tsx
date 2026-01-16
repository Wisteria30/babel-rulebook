import { useTranslation } from 'react-i18next'
import { useCallback } from 'react'
import './LanguageSwitcher.css'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const toggleLanguage = useCallback(() => {
    const newLang = i18n.language === 'ja' ? 'en' : 'ja'
    i18n.changeLanguage(newLang)
  }, [i18n])

  return (
    <button
      className="language-switcher"
      onClick={toggleLanguage}
      aria-label="Switch language"
    >
      {i18n.language === 'ja' ? 'EN' : 'JA'}
    </button>
  )
}
