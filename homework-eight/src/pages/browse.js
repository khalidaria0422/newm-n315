import pizza from '../assets/images/recipe-pizza.png';
import burger from '../assets/images/recipe-burger.png';
import pilaf from '../assets/images/recipe-pilaf.png';
import chowmein from '../assets/images/recipe-chowmein.png';
import time from '../assets/images/time.png';
import servings from '../assets/images/servings.png';

export default function browse() {
  return `
  <div class="browse container container--md">
  <div>
    <h1 class="browse__title">Recipes: Try some today!</h1>

    <div class="browse__grid">
      <div class="recipe">
        <img
          src="${pizza}"
          alt="Pizza"
          class="recipe__image"
        />

        <div class="recipe__content">
          <div class="recipe__header">
            <h2 class="recipe__title">Supreme Pizza</h2>
            <p class="recipe__description">
              Make pizza night super duper out of this world with homemade
              pizza. This recipe is supreme with vegetables and two types
              of meat. Yum!
            </p>
          </div>

          <div>
            <div class="recipe__meta">
              <img src="${time}" alt="Clock" />
              <span class="recipe__meta-text">1h 24min</span>
            </div>

            <div class="recipe__meta">
              <img src="${servings}" alt="Plate" />
              <span class="recipe__meta-text">4 servings</span>
            </div>
          </div>
        </div>
      </div>

      <div class="recipe">
        <img
          src="${burger}"
          alt="Burger"
          class="recipe__image"
        />

        <div class="recipe__content">
          <div class="recipe__header">
            <h2 class="recipe__title">Classic Burger</h2>
            <p class="recipe__description">
              Sink your teeth into a delicious restaurant-style, hamburger
              recipe made from lean beef. Skip the prepackaged patties and
              take the extra time to craft up your own, and that little
              extra effort will be worth it.
            </p>
          </div>

          <div>
            <div class="recipe__meta">
              <img src="${time}" alt="Clock" />
              <span class="recipe__meta-text">30 min</span>
            </div>

            <div class="recipe__meta">
              <img src="${servings}" alt="Plate" />
              <span class="recipe__meta-text">4 servings</span>
            </div>
          </div>
        </div>
      </div>

      <div class="recipe">
        <img
          src="${pilaf}"
          alt="Pilaf"
          class="recipe__image"
        />

        <div class="recipe__content">
          <div class="recipe__header">
            <h2 class="recipe__title">Chicken Biryani</h2>
            <p class="recipe__description">
              Chicken Biryani is a bold and flavorful Indian dish with
              crazy tender bites of chicken with bell peppers in a
              deliciously spiced and fragrant rice.
            </p>
          </div>

          <div>
            <div class="recipe__meta">
              <img src="${time}" alt="Clock" />
              <span class="recipe__meta-text">1h 15min</span>
            </div>

            <div class="recipe__meta">
              <img src="${servings}" alt="Plate" />
              <span class="recipe__meta-text">6 servings</span>
            </div>
          </div>
        </div>
      </div>

      <div class="recipe">
        <img
          src="${chowmein}"
          alt="Chowmein"
          class="recipe__image"
        />

        <div class="recipe__content">
          <div class="recipe__header">
            <h2 class="recipe__title">Ch. Chow Mein</h2>
            <p class="recipe__description">
              A great Chow Mein comes down to the sauce - it takes more
              than just soy sauce and sugar! Jam packed with a surprising
              amount of hidden vegetables, customize this Chicken Chow
              Mein recipe using your protein of choice!
            </p>
          </div>

          <div>
            <div class="recipe__meta">
              <img src="${time}" alt="Clock" />
              <span class="recipe__meta-text">20min</span>
            </div>

            <div class="recipe__meta">
              <img src="${servings}" alt="Plate" />
              <span class="recipe__meta-text">4 servings</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `;
}
