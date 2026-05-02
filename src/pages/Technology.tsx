import React from 'react'
// X アイコンを追加
import { Network, Lock, Server, Cpu, X, ArrowLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import CustomLink from '../components/CustomLink'

const Technology = () => {
  const { t } = useTranslation()

  // モーダルの開閉状態を管理するState
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-zinc-950 px-6 py-24 font-sans text-zinc-200">
      <CustomLink
        to="/"
        className="mb-10 inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-white"
      >
        <ArrowLeft className="h-5 w-5" />
        {t('contact.back')}
      </CustomLink>
      <div className="mx-auto max-w-4xl">
        {/* ヒーローセクション */}
        <div className="mb-20 text-center">
          <h1 className="mb-6 text-3xl font-bold text-white md:text-5xl">
            {t('tech.heroTitle')}
          </h1>
          <p className="mx-auto max-w-2xl leading-relaxed text-zinc-400">
            {t('tech.heroDesc')}
          </p>
        </div>

        {/* アーキテクチャ図（クリックで拡大） */}
        <div className="mb-24 flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-zinc-900/30 p-4 md:p-8">
          <div className="w-full overflow-hidden rounded-xl border border-white/5 bg-zinc-800/30">
            <img
              src="/images/architecture-diagram.png"
              alt="Architecture Diagram"
              // ホバー時にズームカーソルと、わずかな拡大エフェクトを追加
              className="h-auto w-full cursor-zoom-in object-contain transition-transform hover:scale-[1.02]"
              // 画像クリックでモーダルを開く
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>

        {/* テクノロジー詳細セクション */}
        <div className="space-y-12">
          {/* Section 1: P2P */}
          <div className="flex flex-col gap-6 rounded-[2rem] border border-white/5 bg-gradient-to-br from-zinc-900 to-zinc-900/50 p-8 md:flex-row md:p-12">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-500/10">
              <Network className="h-8 w-8 text-blue-400" />
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                {t('tech.sec1Title')}
              </h3>
              <p className="leading-relaxed text-zinc-400">
                {t('tech.sec1Desc')}
              </p>
            </div>
          </div>

          {/* Section 2: E2EE */}
          <div className="flex flex-col gap-6 rounded-[2rem] border border-white/5 bg-gradient-to-br from-zinc-900 to-zinc-900/50 p-8 md:flex-row md:p-12">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-green-500/10">
              <Lock className="h-8 w-8 text-green-400" />
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                {t('tech.sec2Title')}
              </h3>
              <p className="leading-relaxed text-zinc-400">
                {t('tech.sec2Desc')}
              </p>
            </div>
          </div>

          {/* Section 3: TURN Server */}
          <div className="flex flex-col gap-6 rounded-[2rem] border border-white/5 bg-gradient-to-br from-zinc-900 to-zinc-900/50 p-8 md:flex-row md:p-12">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-purple-500/10">
              <Server className="h-8 w-8 text-purple-400" />
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                {t('tech.sec3Title')}
              </h3>
              <p className="leading-relaxed text-zinc-400">
                {t('tech.sec3Desc')}
              </p>
            </div>
          </div>

          {/* Section 4: Chunked Streaming (メモリ最適化) */}
          <div className="flex flex-col gap-6 rounded-[2rem] border border-white/5 bg-gradient-to-br from-zinc-900 to-zinc-900/50 p-8 md:flex-row md:p-12">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-amber-500/10">
              <Cpu className="h-8 w-8 text-amber-400" />
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                {t('tech.sec4Title')}
              </h3>
              <p className="leading-relaxed text-zinc-400">
                {t('tech.sec4Desc')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 拡大モーダル（ライトボックス） */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm transition-opacity duration-300"
          // 背景（オーバーレイ）クリックでモーダルを閉じる
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-h-screen max-w-7xl">
            <img
              src="/images/architecture-diagram.png"
              alt="Architecture Diagram (Zoomed)"
              className="rounded-2xl object-contain shadow-2xl"
              // 画像自体をクリックした時は閉じないようにする（背景クリックと差別化したい場合）
              // onClick={(e) => e.stopPropagation()}
            />
            {/* 閉じるボタン */}
            <button
              className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-zinc-400 transition-colors hover:bg-white/20 hover:text-white"
              onClick={(e) => {
                // ボタンクリックイベントが親（背景）に伝わらないようにする
                e.stopPropagation()
                setIsModalOpen(false)
              }}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Technology
