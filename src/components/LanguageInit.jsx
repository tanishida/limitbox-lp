// src/components/LanguageInit.jsx
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const LanguageInit = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    // URLに ?lang= の指定があるかチェック
    const langParam = searchParams.get('lang')

    // パラメータがない場合（初回アクセス時など）のみ判定を実行
    if (!langParam) {
      // ユーザーのブラウザ言語を取得（例: "ja", "ja-JP", "en-US"）
      const browserLang = navigator.language || navigator.userLanguage

      // "ja" から始まる場合は 'ja'、それ以外（英語、中国語、フランス語など）はすべて 'en' にフォールバック
      const defaultLang = browserLang.startsWith('ja') ? 'ja' : 'en'

      // 既存のパラメータ（utm_source等）を保持したまま、langパラメータを追加
      const newSearchParams = new URLSearchParams(searchParams)
      newSearchParams.set('lang', defaultLang)

      // URLを更新。replace: true にすることで、ブラウザの「戻る」ボタンの履歴を汚さないようにします
      setSearchParams(newSearchParams, { replace: true })
    }
  }, [searchParams, setSearchParams])

  return null // 画面には何も表示しないロジックコンポーネント
}

export default LanguageInit
