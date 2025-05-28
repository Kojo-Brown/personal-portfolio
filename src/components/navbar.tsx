import { useState } from "react";
import { Link } from "react-router-dom";

const LinkedInIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="transition-colors duration-200"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="transition-colors duration-200"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("/");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (navItem: string) => {
    setActiveNav(navItem);
    setIsMenuOpen(false);
  };

  const getLinkClasses = (navItem: string) => {
    const baseClasses =
      "text-gray-700 hover:text-purple-600 transition-all duration-200 relative cursor-pointer";
    const activeClasses =
      activeNav === navItem
        ? "text-purple-600 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-purple-600"
        : "";
    return `${baseClasses} ${activeClasses}`;
  };

  const getMobileLinkClasses = (navItem: string) => {
    const baseClasses =
      "block text-gray-700 hover:text-purple-600 transition-all duration-200 py-2 relative cursor-pointer";
    const activeClasses =
      activeNav === navItem
        ? "text-purple-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-purple-600"
        : "";
    return `${baseClasses} ${activeClasses}`;
  };

  return (
    <div className="w-full bg-white">
      <div className="flex justify-between items-center w-full px-4 py-4 md:px-6">
        <div className="text-xl font-bold text-gray-800">
          <Link
            to="/"
            className="hover:text-purple-600 transition-colors duration-200 cursor-pointer"
          >
            <img
              src="src/assets/img_one.jpg"
              alt="Profile"
              className="w-12 h-12 object-contain rounded-full"
            />
          </Link>
        </div>

        <div className="hidden md:flex">
          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/about"
                  onClick={() => handleNavClick("about")}
                  className={getLinkClasses("about")}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/works"
                  onClick={() => handleNavClick("works")}
                  className={getLinkClasses("works")}
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => handleNavClick("services")}
                  className={getLinkClasses("services")}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => handleNavClick("contact")}
                  className={getLinkClasses("contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="hidden md:flex">
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="https://www.linkedin.com/in/nicholasdarkobrown/"
                  target="_blank"
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
                >
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Kojo-Brown"
                  target="_blank"
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
                >
                  <GitHubIcon />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white border-t border-gray-200`}
      >
        <nav className="px-4 py-4">
          <ul className="space-y-4">
            <li>
              <Link
                to="/about"
                onClick={() => handleNavClick("about")}
                className={getMobileLinkClasses("about")}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/works"
                onClick={() => handleNavClick("works")}
                className={getMobileLinkClasses("works")}
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => handleNavClick("services")}
                className={getMobileLinkClasses("services")}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => handleNavClick("contact")}
                className={getMobileLinkClasses("contact")}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="border-t border-gray-200 mt-4 pt-4">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="https://www.linkedin.com/in/nicholasdarkobrown/"
                  target="_blank"
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <LinkedInIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Kojo-Brown"
                  target="_blank"
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <GitHubIcon />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
