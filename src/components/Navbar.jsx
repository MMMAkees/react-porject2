import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-mono text-accent text-sm tracking-widest uppercase hover:opacity-70 transition-opacity"
        >
          &lt;Akees /&gt;
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`nav-link text-sm transition-colors ${isActive("/") ? "text-accent" : "text-soft hover:text-light"}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-link text-sm transition-colors ${isActive("/about") ? "text-accent" : "text-soft hover:text-light"}`}
          >
            About
          </Link>
          <Link
            to="/skills"
            className={`nav-link text-sm transition-colors ${isActive("/skills") ? "text-accent" : "text-soft hover:text-light"}`}
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className={`nav-link text-sm transition-colors ${isActive("/projects") ? "text-accent" : "text-soft hover:text-light"}`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`nav-link text-sm transition-colors ${isActive("/contact") ? "text-accent" : "text-soft hover:text-light"}`}
          >
            Contact
          </Link>
        </div>

        <Link
          to="/contact"
          className="hidden md:block text-xs font-mono text-black px-4 py-2 hover:opacity-80 transition-opacity"
          style={{ backgroundColor: "#eaff00" }}
        >
          Hire me
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden bg-black text-white p-2 rounded"
        >
          <svg
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 22 22"
          >
            <line x1="2" y1="6" x2="20" y2="6" />
            <line x1="2" y1="11" x2="20" y2="11" />
            <line x1="2" y1="16" x2="20" y2="16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="flex flex-col border-t border-white/20 bg-black px-6 py-4 gap-4 md:hidden">
          <Link
            to="/"
            className="text-sm text-white transition-colors hover:opacity-80"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm text-white transition-colors hover:opacity-80"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/skills"
            className="text-sm text-white transition-colors hover:opacity-80"
            onClick={() => setMobileMenuOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className="text-sm text-white transition-colors hover:opacity-80"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-sm text-white transition-colors hover:opacity-80"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
