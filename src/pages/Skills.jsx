import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Skills() {
  const [animateBars, setAnimateBars] = useState(false);

  const skills = [
    { name: "HTML / CSS", level: 98 },
    { name: "JavaScript / TypeScript", level: 92 },
    { name: "React / Next.js", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Node.js / Express", level: 72 },
    { name: "Performance & Accessibility", level: 85 },
    { name: "Testing (Vitest / Playwright)", level: 78 },
  ];

  const frameworks = [
    "React",
    "Next.js",
    "Vue 3",
    "Svelte",
    "Astro",
    "Remix",
    "Vite",
    "Webpack",
    "Redux",
    "Zustand",
    "React Query",
  ];
  const tools = [
    "Git / GitHub",
    "Figma",
    "Storybook",
    "Vitest",
    "Playwright",
    "Vercel",
    "Docker",
    "CI/CD",
    "VS Code",
    "Linear",
  ];
  const softSkills = [
    "System design",
    "Code review",
    "Mentoring",
    "Technical writing",
    "Agile / Scrum",
    "Cross-functional collab",
  ];
  const learning = ["Three.js", "Rust", "WebAssembly", "Edge computing"];

  useEffect(() => {
    const timer = setTimeout(() => setAnimateBars(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="pt-16 max-w-6xl mx-auto px-6 py-24">
      <div style={{ opacity: 0, animation: "fadeUp 0.5s 0.1s ease forwards" }}>
        <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">
          03 / Skills
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-bright mb-16">
          What I work with
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Skill bars */}
        <div
          style={{ opacity: 0, animation: "fadeUp 0.5s 0.2s ease forwards" }}
        >
          <h2 className="text-light text-sm font-mono tracking-widest uppercase mb-8 pb-3 border-b border-border">
            Technical proficiency
          </h2>
          <div className="space-y-7">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-mono text-sm text-light">
                    {skill.name}
                  </span>
                  <span className="font-mono text-xs text-dim">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-[2px] bg-border w-full relative">
                  <div
                    className="h-full bg-accent skill-bar"
                    style={{
                      width: animateBars ? `${skill.level}%` : "0%",
                      transition: "width 1.1s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tag clouds */}
        <div
          className="space-y-10"
          style={{ opacity: 0, animation: "fadeUp 0.5s 0.3s ease forwards" }}
        >
          <div>
            <h2 className="text-light text-sm font-mono tracking-widest uppercase mb-6 pb-3 border-b border-border">
              Frameworks & Libraries
            </h2>
            <div className="flex flex-wrap gap-2">
              {frameworks.map((fw) => (
                <span
                  key={fw}
                  className="tag-pill font-mono text-xs px-3 py-1.5 border border-border text-soft cursor-default transition-colors hover:border-accent hover:text-accent"
                >
                  {fw}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-light text-sm font-mono tracking-widest uppercase mb-6 pb-3 border-b border-border">
              Tools & Workflow
            </h2>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="tag-pill font-mono text-xs px-3 py-1.5 border border-border text-soft cursor-default transition-colors hover:border-accent hover:text-accent"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-light text-sm font-mono tracking-widest uppercase mb-6 pb-3 border-b border-border">
              Soft Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="tag-pill font-mono text-xs px-3 py-1.5 border border-border text-soft cursor-default transition-colors hover:border-accent hover:text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-light text-sm font-mono tracking-widest uppercase mb-6 pb-3 border-b border-border">
              Currently learning
            </h2>
            <div className="flex flex-wrap gap-2">
              {learning.map((item) => (
                <span
                  key={item}
                  className="font-mono text-xs px-3 py-1.5 border border-accent/40 text-accent/70 cursor-default"
                >
                  + {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div
        className="mt-20 pt-10 border-t border-border flex flex-wrap gap-4"
        style={{ opacity: 0, animation: "fadeUp 0.5s 0.5s ease forwards" }}
      >
        <Link
          to="/projects"
          className="bg-accent text-black font-semibold px-8 py-4 text-sm tracking-wide hover:opacity-80 transition-opacity"
        >
          See these in action →
        </Link>
        <Link
          to="/contact"
          className="border border-border text-light font-semibold px-8 py-4 text-sm tracking-wide hover:border-accent hover:text-accent transition-colors"
        >
          Work with me
        </Link>
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
        .tag-pill {
          transition: border-color 0.2s, color 0.2s;
        }
      `}</style>
    </main>
  );
}
