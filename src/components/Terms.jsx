import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ScrollText } from 'lucide-react'

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative mx-auto max-w-4xl px-6 pt-24 pb-20">
      {/* 戻るボタン */}
      <Link
        to="/"
        className="mb-10 inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-white"
      >
        <ArrowLeft className="h-5 w-5" />
        トップページに戻る
      </Link>

      {/* ヘッダー部分 */}
      <div className="mb-16">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
            <ScrollText className="h-6 w-6 text-blue-400" />
          </div>
          <h1 className="text-3xl font-bold md:text-5xl">利用規約</h1>
        </div>
        <p className="font-mono text-sm text-zinc-400">
          LAST UPDATED: 2026.04.26
          <br />
          DOCUMENT ID: LB-TOS-001
        </p>
      </div>

      {/* 規約本文エリア */}
      <div className="prose prose-invert prose-h2:text-blue-400 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-4 prose-a:text-blue-400 max-w-none rounded-3xl border border-white/10 bg-zinc-900/40 p-8 md:p-12">
        <p className="mb-8 leading-relaxed text-zinc-300">
          本利用規約（以下「本規約」といいます。）は、LimitBox（以下「本アプリ」といいます。）の提供条件および、ユーザーの皆様と開発者との間の権利義務関係を定めるものです。本アプリをご利用になる際は、本規約に同意いただく必要があります。
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="mb-6 text-2xl font-bold">第1条（適用）</h2>
            <p className="leading-relaxed text-zinc-300">
              本規約は、ユーザーと開発者との間の、本アプリの利用に関わる一切の関係に適用されるものとします。
            </p>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold">
              第2条（本アプリの特性とデータの取り扱い）
            </h2>
            <ol className="list-decimal space-y-2 pl-6 leading-relaxed text-zinc-300">
              <li>
                本アプリは、ユーザーのデバイス（iPhone, iPad,
                Mac等）のローカル環境内でのみデータを暗号化して保存します。
              </li>
              <li>
                開発者は、本アプリ内に保存されたデータを外部のサーバー等に自動的にバックアップ、送信、または収集することは一切ありません。
              </li>
              <li>
                ユーザーが本アプリをデバイスから削除（アンインストール）した場合、本アプリ内に保存されていたデータも同時にすべて削除され、復元することはできません。
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold">
              第3条（パスコードおよび生体認証の管理）
            </h2>
            <ol className="list-decimal space-y-2 pl-6 leading-relaxed text-zinc-300">
              <li>
                本アプリのロック解除に使用するパスコードは、ユーザー自身の責任において厳重に管理するものとします。
              </li>
              <li>
                本アプリの高度な暗号化の仕様上、ユーザーがパスコードを忘失した場合、開発者はいかなる方法を用いてもデータの復号、救出、およびパスコードの再発行を行うことはできません。
              </li>
            </ol>
          </section>

          <section className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
            <h2 className="mb-6 !border-red-500/20 text-2xl font-bold !text-red-400">
              第4条（自爆タイマー機能に関する同意）
            </h2>
            <ol className="list-decimal space-y-2 pl-6 leading-relaxed text-zinc-300">
              <li>
                本アプリには、ユーザーが設定した一定期間アプリへのアクセスがなかった場合に、保存データを自動的かつ完全に消去する機能（以下「自爆タイマー」といいます。）が搭載されています。
              </li>
              <li>
                ユーザーは、自爆タイマーを有効にする場合、指定期間経過後にデータが復元不可能な形で消去されることを完全に理解し、自己の責任において本機能を利用するものとします。
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold">第5条（免責事項）</h2>
            <ol className="list-decimal space-y-2 pl-6 leading-relaxed text-zinc-300">
              <li>
                開発者は、本アプリに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
              </li>
              <li>
                開発者は、本アプリに起因してユーザーに生じたあらゆる損害（データの消失、自爆タイマーの作動によるデータの完全消去、デバイスの紛失・故障に伴うデータ喪失を含みますがこれらに限られません）について一切の責任を負いません。
              </li>
            </ol>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold">第6条（禁止事項）</h2>
            <p className="mb-4 leading-relaxed text-zinc-300">
              ユーザーは、本アプリの利用にあたり、以下の行為をしてはなりません。
            </p>
            <ol className="list-decimal space-y-2 pl-6 leading-relaxed text-zinc-300">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>本アプリの機能を破壊したり、妨害したりする行為</li>
              <li>その他、開発者が不適切と判断する行為</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold">第7条（利用規約の変更）</h2>
            <p className="leading-relaxed text-zinc-300">
              開発者は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。変更後の利用規約は、本アプリ内または関連するウェブサイトに掲示された時点から効力を生じるものとします。
            </p>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold">
              第8条（準拠法・裁判管轄）
            </h2>
            <ol className="list-decimal space-y-2 pl-6 leading-relaxed text-zinc-300">
              <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
              <li>
                本アプリに関して紛争が生じた場合には、横浜地方裁判所を第一審の専属的合意管轄とします。
              </li>
            </ol>
          </section>

          <div className="mt-8 border-t border-white/10 pt-8 font-mono text-sm text-zinc-500">
            附則
            <br />
            2026年4月26日 制定
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terms
