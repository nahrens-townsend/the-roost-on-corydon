import styles from "./PageHero.module.scss";

interface PageHeroProps {
  title: string;
  image?: string;
}

export default function PageHero({ title, image }: PageHeroProps) {
  return (
    <section
      className={styles.pageHero}
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.pageHeroInner}>
        <h1 className={styles.pageHeroTitle}>{title}</h1>
      </div>
    </section>
  );
}
