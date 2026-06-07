export default function PracticesPage() {
  return (
    <main className="flex-1 flex flex-col pt-24 px-6 lg:px-16 w-full max-w-7xl mx-auto pb-12 md:pb-16">
      <div className="max-w-3xl mb-12 md:mb-16">
        <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-slate-900 mb-6">
          Core Practices
        </h1>
        <p className="text-xl text-slate-600 font-normal leading-relaxed">
          We don&apos;t build isolated AI experiments. Our practices are engineered to bridge the gap between board-level strategy and technical delivery, ensuring enterprise-wide adoption.
        </p>
      </div>

      <div className="space-y-12 md:space-y-16">
        {/* Enterprises */}
        <section id="enterprises" className="scroll-mt-32 group border-l border-slate-200 pl-8 hover:border-brand-indigo/50 transition-colors duration-500">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-sm font-semibold tracking-widest text-brand-indigo uppercase">Enterprises</span>
          </div>
          <h2 className="text-3xl font-medium text-slate-900 mb-6">Risk, Governance & Operating Models</h2>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-8">
            Deploying AI in heavily regulated environments requires robust risk mitigation. We establish the governance structures, audit-ready pipelines, and hub-and-spoke operating models needed to scale AI securely across multiple business units without stalling velocity.
          </p>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 bg-brand-indigo rounded-full"></div>
              <span>Executive Alignment & Board Reporting</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 bg-brand-indigo rounded-full"></div>
              <span>Audit-ready AI Pipelines & Compliance</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 bg-brand-indigo rounded-full"></div>
              <span>Hub-and-spoke Delivery Architecture</span>
            </li>
          </ul>
        </section>

        {/* Scale-Ups */}
        <section id="scale-ups" className="scroll-mt-32 group border-l border-slate-200 pl-8 hover:border-brand-blue/50 transition-colors duration-500">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-sm font-semibold tracking-widest text-brand-blue uppercase">Scale-Ups</span>
          </div>
          <h2 className="text-3xl font-medium text-slate-900 mb-6">Velocity & Intelligent Automation</h2>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-8">
            Accelerate growth without proportionally scaling headcount. We embed intelligent automation to re-engineer core workflows, unlocking deep operational efficiency, faster time-to-market, and scalable engineering squad upskilling.
          </p>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 bg-brand-blue rounded-full"></div>
              <span>Process Redesign & Automation</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 bg-brand-blue rounded-full"></div>
              <span>Engineering Squad Upskilling</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 bg-brand-blue rounded-full"></div>
              <span>Scalable MLOps & LLMOps Architecture</span>
            </li>
          </ul>
        </section>

        {/* Startups */}
        <section id="startups" className="scroll-mt-32 group border-l border-slate-200 pl-8 hover:border-slate-500/50 transition-colors duration-500">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-sm font-semibold tracking-widest text-slate-500 uppercase">Startups</span>
          </div>
          <h2 className="text-3xl font-medium text-slate-900 mb-6">Core Productization & Validation</h2>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-8">
            Build AI natively into your core product offering. We provide the architectural blueprints and rapid validation frameworks to ensure your MVP secures market fit and VC confidence from day one.
          </p>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
              <span>Rapid Prototype Validation</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
              <span>Core Product AI Architecture</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
              <span>Commercial ROI Roadmapping</span>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
