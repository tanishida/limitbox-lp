import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ScrollText } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Terms = () => {
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative mx-auto max-w-4xl px-6 pt-24 pb-20">
      <Link
        to="/"
        className="mb-10 inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-white"
      >
        <ArrowLeft className="h-5 w-5" />
        {t('terms.backToTop')}
      </Link>

      <div className="mb-16">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
            <ScrollText className="h-6 w-6 text-blue-400" />
          </div>
          <h1 className="text-3xl font-bold md:text-5xl">{t('terms.title')}</h1>
        </div>
        <p className="font-mono text-sm text-zinc-400">
          LAST UPDATED: 2026.04.26
          <br />
          DOCUMENT ID: LB-TOS-001
        </p>
      </div>

      <div className="prose prose-invert prose-h2:text-blue-400 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4 prose-a:text-blue-400 max-w-none rounded-3xl border border-white/10 bg-zinc-900/40 p-8 md:p-12">
        <p className="mb-8 leading-relaxed text-zinc-300">{t('terms.intro')}</p>

        <div className="space-y-12">
          {/* 第1条 */}
          <section>
            <h2 className="mb-6 text-2xl font-bold">{t('terms.art1.title')}</h2>
            <p className="leading-relaxed text-zinc-300">
              {t('terms.art1.desc')}
            </p>
          </section>

          {/* 第2条 */}
          <section>
            <h2 className="mb-6 text-2xl font-bold">{t('terms.art2.title')}</h2>
            <ol className="list-decimal space-y-2 pl-6 leading-relaxed text-zinc-300">
              {t('terms.art2.list', { returnObjects: true }).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                ),
              )}
            </ol>
          </section>

          {/* 第3条 */}
          <section>
            <h2 className="mb-6 text-2xl font-bold">{t('terms.art3.title')}</h2>
            <ol className="list-decimal space-y-2 pl-6 leading-relaxed text-zinc-300">
              {t('terms.art3.list', { returnObjects: true }).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                ),
              )}
            </ol>
          </section>

          {/* 第4条（赤枠） */}
          <section className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
            <h2 className="mb-6 !border-red-500/20 text-2xl font-bold !text-red-400">
              {t('terms.art4.title')}
            </h2>
            <ol className="list-decimal space-y-2 pl-6 leading-relaxed text-zinc-300">
              {t('terms.art4.list', { returnObjects: true }).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                ),
              )}
            </ol>
          </section>

          {/* 第5条 */}
          <section>
            <h2 className="mb-6 text-2xl font-bold">{t('terms.art5.title')}</h2>
            <ol className="list-decimal space-y-2 pl-6 leading-relaxed text-zinc-300">
              {t('terms.art5.list', { returnObjects: true }).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                ),
              )}
            </ol>
          </section>

          {/* 第6条 */}
          <section>
            <h2 className="mb-6 text-2xl font-bold">{t('terms.art6.title')}</h2>
            <p className="mb-4 leading-relaxed text-zinc-300">
              {t('terms.art6.desc')}
            </p>
            <ol className="list-decimal space-y-2 pl-6 leading-relaxed text-zinc-300">
              {t('terms.art6.list', { returnObjects: true }).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                ),
              )}
            </ol>
          </section>

          {/* 第7条 */}
          <section>
            <h2 className="mb-6 text-2xl font-bold">{t('terms.art7.title')}</h2>
            <p className="leading-relaxed text-zinc-300">
              {t('terms.art7.desc')}
            </p>
          </section>

          {/* 第8条 */}
          <section>
            <h2 className="mb-6 text-2xl font-bold">{t('terms.art8.title')}</h2>
            <ol className="list-decimal space-y-2 pl-6 leading-relaxed text-zinc-300">
              {t('terms.art8.list', { returnObjects: true }).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                ),
              )}
            </ol>
          </section>

          <div className="mt-8 border-t border-white/10 pt-8 font-mono text-sm text-zinc-500">
            {t('terms.supplement')}
            <br />
            {t('terms.date')}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terms
