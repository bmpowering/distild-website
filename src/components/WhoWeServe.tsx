import Link from "next/link";

const SEGMENTS = [
  {
    title: "Enterprises",
    href: "/practices#enterprises",
    focus: "Risk, Governance, Scaling, Operating Models",
    description: "Navigate the complexities of enterprise-scale AI. We establish the governance, risk mitigation frameworks, and operating models needed to scale AI securely across multiple business units.",
    accent: "text-brand-indigo",
    hoverBorder: "hover:border-brand-indigo",
  },
  {
    title: "Scale-Ups",
    href: "/practices#scale-ups",
    focus: "Velocity, Structural Efficiency, Intelligent Automation",
    description: "Accelerate growth without proportionally scaling headcount. We embed intelligent automation to re-engineer core workflows, unlocking deep operational efficiency and faster time-to-market.",
    accent: "text-brand-blue",
    hoverBorder: "hover:border-brand-blue",
  },
  {
    title: "Startups",
    href: "/practices#startups",
    focus: "Core Productization, Architecture, Rapid Validation",
    description: "Build AI natively into your core product offering. We provide the architectural blueprints and rapid validation frameworks to ensure your MVP secures market fit and VC confidence.",
    accent: "text-slate-500",
    hoverBorder: "hover:border-slate-500",
  }
];

export default function WhoWeServe() {
  return (
    <section className="py-16 md:py-20 border-t border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-12 md:mb-16">
          Who We Serve
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SEGMENTS.map((segment) => (
            <Link 
              href={segment.href}
              key={segment.title} 
              className={`block p-8 bg-white border border-slate-200/80 rounded-sm hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md ${segment.hoverBorder}`}
            >
              <h3 className="text-2xl font-medium text-slate-900 mb-2">{segment.title}</h3>
              <p className={`text-xs font-semibold tracking-[0.1em] uppercase mb-6 ${segment.accent}`}>
                {segment.focus}
              </p>
              <p className="text-slate-600 leading-relaxed font-normal">
                {segment.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
