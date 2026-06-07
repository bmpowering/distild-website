import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-indigo/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-slate-900 mb-8">
            Ready to Distill Complexity?
          </h2>
          <p className="text-xl text-slate-600 font-normal mb-12 max-w-2xl mx-auto">
            Partner with us to engineer AI strategies that your organization can actually execute. Schedule a high-level executive briefing.
          </p>
          
          <Link href="/briefing" className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-widest text-white uppercase bg-brand-indigo hover:bg-indigo-700 transition-colors duration-300 shadow-sm">
            <span className="relative flex items-center space-x-3">
              <span>Schedule Briefing</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
