import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden pt-24">
      {/* Subtle background glow effect */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] bg-brand-indigo/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full relative z-10">
        <div className="max-w-5xl space-y-10">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-slate-900 leading-[1.05]">
          AI Complexity,
          <br />
          <span className="text-slate-500">Distilled into</span>
          <br />
          <span className="bg-gradient-to-r from-brand-indigo to-brand-blue bg-clip-text text-transparent">Enterprise Impact.</span>
        </h1>
        
        <p className="max-w-2xl text-xl md:text-2xl text-slate-600 font-normal leading-relaxed">
          Moving enterprise platforms from AI hype to concrete commercial returns. Strategy, governance, and risk-mitigated operating models engineered for true organisational adoption and operational efficiency.
        </p>

        <div className="pt-2">
          <Link href="/briefing" scroll={true} className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-widest text-white uppercase bg-brand-indigo hover:bg-indigo-700 transition-colors duration-300 shadow-sm">
            Schedule Briefing
          </Link>
        </div>

        <div className="pt-16 max-w-3xl pb-16 md:pb-24">
          <h2 className="text-sm font-semibold tracking-[0.2em] text-brand-indigo uppercase mb-6">
            The Enterprise AI Gap
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed border-l-2 border-brand-indigo/30 pl-6">
            80% of enterprise AI initiatives fail to make it past the proof-of-concept stage. The bottleneck isn&apos;t the technology—it&apos;s organisational inertia, compliance anxiety, and a lack of structured execution. Distild bridges the gap between technical capability and C-suite strategy.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}
