import Link from "next/link";

/*
  RAW SVG LOGOMARK FOR FAVICON:
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2 L22 12 L2 22 Z" fill="#4f46e5" />
    <path d="M2 4.5 L17 12 L2 19.5 Z" fill="#6366f1" />
    <path d="M2 7 L12 12 L2 17 Z" fill="#60a5fa" />
    <path d="M2 9.5 L7 12 L2 14.5 Z" fill="#7dd3fc" />
  </svg>
*/

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="flex h-20 items-center justify-between max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <Link href="/" scroll={true} className="flex items-center gap-3 outline-none focus:outline-none focus:ring-0 select-none group">
          <svg className="h-8 w-8 transition-transform duration-500 group-hover:scale-105" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2 L22 12 L2 22 Z" className="fill-indigo-600" />
            <path d="M2 4.5 L17 12 L2 19.5 Z" className="fill-indigo-500" />
            <path d="M2 7 L12 12 L2 17 Z" className="fill-blue-400" />
            <path d="M2 9.5 L7 12 L2 14.5 Z" className="fill-sky-300" />
          </svg>
          <span className="text-slate-950 font-bold text-2xl tracking-tight">DISTILD</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8 text-sm font-medium tracking-widest uppercase">
            <Link href="/practices" scroll={true} className="text-slate-600 hover:text-brand-indigo transition-colors">Practices</Link>
            <Link href="/perspectives" scroll={true} className="text-slate-600 hover:text-brand-indigo transition-colors">Perspectives</Link>
          </nav>
          <Link href="/briefing" scroll={true} className="px-5 py-2.5 text-xs font-semibold tracking-widest text-white uppercase bg-brand-indigo hover:bg-brand-indigo/90 transition-colors duration-300">
            Schedule Briefing
          </Link>
        </div>
      </div>
    </header>
  );
}
