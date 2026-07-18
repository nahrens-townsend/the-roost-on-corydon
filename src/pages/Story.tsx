import styles from "./Story.module.scss";
import elsaImg from "@/assets/images/elsa-+story.webp";
import flowerImg from "@/assets/images/our-story-flower.webp";

export default function Story() {
  return (
    <>
      {/* ── Main Story Section ── */}
      <section className={styles.storySection}>
        <div className={styles.leftImage}>
          <img
            src={elsaImg}
            alt="Inside The Roost cocktail bar"
            loading="lazy"
          />
        </div>

        <div className={styles.rightContent}>
          <img
            src={flowerImg}
            alt=""
            aria-hidden="true"
            className={styles.flowerImage}
            loading="lazy"
          />
          <p className={styles.description}>
            <strong>At heart, the Roost is a cocktail bar.</strong> We opened in
            2015 with the vision of creating a unique beverage experience in a
            homey, community driven space. Over the years we have cultivated a
            food offering that reflects the whimsical nature of our drinks. Our
            hand drawn menu changes every season, but always contains a slew of
            original cocktails (we've made over 500 to date), innovative small
            plates made with local ingredients, a thoughtful selection of
            natural wines, and a handful of local beers on tap. We serve these
            things in the small, cave like second floor of a 110 year old house
            in Winnipeg's little Italy. The bar features granite and birch,
            sparkly accents, &amp; emerald green walls decorated with the work
            of local artists. In the warmer months we host on our spacious
            rooftop patio that features a garden of edible flowers where birds
            often visit.{" "}
            <strong>Come cozy up with us and make a friend. Be kind.</strong>
          </p>
        </div>
      </section>

      {/* ── In The News ── */}
      {/* <section className={styles.newsSection}>
        <img
          src={rosemaryImg}
          alt=""
          aria-hidden="true"
          className={styles.rosemaryDivider}
        />
        <div className={styles.newsHeader}>
          <h2 className={styles.newsHeading}>In The News</h2>
        </div>
        <div className={styles.newsGrid}>
          {newsArticles.map((article) => (
            <article key={article.title} className={styles.newsCard}>
              <div className={styles.newsImageWrap}>
                <img
                  src={article.img}
                  alt={article.alt}
                  className={styles.newsImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.newsCardBody}>
                <h3 className={styles.newsTitle}>{article.title}</h3>
                <p className={styles.newsAuthor}>{article.author}</p>
                <p className={styles.newsBlurb}>{article.blurb}</p>
                <a href={article.href} className={styles.newsReadMore}>
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section> */}
    </>
  );
}
