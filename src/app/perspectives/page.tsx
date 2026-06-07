import Link from "next/link";

export default function PerspectivesPage() {
  const ARTICLES = [
    {
      title: "The Adoption Bottleneck: Why 80% of Enterprise GenAI Fails to Scale",
      excerpt: "The technology works, but the organisation doesn't. Examining the structural inertia, compliance friction, and cultural gaps that trap AI initiatives in perpetual proof-of-concept purgatory.",
      date: "Q3 2025",
      readTime: "8 min read",
      slug: "adoption-bottleneck"
    },
    {
      title: "Designing Audit-Ready AI Governance in Regulated Environments",
      excerpt: "How financial services, healthcare, and heavy industries can deploy high-impact multimodal LLMs without running afoul of emerging regulatory frameworks and internal risk boards.",
      date: "Q2 2025",
      readTime: "12 min read",
      slug: "ai-governance"
    },
    {
      title: "Intelligent Process Automation: Re-engineering Legacy Workflows for High-Yield Efficiency",
      excerpt: "Stop treating AI as a bolt-on feature. True operational savings are unlocked when intelligent automation is structurally embedded into the core pathways of the business.",
      date: "Q1 2025",
      readTime: "10 min read",
      slug: "process-automation"
    }
  ];

  return (
    <main className="flex-1 flex flex-col pt-24 px-6 lg:px-16 w-full max-w-7xl mx-auto pb-12 md:pb-16">
      <div className="max-w-3xl mb-12 md:mb-16">
        <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-slate-900 mb-6">
          Perspectives
        </h1>
        <p className="text-xl text-slate-600 font-normal leading-relaxed border-l-2 border-brand-indigo/30 pl-6">
          Frameworks, insights, and structural analysis on enterprise AI adoption. We distill complex technological shifts into actionable strategic imperatives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {ARTICLES.map((article, idx) => (
          <Link href={`/perspectives/${article.slug}`} key={idx} className="flex flex-col border-t border-slate-200 pt-8 group cursor-pointer hover:border-brand-indigo/50 transition-colors">
            <article className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold tracking-widest text-brand-indigo uppercase">{article.date}</span>
                <span className="text-xs text-slate-500">{article.readTime}</span>
              </div>
              <h2 className="text-2xl font-medium text-slate-900 mb-4 group-hover:text-brand-indigo transition-colors leading-snug">
                {article.title}
              </h2>
              <p className="text-slate-600 leading-relaxed font-normal mb-8 flex-1">
                {article.excerpt}
              </p>
              <div className="inline-flex items-center text-sm font-semibold text-brand-indigo uppercase tracking-wider group-hover:translate-x-2 transition-transform w-max">
                <span>Read Perspective</span>
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
