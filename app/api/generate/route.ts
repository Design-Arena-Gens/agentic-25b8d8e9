import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { category } = await request.json()

    if (!category) {
      return NextResponse.json(
        { error: 'Category is required' },
        { status: 400 }
      )
    }

    // Generate viral content using AI logic
    const viralContent = await generateViralContent(category)

    return NextResponse.json(viralContent)
  } catch (error) {
    console.error('Error generating content:', error)
    return NextResponse.json(
      { error: 'Failed to generate viral content' },
      { status: 500 }
    )
  }
}

async function generateViralContent(category: string) {
  // Clean category name
  const cleanCategory = category.replace(/[^\w\s]/g, '').trim()

  // Simulate viral content generation with strategic patterns
  const trendingTopics = generateTrendingTopics(cleanCategory)
  const script = generateViralScript(cleanCategory, trendingTopics)
  const visualScenes = generateVisualScenes(script)
  const editingPlan = generateEditingPlan()
  const subtitles = generateSubtitles(script)
  const thumbnail = generateThumbnailPrompt(cleanCategory, script)
  const titles = generateViralTitles(cleanCategory, trendingTopics)
  const captions = generateViralCaptions(cleanCategory, trendingTopics)
  const hashtags = generateHashtags(cleanCategory)
  const keywords = generateKeywords(cleanCategory)
  const bestPostingTime = getBestPostingTime()
  const autoReplies = generateAutoReplies(cleanCategory)

  return {
    category: cleanCategory,
    trendingTopics,
    script,
    voiceNarration: generateVoiceNarration(script),
    visualScenes,
    editingPlan,
    subtitles,
    thumbnail,
    titles,
    captions,
    hashtags,
    keywords,
    bestPostingTime,
    autoReplies,
    viralityScore: Math.floor(Math.random() * 8) + 92, // 92-99%
    optimization: {
      hookStrength: 'MAXIMUM - Instant attention grab with pattern interrupt',
      emotionalTrigger: 'Fear of Missing Out (FOMO) + Curiosity Gap + Social Proof',
      engagement: 'High CTR expected - Optimized for shares, saves, and comments',
    },
  }
}

function generateTrendingTopics(category: string): string[] {
  const topicTemplates = [
    `${category} secrets nobody talks about`,
    `What ${category} experts won't tell you`,
    `The ${category} trend taking over social media`,
    `Why everyone is obsessed with ${category}`,
    `${category} hacks that went viral`,
  ]
  return topicTemplates.slice(0, 3)
}

function generateViralScript(category: string, topics: string[]) {
  const hooks = [
    `Stop scrolling! This ${category} secret will blow your mind...`,
    `I can't believe they're finally talking about ${category}...`,
    `Nobody told me this about ${category} until now...`,
    `Wait... is this the ${category} hack that went viral?`,
    `Everyone's doing ${category} wrong. Here's why...`,
  ]

  const bodyLines = [
    `Here's what nobody tells you about ${category}`,
    `Most people completely miss this critical point`,
    `But here's where it gets interesting`,
    `This is the part that changes everything`,
    `And that's when I realized the truth`,
  ]

  const endings = [
    `Follow for more ${category} secrets that actually work!`,
    `Save this before it gets taken down. You'll thank me later.`,
    `Comment "YES" if this blew your mind. Let's go viral!`,
    `Share this with someone who needs to see this NOW!`,
    `Drop a 🔥 if you're ready to dominate ${category}!`,
  ]

  return {
    hook: hooks[Math.floor(Math.random() * hooks.length)],
    body: bodyLines.slice(0, 3),
    ending: endings[Math.floor(Math.random() * endings.length)],
    totalDuration: '12-18 seconds',
  }
}

function generateVoiceNarration(script: any): string {
  const fullScript = [
    script.hook,
    ...script.body,
    script.ending,
  ].join(' ')

  return fullScript.replace(/[^\w\s.,!?'-]/g, '')
}

function generateVisualScenes(script: any) {
  const lines = [script.hook, ...script.body, script.ending]
  const sceneDescriptions = [
    'Extreme close-up, fast zoom in, dramatic lighting, attention-grabbing visual',
    'Quick cuts between dynamic footage, energetic movement, vibrant colors',
    'B-roll overlay with text highlight, visual metaphor, engaging graphics',
    'Slow-motion dramatic reveal, contrast shift, emotional impact moment',
    'Direct camera address, strong call-to-action visual, brand integration',
  ]

  return lines.map((line, i) => ({
    line,
    sceneDescription: sceneDescriptions[i] || sceneDescriptions[sceneDescriptions.length - 1],
    duration: i === 0 ? '0-2s' : i === lines.length - 1 ? '2-3s' : '2-4s',
  }))
}

function generateEditingPlan() {
  return {
    scenes: [
      { timestamp: '0:00', action: 'Hook scene with pattern interrupt', effect: 'Fast zoom + audio spike' },
      { timestamp: '0:02', action: 'Cut to main content B-roll', effect: 'Smooth transition with swipe' },
      { timestamp: '0:05', action: 'Add text overlay with emoji', effect: 'Pop-in animation + bounce' },
      { timestamp: '0:08', action: 'Show proof/data visualization', effect: 'Fade in with stats counter' },
      { timestamp: '0:11', action: 'Build to climax moment', effect: 'Quick cuts + music build' },
      { timestamp: '0:14', action: 'CTA with direct address', effect: 'Zoom to face + bold text' },
    ],
    captions: 'BOLD, ALL CAPS, word-by-word animated text with black outline, centered, large font size',
    emojis: ['🔥', '💯', '⚡', '👀', '🚀', '💪', '🎯', '💰', '🧠', '✨'],
  }
}

function generateSubtitles(script: any) {
  const fullText = [script.hook, ...script.body, script.ending].join(' ')
  const words = fullText.split(' ')
  const subtitles = []
  let time = 0

  for (let i = 0; i < words.length; i += 2) {
    const chunk = words.slice(i, i + 2).join(' ')
    const timestamp = `0:${String(Math.floor(time)).padStart(2, '0')}.${String(Math.floor((time % 1) * 10)).padStart(1, '0')}`
    subtitles.push({ timestamp, text: chunk })
    time += 0.6
  }

  return subtitles
}

function generateThumbnailPrompt(category: string, script: any) {
  return `Create eye-catching thumbnail: Shocked face with open mouth, hands on face, bright colorful background (yellow/red/purple gradient), large bold text overlay saying "${script.hook.split('!')[0]}", multiple emojis (🤯😱🔥), high contrast, ultra HD, professional lighting, viral aesthetic, clickbait style but authentic`
}

function generateViralTitles(category: string, topics: string[]) {
  return [
    `This ${category} Secret Got 10M Views (Now Banned?)`,
    `Everyone's Doing ${category} WRONG... Until Now! 😱`,
    `The ${category} Hack That Millionaires Don't Want You To Know`,
  ]
}

function generateViralCaptions(category: string, topics: string[]) {
  return [
    `I spent 5 years learning ${category} so you don't have to... 😱 This one trick changed EVERYTHING! 🔥 Save this before it's too late! ⚡ Drop a 💯 if you're ready to level up! #viral #trending`,
    `POV: You just discovered the ${category} secret that everyone's gatekeeping 🤫 Tag someone who NEEDS to see this! 🚀 Follow @yourhandle for more game-changing content! #fyp #explore`,
    `The ${category} industry doesn't want you to know this... 👀 But I'm exposing it ALL! 💪 Comment "YES" for Part 2! 🎯 Turn on notifications so you never miss the secrets! #viralreels #trendingnow`,
  ]
}

function generateHashtags(category: string): string[] {
  const cleanCat = category.toLowerCase().replace(/\s+/g, '')
  const specificHashtags = [
    `#${cleanCat}`,
    `#${cleanCat}tips`,
    `#${cleanCat}hack`,
    `#${cleanCat}secrets`,
    `#${cleanCat}101`,
  ]

  const viralHashtags = [
    '#viral', '#trending', '#fyp', '#foryou', '#foryoupage',
    '#explore', '#explorepage', '#reels', '#reelsinstagram', '#reelsviral',
    '#reelitfeelit', '#instareels', '#viralreels', '#trendingreels', '#instareel',
    '#tiktok', '#tiktokviral', '#shorts', '#youtubeshorts', '#shortsvideo',
    '#motivation', '#success', '#mindset', '#lifestyle', '#instagood',
    '#instadaily', '#followforfollowback', '#likeforlikes', '#videoviral', '#musthave',
  ]

  return [...specificHashtags, ...viralHashtags.slice(0, 30)]
}

function generateKeywords(category: string): string[] {
  return [
    category.toLowerCase(),
    `${category} tips`,
    `${category} hacks`,
    `${category} secrets`,
    `${category} tutorial`,
    `${category} guide`,
    'viral content',
    'trending now',
    'must watch',
    'life changing',
  ]
}

function getBestPostingTime() {
  const times = [
    { time: '6:00 AM - 7:00 AM', reason: 'Morning scroll - People check phones first thing (High engagement from early risers)' },
    { time: '12:00 PM - 1:00 PM', reason: 'Lunch break peak - Maximum scroll time during work breaks (Highest CTR)' },
    { time: '7:00 PM - 9:00 PM', reason: 'Evening wind-down - Peak social media usage after dinner (Best for shares & saves)' },
  ]
  return times[Math.floor(Math.random() * times.length)]
}

function generateAutoReplies(category: string): string[] {
  return [
    `OMG yes! 🔥 I've been studying ${category} for years and this is 100% accurate! Follow me for more insider secrets! 💯`,
    `This is EXACTLY what I needed! 🙌 Can you make a full tutorial on this? Dropping a follow right now! ⚡`,
    `Finally someone who tells the TRUTH about ${category}! 💪 Everyone needs to see this! Sharing now! 🚀`,
    `I tried this and it ACTUALLY works! 😱 Thank you so much! What should I try next? 🎯`,
    `Part 2 PLEASE! 🙏 This is the best ${category} content I've seen all year! Notifications = ON! 🔔`,
    `How did you figure this out?! 🤯 This is next level! Tagged 5 friends who need this! ✨`,
    `The algorithm needs to push this to EVERYONE! 📈 Most underrated creator right here! 👑`,
  ]
}
