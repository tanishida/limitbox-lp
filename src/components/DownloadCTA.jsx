// src/components/DownloadCTA.jsx
import React from 'react'
import { Apple } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const DownloadCTA = () => {
  const { t } = useTranslation()

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      {/* 背景のぼんやりとした光彩エフェクト */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[100px]" />

      <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
        {t('cta.title')}
      </h2>
      <p className="mb-10 font-mono text-sm text-zinc-400 md:text-base">
        {t('cta.subtitle')}
      </p>

      <a
        href="https://apps.apple.com/jp/app/limitbox/id6762798328"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-zinc-950 shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
      >
        <Apple className="h-6 w-6" />
        {t('hero.download')}
      </a>
    </section>
  )
}

export default DownloadCTA
