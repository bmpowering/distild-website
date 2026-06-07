import BriefingForm from "@/components/BriefingForm";

export const runtime = 'edge';

export default function BriefingPage() {
  return (
    <main className="flex-1 flex flex-col pt-24 px-6 lg:px-16 w-full max-w-3xl mx-auto pb-12 md:pb-16">
      <div className="mb-16">
        <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-slate-900 mb-6">
          Executive Briefing
        </h1>
        <p className="text-xl text-slate-600 font-normal leading-relaxed">
          Request a strategic consultation. We focus on systemic bottlenecks and structural execution rather than superficial technology demos.
        </p>
      </div>

      <div className="bg-white p-8 md:p-12 border border-slate-200 shadow-sm">
        <BriefingForm />
      </div>
    </main>
  );
}
