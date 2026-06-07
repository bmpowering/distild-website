import Hero from "@/components/Hero";
import HypeAntidote from "@/components/HypeAntidote";
import PillarsGrid from "@/components/PillarsGrid";
import MetricsOfExecution from "@/components/MetricsOfExecution";
import WhoWeServe from "@/components/WhoWeServe";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main className="flex flex-col w-full selection:bg-brand-emerald/20 selection:text-white">
      {/* 1. Hero Section (Includes Enterprise AI Gap) */}
      <Hero />
      
      {/* 2. The Metrics of Execution */}
      <MetricsOfExecution />
      
      {/* 3. Who We Serve */}
      <WhoWeServe />

      {/* 4. The "Hype Antidote" Section */}
      <HypeAntidote />
      
      {/* 5. Core Pillars (Three-Card Grid) */}
      <PillarsGrid />
      
      {/* 6. Contact / CTA */}
      <ContactCTA />
    </main>
  );
}
