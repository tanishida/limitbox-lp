import React, { useState, useEffect } from 'react'
import { Apple } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next' // 追加

const Hero = () => {
  const { t, i18n } = useTranslation() // tとi18nを取得

  // タイピングアニメーション用のState
  const [typedLine1, setTypedLine1] = useState('')
  const [typedLine2, setTypedLine2] = useState('')

  // t関数を使って翻訳ファイルからテキストを取得
  const fullLine1 = t('hero.line1')
  const fullLine2 = t('hero.line2')

  useEffect(() => {
    // 言語が切り替わったときにStateをリセット
    setTypedLine1('')
    setTypedLine2('')

    let currentLine1 = ''
    let currentLine2 = ''
    let i = 0
    let j = 0

    const typingInterval1 = setInterval(() => {
      currentLine1 += fullLine1[i]
      setTypedLine1(currentLine1)
      i++

      if (i >= fullLine1.length) {
        clearInterval(typingInterval1)

        setTimeout(() => {
          const typingInterval2 = setInterval(() => {
            currentLine2 += fullLine2[j]
            setTypedLine2(currentLine2)
            j++
            if (j >= fullLine2.length) clearInterval(typingInterval2)
          }, 80)
        }, 500)
      }
    }, 100)

    return () => {
      clearInterval(typingInterval1)
    }
  }, [fullLine1, fullLine2, i18n.language]) // 👈 言語が切り替わったら再実行するように依存配列に追加

  return (
    <section className="relative flex flex-col items-center overflow-hidden px-6 pt-32 pb-20 text-center">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
        <div className="group relative mb-8 flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          <img
            src="/images/app-icon.png"
            alt="LimitBox Icon"
            className="relative z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 z-20 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
        </div>

        <h1 className="mb-8 flex min-h-[160px] flex-col gap-2 bg-gradient-to-b from-white to-white/60 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:min-h-[160px] md:text-6xl">
          <div className="flex items-center justify-center gap-1">
            {typedLine1}
            {typedLine1.length < fullLine1.length && (
              <span className="animate-pulse text-[1em] text-blue-500">_</span>
            )}
          </div>

          <div className="flex items-center justify-center gap-1">
            {typedLine2}
            {typedLine1.length === fullLine1.length && (
              <span className="animate-pulse text-[1em] text-blue-500">_</span>
            )}
          </div>
        </h1>

        <p className="mb-10 max-w-2xl font-mono text-lg text-zinc-400 md:text-xl">
          <span className="mr-2 text-green-500">{'>'}</span>
          STATUS: SYSTEM ONLINE. SECURE VAULT READY.
        </p>

        <div className="relative z-20 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="https://apps.apple.com/jp/app/limitbox/id6762798328"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-zinc-950 shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-transform duration-300 hover:scale-105"
          >
            <Apple className="h-6 w-6" />
            {t('hero.download')} {/* ボタンテキストの翻訳 */}
          </a>

          <Link
            to="/features"
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-zinc-800 px-8 py-4 font-mono text-lg font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-zinc-700"
          >
            [ READ_MORE ]
          </Link>
        </div>
      </div>

      <div className="perspective-1000 relative mx-auto mt-20 w-full max-w-5xl">
        <Link
          to="/features"
          className="group relative block flex h-auto w-full cursor-pointer items-end justify-center overflow-hidden rounded-t-3xl border-x border-t border-blue-500/30 bg-gradient-to-t from-zinc-900 to-zinc-800 shadow-[0_-20px_50px_rgba(59,130,246,0.1)]"
        >
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-blue-900/0 transition-all duration-500 group-hover:bg-blue-900/20">
            <span className="translate-y-4 rounded-full border border-white/20 bg-black/60 px-6 py-3 font-mono text-sm tracking-widest text-white opacity-0 drop-shadow-md backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              [ ACCESS OPERATION DEMO ]
            </span>
          </div>

          <img
            src="/images/screenshot-mac.png"
            alt="LimitBox on Mac"
            className="relative z-10 h-auto w-full rounded-t-2xl object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <img
            src="/images/screenshot-iphone.png"
            alt="LimitBox on iPhone"
            className="absolute relative right-10 bottom-0 z-10 h-auto w-1/4 translate-y-10 object-contain drop-shadow-2xl transition-transform delay-100 duration-700 group-hover:-translate-y-4"
          />
        </Link>
      </div>
    </section>
  )
}

export default Hero
