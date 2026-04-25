import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Timer, ShieldAlert, MonitorSmartphone } from 'lucide-react'

const FeatureDetails = () => {
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
        トップページに戻る
      </Link>

      <h1 className="mb-16 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
        LimitBoxのコア機能
      </h1>

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
                <h2 className="text-2xl font-bold md:text-3xl">自爆タイマー</h2>
              </div>
              <p className="mb-8 text-lg leading-relaxed text-zinc-300">
                設定した期間（10分〜1ヶ月）アプリにアクセスがなかった場合、内部のすべての極秘データとフォルダ設定を跡形もなく完全消去します。もしあなたに何かがあってスマホを見られても、秘密が漏れることは絶対にありません。
              </p>

              <div className="group relative rounded-xl border border-red-500/20 bg-black/50 p-6 font-mono text-sm text-red-400">
                <div className="absolute top-2 right-2 flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/30 transition-colors group-hover:bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-zinc-700" />
                  <div className="h-3 w-3 rounded-full bg-zinc-700" />
                </div>
                <span className="mr-2 text-zinc-600">{'>'}</span> //
                時間経過で暗号化キーを完全に破棄
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
                  偽装とFace IDロック
                </h2>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-zinc-300">
                アプリの起動にはFace
                IDによる生体認証が必須です。さらに、認証に3回失敗するとパスコード入力画面に切り替わりますが、正しいパスコードを知らない人間には中のデータを見ることはできません。
              </p>
            </div>
            {/* 👇 ここに将来的にFaceIDの画面スクショなどを入れる想定のダミー枠 */}
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
                  Mac / iPad 完全最適化 UI
                </h2>
              </div>
              <p className="mb-6 text-lg leading-relaxed text-zinc-300">
                v1.1.0より、iPhone版のカスタムUIをMacおよびiPadでもシームレスに利用可能になりました。大画面でも操作性を損なわず、スワイプでサクサクと動画や画像を閲覧できます。
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
      </div>
    </div>
  )
}

export default FeatureDetails
