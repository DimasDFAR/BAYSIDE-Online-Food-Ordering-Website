import { buyToCart, addToCart } from "../shop.js";

class FoodItem extends HTMLElement {
  constructor() {
    super();
    this.price = this.getAttribute("price") || "67";
    this.rating = this.getAttribute("rating") || "5";
    this.image = this.getAttribute("image") || "Assets/MCpfp.png";
    this.foodTitle = this.getAttribute("foodTitle") || "Random Food";
    this.foodID = this.getAttribute("foodID") || "67";
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <style>
        *, *::before, *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .store-item {
            display: flex;
            flex-direction: column;
            gap: 0.7rem;
            margin-bottom: 30px;
        }
        .item-image {
            width: 300px;
            height: 300px;
            object-fit: cover;
            border-radius: 10px;
            align-self: center;
        }
        .item-rating {
            display: flex;
            gap: 0.3rem;
        }
        .item-button {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }
        .item-button .buy-button {
            border: 1px solid #36525aff;
            background: none;
            color: black;
            border-radius: 12rem;
            padding: 0.7rem;
        }
        .item-button .atc-button {
            background-color: #36525aff;
            border: none;
            color: white;
            border-radius: 12rem;
            padding: 0.7rem;
        }
        .btn {
            padding: 0.7rem 1.2rem;
            border: none;
            outline: none;
            background: #25383d;
            color: white;
            border-radius: 0.6rem;
            font-family: "SF-Pro Text", sans-serif;
            font-size: 1rem;
        }
        .btn:hover {
            box-shadow: 0px 0px 1px 1px #00000079;
            transition:
                0.2s ease,
                transform 0.1s ease;
        }
        .btn.second {
            background: #cde7f7;
            color: black;
        }
        .filled {
            width: 24px;
            fill: #36525aff !important;
        }
        .empty {
            width: 24px;
            fill: rgba(54, 82, 90, 0.29);
        }
    </style>

    <div class="store-item">
        <img
            src="${this.image}"
            class="item-image"
            alt="${this.foodTitle}"
        />

        <div class="item-rating" aria-label="${this.rating} out of 5 stars">
            ${Array.from(
              { length: 5 },
              (_, i) => `
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                class="${i < this.rating ? "filled" : "empty"}"
            >
                <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1Z"/>
            </svg>
            `,
            ).join("")}
        </div>

        <p class="item-title">${this.foodTitle}</p>
        <p class="item-price">$${this.price}</p>

        <div class="item-button">
            <button
            class="btn buy-button"
            id="buy-to-cart"
            >
            Buy
            </button>

            <button
            class="btn atc-button"
            id="add-to-cart"
            >
            Add to Cart
            </button>
        </div>
    </div>
    `;
    this.buyButton = this.shadowRoot.querySelector("#buy-to-cart");
    this.atcButton = this.shadowRoot.querySelector("#add-to-cart");

    this.buyButton.addEventListener("click", () => {
      buyToCart(this.foodID);
    });
    this.atcButton.addEventListener("click", () => {
      addToCart(this.foodID);
    });
  }
}
customElements.define("food-item", FoodItem);
