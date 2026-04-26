import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next' // 追加
import {
  ArrowLeft,
  Timer,
  ShieldAlert,
  MonitorSmartphone,
  PlaySquare,
  ExternalLink,
} from 'lucide-react'

const FeatureDetails = () => {
  const { t } = useTranslation() // 追加

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-20">
      <Link
        to="/"
        className="mb-10 inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-white"
      >
        <ArrowLeft className="h-5 w-5" />
        {t('featureDetails.back')}
      </Link>

      <div className="mb-16">
        <h1 className="mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          {t('featureDetails.title')}
        </h1>
        <p className="font-mono text-sm tracking-widest text-zinc-400 uppercase">
          {t('featureDetails.subtitle')}
        </p>
      </div>

      {/* 📽️ 操作デモ動画セクション */}
      <section className="group relative mx-auto mb-24 max-w-4xl">
        <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-blue-600 to-indigo-600 opacity-25 blur transition duration-1000 group-hover:opacity-50"></div>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-950 shadow-2xl">
          {/* スパイ映画風：動画上部のステータスバー */}
          <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-6 py-3">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-red-500"></div>
              <span className="font-mono text-[10px] tracking-tighter text-zinc-500 uppercase">
                Live Feedback: encrypted_stream.mp4
              </span>
            </div>
            <div className="font-mono text-[10px] text-zinc-600">
              REC [●] 00:00:10:24
            </div>
          </div>

          <div className="relative bg-black p-2 md:p-4">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-auto w-full rounded-2xl object-contain opacity-95"
            >
              <source src="/videos/operation-demo.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="bg-crt-lines pointer-events-none absolute inset-0 opacity-20"></div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]"></div>
            <div className="absolute top-4 left-4 h-4 w-4 border-t-2 border-l-2 border-blue-500/50"></div>
            <div className="absolute top-4 right-4 h-4 w-4 border-t-2 border-r-2 border-blue-500/50"></div>
            <div className="absolute bottom-4 left-4 h-4 w-4 border-b-2 border-l-2 border-blue-500/50"></div>
            <div className="absolute right-4 bottom-4 h-4 w-4 border-r-2 border-b-2 border-blue-500/50"></div>
          </div>
        </div>
        <p className="mt-4 text-center font-mono text-xs text-zinc-500">
          {t('featureDetails.videoNote')}
        </p>
      </section>

      <div className="space-y-24">
        {/* 機能1: 自爆タイマー */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 p-8 md:p-12">
          <div className="relative z-10 flex flex-col items-center gap-10 md:flex-row">
            <div className="flex-1">
              <div className="mb-6 flex items-center gap-4">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/20">
                  <div className="absolute inset-0 animate-pulse rounded-2xl bg-red-500/10 blur-lg" />
                  <Timer className="relative z-10 h-8 w-8 text-red-500" />
                </div>
                <h2 className="text-2xl font-bold md:text-3xl">
                  {t('featureDetails.timer.title')}
                </h2>
              </div>
              <p className="mb-8 text-lg leading-relaxed text-zinc-300">
                {t('featureDetails.timer.desc')}
              </p>

              <div className="group relative rounded-xl border border-red-500/20 bg-black/50 p-6 font-mono text-sm text-red-400">
                <div className="absolute top-2 right-2 flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/30 transition-colors group-hover:bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-zinc-700" />
                  <div className="h-3 w-3 rounded-full bg-zinc-700" />
                </div>
                <span className="mr-2 text-zinc-600">{'>'}</span> //{' '}
                {t('featureDetails.timer.code1')}
                <br />
                <span className="mr-2 text-zinc-600">{'>'}</span>{' '}
                KeyManager.destroyKey()
                <br />
                <span className="mr-2 text-zinc-600">{'>'}</span>{' '}
                FileManagerHelper.deleteAllFiles()
                <br />
                <span className="mr-2 text-zinc-600">{'>'}</span> STATUS: SECURE
                DESTRUCTION COMPLETE.
              </div>
            </div>

            <div className="group relative mx-auto flex w-full max-w-[280px] flex-1 items-center justify-center md:max-w-[320px]">
              <div className="pointer-events-none absolute inset-0 rounded-full bg-red-600/10 blur-[80px] transition-colors duration-500 group-hover:bg-red-600/20" />
              <div className="relative z-10 overflow-hidden rounded-[2.5rem] border-4 border-zinc-700/50 bg-zinc-950 shadow-2xl transition-all duration-300 group-hover:-translate-y-2 group-hover:border-red-500/30 group-hover:shadow-[0_20px_50px_rgba(239,68,68,0.2)]">
                <img
                  src="/images/screenshot-timer-setup.png"
                  alt="自爆タイマー設定画面"
                  className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="bg-crt-lines pointer-events-none absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20" />
              </div>
            </div>
          </div>
        </section>

        {/* 機能2: 偽装とロック */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 p-8 md:p-12">
          <div className="relative z-10 flex flex-col items-center gap-10 md:flex-row-reverse">
            <div className="flex-1">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/20">
                  <ShieldAlert className="h-8 w-8 text-orange-500" />
                </div>
                <h2 className="text-2xl font-bold md:text-3xl">
                  {t('featureDetails.decoy.title')}
                </h2>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-zinc-300">
                {t('featureDetails.decoy.desc')}
              </p>
            </div>
            <div className="mx-auto flex w-full max-w-[280px] flex-1 items-center justify-center md:max-w-[320px]">
              <div className="relative z-10 overflow-hidden rounded-[2.5rem] border-4 border-zinc-700/50 bg-zinc-950 shadow-2xl transition-all duration-300 group-hover:-translate-y-2 group-hover:border-red-500/30 group-hover:shadow-[0_20px_50px_rgba(239,68,68,0.2)]">
                <img
                  src="/images/screenshot-lock.png"
                  alt="偽装とFace IDロック"
                  className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="bg-crt-lines pointer-events-none absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20" />
              </div>
            </div>
          </div>
        </section>

        {/* 機能3: 全デバイス対応 */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 p-8 md:p-12">
          <div className="relative z-10 flex flex-col items-center gap-10 md:flex-row">
            <div className="flex-1">
              <div className="mb-6 flex items-center gap-4">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20">
                  <div className="absolute inset-0 animate-pulse rounded-2xl bg-blue-500/10 blur-lg" />
                  <MonitorSmartphone className="relative z-10 h-8 w-8 text-blue-500" />
                </div>
                <h2 className="text-2xl font-bold md:text-3xl">
                  {t('featureDetails.multi.title')}
                </h2>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-zinc-300">
                {t('featureDetails.multi.desc')}
              </p>
            </div>

            <div className="group perspective-1000 relative w-full flex-1">
              <div className="pointer-events-none absolute inset-0 rounded-full bg-blue-600/10 blur-[80px] transition-colors duration-500 group-hover:bg-blue-600/20" />
              <img
                src="/images/screenshot-mac.png"
                alt="iPad UI"
                className="relative z-10 h-auto w-full rotate-2 transform rounded-xl border border-white/10 object-cover shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:rotate-0"
              />
            </div>
          </div>
        </section>

        {/* 🔴 YouTube詳細解説へのリンク */}
        <section className="mx-auto mb-24 max-w-4xl">
          <a
            href="https://youtu.be/3tvYbjlhixw?si=Hl0trD9ay8J9b0JM"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 p-6 transition-all duration-500 hover:border-red-500/50 hover:bg-zinc-900/80 hover:shadow-[0_0_40px_rgba(239,68,68,0.15)] md:flex-row md:p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/0 to-red-500/0 transition-all duration-500 group-hover:from-red-500/5"></div>

            <div className="relative z-10 flex w-full items-center gap-6 md:w-auto">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 transition-transform duration-500 group-hover:scale-110">
                <PlaySquare className="h-8 w-8 text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
              </div>
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-3">
                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-red-100 md:text-2xl">
                    {t('featureDetails.youtube.title')}
                  </h3>
                  <span className="rounded border border-red-500/30 bg-red-500/10 px-2 py-0.5 font-mono text-[10px] text-red-400">
                    YOUTUBE
                  </span>
                </div>
                <p className="text-sm text-zinc-400 md:text-base">
                  {t('featureDetails.youtube.desc')}
                </p>
              </div>
            </div>

            <div className="relative z-10 w-full shrink-0 md:w-auto">
              <div className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-mono text-sm text-white transition-all duration-300 group-hover:border-red-500 group-hover:bg-red-600 group-hover:text-white">
                [ INITIATE_LINK ]
                <ExternalLink className="h-4 w-4" />
              </div>
              <p className="mt-2 text-center font-mono text-[10px] text-zinc-500 transition-colors group-hover:text-red-400/70">
                STATUS: ENCRYPTED VIDEO ONLINE
              </p>
            </div>
          </a>
        </section>
      </div>
    </div>
  )
}

export default FeatureDetails
