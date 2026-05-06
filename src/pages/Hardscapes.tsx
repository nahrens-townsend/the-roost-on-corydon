import styles from "./ServicePage.module.scss";
import PageHero from "@/components/sections/PageHero";
import CTA from "@/components/sections/CTA";
import Button from "@/components/ui/Button";

const features = [
  "Natural stone and paver patios",
  "Retaining walls and garden borders",
  "Walkways, driveways, and steps",
  "Fire pit and outdoor living areas",
  "Decorative gravel and mulch installations",
  "Drainage solutions and grading",
];

export default function Hardscapes() {
  return (
    <>
      <PageHero title="Hardscapes" />

      <section className={styles.intro}>
        <div className={styles.introInner}>
          <div className={styles.introImage}>
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&fit=crop"
              alt="Beautifully constructed stone patio with retaining walls in a backyard"
              loading="lazy"
            />
          </div>
          <div className={styles.introContent}>
            <h2 className={styles.introTitle}>
              Durable Outdoor Spaces Built to Last
            </h2>
            <p className={styles.introDesc}>
              Hardscaping transforms your yard into a functional, year-round
              outdoor living space. From elegant stone patios to solid retaining
              walls, we build with materials that handle Winnipeg's freeze-thaw
              cycles and stand the test of time.
            </p>
            <p className={styles.introDesc}>
              Every project is designed with both aesthetics and structural
              integrity in mind, backed by our full workmanship guarantee.
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
