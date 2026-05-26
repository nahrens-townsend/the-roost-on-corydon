import styles from "./Navbar.module.scss";

const NAV_ITEMS = [
  { label: "Menu", href: "/menu" },
  { label: "Our Story", href: "/story" },
];

function TextSlide({ children }: { children: string }) {
  return (
    <span className={styles.textSlide}>
      <span>{children}</span>
      <span className={styles.textSlideClone} aria-hidden="true">
        {children}
      </span>
    </span>
  );
}

export default function Navbar() {
  return (
    <header>
      {/* Brand logo */}
      <div className={styles.logoBanner}>
        <a href="/" className={styles.logoLink} aria-label="The Roost — Home">
          <h1 className={styles.logo}>The Roost</h1>
        </a>
      </div>

      {/* Quick-action nav */}
      <nav className={styles.quickNav} aria-label="Quick links">
        {NAV_ITEMS.map(({ label, href }) => (
          <a key={label} href={href} className={styles.navItem}>
            <TextSlide>{label}</TextSlide>
          </a>
        ))}
      </nav>

      {/* Reservation CTA */}
      <div className={styles.reservationRow}>
        <a href="/visit-us" className={styles.reservation}>
          <div className={styles.reservationBg} aria-hidden="true" />
          <span className={styles.reservationInner}>
            <TextSlide>Visit Us</TextSlide>
          </span>
        </a>
      </div>
    </header>
  );
}
