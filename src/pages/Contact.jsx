import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        budget: "",
        message: "",
      });
      setIsSubmitting(false);
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
      }, 6000);
    }, 1000);
  };

  return (
    <main className="pt-16 max-w-6xl mx-auto px-6 py-24">
      <div style={{ opacity: 0, animation: "fadeUp 0.5s 0.1s ease forwards" }}>
        <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">
          05 / Contact
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-bright mb-4">
          Let's work together
        </h1>
        <p className="text-soft max-w-lg mb-16 leading-relaxed">
          Have a project in mind or just want to say hi? My inbox is always
          open. I typically respond within 24 hours.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
          style={{ opacity: 0, animation: "fadeUp 0.5s 0.2s ease forwards" }}
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-mono text-xs text-dim mb-2 tracking-widest uppercase">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-surface border border-border text-light font-mono text-sm outline-none focus:border-accent transition-colors"
                required
              />
            </div>
            <div>
              <label className="block font-mono text-xs text-dim mb-2 tracking-widest uppercase">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-surface border border-border text-light font-mono text-sm outline-none focus:border-accent transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <label className="block font-mono text-xs text-dim mb-2 tracking-widest uppercase">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Project inquiry"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-surface border border-border text-light font-mono text-sm outline-none focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label className="block font-mono text-xs text-dim mb-2 tracking-widest uppercase">
              Budget (optional)
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-surface border border-border text-soft font-mono text-sm outline-none focus:border-accent transition-colors appearance-none"
            >
              <option value="">— Select a range —</option>
              <option>Under $5k</option>
              <option>$5k – $15k</option>
              <option>$15k – $50k</option>
              <option>$50k+</option>
            </select>
          </div>

          <div>
            <label className="block font-mono text-xs text-dim mb-2 tracking-widest uppercase">
              Message
            </label>
            <textarea
              name="message"
              rows="6"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-surface border border-border text-light font-mono text-sm outline-none focus:border-accent transition-colors resize-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent text-black font-semibold py-4 text-sm tracking-wide hover:opacity-80 transition-opacity disabled:opacity-50"
          >
            {isSubmitting ? "Sending…" : "Send message →"}
          </button>

          {showSuccess && (
            <div className="text-center border border-accent/40 bg-accent/5 py-4 px-6">
              <p className="text-accent font-mono text-sm">
                ✓ Message sent! I'll be in touch soon.
              </p>
            </div>
          )}
        </form>

        {/* RIGHT COLUMN */}
        <div
          style={{ opacity: 0, animation: "fadeUp 0.5s 0.3s ease forwards" }}
        >
          {/* Social links */}
          <div className="space-y-3 mb-10">
            <a
              href="mailto:mohamed@akees.dev"
              className="social-row flex items-center gap-4 p-4 border border-border group hover:border-accent transition-colors"
            >
              <div className="w-10 h-10 border border-border flex items-center justify-center text-dim group-hover:border-accent group-hover:text-accent transition-colors shrink-0">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-dim font-mono text-xs tracking-widest mb-0.5 group-hover:text-accent transition-colors">
                  EMAIL
                </p>
                <p className="text-light text-sm group-hover:text-accent transition-colors">
                  mohamed@akees.dev
                </p>
              </div>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-row flex items-center gap-4 p-4 border border-border group hover:border-accent transition-colors"
            >
              <div className="w-10 h-10 border border-border flex items-center justify-center text-dim group-hover:border-accent group-hover:text-accent transition-colors shrink-0">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
              </div>
              <div>
                <p className="text-dim font-mono text-xs tracking-widest mb-0.5 group-hover:text-accent transition-colors">
                  GITHUB
                </p>
                <p className="text-light text-sm group-hover:text-accent transition-colors">
                  github.com/mohamedakees
                </p>
              </div>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-row flex items-center gap-4 p-4 border border-border group hover:border-accent transition-colors"
            >
              <div className="w-10 h-10 border border-border flex items-center justify-center text-dim group-hover:border-accent group-hover:text-accent transition-colors shrink-0">
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <p className="text-dim font-mono text-xs tracking-widest mb-0.5 group-hover:text-accent transition-colors">
                  LINKEDIN
                </p>
                <p className="text-light text-sm group-hover:text-accent transition-colors">
                  linkedin.com/in/mohamedakees
                </p>
              </div>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-row flex items-center gap-4 p-4 border border-border group hover:border-accent transition-colors"
            >
              <div className="w-10 h-10 border border-border flex items-center justify-center text-dim group-hover:border-accent group-hover:text-accent transition-colors shrink-0">
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <div>
                <p className="text-dim font-mono text-xs tracking-widest mb-0.5 group-hover:text-accent transition-colors">
                  TWITTER / X
                </p>
                <p className="text-light text-sm group-hover:text-accent transition-colors">
                  @mohamedakees_dev
                </p>
              </div>
            </a>
          </div>

          {/* Availability card */}
          <div className="border border-border p-6 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs text-accent tracking-widest uppercase">
                Available for work
              </span>
            </div>
            <p className="text-soft text-sm leading-relaxed mb-4">
              Open to full-time roles and freelance contracts. Typical response
              time: same day.
            </p>
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="bg-surface px-3 py-2">
                <p className="text-dim mb-1">Start date</p>
                <p className="text-light">Immediately</p>
              </div>
              <div className="bg-surface px-3 py-2">
                <p className="text-dim mb-1">Preference</p>
                <p className="text-light">Remote / Hybrid</p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-4">
            <h3 className="text-light text-sm font-mono tracking-widest uppercase pb-3 border-b border-border">
              Common questions
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-light font-semibold mb-1">
                  How quickly can you start?
                </p>
                <p className="text-dim leading-relaxed">
                  Usually within 1–2 weeks, depending on current commitments.
                </p>
              </div>
              <div>
                <p className="text-light font-semibold mb-1">
                  Do you work with designers?
                </p>
                <p className="text-dim leading-relaxed">
                  Yes — I'm comfortable working from Figma files or
                  collaborating directly with a design team.
                </p>
              </div>
              <div>
                <p className="text-light font-semibold mb-1">
                  What's your rate?
                </p>
                <p className="text-dim leading-relaxed">
                  Depends on scope. Drop me a message and we'll figure out what
                  works.
                </p>
              </div>
            </div>
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
