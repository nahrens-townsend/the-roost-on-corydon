import styles from "./Story.module.scss";
import PageHero from "@/components/sections/PageHero";
import elsaImg from "@/assets/images/elsa-+story.webp";
import flowerImg from "@/assets/images/our-story-flower.webp";
import storyImg2 from "@/assets/images/story-img-2.png";
import orangeImg from "@/assets/images/orange.webp";
import heroImg from "@/assets/images/the-roost-hero.jpg";
import article1 from "@/assets/images/article-1.webp";
import article2 from "@/assets/images/article-2.webp";
import article3 from "@/assets/images/article-3.webp";
import article4 from "@/assets/images/article-4.webp";
import article5 from "@/assets/images/article-5.webp";
import rosemaryImg from "@/assets/images/rosemary.svg";

const newsArticles = [
  {
    img: article1,
    alt: "Bartender carefully crafting a cocktail at The Roost",
    title: "Canada’s 100 Best Restaurants No. 27",
    author: "Canada’s 100 Best",
    blurb:
      "Roost is perched among the treetops on the second floor of an old house with a nest-like patio and sloped-ceiling loft. The bar opened in 2015, marked the dawning of Winnipeg’s budding craft -cocktail culture. Alongside stiffer drinks, the Roost seasonal bar menu always contains a smattering of whimsical libations that are sprinkled with glitter, shaken with Cheerio orgeat, festooned with edible flowers or topped with cotton-candy clouds.",
    href: "#",
  },
  {
    img: article2,
    alt: "Bartender pouring a seasonal cocktail at The Roost",
    title: "City Specific - The Roost",
    author: "Nigel Webber, 2016",
    blurb:
      "The Roost Social House is part of a new trend in Winnipeg’s restaurant and bar scene, craft cocktails. Head bartender Elsa Taylor’s take on craft cocktails incorporates her feminist values and challenges the prevalent idea that consuming alcohol is for intoxication only. Using handcrafted ingredients with a new cocktail everyday, Elsa’s creations encourage savouring and quality over quantity. Elsa wants to welcome everyone to her bar top, treat each person equally and make sure they leave with a smile on their face.",
    href: "#",
  },
  {
    img: article3,
    alt: "A floral cocktail served at The Roost",
    title:
      "Winnipeg’s cocktail queen is perched on some of the city’s best patios",
    author: "Tourism Winnipeg, July 2020",
    blurb:
      "In 2015, when Ike Hedenstierna, Caiden Bircham, chef Sean Bernard and Elsa Taylor opened up The Roost on Corydon they had just entered their 20s (with the exception of Bernard, who was 28) and only had a few years of corporate restaurant experience. Five years later The Roost is perhaps the hottest cocktails and small plates destination in Winnipeg, a place with national accolades and a steady line of patrons willing to wait two or three hours for one of its coveted second floor patio seats during the pandemic.",
    href: "#",
  },
  {
    img: article4,
    alt: "City Specific feature on The Roost",
    title: "New takes on tipples",
    author: "Winnipeg Free Press, May 2020",
    blurb:
      'Elsa Taylor has been making cocktails for as long as she can remember. "Mixing my parents a drink was one of my favourite pastimes, even if it was a deranged combination of milk and sprinkles and green food colouring, that was something that brought me tremendous joy," says the 26-year-old co-owner and head bartender of The Roost on Corydon.',
    href: "#",
  },
  {
    img: article5,
    alt: "19 of the coolest bars to visit across Canada",
    title: "19 Of The Coolest Bars To Get Drunk At Across Canada No. 2",
    author: "BuzzFeed Canada, 2016",
    blurb:
      '"The bar boasts beautiful craft cocktails, small plates to share, and a gorgeous patio. This tiny bar is a favourite among younger people looking for a cozy place for cocktails at reasonable prices. It also doesn\'t hurt having your drink sprinkled with edible glitter!"',
    href: "#",
  },
];

export default function Story() {
  return (
    <>
      <PageHero title="Our Story" image={heroImg} />

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

      {/* ── Team Section ── */}
      <section className={styles.teamSection}>
        <div className={styles.teamLeftContent}>
          <img
            src={orangeImg}
            alt=""
            aria-hidden="true"
            className={styles.orangeImage}
            loading="lazy"
          />
          <p className={styles.description}>
            <strong>Our team is the heartbeat behind the bar</strong> — a small,
            ever-evolving group of curious minds, kind souls, and quietly
            obsessive makers. We're bartenders, hosts, cooks, artists, and
            listeners, all driven by the same instinct: to take care of people.
          </p>
          <p className={styles.description}>
            We spend our days tasting, testing, and reworking — not just
            cocktails, but the experience itself. Every detail is shaped by the
            people behind it. We challenge and support each other, and try not
            to take ourselves too seriously. At the end of it all, we’re just
            people who care deeply about what we do and who we do it for.
          </p>
          <p className={styles.description}>
            <strong>
              Pull up a chair, say hello — we're glad you're here.
            </strong>
          </p>
        </div>

        <div className={styles.teamRightImage}>
          <img src={storyImg2} alt="The Roost team" loading="lazy" />
        </div>
      </section>

      {/* ── In The News ── */}
      <section className={styles.newsSection}>
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
      </section>
    </>
  );
}
