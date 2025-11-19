import React from 'react'
import Spline from '@splinetool/react-spline'
import { Brain, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] w-full overflow-hidden bg-[#0b1020]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient glow overlay - don't block Spline interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.1),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.15),transparent_40%)]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-sky-200 backdrop-blur-md ring-1 ring-white/10 shadow-[inset_6px_6px_12px_rgba(0,0,0,0.45),inset_-6px_-6px_12px_rgba(255,255,255,0.03)]">
          <Sparkles className="h-3.5 w-3.5" />
          AI Study Tutor • Neomorphic UI
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(56,189,248,0.15)]">
          Learn faster with an intelligent companion
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-sky-200/90">
          Paste your notes. Get instant summaries and auto-generated quizzes. Designed with a soft, futuristic aesthetic for focused study.
        </p>
        <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white/5 px-5 py-3 text-sky-100 backdrop-blur-md ring-1 ring-white/10 shadow-[8px_8px_20px_rgba(0,0,0,0.55),-8px_-8px_20px_rgba(255,255,255,0.04)]">
          <Brain className="h-5 w-5 opacity-90" />
          Paste text below to begin
        </div>
      </div>
    </section>
  )
}

export default Hero
