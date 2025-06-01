import {
  contactInfo,
  navigationLinks,
  serviceLinks,
  socialLinks,
} from "@/lib/constants";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById("footer");
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  useEffect(() => {
    if (subscribeStatus) {
      const timer = setTimeout(() => {
        setSubscribeStatus("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [subscribeStatus]);

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, purple 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, blue 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10">
        <div className="border-b border-gray-700">
          <div className="container mx-auto px-4 py-12">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                <div className="lg:col-span-1">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-4">
                      <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        Nicholas Brown
                      </span>
                    </h3>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-400">
                      <span className="mr-2">🎓</span>
                      <span>MS Computer Science Student</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <span className="mr-2">📍</span>
                      <span>New Haven, CT</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-6 text-white">
                    Navigation
                  </h4>
                  <ul className="space-y-3">
                    {navigationLinks.map((link, index) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className={`text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block ${
                            isVisible
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-2"
                          }`}
                          style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-6 text-white">
                    Services
                  </h4>
                  <ul className="space-y-3">
                    {serviceLinks.map((link, index) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className={`text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block ${
                            isVisible
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-2"
                          }`}
                          style={{ animationDelay: `${0.2 + index * 0.05}s` }}
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-6 text-white">
                    Stay Connected
                  </h4>

                  <div className="space-y-3 mb-6">
                    {contactInfo.slice(0, 2).map((contact) => (
                      <div
                        key={contact.label}
                        className="flex items-center text-sm"
                      >
                        <span className="mr-2">{contact.icon}</span>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <span className="text-gray-300">{contact.value}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  © {currentYear} Nicholas Darko Brown. All rights reserved.
                </p>
              </div>

              <div className="flex items-center space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : ""
                    }
                    className={`text-gray-400 ${
                      social.color
                    } transition-all duration-200 transform hover:scale-110 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2"
                    }`}
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                    title={social.name}
                  >
                    <span className="text-2xl">{social.icon}</span>
                  </a>
                ))}
              </div>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110 hover:-translate-y-1 shadow-lg"
                title="Back to top"
              >
                <span className="text-lg">↑</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
