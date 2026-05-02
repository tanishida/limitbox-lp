import React from 'react'
import { ServerOff, Zap, Shield, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import CustomLink from '../components/CustomLink'

const P2PTeaser = () => {
  const { t } = useTranslation()

  return (
    <section className="bg-zinc-900/30 px-6 py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 md:p-16">
        {/* ヘッダー部分 */}
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10 md:h-20 md:w-20">
            <ServerOff className="h-8 w-8 text-blue-400 md:h-10 md:w-10" />
          </div>
          <h2 className="mb-4 text-2xl font-bold md:text-4xl">
            {t('p2pTeaser.title')}
          </h2>
          <p className="mx-auto max-w-2xl leading-relaxed text-zinc-400">
            {t('p2pTeaser.lead')}
          </p>
        </div>

        {/* 3つの特徴グリッド */}
        <div className="grid w-full gap-6 md:grid-cols-3">
          {/* 特徴1: ゼロ知識 */}
          <div className="flex flex-col items-center rounded-2xl border border-white/5 bg-white/5 p-6 text-center transition-colors hover:bg-white/10">
            <ServerOff className="mb-4 h-8 w-8 text-emerald-400" />
            <h3 className="mb-2 text-lg font-bold text-zinc-200">
              {t('p2pTeaser.feature1Title')}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              {t('p2pTeaser.feature1Desc')}
            </p>
          </div>

          {/* 特徴2: 高速・無制限 */}
          <div className="flex flex-col items-center rounded-2xl border border-white/5 bg-white/5 p-6 text-center transition-colors hover:bg-white/10">
            <Zap className="mb-4 h-8 w-8 text-amber-400" />
            <h3 className="mb-2 text-lg font-bold text-zinc-200">
              {t('p2pTeaser.feature2Title')}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              {t('p2pTeaser.feature2Desc')}
            </p>
          </div>

          {/* 特徴3: VPN突破 */}
          <div className="flex flex-col items-center rounded-2xl border border-white/5 bg-white/5 p-6 text-center transition-colors hover:bg-white/10">
            <Shield className="mb-4 h-8 w-8 text-purple-400" />
            <h3 className="mb-2 text-lg font-bold text-zinc-200">
              {t('p2pTeaser.feature3Title')}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              {t('p2pTeaser.feature3Desc')}
            </p>
          </div>
        </div>

        {/* 詳細ページへのCTAボタン */}
        {/* ※Next.jsを使っている場合は <a> を <Link href="..."> に変更してください */}
        <div className="mt-2">
          <CustomLink
            to="/technology"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-zinc-900 transition-all hover:scale-105 hover:bg-zinc-200"
          >
            {t('p2pTeaser.cta')}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </CustomLink>
        </div>
      </div>
    </section>
  )
}

export default P2PTeaser
