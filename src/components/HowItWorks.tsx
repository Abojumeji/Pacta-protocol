const steps = [
  {
    step: "01",
    title: "Create Agreement",
    description:
      "Define parties, arbiter, release conditions (bitmask), expiry, and optional time-lock. The agreement object is created and shared on-chain.",
    color: "text-accent",
    borderColor: "border-accent/30",
    bgColor: "bg-accent/5",
  },
  {
    step: "02",
    title: "Deposit Assets",
    description:
      "Both parties deposit coins (SUI, USDC, any token) and/or objects (NFTs, tickets, proofs) into the agreement. Multiple asset types per agreement.",
    color: "text-amber-400",
    borderColor: "border-amber-400/30",
    bgColor: "bg-amber-400/5",
  },
  {
    step: "03",
    title: "Conditions Check",
    description:
      "After every deposit and approval, the protocol automatically checks if all release conditions in the bitmask are satisfied.",
    color: "text-blue-400",
    borderColor: "border-blue-400/30",
    bgColor: "bg-blue-400/5",
  },
  {
    step: "04",
    title: "Auto-Settlement",
    description:
      "When all conditions are met, the agreement settles automatically with cross-delivery: Party A's assets go to B and B's to A. Trustless.",
    color: "text-emerald-400",
    borderColor: "border-emerald-400/30",
    bgColor: "bg-emerald-400/5",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-16 sm:py-24 md:py-32 bg-surface/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            Protocol Lifecycle
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            How <span className="gradient-text">Pacta</span> works
          </p>
          <p className="mt-4 text-text-muted text-lg">
            A deterministic state machine that enforces conditions, holds arbitrary assets,
            and settles automatically.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line connector (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-blue-400/50 to-emerald-400/50" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => (
              <div key={i} className={`lg:grid lg:grid-cols-2 lg:gap-16 ${i > 0 ? "lg:mt-16" : ""}`}>
                {/* Content - alternates sides */}
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""} flex items-center`}>
                  <div className={`glow-card rounded-2xl border ${step.borderColor} ${step.bgColor} p-8 w-full`}>
                    <div className={`inline-flex items-center gap-3 mb-4`}>
                      <span className={`text-xs font-mono font-bold ${step.color} ${step.bgColor} border ${step.borderColor} rounded-full px-3 py-1`}>
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Dot on timeline (desktop) */}
                <div className={`hidden lg:flex items-center ${i % 2 === 1 ? "lg:order-1 justify-end" : "justify-start"}`}>
                  <div className="relative">
                    <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${step.bgColor} border-2 ${step.borderColor}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dispute Path Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-xl border border-border/50 bg-surface/50 px-6 py-4 text-sm text-text-muted">
            <svg className="w-5 h-5 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            Disputes? Either party can raise one. The arbiter resolves with full-split precision or per-asset assignment.
          </div>
        </div>
      </div>
    </section>
  );
}
