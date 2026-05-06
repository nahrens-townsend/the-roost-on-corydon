import styles from "./Menu.module.scss";
import PageHero from "@/components/sections/PageHero";
import Cocktail1Image from "../assets/images/cocktail-1.png";
import Cocktail2Image from "../assets/images/cocktail-2.png";
import Cocktail3Image from "../assets/images/cocktail-3.png";
import Cocktail4Image from "../assets/images/cocktail-4.png";
import Cocktail5Image from "../assets/images/cocktail-5.png";
import Cocktail6Image from "../assets/images/cocktail-6.png";
import Cocktail7Image from "../assets/images/cocktail-6.png";
import Food1 from "../assets/images/food-1.png";
import Food2 from "../assets/images/food-2.png";
import Food3 from "../assets/images/food-3.png";
import Food4 from "../assets/images/food-4.png";

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

const cocktailImages = [
  Cocktail1Image,
  Cocktail2Image,
  Cocktail3Image,
  Cocktail4Image,
  Cocktail5Image,
  Cocktail6Image,
  Cocktail7Image,
];

const foodImages = [Food1, Food2, Food3, Food4];

export default function Menu() {
  const getRandomCocktailImage = () => {
    const index = Math.floor(Math.random() * cocktailImages.length);
    return cocktailImages[index];
  };

  const getRandomFoodImage = () => {
    const index = Math.floor(Math.random() * foodImages.length);
    return foodImages[index];
  };

  const cocktails = [
    {
      name: "cherub's cup",
      price: "$19.00",
      ingredients:
        "havana club 3yr rum, patent 5 elderflower, clarified milk, strawberry-vanilla bean syrup, lemon, strawberry champagne ice",
      image: Cocktail1Image,
    },
    {
      name: "from the shire",
      price: "$18.00",
      ingredients:
        "cachaça, licor 43, lemongrass-ginger syrup, ice genmaicha tea, lime",
      image: Cocktail2Image,
    },
    {
      name: "tire swing",
      price: "$16.00",
      ingredients:
        "pisco, amaro montenegro, patent 5 elderflower, soursop + green tea tincture, vegan foamer, soda",
      image: Cocktail3Image,
    },
    {
      name: "puff the magic dragon",
      price: "$16.00",
      ingredients:
        "rhubarb infused blanco tequila, lime, dragon berry potion, pink salt + sugar",
      image: Cocktail4Image,
    },
    {
      name: "bend & snap",
      price: "$16.00",
      ingredients:
        "bubblegum infused aquavit, lemon, peychaud's bitters, house made grenadine, vegan foamer",
      image: Cocktail5Image,
    },
    {
      name: "a cat named fig",
      price: "$17.00",
      ingredients:
        "apricot infused rye, lemon, ginger honey, mint, fig jam, fig + fennel bitters, black pepper",
      image: Cocktail6Image,
    },
    {
      name: "between the raindrops",
      price: "$18.00",
      ingredients:
        "drumshanbo irish gin, irish whiskey, lime, green chartreuse, ginger honey, celery bitters",
      image: Cocktail7Image,
    },
    {
      name: "bathtub gin",
      price: "$16.00",
      ingredients:
        "beefeater gin, clearly canadian soda, blackberry shrub, lime, lavender bitters",
      image: getRandomCocktailImage(),
    },
    {
      name: "miss hannigan",
      price: "$18.00",
      ingredients:
        "hibiscus-peach infused gin, lambrusco rosato, dragon berry potion, lime",
      image: getRandomCocktailImage(),
    },
    {
      name: "roost paloma",
      price: "$17.00",
      ingredients:
        "cranberry infused blanco tequila, licor 43, house made grenadine, fresh OJ, lime, soda",
      image: getRandomCocktailImage(),
    },
    {
      name: "lost lake",
      price: "$18.00",
      ingredients:
        "cava, blueberry infused gin, coconut soju, soda, lime, cassis",
      image: getRandomCocktailImage(),
    },
    {
      name: "camellia",
      price: "$16.00",
      ingredients:
        "toasted coconut infused havana club 3yr rum, passionfruit, guava, lime, strawberry-vanilla bean syrup",
      image: getRandomCocktailImage(),
    },
    {
      name: "cartoons & cereal",
      price: "$16.00",
      ingredients:
        "earl grey infused gosling's rum, campari, guava, lime, froot loop syrup",
      image: getRandomCocktailImage(),
    },
    {
      name: "matcha martini",
      price: "$16.00",
      ingredients:
        "white chocolate infused vodka, matcha, pineapple, coconut milk, strawberry-vanilla bean syrup",
      image: getRandomCocktailImage(),
    },
    {
      name: "nonna",
      price: "$18.00",
      ingredients:
        "courvoisier vs cognac, monkey shoulder scotch, amontillado sherry, cinnamon-raisin syrup",
      image: getRandomCocktailImage(),
    },
    {
      name: "coffee, god & cigarettes",
      price: "$16.00",
      ingredients:
        "coffee infused amber rum, b&b, fino sherry, laphroiag single malt scotch",
      image: getRandomCocktailImage(),
    },
    {
      name: "moonstruck",
      price: "$17.00",
      ingredients: "brandy, campari, cocchi di torino, sour cherry",
      image: getRandomCocktailImage(),
    },
  ];

  const food = [
    {
      name: "mixed olives (gf) (vo)",
      price: "$18.00",
      description: "preserved lemon, feta, oregano, olive oil",
      image: Food1,
    },
    {
      name: "elote queso dip (gf) (vo)",
      price: "$24.00",
      description: "tortilla chips, charred corn, queso fresco, cilantro",
      image: Food2,
    },
    {
      name: "jerk prawns",
      price: "$24.50",
      description: "pineapple sauce, coconut, panko, orange, cilantro",
      image: Food3,
    },
    {
      name: "beef tartare (gfo)",
      price: "$16.00",
      description:
        "espresso aioli, whipped cream cheese, egg yolk, bagel spice, sourdough",
      image: Food4,
    },
    {
      name: "sappho caesar (vo) (gfo)",
      price: "$19.00",
      description: "sundried tomato + artichoke gremolata, crouton, parmesan",
      image: getRandomFoodImage(),
    },
    {
      name: "lamb dumplings (vo)",
      price: "$21.00",
      description: "labneh, zhoug, harissa, mint",
      image: getRandomFoodImage(),
    },
    {
      name: "thai chicken sausage (gf)",
      price: "$7.50",
      description: "mango jeow som, egg, cilantro, basil, mint",
      image: getRandomFoodImage(),
    },
    {
      name: "big mac tofu bun (v)",
      price: "$7.50",
      description:
        "classic OR buffalo tofu, special sauce, sesame seeds, pickles, shrettuce",
      image: getRandomFoodImage(),
    },
    {
      name: "lumpia pork bao bun",
      price: "$16.50",
      description:
        "kewpie mayo, black vinegar sweet + sour, savoy cabbage, scallion",
      image: getRandomFoodImage(),
    },
    {
      name: "roost burger (v) (gfo)",
      price: "$11",
      description:
        "shawarma spiced mushroom patty, toum, turnip aioli, pickled shallot, greenland gardens tomato, shrettuce",
      image: getRandomFoodImage(),
    },
    {
      name: "rotating dessert",
      price: "",
      description: "ask us whats cookin'!",
      image: getRandomFoodImage(),
    },
  ];

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
