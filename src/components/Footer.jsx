import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-dim text-xs">
          © 2024 Alex Mercer. Built with Tailwind CSS.
        </p>
        <div className="flex gap-6">
          <Link
            to="/about"
            className="font-mono text-dim text-xs hover:text-accent transition-colors"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="font-mono text-dim text-xs hover:text-accent transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="font-mono text-dim text-xs hover:text-accent transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
