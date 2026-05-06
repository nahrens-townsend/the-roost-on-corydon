import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./ReviewsSection.module.scss";
import AngleLeft from "@/assets/icons/angle-left-solid-full.svg?react";
import AngleRight from "@/assets/icons/angle-right-solid-full.svg?react";

const reviews = [
  {
    title: "Transformed Our Backyard",
    body: "The team completely transformed our backyard into something we're proud to show off. Every detail was thought through — from the stone pathway to the garden beds. Absolutely stunning work.",
    name: "Sarah M.",
  },
  {
    title: "Professional and Reliable",
    body: "From the initial quote to the final cleanup, everything was handled professionally. They showed up on time every day and the results exceeded our expectations. Highly recommend.",
    name: "James R.",
  },
  {
    title: "Best Investment We've Made",
    body: "Our property value shot up after the landscaping overhaul. The retaining wall alone solved a drainage problem we'd had for years. Couldn't be happier with the outcome.",
    name: "Linda K.",
  },
  {
    title: "Attention to Detail",
    body: "I've hired other landscapers before but none matched this level of care and craftsmanship. They took the time to understand what I wanted and delivered it perfectly.",
    name: "David T.",
  },
  {
    title: "Stunning Year-Round Results",
    body: "They chose plants that look beautiful in every season. Even in late fall the yard still looks amazing. The crew was friendly, efficient, and left the site spotless each day.",
    name: "Michelle A.",
  },
];

export default function ReviewsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);
  const [selectedReview, setSelectedReview] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedReview(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className={styles.reviews}>
      <div className={styles.reviewsInner}>
        <div className={styles.reviewsHeader}>
          <h2 className={styles.reviewsTitle}>What Our Clients Say</h2>
        </div>
        <div className={styles.reviewsCarousel}>
          <button
            className={styles.reviewArrow}
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Previous review"
          >
            <AngleLeft />
          </button>
          <div className={styles.emblaViewport} ref={emblaRef}>
            <div className={styles.emblaContainer}>
              {reviews.map((review, i) => (
                <div className={styles.emblaSlide} key={i}>
                  <div className={styles.reviewCard}>
                    <h3 className={styles.reviewCardTitle}>{review.title}</h3>
                    <p className={styles.reviewBody}>"{review.body}"</p>
                    <div className={styles.reviewStars} aria-hidden>
                      ★★★★★
                    </div>
                    <p className={styles.reviewName}>— {review.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className={styles.reviewArrow}
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Next review"
          >
            <AngleRight />
          </button>
        </div>
        <div className={styles.reviewDots} aria-hidden>
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`${styles.reviewDot}${i === selectedReview ? ` ${styles.reviewDotActive}` : ""}`}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
