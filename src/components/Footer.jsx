import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-3">
          <div className="group relative mb-8 flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <img
              src="/images/app-icon.png"
              alt="LimitBox Icon"
              className="relative z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 z-20 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
          </div>

          <span className="text-lg font-bold">LimitBox</span>
        </div>

        <div className="flex gap-6 text-sm text-zinc-500">
          <Link to="/terms" className="transition-colors hover:text-white">
            利用規約
          </Link>
          <a
            target="_blank"
            href="https://well-danger-b16.notion.site/LimitBox-349f48eee894804bb774ed7fb156d886"
            className="transition-colors hover:text-white"
          >
            プライバシーポリシー
          </a>
          <Link to="/contact" className="transition-colors hover:text-white">
            お問い合わせ
          </Link>
        </div>

        <p className="text-sm text-zinc-600">
          &copy; {new Date().getFullYear()} hiroaki kawase. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
