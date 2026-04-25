import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Features from './components/Features'
import Security from './components/Security'
import Footer from './components/Footer'
import FeatureDetails from './pages/FeatureDetails'
import Contact from './pages/Contact' // 👈 追加

const Home = () => (
  <>
    <Hero />
    <Features />
    <Security />
  </>
)

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-950 font-sans text-white selection:bg-blue-500/30">
        {/* 👇 スパイ映画風：CRTシマシマフィルター（マウスクリックを邪魔しないように pointer-events-none） */}
        <div className="bg-crt-lines pointer-events-none fixed inset-0 z-50 opacity-40 mix-blend-overlay"></div>

        {/* 👇 スパイ映画風：上から下へゆっくり動く走査線（スキャンライン） */}
        <div className="animate-scanline pointer-events-none fixed inset-0 z-50 h-[15%] w-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent opacity-50"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeatureDetails />} />
          <Route path="/contact" element={<Contact />} /> {/* 👈 追加 */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
