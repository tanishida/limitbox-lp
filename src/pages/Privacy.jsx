import React, { useEffect } from 'react'
import CustomLink from '../components/CustomLink'
// プライバシーに合わせてアイコンを ShieldCheck に変更しています
import { ArrowLeft, ShieldCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Privacy = () => {
  const { t } = useTranslation()

  useEffect(() => {
    // ページ遷移時に一番上にスクロールする処理
    window.scrollTo(0, 0)
  }, [])

  // 翻訳データからセクションの配列を取得
  const sections = t('privacy.sections', { returnObjects: true })

  return (
    <div className="relative mx-auto max-w-4xl px-6 pt-24 pb-20">
      {/* 戻るボタン */}
      <CustomLink
        to="/"
        className="mb-10 inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-white"
      >
        <ArrowLeft className="h-5 w-5" />
        {t('privacy.backToTop')}
      </CustomLink>

      {/* ヘッダーセクション */}
      <div className="mb-16">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-green-500/20 bg-green-500/10">
            <ShieldCheck className="h-6 w-6 text-green-400" />
          </div>
          <h1 className="text-3xl font-bold md:text-5xl">
            {t('privacy.title')}
          </h1>
        </div>
        <p className="font-mono text-sm text-zinc-400">
          LAST UPDATED: 2026.04.21
          <br />
          DOCUMENT ID: {t('privacy.docId')}
        </p>
      </div>

      {/* 本文セクション */}
      <div className="prose prose-invert prose-h2:text-green-400 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4 prose-a:text-green-400 max-w-none rounded-3xl border border-white/10 bg-zinc-900/40 p-8 md:p-12">
        <div className="space-y-12">
          {sections.map((section, index) => (
            <section key={index}>
              <h2 className="mb-6 text-2xl font-bold">{section.title}</h2>
              <p className="leading-relaxed text-zinc-300">{section.desc}</p>
            </section>
          ))}

          <div className="mt-8 border-t border-white/10 pt-8 font-mono text-sm text-zinc-500">
            {t('privacy.date')}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy
