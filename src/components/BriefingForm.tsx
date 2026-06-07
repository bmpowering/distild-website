"use client";

import { useState } from "react";
import { submitBriefing } from "@/app/actions/submitBriefing";

export default function BriefingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const result = await submitBriefing(formData);
    
    if (result.success) {
      setIsSubmitted(true);
    }
    
    setIsSubmitting(false);
  }

  if (isSubmitted) {
    return (
      <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-500">
        <div className="w-16 h-16 bg-brand-indigo/10 text-brand-indigo rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-medium text-slate-900">Briefing Initiated</h3>
        <p className="text-slate-600 max-w-md">
          Thank you for your request. A principal advisor is reviewing your operational profile and will contact you directly within 24 hours to coordinate your strategic consultation.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-xs font-semibold tracking-widest text-slate-500 uppercase">Full Name <span className="text-slate-400">*</span></label>
          <input 
            required
            name="fullName"
            type="text" 
            placeholder="Jane Doe"
            className="w-full bg-slate-50 border border-slate-200 text-slate-900 p-3.5 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all placeholder:text-slate-400"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold tracking-widest text-slate-500 uppercase">Corporate Email <span className="text-slate-400">*</span></label>
          <input 
            required
            name="email"
            type="email" 
            placeholder="jane@enterprise.com"
            className="w-full bg-slate-50 border border-slate-200 text-slate-900 p-3.5 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-xs font-semibold tracking-widest text-slate-500 uppercase">Company Name <span className="text-slate-400">*</span></label>
          <input 
            required
            name="company"
            type="text" 
            placeholder="Acme Corp"
            className="w-full bg-slate-50 border border-slate-200 text-slate-900 p-3.5 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all placeholder:text-slate-400"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold tracking-widest text-slate-500 uppercase">Current Scale <span className="text-slate-400">*</span></label>
          <select required name="scale" defaultValue="" className="w-full bg-slate-50 border border-slate-200 text-slate-900 p-3.5 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all">
            <option value="" disabled>Select scale...</option>
            <option>Enterprise (5,000+ FTE)</option>
            <option>Scale-up (500 - 5,000 FTE)</option>
            <option>Startup (&lt; 500 FTE)</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-semibold tracking-widest text-slate-500 uppercase">Primary AI Bottleneck <span className="text-slate-400">*</span></label>
        <textarea 
          required
          name="bottleneck"
          rows={4}
          placeholder="e.g. Strategy Alignment, Governance/Risk, Technical Execution..."
          className="w-full bg-slate-50 border border-slate-200 text-slate-900 p-3.5 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all resize-none placeholder:text-slate-400"
        ></textarea>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-xs font-semibold tracking-widest text-slate-500 uppercase">Target Timeline <span className="text-slate-400">*</span></label>
          <select required name="timeline" defaultValue="" className="w-full bg-slate-50 border border-slate-200 text-slate-900 p-3.5 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all">
            <option value="" disabled>Select timeline...</option>
            <option>Immediate / Urgent</option>
            <option>This Quarter</option>
            <option>Next 6 Months</option>
            <option>Exploratory</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold tracking-widest text-slate-500 uppercase">Phone Number</label>
          <input 
            name="phone"
            type="tel" 
            placeholder="e.g., +1 (555) 000-0000"
            className="w-full bg-slate-50 border border-slate-200 text-slate-900 p-3.5 focus:outline-none focus:border-brand-indigo focus:ring-1 focus:ring-brand-indigo transition-all placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="pt-4">
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-brand-indigo text-white font-semibold tracking-widest uppercase py-5 hover:bg-indigo-700 transition-colors duration-300 shadow-sm text-sm disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "INITIATING..." : "INITIATE BRIEFING"}
        </button>
      </div>
    </form>
  );
}
