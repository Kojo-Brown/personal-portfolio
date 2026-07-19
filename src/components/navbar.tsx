import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

const navItems = [
  { name: "About", to: "/about" },
  { name: "Works", to: "/works" },
  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm transition-colors duration-200 ${
      isActive ? "text-ink font-medium" : "text-ink-soft hover:text-ink"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          to="/"
          className="font-display text-lg font-medium tracking-tight text-ink"
        >
          Nicholas Brown
          <span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClasses}>
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="https://www.linkedin.com/in/nicholasdarkobrown/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-ink-soft transition-colors duration-200 hover:text-ink"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/Kojo-Brown"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-ink-soft transition-colors duration-200 hover:text-ink"
          >
            <Github size={18} />
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-8 w-8 flex-col items-center justify-center space-y-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`h-px w-6 bg-ink transition-all duration-300 ${
              isMenuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-all duration-300 ${
              isMenuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden border-line transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "max-h-96 border-t" : "max-h-0"
        }`}
      >
        <nav className="space-y-1 px-6 py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `block py-2 text-lg ${
                  isActive ? "text-ink font-medium" : "text-ink-soft"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <div className="flex items-center gap-5 border-t border-line pt-4">
            <a
              href="https://www.linkedin.com/in/nicholasdarkobrown/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-ink-soft"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Kojo-Brown"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-ink-soft"
            >
              <Github size={20} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
