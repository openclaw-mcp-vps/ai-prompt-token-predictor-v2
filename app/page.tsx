export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Cost Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict Exact Token Costs<br />
          <span className="text-[#58a6ff]">Before Running AI Prompts</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Paste your prompt template, define variables, and instantly see token counts and dollar costs across GPT-4, Claude, Gemini, and more — before a single API call.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Access — $14/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. Instant access.</p>

        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">10+</div>
            <div className="text-[#8b949e] text-sm">AI Models Supported</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">Real-time</div>
            <div className="text-[#8b949e] text-sm">Token Calculation</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">100%</div>
            <div className="text-[#8b949e] text-sm">Pre-execution Accuracy</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$14</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited prompt analyses',
              'GPT-4, Claude 3, Gemini Pro & more',
              'Variable substitution previews',
              'Cost breakdown per model',
              'Batch template comparison',
              'Export reports as CSV',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Now — $14/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How accurate are the token predictions?</h3>
            <p className="text-[#8b949e] text-sm">We use the same tokenization libraries (tiktoken for OpenAI, official tokenizers for others) that the AI providers use, so predictions match actual API usage exactly.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which AI models are supported?</h3>
            <p className="text-[#8b949e] text-sm">GPT-3.5, GPT-4, GPT-4o, Claude 3 Haiku/Sonnet/Opus, Gemini Pro, Gemini 1.5, Mistral, and Llama 3 — with new models added regularly.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel with one click from your billing portal. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} AI Prompt Token Predictor. All rights reserved.
      </footer>
    </main>
  )
}
