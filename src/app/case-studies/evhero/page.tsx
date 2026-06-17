import Link from "next/link";
import React from "react";

export default function EVHeroCaseStudy() {
  const currentYear = new Date().getFullYear(); // 2026

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-zinc-100 font-sans selection:bg-zinc-800 selection:text-white">
      {/* Top Indicator */}
      <div className="h-1 w-full bg-gradient-to-r from-zinc-800 via-zinc-400 to-zinc-800" />

      <main className="max-w-6xl mx-auto px-6 md:px-12 py-20 lg:py-32">
        {/* Header Section */}
        <header className="mb-24 md:mb-32">
          <Link
            href="/perspectives"
            className="inline-block font-mono text-xs uppercase tracking-widest text-zinc-500 hover:text-zinc-300 transition-colors mb-12"
          >
            ← Back to Institutional Perspectives
          </Link>
          <div className="font-mono text-xs text-zinc-400 mb-6 uppercase tracking-wider">
            Case Study // Deep-Tech &amp; Critical Infrastructure
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-100 leading-[1.1] mb-8 max-w-4xl">
            Project EVHero: Scalable Edge-to-Cloud Telemetry and Industrial
            Ingestion Architecture
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl">
            How Distild utilised a proprietary clean-tech incubation venture to
            design, stress-test, and validate real-time serverless pipeline
            blueprints for enterprise deployments.
          </p>
        </header>

        {/* Metrics Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-32 pb-24 border-b border-zinc-800">
          <div className="flex flex-col">
            <span className="font-mono text-4xl md:text-5xl text-zinc-100 mb-4 tracking-tighter">
              85%
            </span>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
              Structural cost reduction achieved via event-driven compute
              allocation.
            </p>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-4xl md:text-5xl text-zinc-100 mb-4 tracking-tighter">
              65%
            </span>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
              Accelerated time-to-market using modular infrastructure blueprints.
            </p>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-4xl md:text-5xl text-zinc-100 mb-4 tracking-tighter">
              0.0ms
            </span>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
              Perceived edge-to-cloud lag through asynchronous schema validation.
            </p>
          </div>
        </section>

        {/* Narrative Sections */}
        <div className="space-y-32">
          {/* Section 01 */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4 relative">
              <div className="sticky top-24 font-mono text-xs tracking-widest uppercase text-zinc-500">
                01 // Executive Overview
              </div>
            </div>
            <div className="lg:col-span-8 text-zinc-300 text-lg leading-relaxed space-y-6">
              <p>
                In alignment with Distild’s commitment to bridging abstract
                technological promise with enterprise-grade execution, the firm
                initiated a proprietary deep-tech incubation programme code-named
                EVHero. Positioned at the intersection of clean-tech expansion
                and industrial IoT, EVHero served as our internal stress-testing
                matrix.
              </p>
              <p>
                By treating EVHero as an internal incubation asset rather than a
                theoretical exercise, Distild engineered a production-ready
                infrastructure blueprint. This capability is now fully integrated
                into our core enterprise advisory offerings, proving to corporate
                boards and risk committees that our architectural models are
                hardened in real-world deployment environments before being
                recommended for client customisation.
              </p>
            </div>
          </section>

          {/* Section 02 */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4 relative">
              <div className="sticky top-24 font-mono text-xs tracking-widest uppercase text-zinc-500">
                02 // Core Challenge
              </div>
            </div>
            <div className="lg:col-span-8 text-zinc-300 text-lg leading-relaxed space-y-8">
              <p>
                Modern enterprise IoT ecosystems—particularly within regulated
                logistics, mining, and heavy utility sectors—suffer from chronic
                architecture fragmentation. When managing geographically
                distributed electric vehicle supply equipment (EVSE), data
                synchronisation across edge nodes frequently introduces severe
                operational lag, packet serialisation bottlenecks, and volatile
                cloud compute scaling costs.
              </p>

              {/* System Log Callout */}
              <div className="bg-[#121214] border border-zinc-800 p-6 md:p-8 font-mono text-sm space-y-4">
                <div className="text-red-400 tracking-wider uppercase mb-4">
                  [SYSTEM ANALYSIS DETECTED LOGISTICAL BOTTLENECK]
                </div>
                <div className="text-zinc-400 leading-relaxed">
                  Legacy cloud frameworks fail under peak grid stress due to
                  synchronous API blocking. Telemetry concurrency must be
                  maintained at absolute zero lag to prevent state discrepancies.
                </div>
              </div>
            </div>
          </section>

          {/* Section 03 */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4 relative">
              <div className="sticky top-24 font-mono text-xs tracking-widest uppercase text-zinc-500">
                03 // The Intervention
              </div>
            </div>
            <div className="lg:col-span-8 text-zinc-300 text-lg leading-relaxed space-y-6">
              <p>
                Distild’s deep-tech practice re-engineered the asset&apos;s
                digital footprint, moving away from legacy monolithic frameworks
                toward an event-driven, serverless ingestion model optimised for
                hyper-scale performance.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-start">
                  <span className="font-mono text-zinc-500 mr-4 mt-1">▪</span>
                  <span>
                    <strong className="text-zinc-100 font-medium">
                      Decentralised Edge Validation:
                    </strong>{" "}
                    Designed an edge-layer protocol that executes schema parsing
                    directly at the device layer, filtering out telemetry noise
                    before it triggers cloud compute charges.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-mono text-zinc-500 mr-4 mt-1">▪</span>
                  <span>
                    <strong className="text-zinc-100 font-medium">
                      Asynchronous Serverless Pipelines:
                    </strong>{" "}
                    Architected decoupled message queues to handle state
                    replication asynchronously, preventing transactional
                    validation lag across critical networks.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-mono text-zinc-500 mr-4 mt-1">▪</span>
                  <span>
                    <strong className="text-zinc-100 font-medium">
                      Rigorous Security Architecture:
                    </strong>{" "}
                    Enforced end-to-end TLS 1.3 encryption layers alongside
                    strict automated schema registries to instantly quarantine
                    structural anomalies.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 04 */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4 relative">
              <div className="sticky top-24 font-mono text-xs tracking-widest uppercase text-zinc-500">
                04 // Commercial Impact
              </div>
            </div>
            <div className="lg:col-span-8 text-zinc-300 text-lg leading-relaxed space-y-6">
              <p>
                The consolidation of EVHero into the Distild flagship architecture
                serves as an unassailable proof of capability for our enterprise
                clientele. We do not merely theorise on abstract artificial
                intelligence and data networks; we systematically architect,
                build, and optimise them.
              </p>
              <p>
                The resulting architectural framework has been completely
                modularised into our advisory repository. For enterprise
                operators facing complex digital transformations, this means
                immediate capital efficiency, absolute compliance safeguarding,
                and verified mitigation of execution risk.
              </p>
            </div>
          </section>
        </div>

        {/* Call to Action Card */}
        <section className="mt-32">
          <div className="bg-[#0E0E10] border border-zinc-800 p-10 md:p-16 flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-100 mb-4">
              Optimise Your Enterprise Architecture
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mb-10">
              Deploy hardened blueprints across your industrial digital
              infrastructure.
            </p>
            <Link
              href="/briefing"
              className="font-mono text-sm uppercase tracking-wider text-[#0B0B0C] bg-white px-8 py-4 hover:bg-zinc-200 transition-colors duration-300 font-bold"
            >
              Initiate Advisory Briefing
            </Link>
          </div>
        </section>

        {/* Footer Branding */}
        <footer className="mt-32 pt-8 border-t border-zinc-900 text-center md:text-left">
          <p className="font-mono text-xs text-zinc-600 uppercase tracking-widest">
            © {currentYear} Distild. All rights reserved. // Advisory Firmware v1.0.0
          </p>
        </footer>
      </main>
    </div>
  );
}
