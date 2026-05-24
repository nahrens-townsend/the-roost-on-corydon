import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <span className={styles.credit}>
          Designed by{" "}
          <a
            href="https://prairiestackwebdesigns.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prairie Stack Web Designs
          </a>
          .
        </span>
      </div>
    </footer>
  );
}
