import styles from "./ServicePage.module.scss";
import PageHero from "@/components/sections/PageHero";
import CTA from "@/components/sections/CTA";
import Button from "@/components/ui/Button";

const features = [
  "Custom garden layout and planting plans",
  "Seasonal colour and perennial bed design",
  "Native and pollinator-friendly plant selection",
  "Raised garden beds and vegetable gardens",
  "Lawn renovation and seeding",
  "Irrigation planning and installation",
];

export default function GardenDesign() {
  return (
    <>
      <PageHero title="Garden Design" />

      <section className={styles.intro}>
        <div className={styles.introInner}>
          <div className={styles.introImage}>
            <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80&fit=crop"
              alt="Lush custom garden with vibrant plantings and stone pathways"
              loading="lazy"
            />
          </div>
          <div className={styles.introContent}>
            <h2 className={styles.introTitle}>
              Beautiful Gardens, Thoughtfully Designed
            </h2>
            <p className={styles.introDesc}>
              A great garden starts with a great plan. Our design team works
              with you to create outdoor spaces that suit your style, your soil,
              and Winnipeg's demanding climate — delivering colour, texture, and
              life through every season.
            </p>
            <p className={styles.introDesc}>
              Whether you're starting from scratch or refreshing an existing
              yard, we handle everything from initial concept through to final
              planting.
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
