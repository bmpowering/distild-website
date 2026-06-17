import Link from "next/link";

const PILLARS = [
  {
    title: "Governance & Risk Mitigation",
    description: "Responsible AI frameworks and audit-ready pipelines designed for deployment in heavily regulated environments.",
    number: "01",
    accent: "text-brand-indigo",
  },
  {
    title: "Process Redesign & Automation",
    description: "Identifying legacy bottlenecks and structural inefficiencies to unlock deep operational savings and accelerate velocity.",
    number: "02",
    accent: "text-brand-blue",
  },
  {
    title: "Hub-and-Spoke Enablement",
    description: "Designing decentralised AI operating models that scale engineering upskilling and adoption across internal business units.",
    number: "03",
    accent: "text-slate-500",
  }
];

export default function PillarsGrid() {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-12 md:mb-16 text-slate-900">
          Core Pillars of Transformation
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {PILLARS.map((pillar) => (
            <div key={pillar.number} className="flex flex-col relative group">
              <div className="mb-6 h-px w-full bg-slate-200 group-hover:bg-slate-300 transition-colors duration-500 relative">
                <div className={`absolute top-0 left-0 h-full w-0 group-hover:w-full transition-all duration-700 ${pillar.accent === 'text-brand-indigo' ? 'bg-brand-indigo' : pillar.accent === 'text-brand-blue' ? 'bg-brand-blue' : 'bg-slate-900'}`} />
              </div>
              <span className={`text-6xl font-light mb-8 ${pillar.accent} opacity-30`}>
                {pillar.number}
              </span>
              <h3 className="text-2xl font-medium text-slate-900 mb-4">
                {pillar.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Inline Case Study Anchor */}
        <div className="mt-24">
          <Link 
            href="/case-studies/evhero" 
            className="group block w-full border-y border-zinc-200 bg-transparent transition-all duration-300 hover:bg-zinc-50"
          >
            <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Left Element */}
              <div className="md:col-span-3">
                <span className="font-mono text-xs tracking-widest text-zinc-400 uppercase block">
                  [ INSTITUTIONAL VALIDATION // CASE STUDY 01 ]
                </span>
              </div>

              {/* Middle Element */}
              <div className="md:col-span-6 space-y-1">
                <h3 className="text-zinc-900 font-sans text-lg font-normal tracking-tight group-hover:text-black transition-colors">
                  Project EVHero: Hardened Industrial IoT Architecture
                </h3>
                <p className="text-zinc-500 font-sans text-sm font-light leading-relaxed">
                  An internal clean-tech incubation programme validating serverless data pipelines, edge validation schemas, and real-time telemetry concurrency under structural grid stress.
                </p>
              </div>

              {/* Right Element */}
              <div className="md:col-span-3 text-left md:text-right">
                <span className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-zinc-500 group-hover:text-zinc-900 transition-colors">
                  Analyse Blueprint 
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </div>

            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
