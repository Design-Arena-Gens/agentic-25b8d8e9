'use client'

import { useState } from 'react'
import { Sparkles, TrendingUp, Zap, Clock, MessageCircle, Hash, Video, Image as ImageIcon, Type, Target } from 'lucide-react'

interface ViralContent {
  category: string
  trendingTopics: string[]
  script: {
    hook: string
    body: string[]
    ending: string
    totalDuration: string
  }
  voiceNarration: string
  visualScenes: Array<{
    line: string
    sceneDescription: string
    duration: string
  }>
  editingPlan: {
    scenes: Array<{
      timestamp: string
      action: string
      effect: string
    }>
    captions: string
    emojis: string[]
  }
  subtitles: Array<{
    timestamp: string
    text: string
  }>
  thumbnail: string
  titles: string[]
  captions: string[]
  hashtags: string[]
  keywords: string[]
  bestPostingTime: {
    time: string
    reason: string
  }
  autoReplies: string[]
  viralityScore: number
  optimization: {
    hookStrength: string
    emotionalTrigger: string
    engagement: string
  }
}

export default function Home() {
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState<ViralContent | null>(null)
  const [error, setError] = useState('')

  const categories = [
    '💰 Money & Finance',
    '🧠 Psychology & Mindset',
    '💪 Fitness & Health',
    '📱 Tech & AI',
    '💼 Business & Entrepreneurship',
    '❤️ Relationships & Dating',
    '🎯 Motivation & Success',
    '🧘 Self-Improvement',
    '🍽️ Food & Recipes',
    '✈️ Travel & Adventure',
    '🎨 Art & Creativity',
    '🎮 Gaming',
    '🐕 Pets & Animals',
    '😂 Comedy & Entertainment',
    '👗 Fashion & Beauty',
  ]

  const handleGenerate = async () => {
    if (!category.trim()) {
      setError('Please enter a category')
      return
    }

    setLoading(true)
    setError('')
    setContent(null)

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate content')
      }

      const data = await response.json()
      setContent(data)
    } catch (err) {
      setError('Failed to generate viral content. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-red-900 text-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-12 h-12 text-yellow-400 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-black gradient-text">
              VIRAL CONTENT AI AGENT
            </h1>
            <Zap className="w-12 h-12 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-xl md:text-2xl text-pink-200 font-semibold">
            Auto-Generate Instagram Reels • TikTok • YouTube Shorts in SECONDS
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <p className="text-sm text-green-300">100% Viral Optimized • Research-Backed • Ready to Post</p>
          </div>
        </div>

        {/* Input Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
          <label className="block text-2xl font-bold mb-4">
            🎯 Select or Enter Your Category:
          </label>

          {/* Category Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`p-3 rounded-lg font-semibold transition-all duration-200 ${
                  category === cat
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg scale-105'
                    : 'bg-white/5 hover:bg-white/10 hover:scale-105'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Custom Input */}
          <div className="mb-6">
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Or type your own category... (e.g., 'Crypto Trading Tips')"
              className="w-full px-6 py-4 bg-white/5 border-2 border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-pink-500 text-lg"
            />
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-200">
              {error}
            </div>
          )}

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 hover:from-pink-600 hover:via-purple-600 hover:to-red-600 text-white font-black text-xl py-5 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl hover:shadow-pink-500/50 hover:scale-[1.02] flex items-center justify-center gap-3"
          >
            {loading ? (
              <>
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                GENERATING VIRAL CONTENT...
              </>
            ) : (
              <>
                <Sparkles className="w-6 h-6" />
                GENERATE VIRAL CONTENT NOW
                <Zap className="w-6 h-6" />
              </>
            )}
          </button>
        </div>

        {/* Results Section */}
        {content && (
          <div className="space-y-6 animate-fadeIn">
            {/* Virality Score */}
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-6 text-center shadow-2xl">
              <h2 className="text-3xl font-black mb-2">🔥 VIRALITY SCORE</h2>
              <div className="text-7xl font-black">{content.viralityScore}%</div>
              <p className="text-xl font-bold mt-2">MAXIMUM ENGAGEMENT POTENTIAL</p>
            </div>

            {/* Trending Topics */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-black">TRENDING TOPICS (Right Now)</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {content.trendingTopics.map((topic, i) => (
                  <span key={i} className="px-4 py-2 bg-green-500/20 border border-green-400 rounded-full font-bold">
                    🔥 {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Script */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <Video className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-black">VIRAL SCRIPT ({content.script.totalDuration})</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-red-500/20 border-l-4 border-red-500 p-4 rounded">
                  <h3 className="font-black text-xl mb-2">⚡ HOOK (0-2 sec):</h3>
                  <p className="text-lg font-semibold">{content.script.hook}</p>
                </div>

                <div className="bg-blue-500/20 border-l-4 border-blue-500 p-4 rounded">
                  <h3 className="font-black text-xl mb-2">🧠 BODY:</h3>
                  {content.script.body.map((line, i) => (
                    <p key={i} className="text-lg font-semibold mb-2">• {line}</p>
                  ))}
                </div>

                <div className="bg-purple-500/20 border-l-4 border-purple-500 p-4 rounded">
                  <h3 className="font-black text-xl mb-2">💥 ENDING:</h3>
                  <p className="text-lg font-semibold">{content.script.ending}</p>
                </div>
              </div>
            </div>

            {/* Voice Narration */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <Type className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-black">AI VOICE NARRATION (Clean Script)</h2>
              </div>
              <div className="bg-black/30 p-6 rounded-xl font-mono text-lg leading-relaxed">
                {content.voiceNarration}
              </div>
            </div>

            {/* Visual Scenes */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <ImageIcon className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-black">AI IMAGE/VIDEO SCENES</h2>
              </div>
              <div className="space-y-4">
                {content.visualScenes.map((scene, i) => (
                  <div key={i} className="bg-black/30 p-4 rounded-xl border-l-4 border-yellow-400">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-yellow-500 text-black font-black rounded-full text-sm">
                        SCENE {i + 1} • {scene.duration}
                      </span>
                    </div>
                    <p className="font-bold text-white/80 mb-2">"{scene.line}"</p>
                    <p className="text-yellow-300 font-semibold">🎬 {scene.sceneDescription}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Editing Plan */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-pink-400" />
                <h2 className="text-3xl font-black">COMPLETE EDITING PLAN</h2>
              </div>

              <div className="space-y-4 mb-6">
                {content.editingPlan.scenes.map((scene, i) => (
                  <div key={i} className="bg-black/30 p-4 rounded-xl flex items-start gap-4">
                    <span className="px-3 py-1 bg-pink-500 text-white font-black rounded-full text-sm shrink-0">
                      {scene.timestamp}
                    </span>
                    <div className="flex-1">
                      <p className="font-bold">{scene.action}</p>
                      <p className="text-pink-300 text-sm mt-1">✨ {scene.effect}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-purple-500/20 p-4 rounded-xl mb-4">
                <h3 className="font-black text-xl mb-2">📝 CAPTION STYLE:</h3>
                <p className="font-semibold">{content.editingPlan.captions}</p>
              </div>

              <div className="bg-orange-500/20 p-4 rounded-xl">
                <h3 className="font-black text-xl mb-2">😊 EMOJIS TO USE:</h3>
                <div className="flex flex-wrap gap-2">
                  {content.editingPlan.emojis.map((emoji, i) => (
                    <span key={i} className="text-3xl">{emoji}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Subtitles */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <Type className="w-8 h-8 text-cyan-400" />
                <h2 className="text-3xl font-black">WORD-BY-WORD SUBTITLES</h2>
              </div>
              <div className="bg-black/30 p-6 rounded-xl space-y-2 max-h-96 overflow-y-auto scroll-fade">
                {content.subtitles.map((sub, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-cyan-400 font-mono font-bold">{sub.timestamp}</span>
                    <span className="font-semibold">{sub.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Thumbnail */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <ImageIcon className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-black">THUMBNAIL PROMPT</h2>
              </div>
              <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 p-6 rounded-xl border-2 border-red-400">
                <p className="text-lg font-semibold">{content.thumbnail}</p>
              </div>
            </div>

            {/* Titles & Captions */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h2 className="text-2xl font-black mb-4">🎯 VIRAL TITLES</h2>
                <div className="space-y-3">
                  {content.titles.map((title, i) => (
                    <div key={i} className="bg-black/30 p-4 rounded-xl border-l-4 border-yellow-400">
                      <span className="text-yellow-400 font-bold">#{i + 1}</span> {title}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h2 className="text-2xl font-black mb-4">📝 CAPTIONS</h2>
                <div className="space-y-3">
                  {content.captions.map((caption, i) => (
                    <div key={i} className="bg-black/30 p-4 rounded-xl border-l-4 border-pink-400">
                      <span className="text-pink-400 font-bold">#{i + 1}</span> {caption}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hashtags */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <Hash className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-black">SEO OPTIMIZED HASHTAGS ({content.hashtags.length})</h2>
              </div>
              <div className="bg-black/30 p-6 rounded-xl">
                <p className="text-lg font-mono leading-relaxed">
                  {content.hashtags.join(' ')}
                </p>
              </div>
            </div>

            {/* Keywords */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h2 className="text-2xl font-black mb-4">🔑 KEYWORDS</h2>
              <div className="flex flex-wrap gap-3">
                {content.keywords.map((keyword, i) => (
                  <span key={i} className="px-4 py-2 bg-blue-500/20 border border-blue-400 rounded-full font-bold">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Best Posting Time */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-8 h-8" />
                <h2 className="text-3xl font-black">⏰ BEST POSTING TIME</h2>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black mb-2">{content.bestPostingTime.time}</div>
                <p className="text-xl font-semibold">{content.bestPostingTime.reason}</p>
              </div>
            </div>

            {/* Auto-Reply Comments */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-black">💬 AUTO-REPLY COMMENTS (For Engagement)</h2>
              </div>
              <div className="space-y-3">
                {content.autoReplies.map((reply, i) => (
                  <div key={i} className="bg-black/30 p-4 rounded-xl border-l-4 border-yellow-400">
                    <span className="text-yellow-400 font-bold">Reply #{i + 1}:</span> {reply}
                  </div>
                ))}
              </div>
            </div>

            {/* Optimization Details */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-black">🚀 VIRALITY OPTIMIZATION</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 p-4 rounded-xl border border-red-400">
                  <h3 className="font-black text-lg mb-2">⚡ Hook Strength</h3>
                  <p className="font-semibold">{content.optimization.hookStrength}</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-4 rounded-xl border border-purple-400">
                  <h3 className="font-black text-lg mb-2">❤️ Emotional Trigger</h3>
                  <p className="font-semibold">{content.optimization.emotionalTrigger}</p>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 p-4 rounded-xl border border-green-400">
                  <h3 className="font-black text-lg mb-2">📈 Engagement</h3>
                  <p className="font-semibold">{content.optimization.engagement}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 rounded-2xl p-8 text-center shadow-2xl">
              <h2 className="text-4xl font-black mb-4">🔥 YOUR VIRAL CONTENT IS READY! 🔥</h2>
              <p className="text-xl font-bold mb-6">Copy everything above and start creating your viral reel NOW!</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={() => navigator.clipboard.writeText(JSON.stringify(content, null, 2))}
                  className="px-8 py-4 bg-black text-white font-black rounded-xl hover:scale-105 transition-transform"
                >
                  📋 COPY ALL DATA
                </button>
                <button
                  onClick={() => window.print()}
                  className="px-8 py-4 bg-white text-black font-black rounded-xl hover:scale-105 transition-transform"
                >
                  🖨️ PRINT / SAVE PDF
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 text-center text-white/60 text-sm">
          <p>⚡ Powered by AI • Optimized for Maximum Virality • Updates Every 24 Hours</p>
        </div>
      </div>
    </main>
  )
}
