const ecosystemApps = [
  {
    name: "PactaSwap",
    category: "OTC Trading",
    description:
      "Trustless OTC desk for large token trades on Sui. No slippage, no front-running, atomic settlement.",
    status: "Building",
    gradient: "from-indigo-500/20 to-violet-500/20",
    borderColor: "border-indigo-500/30",
  },
  {
    name: "PactaPay",
    category: "Payments",
    description:
      "Freelance and contractor payment platform. Milestone-based releases with built-in dispute resolution.",
    status: "Building",
    gradient: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
  },
  {
    name: "PactaVault",
    category: "Token Vesting",
    description:
      "Time-locked token distribution for teams, investors, and community grants. Fully transparent on-chain schedules.",
    status: "Building",
    gradient: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/30",
  },
  {
    name: "PactaNFT",
    category: "NFT Marketplace",
    description:
      "Peer-to-peer NFT trading with multi-asset bundles. Trade an NFT for tokens + another NFT in a single agreement.",
    status: "Building",
    gradient: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/30",
  },
  {
    name: "PactaDAO",
    category: "DAO Tooling",
    description:
      "Treasury management for DAOs. Fund contributors with milestone-gated releases and multi-sig approval flows.",
    status: "Coming Soon",
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    name: "Your App",
    category: "Build on Pacta",
    description:
      "Pacta is open infrastructure. Wrap the Agreement primitive in your own contracts and ship your product.",
    status: "Start Building",
    gradient: "from-accent/20 to-accent-secondary/20",
    borderColor: "border-accent/30",
    isCallToAction: true,
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-16 sm:py-24 md:py-32 bg-surface/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            Ecosystem
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Built on <span className="gradient-text">Pacta</span>
          </p>
          <p className="mt-4 text-text-muted text-sm sm:text-lg">
            Projects and applications building on Pacta&apos;s universal agreement infrastructure.
            One primitive powering an entire ecosystem.
          </p>
        </div>

        {/* Ecosystem Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {ecosystemApps.map((app, i) => (
            <a
              key={i}
              href={app.isCallToAction ? "#developers" : "#"}
              className={`group relative rounded-2xl border ${app.borderColor} bg-gradient-to-br ${app.gradient} p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5`}
            >
              {/* Status Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                  {app.category}
                </span>
                <span
                  className={`text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded-full border ${
                    app.isCallToAction
                      ? "border-accent/50 text-accent bg-accent/10"
                      : app.status === "Coming Soon"
                        ? "border-amber-500/30 text-amber-400 bg-amber-500/10"
                        : "border-emerald-500/30 text-emerald-400 bg-emerald-500/10"
                  }`}
                >
                  {app.status}
                </span>
              </div>

              {/* App Info */}
              <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                {app.name}
              </h3>
              <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
                {app.description}
              </p>

              {/* Arrow for CTA */}
              {app.isCallToAction && (
                <div className="mt-4 flex items-center gap-2 text-accent text-sm font-semibold">
                  Get Started
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              )}
            </a>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-text-muted text-xs sm:text-sm">
            Building on Pacta?{" "}
            <a href="#" className="text-accent hover:text-accent-secondary transition-colors font-semibold">
              Submit your project
            </a>{" "}
            to be featured in the ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}
