import React, { useEffect } from 'react'
import CustomLink from '../components/CustomLink'
import { ArrowLeft, Mail, ExternalLink, MessageSquare } from 'lucide-react'
import { useTranslation } from 'react-i18next' // 追加

const Contact = () => {
  const { t } = useTranslation() // 追加

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const email = 'hiroakni@icloud.com'
  const xUrl = 'https://x.com/kawahiroBJ'
  const xId = '@kawahiroBJ'

  const XIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  )

  return (
    <div className="mx-auto min-h-[80vh] max-w-3xl px-6 pt-32 pb-20">
      <CustomLink
        to="/"
        className="mb-10 inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-white"
      >
        <ArrowLeft className="h-5 w-5" />
        {t('contact.back')}
      </CustomLink>

      <div className="mb-16 text-center">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">
          {t('contact.title')}
        </h1>
        <p className="text-lg text-zinc-400">
          {t('contact.desc1')}
          <br className="hidden md:block" />
          {t('contact.desc2')}
        </p>
      </div>

      <div className="grid gap-6">
        {/* メール連絡カード */}
        <div className="group rounded-3xl border border-white/10 bg-zinc-900/40 p-8 transition-colors hover:border-blue-500/50">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="mb-1 text-sm text-zinc-500">
                  {t('contact.emailLabel')}
                </p>
                <p className="font-mono text-xl font-medium">{email}</p>
              </div>
            </div>

            <a
              href={`mailto:${email}`}
              className="flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-zinc-950 transition-transform hover:scale-105"
            >
              {t('contact.sendEmail')}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* X（Twitter）連絡カード */}
        <div className="group rounded-3xl border border-white/10 bg-zinc-900/40 p-8 transition-colors hover:border-zinc-500/50">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <XIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="mb-1 text-sm text-zinc-500">
                  {t('contact.xLabel')}
                </p>
                <p className="font-mono text-xl font-medium">{xId}</p>
              </div>
            </div>

            <a
              href={xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-zinc-950 transition-transform hover:scale-105"
            >
              {t('contact.sendX')}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* 補足情報 */}
        <div className="rounded-3xl border border-blue-500/10 bg-blue-500/5 p-8">
          <div className="flex gap-4">
            <MessageSquare className="h-6 w-6 shrink-0 text-blue-400" />
            <div className="text-sm leading-relaxed text-zinc-400">
              <p className="mb-2 font-bold text-zinc-200">
                {t('contact.supportTitle')}
              </p>
              <p>{t('contact.supportDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
