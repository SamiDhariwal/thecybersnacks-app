import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/snacks", label: "Snacks" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="border-b border-white/10 bg-background/85 backdrop-blur">
      <div className="site-container flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link
          href="/"
          className="group inline-flex w-fit flex-col gap-1 transition-colors hover:text-accent"
        >
          <span className="font-mono text-xs uppercase text-accent">
            The Cyber
          </span>
          <span className="text-lg font-semibold leading-none">
            Snacks
          </span>
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
