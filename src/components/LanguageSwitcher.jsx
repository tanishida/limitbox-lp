import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import { Languages } from 'lucide-react'

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation()
  // URLのクエリパラメータを取得・更新するためのフック
  const [searchParams, setSearchParams] = useSearchParams()
  const langParam = searchParams.get('lang')

  // ① URLのパラメータ（?lang=...）が変わったら、i18nの言語を同期する
  useEffect(() => {
    // URLに 'ja' か 'en' が指定されていて、現在の言語と違う場合のみ変更
    if (
      langParam &&
      ['ja', 'en'].includes(langParam) &&
      i18n.language !== langParam
    ) {
      i18n.changeLanguage(langParam)
    }
  }, [langParam, i18n])

  // ② ボタンが押されたら、URLのクエリパラメータを更新する
  const toggleLanguage = () => {
    // 現在の言語を判定し、切り替え先を決定（クエリがない場合はi18nの現在の状態を基準にする）
    const currentLang = langParam || i18n.language || 'ja'
    const newLang = currentLang.startsWith('ja') ? 'en' : 'ja'

    // 他のクエリパラメータ（utm_sourceなど）を消さないようにマージして更新
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.set('lang', newLang)
    setSearchParams(newSearchParams)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-[100] flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs tracking-tighter text-zinc-400 transition-all hover:bg-white/10 hover:text-white"
    >
      <Languages className="h-4 w-4" />
      <span>{t('common.langName')}</span>
    </button>
  )
}

export default LanguageSwitcher
