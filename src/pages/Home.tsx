import { useState, useEffect } from "react";
import styles from "./Home.module.scss";

const CONTACT_LINKS = [
  { label: "Jobs", href: "/visit-us" },
  { label: "Contact", href: "/visit-us" },
  { label: "Instagram", href: "https://www.instagram.com/theroostwpg/" },
];

const HERO_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
    alt: "Beautifully plated restaurant dish",
  },
  {
    url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    alt: "House-made pasta",
  },
  {
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    alt: "Seasonal ingredients and produce",
  },
  {
    url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    alt: "Fresh local cuisine",
  },
  {
    url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    alt: "House-made pasta",
  },
];

const SLIDE_INTERVAL = 4000;
const FADE_DURATION = 1000;

function HeroSlider() {
  const [{ active, prev }, setSlide] = useState<{
    active: number;
    prev: number | null;
  }>({ active: 0, prev: null });

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((s) => ({
        prev: s.active,
        active: (s.active + 1) % HERO_IMAGES.length,
      }));
    }, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (prev === null) return;
    const timeout = setTimeout(
      () => setSlide((s) => ({ ...s, prev: null })),
      FADE_DURATION + 200,
    );
    return () => clearTimeout(timeout);
  }, [prev]);

  return (
    <>
      {prev !== null && (
        <img
          key={`p${prev}`}
          src={HERO_IMAGES[prev].url}
          alt={HERO_IMAGES[prev].alt}
          className={`${styles.sliderImg} ${styles.sliderImgExit}`}
        />
      )}
      <img
        key={`a${active}`}
        src={HERO_IMAGES[active].url}
        alt={HERO_IMAGES[active].alt}
        className={`${styles.sliderImg} ${styles.sliderImgEnter}`}
      />
    </>
  );
}

function TextSlide({ children }: { children: string }) {
  return (
    <span className={styles.textSlide}>
      <span>{children}</span>
      <span className={styles.textSlideClone} aria-hidden="true">
        {children}
      </span>
    </span>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero image — mobile only */}
      <div className={styles.mobileHero}>
        <div className={styles.imageAspect}>
          <HeroSlider />
        </div>
      </div>

      {/* Description */}
      <div className={styles.description}>
        <p>
          At heart, The Roost is a cozy neighbourhood cocktail bar serving
          original drinks, seasonal plates, and local favourites in a warm,
          community-driven space. Come cozy up, share good food and drinks, and
          make yourself at home.
        </p>
      </div>

      {/* Info row */}
      <div className={styles.infoRow}>
        <div className={styles.infoAddress}>
          <a
            href="https://maps.app.goo.gl/example"
            target="_blank"
            rel="noreferrer"
          >
            123 Corydon Avenue,&nbsp;Winnipeg&nbsp;(MB)
          </a>
        </div>

        <div className={styles.infoHours}>
          <p>
            Sunday to Thursday
            <br />
            17h&nbsp;—&nbsp;00h00
          </p>
          <p>
            Friday to Saturday
            <br />
            17h&nbsp;—&nbsp;02h00
          </p>
        </div>

        <div className={styles.infoLinks}>
          <div className={styles.linkStack}>
            {CONTACT_LINKS.map(({ label, href }) => (
              <a key={label} href={href} className={styles.contactLink}>
                <TextSlide>{label}</TextSlide>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
