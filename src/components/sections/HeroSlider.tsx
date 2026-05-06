import styles from "./HeroSlider.module.scss";
import heroImg from "@/assets/images/roost-hero-2.webp";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&q=80&auto=format&fit=crop";

const HERO_IMAGE_2 = heroImg;

type Props = {
  id?: string;
};

export default function HeroSlider({ id }: Props) {
  return (
    <section className={styles.hero} id={id}>
      {/* Static background image — purely decorative */}
      <div
        className={styles.bg}
        aria-hidden="true"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
      />

      {/* Dark scrim for text legibility */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* Hero text */}
      <div className={styles.content}>
        <h1 className={styles.heroTitle}>The Roost</h1>
        <p className={styles.heroSubtitle}>on Corydon</p>
      </div>
    </section>
  );
}
