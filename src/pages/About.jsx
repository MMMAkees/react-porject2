import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="pt-16 max-w-6xl mx-auto px-6 py-24">
      <div style={{ opacity: 0, animation: "fadeUp 0.5s 0.1s ease forwards" }}>
        <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">
          02 / About
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-bright mb-16">
          Who I am
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {}
        <div
          style={{ opacity: 0, animation: "fadeUp 0.5s 0.2s ease forwards" }}
        >
          <div className="w-64 h-64 bg-surface border border-border mb-8 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="font-mono text-accent text-5xl font-bold">AM</p>
                <p className="text-dim text-xs font-mono mt-2">Avatar</p>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent" />
          </div>

          <div className="space-y-3 font-mono text-sm mb-8">
            <div className="flex gap-4">
              <span className="text-dim w-24">Name</span>
              <span className="text-light">Alex Mercer</span>
            </div>
            <div className="flex gap-4">
              <span className="text-dim w-24">Role</span>
              <span className="text-light">Frontend Developer</span>
            </div>
            <div className="flex gap-4">
              <span className="text-dim w-24">Location</span>
              <span className="text-light">San Francisco, CA</span>
            </div>
            <div className="flex gap-4">
              <span className="text-dim w-24">Available</span>
              <span className="text-accent">● Open to work</span>
            </div>
          </div>

          <a
            href="#"
            className="inline-block font-mono text-xs border border-border text-soft px-5 py-3 hover:border-accent hover:text-accent transition-colors"
          >
            Download CV ↓
          </a>

          {/* Education */}
          <div className="mt-12">
            <h3 className="text-light text-sm font-mono tracking-widest uppercase mb-6 pb-3 border-b border-border">
              Education
            </h3>
            <div className="space-y-5 font-mono text-sm">
              <div>
                <p className="text-accent text-xs mb-1">2015 — 2019</p>
                <p className="text-light font-semibold text-base font-sans">
                  B.S. Computer Science
                </p>
                <p className="text-dim">UC Berkeley</p>
              </div>
              <div>
                <p className="text-dim text-xs mb-1">2013 — 2015</p>
                <p className="text-light font-semibold text-base font-sans">
                  Web Development Bootcamp
                </p>
                <p className="text-dim">freeCodeCamp · Self-taught</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: bio + timeline */}
        <div
          style={{ opacity: 0, animation: "fadeUp 0.5s 0.3s ease forwards" }}
        >
          <p className="text-soft leading-relaxed mb-6 text-lg">
            I'm a frontend developer with 5+ years of experience building
            pixel-perfect, performant web applications. I have a deep passion
            for the intersection of design and engineering.
          </p>
          <p className="text-soft leading-relaxed mb-6">
            My journey started with a CS degree, but I quickly fell in love with
            the visual layer — the place where logic meets aesthetics. I
            specialize in React, TypeScript, and modern CSS, with a strong focus
            on developer experience and accessibility.
          </p>
          <p className="text-soft leading-relaxed mb-12">
            When I'm not pushing pixels, I contribute to open source, write
            about frontend architecture on my blog, and occasionally speak at
            local meetups.
          </p>

          {/* Experience timeline */}
          <h3 className="text-light text-sm font-mono tracking-widest uppercase mb-6 pb-3 border-b border-border">
            Experience
          </h3>
          <div className="relative pl-6 border-l border-border space-y-8">
            <div className="relative">
              <div className="absolute -left-[25px] w-3 h-3 border border-accent bg-bg" />
              <p className="font-mono text-accent text-xs mb-1">
                2022 — Present
              </p>
              <p className="text-light font-bold text-base">
                Senior Frontend Engineer
              </p>
              <p className="text-dim text-sm font-mono">
                Vercel · San Francisco
              </p>
              <p className="text-soft text-sm mt-2 leading-relaxed">
                Led the design system initiative, reduced bundle size by 40%,
                and mentored 3 junior devs.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[25px] w-3 h-3 border border-muted bg-bg" />
              <p className="font-mono text-dim text-xs mb-1">2020 — 2022</p>
              <p className="text-light font-bold text-base">
                Frontend Developer
              </p>
              <p className="text-dim text-sm font-mono">Stripe · Remote</p>
              <p className="text-soft text-sm mt-2 leading-relaxed">
                Built and maintained dashboard components used by 1M+ merchants
                worldwide.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-[25px] w-3 h-3 border border-muted bg-bg" />
              <p className="font-mono text-dim text-xs mb-1">2019 — 2020</p>
              <p className="text-light font-bold text-base">UI Developer</p>
              <p className="text-dim text-sm font-mono">Startup · New York</p>
              <p className="text-soft text-sm mt-2 leading-relaxed">
                Shipped an MVP from scratch in 3 months. Handled all frontend
                architecture decisions.
              </p>
            </div>
          </div>

          {/* Page links */}
          <div className="mt-12 flex gap-4">
            <Link
              to="/skills"
              className="text-xs font-mono border border-border text-soft px-5 py-3 hover:border-accent hover:text-accent transition-colors"
            >
              View skills →
            </Link>
            <Link
              to="/projects"
              className="text-xs font-mono border border-border text-soft px-5 py-3 hover:border-accent hover:text-accent transition-colors"
            >
              View projects →
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
