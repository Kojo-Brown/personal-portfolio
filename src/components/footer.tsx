import { Link } from "react-router-dom";
import { navigationLinks, socialLinks } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="mx-auto w-full max-w-5xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1fr_auto_auto] md:gap-20">
          <div className="max-w-sm">
            <p className="font-semibold tracking-tight">Nicholas Brown</p>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
              Software engineer building scalable applications and robust
              systems. Based in New Haven, CT.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium">Pages</p>
            <ul className="mt-3 space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium">Connect</p>
            <ul className="mt-3 space-y-2">
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
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-muted-foreground mt-12 flex flex-col items-start justify-between gap-2 border-t pt-6 text-sm sm:flex-row">
          <p>© {currentYear} Nicholas Darko Brown</p>
          <p>New Haven, CT</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
