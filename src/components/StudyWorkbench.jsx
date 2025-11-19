import React, { useMemo, useState } from 'react'
import { BookOpenText, ListChecks, FileText, Loader2, Sparkles } from 'lucide-react'
import Neobox from './Neobox'

const placeholder = `Paste or type your study text here.\n\nTips:\n- Keep paragraphs short for best results\n- Include headings for cleaner summaries\n- Use "Generate" to create a quiz and a concise summary`

const Chip = ({ icon: Icon, label }) => (
  <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs text-sky-200 ring-1 ring-white/10 shadow-[inset_6px_6px_12px_rgba(0,0,0,0.45),inset_-6px_-6px_12px_rgba(255,255,255,0.04)]">
    <Icon className="h-3.5 w-3.5" />
    {label}
  </div>
)

const StudyWorkbench = () => {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [summary, setSummary] = useState('')
  const [quiz, setQuiz] = useState([])

  const disabled = useMemo(() => !text.trim() || loading, [text, loading])

  // Placeholder generation handler (wired to future backend)
  const handleGenerate = async () => {
    setLoading(true)
    try {
      // In a future step we'll call the backend. For now, create a demo output.
      const demoSummary = 'This is a sample summary highlighting the key points from your text. It demonstrates how the AI will condense information into clear, digestible notes.'
      const demoQuiz = [
        { q: 'What is the central idea discussed in the text?', a: 'Answer explaining the main topic.' },
        { q: 'Name two supporting concepts mentioned.', a: 'Concept A and Concept B.' },
        { q: 'Why is this topic important?', a: 'Because it impacts X, Y, and Z.' },
      ]
      // Simulate delay for UI feedback
      await new Promise(r => setTimeout(r, 800))
      setSummary(demoSummary)
      setQuiz(demoQuiz)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative -mt-10 z-10 mx-auto max-w-6xl px-6 pb-24">
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <Chip icon={FileText} label="Paste Text" />
        <Chip icon={Sparkles} label="AI Summary" />
        <Chip icon={ListChecks} label="Auto Quiz" />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Neobox className="p-5 md:p-6">
          <div className="mb-3 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-sky-100/90">
              <FileText className="h-4 w-4" />
              Source Text
            </div>
            <button
              onClick={() => setText('')}
              className="rounded-xl px-3 py-1.5 text-xs text-sky-200/90 hover:text-white transition-colors bg-white/5 ring-1 ring-white/10 shadow-[inset_4px_4px_10px_rgba(0,0,0,0.5),inset_-4px_-4px_10px_rgba(255,255,255,0.04)]"
            >
              Clear
            </button>
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={placeholder}
            rows={14}
            className="w-full resize-none rounded-2xl border-0 bg-white/5 p-4 text-sky-100 placeholder:text-sky-300/40 focus:outline-none focus:ring-2 focus:ring-sky-400/40 ring-1 ring-white/10 shadow-[inset_10px_10px_24px_rgba(0,0,0,0.6),inset_-10px_-10px_24px_rgba(255,255,255,0.03)]"
          />
          <div className="mt-4 flex items-center justify-between">
            <div className="text-xs text-sky-300/60">{text.length} characters</div>
            <button
              onClick={handleGenerate}
              disabled={disabled}
              className="inline-flex items-center gap-2 rounded-2xl bg-sky-500/90 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-400 disabled:opacity-50 disabled:hover:bg-sky-500/90 shadow-[6px_6px_16px_rgba(0,0,0,0.6),-6px_-6px_16px_rgba(255,255,255,0.05)]"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
              Generate
            </button>
          </div>
        </Neobox>

        <div className="flex flex-col gap-6">
          <Neobox className="p-5 md:p-6">
            <div className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-sky-100/90">
              <BookOpenText className="h-4 w-4" />
              Summary
            </div>
            <div className="min-h-[140px] whitespace-pre-line text-sky-100/90">
              {summary || 'Your concise summary will appear here after generation.'}
            </div>
          </Neobox>

          <Neobox className="p-5 md:p-6">
            <div className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-sky-100/90">
              <ListChecks className="h-4 w-4" />
              Quiz
            </div>
            <div className="space-y-3">
              {quiz.length === 0 ? (
                <div className="text-sky-100/80">Your quiz will appear here with a few checks to test understanding.</div>
              ) : (
                quiz.map((item, idx) => (
                  <div key={idx} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 shadow-[inset_6px_6px_12px_rgba(0,0,0,0.45),inset_-6px_-6px_12px_rgba(255,255,255,0.04)]">
                    <div className="font-medium text-sky-100">{idx + 1}. {item.q}</div>
                    <div className="mt-1 text-sm text-sky-300/80">Answer: {item.a}</div>
                  </div>
                ))
              )}
            </div>
          </Neobox>
        </div>
      </div>
    </section>
  )
}

export default StudyWorkbench
