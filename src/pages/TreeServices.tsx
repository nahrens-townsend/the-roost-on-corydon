import styles from "./ServicePage.module.scss";
import PageHero from "@/components/sections/PageHero";
import CTA from "@/components/sections/CTA";
import Button from "@/components/ui/Button";

const features = [
  "Tree trimming and crown reduction",
  "Full tree removal (any size)",
  "Stump grinding and root removal",
  "Tree planting and transplanting",
  "Storm damage and emergency services",
  "Deadwood and hazard assessment",
];

export default function TreeServices() {
  return (
    <>
      <PageHero title="Tree Services" />

      <section className={styles.intro}>
        <div className={styles.introInner}>
          <div className={styles.introImage}>
            <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80&fit=crop"
              alt="Professional arborist trimming a large tree"
              loading="lazy"
            />
          </div>
          <div className={styles.introContent}>
            <h2 className={styles.introTitle}>
              Professional Tree Care You Can Trust
            </h2>
            <p className={styles.introDesc}>
              Trees are one of your property's most valuable assets — and one of
              the most hazardous when they're unhealthy or overgrown. Our
              certified arborists provide safe, expert tree care for residential
              and commercial properties across Winnipeg.
            </p>
            <p className={styles.introDesc}>
              From routine maintenance to emergency removals, we're equipped to
              handle any job safely and efficiently, leaving your property clean
              and tidy.
            </p>
            <ul className={styles.featureList}>
              {features.map((f) => (
                <li key={f} className={styles.featureItem}>
                  {f}
                </li>
              ))}
            </ul>
            <div className={styles.introActions}>
              <Button as="a" href="/contact" variant="primary" size="md">
                Get a Free Quote
              </Button>
              <Button as="a" href="/services" variant="outline" size="md">
                All Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
