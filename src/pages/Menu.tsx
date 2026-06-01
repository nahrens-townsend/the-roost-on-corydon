import { useState, useEffect } from "react";
import styles from "./Menu.module.scss";
import menuImg1 from "@/assets/images/menu/2026 spring.png";
import menuImg2 from "@/assets/images/menu/page 1.png";
import menuImg3 from "@/assets/images/menu/page 2.png";
import menuImg4 from "@/assets/images/menu/page 3.png";
import menuImg5 from "@/assets/images/menu/page 4.png";
import menuImg6 from "@/assets/images/menu/page 5.png";
import menuImg7 from "@/assets/images/menu/page 6.png";

type TabKey =
  | "food"
  | "nonAlcoholic"
  | "coolAndRefreshing"
  | "tropicalOpulence"
  | "stiffAndStirred"
  | "wine"
  | "beer";

const TABS: { key: TabKey; label: string }[] = [
  { key: "food", label: "Food" },
  { key: "nonAlcoholic", label: "Non-Alcoholic" },
  { key: "coolAndRefreshing", label: "Cool & Refreshing" },
  { key: "tropicalOpulence", label: "Served Up & Sour / Tropical Opulence" },
  { key: "stiffAndStirred", label: "Stiff & Stirred / Bright & Bubbly" },
  { key: "wine", label: "Wine" },
  { key: "beer", label: "Beer" },
];

// All sections use the same image for now
const MENU_IMAGES: Record<TabKey, string> = {
  food: menuImg1,
  nonAlcoholic: menuImg2,
  coolAndRefreshing: menuImg3,
  tropicalOpulence: menuImg4,
  stiffAndStirred: menuImg5,
  wine: menuImg6,
  beer: menuImg7,
};

const FLIP_MS = 320;

type Phase = "idle" | "exit" | "enter";

export default function Menu() {
  const [active, setActive] = useState<TabKey>("food");
  const [displayed, setDisplayed] = useState<TabKey>("food");
  const [phase, setPhase] = useState<Phase>("idle");

  // Drive the two-stage flip: exit → (swap image) → enter → idle
  useEffect(() => {
    if (phase === "exit") {
      const t = setTimeout(() => {
        setDisplayed(active);
        setPhase("enter");
      }, FLIP_MS);
      return () => clearTimeout(t);
    }
    if (phase === "enter") {
      const t = setTimeout(() => setPhase("idle"), FLIP_MS);
      return () => clearTimeout(t);
    }
  }, [phase, active]);

  const handleTabClick = (tab: TabKey) => {
    if (tab === active || phase !== "idle") return;
    setActive(tab);
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
        <div
          className={`${styles.menuPage}${phase === "exit" ? ` ${styles.flipOut}` : ""}${phase === "enter" ? ` ${styles.flipIn}` : ""}`}
        >
          <img
            src={MENU_IMAGES[displayed]}
            alt={`${displayed} menu`}
            className={styles.menuImg}
          />
        </div>
      </div>
    </div>
  );
}
