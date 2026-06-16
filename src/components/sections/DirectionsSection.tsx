import styles from "./DirectionsSection.module.scss";

export default function DirectionsSection() {
  return (
    <section className={styles.directions}>
      <div className={styles.inner}>
        <div className={styles.mapArea}>
          <iframe
            className={styles.mapFrame}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10285.66888208113!2d-97.14997!3d49.872191!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea7404908587d9%3A0x2ea3935bda0ea47b!2s651%20Corydon%20Ave%2C%20Winnipeg%2C%20MB%20R3M%200W4%2C%20Canada!5e0!3m2!1sen!2sus!4v1781645523187!5m2!1sen!2sus"
            title="651-A Corydon Avenue, Winnipeg"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Map showing 651 Corydon Avenue location"
          />
          <div className={styles.infoCard}>
            <p className={styles.address}>
              We&rsquo;re located on the second floor of{" "}
              <strong>651-A Corydon Avenue</strong>.
            </p>
            <p className={styles.note}>
              Our restaurant is accessible by staircase only. We apologize for
              any inconvenience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
