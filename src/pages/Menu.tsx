import { useState, useEffect } from "react";
import styles from "./Menu.module.scss";
import foodImg1 from "@/assets/images/menu/food/webp/page-1.webp";
import foodImg2 from "@/assets/images/menu/food/webp/page-2.webp";

import beverageImg1 from "@/assets/images/menu/beverages/webp/page-1.webp";
import beverageImg2 from "@/assets/images/menu/beverages/webp/page-2.webp";
import beverageImg3 from "@/assets/images/menu/beverages/webp/page-3.webp";
import beverageImg4 from "@/assets/images/menu/beverages/webp/page-4.webp";
import beverageImg5 from "@/assets/images/menu/beverages/webp/page-5.webp";
import beverageImg6 from "@/assets/images/menu/beverages/webp/page-6.webp";
import beverageImg7 from "@/assets/images/menu/beverages/webp/page-7.webp";
import beverageImg8 from "@/assets/images/menu/beverages/webp/page-8.webp";
import beverageImg9 from "@/assets/images/menu/beverages/webp/page-9.webp";
import beverageImg10 from "@/assets/images/menu/beverages/webp/page-10.webp";

type TabKey = "food" | "beverages";

const TABS: { key: TabKey; label: string }[] = [
  { key: "food", label: "Food" },
  { key: "beverages", label: "Beverages" },
];

const MENU_IMAGES: Record<TabKey, string[]> = {
  food: [foodImg1, foodImg2],
  beverages: [
    beverageImg1,
    beverageImg2,
    beverageImg3,
    beverageImg4,
    beverageImg5,
    beverageImg6,
    beverageImg7,
    beverageImg8,
    beverageImg9,
    beverageImg10,
  ],
};

const FLIP_MS = 320;

type Phase = "idle" | "exit" | "enter";

export default function Menu() {
  const [active, setActive] = useState<TabKey>("food");
  const [displayed, setDisplayed] = useState<TabKey>("food");
  const [pageIndex, setPageIndex] = useState(0);
  const [targetPageIndex, setTargetPageIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");

  // Drive the two-stage flip: exit → (swap image) → enter → idle
  useEffect(() => {
    if (phase === "exit") {
      const t = setTimeout(() => {
        setDisplayed(active);
        setPageIndex(targetPageIndex);
        setPhase("enter");
      }, FLIP_MS);
      return () => clearTimeout(t);
    }
    if (phase === "enter") {
      const t = setTimeout(() => setPhase("idle"), FLIP_MS);
      return () => clearTimeout(t);
    }
  }, [phase, active, targetPageIndex]);

  const handleTabClick = (tab: TabKey) => {
    if (tab === active || phase !== "idle") return;
    setTargetPageIndex(0);
    setActive(tab);
    setPhase("exit");
  };

  const handlePageChange = (direction: -1 | 1) => {
    if (phase !== "idle") return;
    const nextIndex = pageIndex + direction;
    if (nextIndex < 0 || nextIndex >= MENU_IMAGES[active].length) return;
    setTargetPageIndex(nextIndex);
    setPhase("exit");
  };

  return (
    <div className={styles.page}>
      {/* Section navigation */}
      <nav className={styles.tabNav} aria-label="Menu sections">
        {TABS.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            className={`${styles.tabBtn}${active === key ? ` ${styles.tabBtnActive}` : ""}`}
            onClick={() => handleTabClick(key)}
            aria-pressed={active === key}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Menu image with page-flip animation */}
      <div className={styles.menuStage}>
        <button
          type="button"
          className={styles.pageArrow}
          onClick={() => handlePageChange(-1)}
          disabled={phase !== "idle" || pageIndex === 0}
          aria-label="Previous menu page"
        >
          <span aria-hidden="true">←</span>
        </button>
        <div
          className={`${styles.menuPage}${phase === "exit" ? ` ${styles.flipOut}` : ""}${phase === "enter" ? ` ${styles.flipIn}` : ""}`}
        >
          <img
            src={MENU_IMAGES[displayed][pageIndex]}
            alt={`${displayed} menu, page ${pageIndex + 1}`}
            className={styles.menuImg}
          />
        </div>
        <button
          type="button"
          className={styles.pageArrow}
          onClick={() => handlePageChange(1)}
          disabled={
            phase !== "idle" || pageIndex === MENU_IMAGES[active].length - 1
          }
          aria-label="Next menu page"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
