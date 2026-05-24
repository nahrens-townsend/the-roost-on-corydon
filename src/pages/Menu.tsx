import { useState, useEffect } from "react";
import styles from "./Menu.module.scss";
import menuImg from "@/assets/images/roost-menu-1.webp";

type TabKey = "food" | "cocktails" | "wine" | "dessert";

const TABS: { key: TabKey; label: string }[] = [
  { key: "food", label: "food" },
  { key: "cocktails", label: "cocktails, beer and cider" },
  { key: "wine", label: "wine" },
  { key: "dessert", label: "dessert" },
];

// All sections use the same image for now
const MENU_IMAGES: Record<TabKey, string> = {
  food: menuImg,
  cocktails: menuImg,
  wine: menuImg,
  dessert: menuImg,
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
