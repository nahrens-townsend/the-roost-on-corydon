import styles from "./DirectionsSection.module.scss";

export default function DirectionsSection() {
  return (
    <section className={styles.directions}>
      <div className={styles.inner}>
        <div className={styles.mapArea}>
          <iframe
            className={styles.mapFrame}
            src="https://maps.google.com/maps?q=651+Corydon+Avenue,+Winnipeg,+Manitoba&t=m&z=15&output=embed&iwloc=near"
            title="651 Corydon Avenue, Winnipeg"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Map showing 651 Corydon Avenue location"
          />

          <div className={styles.infoCard}>
            <p className={styles.address}>
              We&rsquo;re located on the second floor of{" "}
              <strong>651 Corydon Avenue</strong>.
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
