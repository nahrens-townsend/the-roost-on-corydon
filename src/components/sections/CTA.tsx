import styles from "./CTA.module.scss";

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaCard}>
        <h2 className={styles.ctaTitle}>Ready to Transform Your Yard?</h2>
        <a href="tel:+12045550123" className={styles.ctaButton}>
          Call Us Today
        </a>
      </div>
    </section>
  );
}
