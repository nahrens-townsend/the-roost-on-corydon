import { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.scss";
import roostLogo from "@/assets/images/roost-logo.webp";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Story", href: "/story" },
  { label: "Visit Us", href: "/visit-us" },
];

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(() => {
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${el.offsetHeight}px`,
      );
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={headerRef} className={styles.navbar}>
      <div className={styles.inner}>
        {/* Logo — far left */}
        <a href="/" className={styles.logo} aria-label="The Roost — Home">
          <img src={roostLogo} alt="The Roost" className={styles.logoImg} />
        </a>

        {/* Desktop nav — far right */}
        <nav className={styles.nav} aria-label="Main navigation">
          {navLinks.map(({ label, href }) => (
            <a key={href} href={href} className={styles.navLink}>
              {label}
            </a>
          ))}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.igLink}
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`${styles.hamburger}${isOpen ? ` ${styles.hamburgerOpen}` : ""}`}
          onClick={() => setIsOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile slide-down menu */}
      <div
        className={`${styles.mobileMenu}${isOpen ? ` ${styles.mobileMenuOpen}` : ""}`}
        aria-hidden={!isOpen}
      >
        <div className={styles.mobileMenuInner}>
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={styles.mobileLink}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/theroostwpg/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.mobileLink} ${styles.mobileLinkIg}`}
            aria-label="Instagram"
            onClick={() => setIsOpen(false)}
          >
            <InstagramIcon />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </header>
  );
}
