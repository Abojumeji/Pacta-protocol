export default function Developers() {
  return (
    <section id="developers" className="relative py-16 sm:py-24 md:py-32 bg-surface/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              For Developers
            </h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Build on <span className="gradient-text">Pacta</span>
            </p>
            <p className="text-text-muted text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Pacta is designed as composable infrastructure. The Agreement object has{" "}
              <code className="text-accent font-mono text-sm bg-accent/10 px-1.5 py-0.5 rounded">key + store</code>{" "}
              abilities — wrap it, share it, or embed it in your own contracts.
              Use the Composability API to extract balances and objects programmatically.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "create_agreement() — returns Agreement for wrapping or sharing",
                "deposit_coin<T>() / deposit_object<V>() — multi-asset escrow",
                "extract_coin_balance<T>() — programmatic fund routing",
                "extract_object<V>() — programmatic object routing",
                "Configurable bitmask: 5 condition types, any combination",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-sm text-text-muted font-mono">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-secondary transition-all hover:shadow-lg hover:shadow-accent/25"
              >
                Read the Docs
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-surface-light transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </div>
          </div>

          {/* Right - Code Snippet */}
          <div className="relative">
            <div className="glow-accent rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3 bg-surface border-b border-border/50">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs text-text-muted font-mono">pacta.move</span>
              </div>
              <div className="bg-[#0d1117] p-3 sm:p-6 overflow-x-auto">
                <pre className="text-[11px] sm:text-sm font-mono leading-relaxed">
                  <code>
                    <span className="text-purple-400">{"/// Create a P2P swap agreement"}</span>{"\n"}
                    <span className="text-blue-400">let</span> agreement = <span className="text-yellow-300">create_agreement</span>{"("}{"\n"}
                    {"    "}party_a: <span className="text-emerald-400">@alice</span>,{"\n"}
                    {"    "}party_b: <span className="text-emerald-400">@bob</span>,{"\n"}
                    {"    "}arbiter: <span className="text-emerald-400">@0x0</span>,{"\n"}
                    {"    "}release_conditions: <span className="text-orange-400">3</span>,{"\n"}
                    {"    "}  <span className="text-purple-400">{"// COND_A_DEPOSITED | COND_B_DEPOSITED"}</span>{"\n"}
                    {"    "}terms_hash: <span className="text-emerald-400">b&quot;swap-v1&quot;</span>,{"\n"}
                    {"    "}expiry_ms: <span className="text-orange-400">0</span>,{"\n"}
                    {"    "}unlock_time_ms: <span className="text-orange-400">0</span>,{"\n"}
                    {"    "}metadata: <span className="text-emerald-400">vector[]</span>,{"\n"}
                    {"    "}clock, ctx,{"\n"}
                    {");"}{"\n\n"}
                    <span className="text-purple-400">{"/// Alice deposits 100 SUI"}</span>{"\n"}
                    <span className="text-yellow-300">deposit_coin</span>{"<"}SUI{">"}{"("}{"\n"}
                    {"    "}&<span className="text-blue-400">mut</span> agreement, sui_coin, clock, ctx{"\n"}
                    {");"}{"\n\n"}
                    <span className="text-purple-400">{"/// Bob deposits 500 USDC"}</span>{"\n"}
                    <span className="text-purple-400">{"/// → auto-settles! Both conditions met"}</span>{"\n"}
                    <span className="text-yellow-300">deposit_coin</span>{"<"}USDC{">"}{"("}{"\n"}
                    {"    "}&<span className="text-blue-400">mut</span> agreement, usdc_coin, clock, ctx{"\n"}
                    {");"}{"\n"}
                    <span className="text-purple-400">{"// Agreement is now STATE_SETTLED"}</span>{"\n"}
                    <span className="text-purple-400">{"// Alice claims Bob's USDC, Bob claims Alice's SUI"}</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
