import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Features from './components/Features'
import Security from './components/Security'
import Footer from './components/Footer'
import FeatureDetails from './pages/FeatureDetails'
import Contact from './pages/Contact'
import Terms from './components/Terms'
import './i18n'
import LanguageSwitcher from './components/LanguageSwitcher'
import LanguageInit from './components/LanguageInit'
import DownloadCTA from './components/DownloadCTA'
import P2PTeaser from './components/P2PTeaser'
import Technology from './pages/Technology'

const Home = () => (
  <>
    <Hero />
    <Features />
    <Security />
    <P2PTeaser />
    <div className="mt-16 border-t border-white/10 pt-16">
      <DownloadCTA />
    </div>
  </>
)

function App() {
  return (
    <Router>
      <LanguageInit />
      <div className="min-h-screen bg-zinc-950 font-sans text-white selection:bg-blue-500/30">
        {/* 👇 スパイ映画風：CRTシマシマフィルター（マウスクリックを邪魔しないように pointer-events-none） */}
        <div className="bg-crt-lines pointer-events-none fixed inset-0 z-50 opacity-40 mix-blend-overlay"></div>

        {/* 👇 スパイ映画風：上から下へゆっくり動く走査線（スキャンライン） */}
        <div className="animate-scanline pointer-events-none fixed inset-0 z-50 h-[15%] w-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent opacity-50"></div>
        <LanguageSwitcher />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeatureDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
