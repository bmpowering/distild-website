export default function MetricsOfExecution() {
  return (
    <section className="py-16 md:py-20 border-t border-slate-200 bg-white backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-12 md:mb-16 text-left">
          The Metrics of Execution
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <div className="flex flex-col space-y-4">
            <span className="text-5xl lg:text-6xl font-light text-slate-900">1M+</span>
            <div className="flex flex-col space-y-2">
              <span className="text-xs font-semibold tracking-[0.15em] text-brand-indigo uppercase">End-User Scale</span>
              <p className="text-slate-600 leading-relaxed text-lg font-normal">
                Experience architecting platforms and intelligent digital solutions that serve millions of active monthly users.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col space-y-4">
            <span className="text-5xl lg:text-6xl font-light text-slate-900">35%+</span>
            <div className="flex flex-col space-y-2">
              <span className="text-xs font-semibold tracking-[0.15em] text-brand-blue uppercase">Operational Uplift</span>
              <p className="text-slate-600 leading-relaxed text-lg font-normal">
                Consistent track record of driving double-digit efficiency gains, platform adoption, and structural cost optimisation.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <span className="text-5xl lg:text-6xl font-light text-slate-900">10+</span>
            <div className="flex flex-col space-y-2">
              <span className="text-xs font-semibold tracking-[0.15em] text-slate-500 uppercase">Industries Transformed</span>
              <p className="text-slate-600 leading-relaxed text-lg font-normal">
                Deep cross-sector expertise leading high-stakes digital and AI portfolios across Financial Services, Marketplaces, IoT, and Heavy Industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
