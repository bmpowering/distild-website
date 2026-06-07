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
    description: "Designing decentralized AI operating models that scale engineering upskilling and adoption across internal business units.",
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
      </div>
    </section>
  );
}
