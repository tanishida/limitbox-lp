import React from 'react'
import { Lock } from 'lucide-react'

const Security = () => {
  return (
    <section className="bg-zinc-900/30 px-6 py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 md:flex-row md:p-16">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-green-500/10 md:h-32 md:w-32">
          <Lock className="h-10 w-10 text-green-400 md:h-16 md:w-16" />
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-bold md:text-4xl">
            完全なオフライン設計
          </h2>
          <p className="leading-relaxed text-zinc-400">
            LimitBoxに保存されたファイルは、すべてあなたのデバイス内でのみ強力に暗号化されて保存されます。
            <br className="hidden md:block" />
            外部サーバーへのアップロードや通信は一切行わないため、開発者ですらあなたのデータを見ることは物理的に不可能です。
          </p>
        </div>
      </div>
    </section>
  )
}

export default Security
