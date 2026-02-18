export default function Security() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="gradient-border p-10 rounded-2xl text-center">
              {/* Shield Icon */}
              <div className="mx-auto w-24 h-24 rounded-2xl bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center mb-8">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>

              {/* Security Properties */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "No Unilateral Release", desc: "Bitmask conditions only" },
                  { label: "No Rug-Pull Cancels", desc: "Mutual consent required" },
                  { label: "Permissionless Expiry", desc: "Anyone can trigger" },
                  { label: "Arbiter-Scoped", desc: "Cannot access funds directly" },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl bg-background/50 border border-border/50 p-4 text-left">
                    <div className="text-sm font-semibold mb-1">{item.label}</div>
                    <div className="text-xs text-text-muted">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
              Security by Design
            </h2>
            <p className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Trustless from the{" "}
              <span className="gradient-text">ground up</span>
            </p>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              Every attack vector in traditional escrow is eliminated by Pacta&apos;s architecture.
              There is no admin key. No pause function. No upgrade path that can compromise
              locked funds.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Condition-Gated Release",
                  desc: "Funds are never released by a person. The bitmask condition system ensures settlement only fires when mathematically all conditions are true.",
                },
                {
                  title: "Anti-Rug Protection",
                  desc: "Once both parties have deposited, neither can unilaterally cancel. The only exit paths are mutual cancellation, arbiter resolution, or expiry.",
                },
                {
                  title: "Self-Refund Routing",
                  desc: "On cancellation, assets always route back to their original depositor. Cross-delivery only happens on settlement. The routing is hardcoded, not configurable.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                      <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
