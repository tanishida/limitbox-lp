import React from 'react'
import { Timer, MonitorSmartphone, ShieldAlert } from 'lucide-react'

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
  return (
    <section className="border-t border-white/5 bg-zinc-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            秘密を守る、3つの鉄壁
          </h2>
          <p className="text-zinc-400">
            LimitBoxはただのファイル保存アプリではありません。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={Timer}
            title="完全自爆タイマー"
            description="設定した期間アプリを開かなかった場合、保存されている全てのデータを跡形もなく自動消去。万が一デバイスを紛失しても安心です。"
          />
          <FeatureCard
            icon={MonitorSmartphone}
            title="全デバイス対応の美しさ"
            description="iPhoneはもちろん、iPadの大画面やMacにもネイティブ対応。デバイスに合わせて最適化された専用の動画プレイヤーで快適に閲覧できます。"
          />
          <FeatureCard
            icon={ShieldAlert}
            title="偽装と強制ロック"
            description="Face IDによる強固なロックに加え、パスコードを一定回数間違えると偽装画面へ遷移。あなたの本当の秘密には誰もたどり着けません。"
          />
        </div>
      </div>
    </section>
  )
}

export default Features
