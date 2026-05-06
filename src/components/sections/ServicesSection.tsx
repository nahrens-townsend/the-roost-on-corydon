import styles from "./ServicesSection.module.scss";
import Button from "@/components/ui/Button";
import leavesCorner from "@/assets/images/leaves-corner-2.png";
import Leaf from "@/assets/icons/leaf-solid-full.svg?react";
import Tree from "@/assets/images/tree-solid-full.svg?react";
import Warehouse from "@/assets/images/warehouse-solid-full.svg?react";

const services = [
  {
    icon: <Leaf />,
    title: "Garden Design",
    desc: "Custom planting plans built for Winnipeg's climate, soil, and seasonal extremes — from front yard updates to full landscape transformations.",
    link: "/services/garden-design",
  },
  {
    icon: <Warehouse />,
    title: "Hardscaping",
    desc: "Patios, walkways, retaining walls, and fire pits built for durability and long-term appeal through Winnipeg's freeze-thaw cycles.",
    link: "/services/hardscapes",
  },
  {
    icon: <Tree />,
    title: "Tree Services",
    desc: "Pruning, shaping, and removal by certified, fully insured arborists — keeping your landscape safe, healthy, and well-maintained.",
    link: "/services/tree-services",
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.services}>
      <img
        src={leavesCorner}
        alt=""
        aria-hidden
        className={styles.servicesLeaves}
      />
      <div className={styles.servicesInner}>
        <div className={styles.grid}>
          {services.map(({ icon, title, desc, link }) => (
            <article key={title} className={styles.card}>
              <div className={styles.cardIcon} aria-hidden>
                {icon}
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
              <Button
                className={styles.cardButton}
                as="a"
                href={link}
                variant="primary"
                size="sm"
              >
                Learn More
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
