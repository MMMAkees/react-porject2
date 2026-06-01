import { useState } from "react";

export default function Projects() {
  const projects = [
    {
      title: "DesignOS",
      desc: "A component design system for enterprise products built with React and Storybook. Used across 3 product teams and 50+ components.",
      tags: ["React", "Storybook", "TypeScript"],
      cat: "Design System",
      year: "2024",
      featured: true,
    },
    {
      title: "Pulse Dashboard",
      desc: "Real-time analytics dashboard with live charts, date filters, and dark mode. Loads in under 1s with route-based code splitting.",
      tags: ["Next.js", "Recharts", "Tailwind"],
      cat: "Web App",
      year: "2024",
      featured: false,
    },
    {
      title: "Folio Builder",
      desc: "A drag-and-drop portfolio builder with custom themes, animation presets, and one-click deploy to Vercel.",
      tags: ["Vue 3", "Pinia", "Framer Motion"],
      cat: "SaaS",
      year: "2023",
      featured: false,
    },
    {
      title: "ShopFront",
      desc: "E-commerce storefront with 98/100 Lighthouse score, custom checkout flow, and full WCAG 2.1 compliance.",
      tags: ["Next.js", "TypeScript", "Stripe"],
      cat: "E-commerce",
      year: "2023",
      featured: false,
    },
    {
      title: "Codebrief",
      desc: "Technical blog platform with MDX support, syntax highlighting, RSS feed, and a custom reading-time estimator.",
      tags: ["Astro", "MDX", "Tailwind"],
      cat: "Blog",
      year: "2022",
      featured: false,
    },
    {
      title: "NoteSync",
      desc: "Offline-first note-taking PWA with real-time sync, end-to-end encryption, and a custom rich-text editor.",
      tags: ["React", "IndexedDB", "PWA"],
      cat: "Web App",
      year: "2022",
      featured: false,
    },
    {
      title: "CLI Scaffolder",
      desc: "An npx-runnable CLI tool that scaffolds opinionated React + TypeScript + Tailwind projects in under 10 seconds.",
      tags: ["Node.js", "Inquirer", "TypeScript"],
      cat: "Open Source",
      year: "2023",
      featured: false,
    },
    {
      title: "A11y Linter",
      desc: "VS Code extension that highlights accessibility violations inline as you type, with one-click suggested fixes.",
      tags: ["VS Code API", "TypeScript", "axe-core"],
      cat: "Open Source",
      year: "2022",
      featured: false,
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", ...new Set(projects.map((p) => p.cat))];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.cat === activeFilter);

  return (
    <main className="pt-16 max-w-6xl mx-auto px-6 py-24">
      <div style={{ opacity: 0, animation: "fadeUp 0.5s 0.1s ease forwards" }}>
        <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">
          04 / Projects
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-bright mb-4">
          Selected work
        </h1>
        <p className="text-dim font-mono text-sm mb-10">
          A few things I've built recently.
        </p>
      </div>

      {/* Filters */}
      <div
        className="flex flex-wrap gap-3 mb-12"
        style={{ opacity: 0, animation: "fadeUp 0.5s 0.2s ease forwards" }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`filter-btn font-mono text-xs px-4 py-2 border transition-colors ${
              activeFilter === cat
                ? "border-accent text-accent"
                : "border-border text-dim hover:border-soft hover:text-soft"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-5">
        {filteredProjects.map((project, i) => (
          <div
            key={project.title}
            className="proj-card p-6 relative overflow-hidden border border-border transition-all hover:border-soft"
            style={{
              opacity: 0,
              animation: `cardIn 0.4s ${i * 0.07}s ease forwards`,
            }}
          >
            {project.featured && (
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-accent" />
            )}

            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-dim">
                  {project.cat}
                </span>
                <span className="text-muted font-mono text-xs">·</span>
                <span className="font-mono text-xs text-dim">
                  {project.year}
                </span>
                {project.featured && (
                  <span className="font-mono text-xs text-accent border border-accent/40 px-2 py-0.5">
                    Featured
                  </span>
                )}
              </div>
              <svg
                className="text-muted hover:text-accent transition-colors cursor-pointer shrink-0"
                width="15"
                height="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </div>

            <h3 className="card-title text-light text-xl font-bold mb-3 transition-colors">
              {project.title}
            </h3>
            <p className="text-dim text-sm leading-relaxed mb-6">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-2.5 py-1 bg-surface text-dim"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Open source strip */}
      <div
        className="mt-16 border border-border p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        style={{ opacity: 0, animation: "fadeUp 0.5s 0.4s ease forwards" }}
      >
        <div>
          <h2 className="text-light font-bold text-xl mb-2">
            Open source contributions
          </h2>
          <p className="text-soft text-sm leading-relaxed max-w-xl">
            I actively contribute to projects like shadcn/ui, Radix UI, and
            various Tailwind CSS plugins. Check my GitHub for the full picture.
          </p>
        </div>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 border border-accent text-accent font-mono text-xs px-6 py-3 hover:bg-accent hover:text-black transition-all"
        >
          View GitHub →
        </a>
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
        @keyframes cardIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .proj-card {
          transition: border-color 0.25s;
        }
        .proj-card:hover {
          border-color: #a0a0a0;
        }
        .proj-card:hover .card-title {
          color: #eaff00;
        }
        .card-title {
          transition: color 0.25s;
        }
        .filter-btn {
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
      `}</style>
    </main>
  );
}
