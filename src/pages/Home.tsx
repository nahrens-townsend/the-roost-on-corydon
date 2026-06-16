import { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import homeImg1 from "@/assets/images/home/1.webp";
import homeImg2 from "@/assets/images/home/2.webp";
import homeImg3 from "@/assets/images/home/3.webp";
import homeImg4 from "@/assets/images/home/4.webp";
import homeImg5 from "@/assets/images/home/5.webp";

const CONTACT_LINKS = [
  { label: "Jobs", href: "/jobs" },
  { label: "Contact", href: "/visit-us" },
  { label: "Instagram", href: "https://www.instagram.com/theroostwpg/" },
];

const HERO_IMAGES = [
  {
    url: homeImg1,
    alt: "Beautifully plated restaurant dish",
  },
  {
    url: homeImg2,
    alt: "House-made pasta",
  },
  {
    url: homeImg3,
    alt: "Seasonal ingredients and produce",
  },
  {
    url: homeImg4,
    alt: "Fresh local cuisine",
  },
  {
    url: homeImg5,
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
            href="https://maps.app.goo.gl/UPpokBLDfTZfvwiD8"
            target="_blank"
            rel="noreferrer"
          >
            651-A Corydon Avenue,&nbsp;Winnipeg&nbsp;(MB)
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
                {label === "Instagram" && (
                  <svg
                    className={styles.instagramIcon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    aria-hidden="true"
                  >
                    <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
