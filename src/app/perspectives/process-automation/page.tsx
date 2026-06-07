import Link from "next/link";

export default function ProcessAutomation() {
  return (
    <main className="flex-1 flex flex-col pt-24 px-6 w-full max-w-3xl mx-auto pb-32">
      <Link href="/perspectives" className="inline-flex items-center text-brand-indigo text-sm uppercase tracking-widest font-semibold mb-12 hover:text-indigo-700 transition-colors">
        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Perspectives
      </Link>
      
      <header className="mb-16 border-b border-slate-200 pb-12">
        <div className="flex items-center space-x-4 mb-6">
          <span className="text-xs font-semibold tracking-widest text-brand-indigo uppercase">Operational Efficiency</span>
          <span className="text-slate-500 text-xs">10 min read</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-slate-900 mb-8 leading-[1.1]">
          Intelligent Process Automation: Re-engineering Legacy Workflows for High-Yield Efficiency
        </h1>
        <p className="text-2xl text-slate-600 font-normal leading-relaxed">
          Stop treating AI as a bolt-on feature. True operational savings are unlocked when intelligent automation is structurally embedded into the core pathways of the business.
        </p>
      </header>

      <article className="py-12 md:py-16">
        <p className="text-slate-700 text-lg leading-relaxed mb-6 font-normal">
          The first wave of enterprise AI adoption was characterized by superficial integrations: floating chatbots, summarization widgets, and standalone copilot subscriptions. While these tools offer modest productivity bumps for individual knowledge workers, they fail to deliver structural cost reduction. To achieve enterprise yield, AI cannot be a bolt-on; it must fundamentally re-engineer the workflow itself.
        </p>
        
        <h2 className="text-slate-900 text-2xl font-bold mt-10 mb-4 tracking-tight">The Limitations of RPA and the Rise of IPA</h2>
        <p className="text-slate-700 text-lg leading-relaxed mb-6 font-normal">
          For years, Robotic Process Automation (RPA) was the gold standard for efficiency. However, RPA is brittle. It relies on strict deterministic rules and highly structured data. The moment a UI changes or an unstructured document enters the pipeline, the bot breaks.
        </p>
        <p className="text-slate-700 text-lg leading-relaxed mb-6 font-normal">
          Intelligent Process Automation (IPA) solves this brittleness by injecting multimodal LLMs into the automation sequence. Instead of failing when encountering unstructured text, an IPA pipeline can read an invoice, parse a poorly formatted customer email, or synthesize a dense legal contract, extracting the exact entities required to feed the next deterministic system.
        </p>

        <h2 className="text-slate-900 text-2xl font-bold mt-10 mb-4 tracking-tight">Targeting High-Friction Nodes</h2>
        <p className="text-slate-700 text-lg leading-relaxed mb-6 font-normal">
          The key to driving $2M+ in annual value is targeting the correct workflows. The highest yield is found in processes with:
        </p>
        <ul className="list-disc pl-6 mb-6 text-slate-700 text-lg leading-relaxed">
          <li className="mb-2"><strong className="font-semibold text-slate-900">High Volume, Low Complexity:</strong> E.g., Level-1 customer support triaging, routine IT ticketing, or standardized data entry.</li>
          <li className="mb-2"><strong className="font-semibold text-slate-900">High Friction, High Latency:</strong> E.g., Vendor onboarding, contract lifecycle management, or compliance document auditing.</li>
        </ul>
        <p className="text-slate-700 text-lg leading-relaxed mb-6 font-normal">
          In these scenarios, human operators spend 80% of their time finding and formatting information, and only 20% executing judgment. IPA inverts this ratio. By automating the data synthesis, humans are elevated from data processors to decision-makers.
        </p>

        <h2 className="text-slate-900 text-2xl font-bold mt-10 mb-4 tracking-tight">Measuring True Cost Reduction</h2>
        <p className="text-slate-700 text-lg leading-relaxed mb-6 font-normal">
          When measuring the success of IPA, traditional metrics like "hours saved" are dangerously misleading. If an engineer saves 5 hours a week using a coding copilot, but the company does not translate that into faster release cycles or reduced contractor spend, the financial return is zero.
        </p>
        <p className="text-slate-700 text-lg leading-relaxed mb-6 font-normal">
          Instead, enterprises must track <em className="italic">throughput velocity</em> and <em className="italic">unit cost economics</em>. For example, in an insurance claims department, the metric is not "time saved per adjuster," but rather "reduction in average cost to process a claim" and "increase in claims processed per hour without adding headcount." 
        </p>

        <h2 className="text-slate-900 text-2xl font-bold mt-10 mb-4 tracking-tight">Conclusion</h2>
        <p className="text-slate-700 text-lg leading-relaxed mb-6 font-normal">
          Achieving 85% operational cost reduction is not hyperbole, but it requires a ruthless architectural mandate. Enterprises must map their legacy workflows, identify the unstructured data bottlenecks, and systematically replace them with intelligent automation pipelines designed for scale.
        </p>
      </article>
      
      <div className="mt-12 pt-12 border-t border-slate-200">
        <div className="bg-slate-50 p-10 border border-slate-200 text-center rounded-sm">
          <h3 className="text-2xl font-medium text-slate-900 mb-4">Re-engineer Your Workflows</h3>
          <p className="text-slate-600 font-normal mb-8 max-w-xl mx-auto">
            Discover the operational savings locked inside your legacy processes. Schedule a briefing to map out your highest-yield automation opportunities.
          </p>
          <Link href="/briefing" className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold tracking-widest text-white uppercase bg-brand-indigo hover:bg-indigo-700 transition-colors duration-300 shadow-sm">
            Schedule Briefing
          </Link>
        </div>
      </div>
    </main>
  );
}
