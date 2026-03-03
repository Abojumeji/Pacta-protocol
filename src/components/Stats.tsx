const stats = [
  {
    value: "~390ms",
    label: "Settlement Time",
    description: "On Sui's parallel execution",
  },
  {
    value: "5",
    label: "Condition Types",
    description: "Configurable bitmask system",
  },
  {
    value: "Multi-Asset",
    label: "Per Agreement",
    description: "SUI + USDC + NFTs simultaneously",
  },
  {
    value: "Open",
    label: "Execution Model",
    description: "Bots, AI agents, or anyone can settle",
  },
];

export default function Stats() {
  return (
    <section className="relative border-y border-border/50 bg-surface/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-foreground">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-text-muted">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
