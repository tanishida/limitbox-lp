import React from 'react'
import { Lock } from 'lucide-react'
import { useTranslation } from 'react-i18next' // 追加

const Security = () => {
  const { t } = useTranslation() // 追加

  return (
    <section className="bg-zinc-900/30 px-6 py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 md:flex-row md:p-16">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-green-500/10 md:h-32 md:w-32">
          <Lock className="h-10 w-10 text-green-400 md:h-16 md:w-16" />
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-bold md:text-4xl">
            {t('security.title')}
          </h2>
          <p className="leading-relaxed text-zinc-400">
            {t('security.desc1')}
            <br className="hidden md:block" />
            {t('security.desc2')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Security
