import styles from "./JobsSection.module.scss";
import jobsImg from "@/assets/images/jobs.png";

export default function JobsSection() {
  return (
    <section className={styles.jobs}>
      {/* ── Left — image ────────────────────────────────────────── */}
      <div className={styles.imagePanel} aria-hidden="true">
        <img src={jobsImg} alt="" className={styles.image} loading="lazy" />
      </div>

      {/* ── Right — copy + email ─────────────────────────────────── */}
      <div className={styles.content}>
        <p className={styles.subtitle}>
          We'd love to take a peek at your résumé.
        </p>
        <p className={styles.body}>
          Whether you're a seasoned bartender, an enthusiastic server, or
          someone who simply loves a great atmosphere — we're always on the
          lookout for passionate, hardworking people to join The Roost family.
          Think you'd be a good fit? Send us your résumé and let's start the
          conversation.
        </p>
        <a href="mailto:theroostwpg@gmail.com" className={styles.emailLink}>
          theroostwpg@gmail.com
        </a>
      </div>
    </section>
  );
}
