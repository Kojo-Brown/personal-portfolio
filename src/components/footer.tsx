import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { navigationLinks, socialLinks } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6">
        <div className="border-b border-line-dark py-20">
          <p className="label-mono !text-paper/50 mb-6">Get in touch</p>
          <h2 className="font-display text-4xl font-medium leading-tight tracking-tight md:text-6xl">
            Have a project in mind?
            <br />
            <span className="italic text-paper/60">Let's build it together.</span>
          </h2>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:bg-paper/90"
            >
              Start a conversation
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <a
              href="mailto:brown.nicholas.darko@gmail.com"
              className="text-sm text-paper/60 underline-offset-4 transition-colors duration-200 hover:text-paper hover:underline"
            >
              brown.nicholas.darko@gmail.com
            </a>
          </div>
        </div>

        <div className="grid gap-10 border-b border-line-dark py-14 md:grid-cols-3">
          <div>
            <p className="font-display text-lg font-medium">
              Nicholas Brown<span className="text-accent">.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/50">
              Software engineer building scalable applications and robust
              systems. Based in New Haven, CT.
            </p>
          </div>

          <div>
            <p className="label-mono !text-paper/40 mb-5">Navigation</p>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-paper/70 transition-colors duration-200 hover:text-paper"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-mono !text-paper/40 mb-5">Elsewhere</p>
            <ul className="space-y-3">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group inline-flex items-center gap-1 text-sm text-paper/70 transition-colors duration-200 hover:text-paper"
                  >
                    {social.name}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="text-xs text-paper/40">
            © {currentYear} Nicholas Darko Brown. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-xs text-paper/40 transition-colors duration-200 hover:text-paper"
          >
            Back to top
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
