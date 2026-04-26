import React from 'react'
import { Timer, MonitorSmartphone, ShieldAlert } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="rounded-3xl border border-white/5 bg-zinc-900/50 p-8 transition-colors hover:bg-zinc-900">
    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="mb-3 text-xl font-bold">{title}</h3>
    <p className="leading-relaxed text-zinc-400">{description}</p>
  </div>
)

const Features = () => {
  const { t } = useTranslation()
  return (
    <section className="border-t border-white/5 bg-zinc-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            {t('features.title1')}
          </h2>
          <p className="text-zinc-400">{t('features.title2')}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={Timer}
            title={t('features.timer')}
            description={t('features.timerDesc')}
          />
          <FeatureCard
            icon={MonitorSmartphone}
            title={t('features.MonitorSmartphone')}
            description={t('features.MonitorSmartphoneDesc')}
          />
          <FeatureCard
            icon={ShieldAlert}
            title={t('features.shieldAlert')}
            description={t('features.shieldAlertDesc')}
          />
        </div>
      </div>
    </section>
  )
}

export default Features
