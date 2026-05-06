import styles from "./Menu.module.scss";
import PageHero from "@/components/sections/PageHero";

const mocktails = [
  {
    name: "coconut grove",
    ingredients:
      "non-alcoholic gin & floral apertif, coconut white balsamic, lemon zest",
    price: "$10.00",
  },
  {
    name: "strawberry moon",
    ingredients:
      "iced strawberry champagne tea, coconut milk, strawberry-vanilla bean syrup",
    price: "$9.00",
  },
  {
    name: "soother",
    ingredients: "clearly canadian soda, blackberry shrub, sour cherry, lime",
    price: "$12.00",
  },
  {
    name: "california dreamin'",
    ingredients:
      "non-alcoholic beer, passionfruit juice, lime, blackberry shrub",
    price: "$8.00",
  },
  {
    name: "laura palmer",
    ingredients: "iced earl grey, guava, lemon, coconut-lavender syrup, lemon",
    price: "$8.00",
  },
  {
    name: "dragon berry lemonade",
    ingredients: "fresh juice & house made syrup, still water",
    price: "$8.00",
  },
  {
    name: "coconut lavender limeade",
    ingredients: "fresh juice & house made syrup, still water",
    price: "",
  },
];

const beer = [
  { name: "modelo especial", price: "$7" },
  { name: "white claw variety", price: "$7" },
  { name: "stella artois", price: "$8" },
  { name: "athletic brewing (n/a)", price: "$7" },
];

const wine = [
  { name: "house red", price: "$12" },
  { name: "house white", price: "$12" },
  { name: "prosecco", price: "$14" },
  { name: "rosé", price: "$13" },
];

const food = [
  {
    name: "mixed olives (gf) (vo)",
    price: "$18.00",
    description: "preserved lemon, feta, oregano, olive oil",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "elote queso dip (gf) (vo)",
    price: "$24.00",
    description: "tortilla chips, charred corn, queso fresco, cilantro",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "jerk prawns",
    price: "$24.50",
    description: "pineapple sauce, coconut, panko, orange, cilantro",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "beef tartare (gfo)",
    price: "$16.00",
    description:
      "espresso aioli, whipped cream cheese, egg yolk, bagel spice, sourdough",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "sappho caesar (vo) (gfo)",
    price: "$19.00",
    description: "sundried tomato + artichoke gremolata, crouton, parmesan",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "lamb dumplings (vo)",
    price: "$21.00",
    description: "labneh, zhoug, harissa, mint",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "thai chicken sausage (gf)",
    price: "$7.50",
    description: "mango jeow som, egg, cilantro, basil, mint",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "big mac tofu bun (v)",
    price: "$7.50",
    description:
      "classic OR buffalo tofu, special sauce, sesame seeds, pickles, shrettuce",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "lumpia pork bao bun",
    price: "$16.50",
    description:
      "kewpie mayo, black vinegar sweet + sour, savoy cabbage, scallion",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "roost burger (v) (gfo)",
    price: "$11",
    description:
      "shawarma spiced mushroom patty, toum, turnip aioli, pickled shallot, greenland gardens tomato, shrettuce",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "rotating dessert",
    price: "",
    description: "ask us whats cookin'!",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=600&fit=crop&q=80",
  },
];

const cocktails = [
  {
    name: "cherub's cup",
    price: "$19.00",
    ingredients:
      "havana club 3yr rum, patent 5 elderflower, clarified milk, strawberry-vanilla bean syrup, lemon, strawberry champagne ice",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "from the shire",
    price: "$18.00",
    ingredients:
      "cachaça, licor 43, lemongrass-ginger syrup, ice genmaicha tea, lime",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "tire swing",
    price: "$16.00",
    ingredients:
      "pisco, amaro montenegro, patent 5 elderflower, soursop + green tea tincture, vegan foamer, soda",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "puff the magic dragon",
    price: "$16.00",
    ingredients:
      "rhubarb infused blanco tequila, lime, dragon berry potion, pink salt + sugar",
    image:
      "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "bend & snap",
    price: "$16.00",
    ingredients:
      "bubblegum infused aquavit, lemon, peychaud's bitters, house made grenadine, vegan foamer",
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "a cat named fig",
    price: "$17.00",
    ingredients:
      "apricot infused rye, lemon, ginger honey, mint, fig jam, fig + fennel bitters, black pepper",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "between the raindrops",
    price: "$18.00",
    ingredients:
      "drumshanbo irish gin, irish whiskey, lime, green chartreuse, ginger honey, celery bitters",
    image:
      "https://images.unsplash.com/photo-1557142046-c704a3adf364?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "bathtub gin",
    price: "$16.00",
    ingredients:
      "beefeater gin, clearly canadian soda, blackberry shrub, lime, lavender bitters",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "miss hannigan",
    price: "$18.00",
    ingredients:
      "hibiscus-peach infused gin, lambrusco rosato, dragon berry potion, lime",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "roost paloma",
    price: "$17.00",
    ingredients:
      "cranberry infused blanco tequila, licor 43, house made grenadine, fresh OJ, lime, soda",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "lost lake",
    price: "$18.00",
    ingredients:
      "cava, blueberry infused gin, coconut soju, soda, lime, cassis",
    image:
      "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "camellia",
    price: "$16.00",
    ingredients:
      "toasted coconut infused havana club 3yr rum, passionfruit, guava, lime, strawberry-vanilla bean syrup",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "cartoons & cereal",
    price: "$16.00",
    ingredients:
      "earl grey infused gosling's rum, campari, guava, lime, froot loop syrup",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "matcha martini",
    price: "$16.00",
    ingredients:
      "white chocolate infused vodka, matcha, pineapple, coconut milk, strawberry-vanilla bean syrup",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "nonna",
    price: "$18.00",
    ingredients:
      "courvoisier vs cognac, monkey shoulder scotch, amontillado sherry, cinnamon-raisin syrup",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "coffee, god & cigarettes",
    price: "$16.00",
    ingredients:
      "coffee infused amber rum, b&b, fino sherry, laphroiag single malt scotch",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=600&fit=crop&q=80",
  },
  {
    name: "moonstruck",
    price: "$17.00",
    ingredients: "brandy, campari, cocchi di torino, sour cherry",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=600&fit=crop&q=80",
  },
];

export default function Menu() {
  return (
    <>
      <PageHero title="Menu" />
      <section className={styles.page}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <h1 className={styles.title}>Spring Cocktails</h1>
            <div className={styles.drinksDivider} aria-hidden />
          </header>

          <div className={styles.grid}>
            {cocktails.map((c) => (
              <article key={c.name} className={styles.item}>
                <div className={styles.imageWrapper}>
                  <img
                    src={c.image}
                    alt={c.name}
                    className={styles.image}
                    loading="lazy"
                  />
                </div>
                <div className={styles.info}>
                  <div className={styles.nameRow}>
                    <span className={styles.name}>{c.name}</span>
                    <span className={styles.price}>{c.price}</span>
                  </div>
                  <p className={styles.ingredients}>{c.ingredients}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mocktails, Beer & Wine ─────────────────────────────────────────── */}
      <section className={styles.drinksSection}>
        <div className={styles.drinksInner}>
          <header className={styles.drinksHeader}>
            <h2 className={styles.drinksTitle}>Mocktails, Beer &amp; Wine</h2>
            <div className={styles.drinksDivider} aria-hidden />
          </header>

          <div className={styles.drinksGrid}>
            {/* Left column — Mocktails */}
            <div className={styles.drinksCol}>
              <h3 className={styles.drinksSubtitle}>Mocktails</h3>
              <ul className={styles.drinksList}>
                {mocktails.map((item) => (
                  <div key={item.name} className={styles.drinksItemWrapper}>
                    <li key={item.name} className={styles.drinksItem}>
                      <span className={styles.drinksName}>{item.name}</span>
                      <span className={styles.drinksPrice}>{item.price}</span>
                    </li>
                    <p className={styles.drinksIngredients}>
                      {item.ingredients}
                    </p>
                  </div>
                ))}
              </ul>
            </div>

            {/* Right column — Beer + Wine */}
            <div className={`${styles.drinksCol} ${styles.drinksColRight}`}>
              <h3 className={styles.drinksSubtitle}>Beer</h3>
              <ul className={styles.drinksList}>
                {beer.map((item) => (
                  <li key={item.name} className={styles.drinksItem}>
                    <span className={styles.drinksName}>{item.name}</span>
                    <span className={styles.drinksPrice}>{item.price}</span>
                  </li>
                ))}
              </ul>

              <h3
                className={`${styles.drinksSubtitle} ${styles.drinksSubtitleGap}`}
              >
                Wine
              </h3>
              <ul className={styles.drinksList}>
                {wine.map((item) => (
                  <li key={item.name} className={styles.drinksItem}>
                    <span className={styles.drinksName}>{item.name}</span>
                    <span className={styles.drinksPrice}>{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ── Food ──────────────────────────────────────────────────────────────── */}
      <section className={styles.foodSection}>
        <div className={styles.foodInner}>
          <header className={styles.header}>
            <h1 className={styles.title}>Small Plates &amp; Bites</h1>
            <div className={styles.drinksDivider} aria-hidden />
          </header>

          <div className={styles.foodGrid}>
            {food.map((item) => (
              <article key={item.name} className={styles.item}>
                <div className={styles.foodWrapper}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles.image}
                    loading="lazy"
                  />
                </div>
                <div className={styles.info}>
                  <div className={styles.nameRow}>
                    <span className={styles.name}>{item.name}</span>
                    <span className={styles.price}>{item.price}</span>
                  </div>
                  <p className={styles.ingredients}>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
