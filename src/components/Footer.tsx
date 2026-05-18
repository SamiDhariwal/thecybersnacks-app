import { socialLinks } from "@/lib/socialLinks";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div className="footer-brand-block">
          <p className="footer-brand">The Cyber Snacks</p>
          <p className="footer-tagline">
            Cybersecurity learning, served in focused bites.
          </p>
        </div>

        <nav className="footer-socials" aria-label="Social links">
          {socialLinks.map((link) => (
            <a
              className="footer-social-link"
              href={link.href}
              key={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="footer-copyright">
          &copy; {currentYear} The Cyber Snacks. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
