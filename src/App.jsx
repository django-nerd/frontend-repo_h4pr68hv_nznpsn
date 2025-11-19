import React from 'react'
import Hero from './components/Hero'
import StudyWorkbench from './components/StudyWorkbench'

function App() {
  return (
    <div className="min-h-screen bg-[#0b1020] text-sky-100 selection:bg-sky-500/30 selection:text-white">
      {/* background texture */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0)_0%,rgba(2,6,23,0.2)_40%,rgba(2,6,23,0.6)_100%)]" />

      <header className="relative z-20">
        <Hero />
      </header>

      <main className="relative z-20">
        <StudyWorkbench />
      </main>

      <footer className="relative z-20 mx-auto max-w-6xl px-6 pb-12 text-center text-xs text-sky-300/60">
        Built for focused learning • Neomorphic aesthetic with subtle depth
      </footer>
    </div>
  )
}

export default App
