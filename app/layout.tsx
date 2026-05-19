import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Prompt Token Predictor — Know Your Costs Before You Run',
  description: 'Analyze prompt templates with variables to predict exact token usage and costs across GPT-4, Claude, Gemini and more before making API calls.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3154393b-7728-462c-9f80-a83e75abd5dd"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
