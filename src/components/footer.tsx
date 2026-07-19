import { Link } from "react-router-dom";
import { navigationLinks, socialLinks } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6">
        <div className="border-b border-line-dark py-20 md:py-28">
          <p className="label-mono !text-paper/50 mb-8">Get in touch</p>
          <a
            href="mailto:brown.nicholas.darko@gmail.com"
            className="font-display block break-words text-3xl font-medium leading-tight tracking-tight underline decoration-line-dark decoration-1 underline-offset-8 transition-colors duration-200 hover:decoration-accent sm:text-4xl md:text-6xl"
          >
            brown.nicholas.darko
            <wbr />
            @gmail.com
          </a>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-paper/50">
            Open to full-time roles, contract work, and collaborations.
          </p>
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
                    className="text-sm text-paper/70 transition-colors duration-200 hover:text-paper"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-paper/40">
            © {currentYear} Nicholas Darko Brown
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-paper/40 transition-colors duration-200 hover:text-paper"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
