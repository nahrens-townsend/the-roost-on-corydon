import { useRef, useEffect, useState } from "react";
import styles from "./Home.module.scss";
import HeroSlider from "@/components/sections/HeroSlider";
import cocktail6 from "@/assets/images/orange.webp";
import cocktail7 from "@/assets/images/our-story-flower.webp";
import rosemaryImg from "@/assets/images/rosemary.svg";

function useScrollReveal<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export default function Home() {
  const { ref: phraseRef1, visible: pv1 } =
    useScrollReveal<HTMLParagraphElement>();
  const { ref: phraseRef2, visible: pv2 } =
    useScrollReveal<HTMLParagraphElement>();
  const { ref: phraseRef3, visible: pv3 } =
    useScrollReveal<HTMLParagraphElement>();

  return (
    <>
      {/* ── Hero ── */}
      <HeroSlider id="home" />

      {/* ── Story Reveal ── */}
      <section className={styles.storyReveal}>
        <img
          src={cocktail7}
          alt=""
          aria-hidden="true"
          className={`${styles.storyIllus} ${styles.storyIllusFlower}${pv2 ? ` ${styles.illusVisible}` : ""}`}
        />

        <div className={styles.storyInner}>
          <p
            ref={phraseRef1}
            className={`${styles.storyPhrase}${pv1 ? ` ${styles.phraseVisible}` : ""}`}
          >
            just a couple of kids
          </p>
          <p
            ref={phraseRef2}
            className={`${styles.storyPhrase} ${styles.storyPhrase2}${pv2 ? ` ${styles.phraseVisible}` : ""}`}
          >
            making treats
          </p>
          <p
            ref={phraseRef3}
            className={`${styles.storyPhrase} ${styles.storyPhrase3}${pv3 ? ` ${styles.phraseVisible}` : ""}`}
          >
            in a treehouse...
          </p>
        </div>
      </section>

      {/* ── Info & Hours ── */}
      <section className={styles.infoSection}>
        <img
          src={rosemaryImg}
          alt=""
          aria-hidden="true"
          className={styles.rosemaryDivider}
        />
        <img
          src={cocktail6}
          alt=""
          aria-hidden="true"
          className={`${styles.storyIllus} ${styles.storyIllusOrange}${pv2 ? ` ${styles.illusVisible}` : ""}`}
        />
        <div className={styles.infoCard}>
          <h2 className={styles.infoTitle}>The Roost on Corydon</h2>
          <p className={styles.infoDesc}>
            Tucked upstairs in a hundred-year-old house, The Roost is a cocktail
            bar at heart — a little moody, a little playful, and always
            evolving. Our menus shift with the seasons, shaped by curiosity and
            a habit of making things from scratch. Over the years we've created
            hundreds of original cocktails, each one a small experiment in
            flavour, balance, and a bit of whimsy.
          </p>
          <p className={styles.infoHoursLabel}>Hours</p>
          <dl className={styles.infoHours}>
            {[
              { day: "Tuesday", time: "5–10 p.m." },
              { day: "Wednesday", time: "5 p.m.–12 a.m." },
              { day: "Thursday", time: "5 p.m.–12 a.m." },
              { day: "Friday", time: "5 p.m.–2 a.m." },
              { day: "Saturday", time: "5 p.m.–2 a.m." },
              { day: "Sunday", time: "5 p.m.–12 a.m." },
              { day: "Monday", time: "5 p.m.–12 a.m." },
            ].map(({ day, time }) => (
              <div key={day} className={styles.infoHoursRow}>
                <dt>{day}</dt>
                <dd>{time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
