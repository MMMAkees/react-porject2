import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [text, setText] = useState("");
  const roles = [
    "Frontend Developer.",
    "UI Engineer.",
    "React Specialist.",
    "Web Craftsman.",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        const currentRole = roles[roleIndex];

        if (!isDeleting && charIndex <= currentRole.length) {
          setText(currentRole.slice(0, charIndex));
          setCharIndex(charIndex + 1);

          if (charIndex === currentRole.length + 1) {
            setTimeout(() => setIsDeleting(true), 1800);
          }
        } else if (isDeleting && charIndex >= 0) {
          setText(currentRole.slice(0, charIndex));
          setCharIndex(charIndex - 1);
        } else if (isDeleting && charIndex < 0) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
          setCharIndex(0);
        }
      },
      isDeleting ? 40 : charIndex === roles[roleIndex].length + 1 ? 1800 : 75,
    );

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <main className="pt-16 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <div
          style={{ opacity: 0, animation: "fadeUp 0.5s 0.1s ease forwards" }}
        >
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-6">
            Hello, world. I'm
          </p>
          <h1
            className="text-6xl md:text-8xl font-bold text-bright leading-none tracking-tight mb-4"
            style={{ opacity: 0, animation: "fadeUp 0.5s 0.2s ease forwards" }}
          >
            Mohamed Akees . . .
          </h1>
          <div
            className="flex items-center text-xl md:text-2xl font-mono text-dim mb-8"
            style={{ opacity: 0, animation: "fadeUp 0.5s 0.3s ease forwards" }}
          >
            <span id="tw">{text}</span>
            <span className="cursor" />
          </div>
          <p
            className="text-soft text-lg max-w-xl leading-relaxed mb-12"
            style={{ opacity: 0, animation: "fadeUp 0.5s 0.4s ease forwards" }}
          >
            I craft fast, accessible, and beautifully designed web experiences.
            Currently available for freelance projects.
          </p>
          <div
            className="flex flex-wrap gap-4"
            style={{ opacity: 0, animation: "fadeUp 0.5s 0.5s ease forwards" }}
          >
            <Link
              to="/projects"
              className="text-black font-semibold px-8 py-4 text-sm tracking-wide hover:opacity-80 transition-opacity"
              style={{ backgroundColor: '#eaff00' }}
            >
              View my work →
            </Link>
            <Link
              to="/contact"
              className="border border-border text-light font-semibold px-8 py-4 text-sm tracking-wide hover:border-accent hover:text-accent transition-colors"
            >
              Get in touch
            </Link>
          </div>

          <div
            className="mt-20 pt-10 border-t border-border flex flex-wrap gap-12"
            style={{ opacity: 0, animation: "fadeUp 0.5s 0.6s ease forwards" }}
          >
            <div>
              <p className="text-4xl font-bold text-bright">5+</p>
              <p className="text-dim text-sm font-mono mt-1">
                Years experience
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold text-bright">40+</p>
              <p className="text-dim text-sm font-mono mt-1">
                Projects shipped
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold text-bright">20+</p>
              <p className="text-dim text-sm font-mono mt-1">Happy clients</p>
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
        .cursor {
          display: inline-block;
          width: 2px;
          height: 1em;
          background: #eaff00;
          margin-left: 2px;
          vertical-align: text-bottom;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </main>
  );
};

export default Home;
