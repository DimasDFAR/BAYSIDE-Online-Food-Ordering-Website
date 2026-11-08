import { products } from "../shop.js";
import { increaseQuantity, decreaseQuantity, removeCartItem } from "../cart.js";

class CartItem extends HTMLElement {
  constructor() {
    super();
    this.foodID = this.getAttribute("foodID") || "67";
    this.foodAmount = this.getAttribute("amount") || "67";
    this.food = products.find((product) => product.id === this.foodID);
    this.attachShadow({ mode: "open" });
  }
  connectCallback() {
    this.shadowRoot.innerHTML = `
    <style>
        .item-image {
            width: 300px;
            height: 300px;
            object-fit: cover;
            border-radius: 10px;
            align-self: center;
        }
        .item-info {
            padding: 0.5rem 2rem;
            display: flex;
            flex-direction: column;
            align-items: start;
        }
        .item-info p {
            padding-bottom: 0.5rem;
            font-size: 2rem;
            font-weight: 500;
        }
        .item-title.cart {
            font-size: 4rem;
            font-weight: 600;
        }
        .quantity {
            color: #000000;
            line-height: 3rem;
        }
        .quantity-changer {
            display: flex;
            justify-content: space-between;
            background-color: #648b96;
            border-radius: 20px;
            border: 1px solid #36525aff;
            background: none;
            color: black;
            padding: 0.3rem;
            min-width: 16rem;
        }
        .quantity-changer button {
            font-size: 2rem;
            width: 3rem;
            padding: 0rem 0.5rem;
            border-radius: 15px;
            border: 0px solid #dbdbdb;
            background-color: #25383d;
            color: #f6ffff;
        }
        .quantity-changer button:disabled {
            background-color: #cde7f7;
        }
    </style>
    
    <div class="cart-item">
        <img src="${this.food.image}" class="item-image" />
        <div class="item-info">
            <p class="item-title cart">${this.food.name}</p>
            <p class="item-price cart">Price: $${this.food.price}</p>
            <hr />
            <p>Total Price: $${this.food.price * this.foodAmount}</p>
            <div class="quantity-changer">
                <button id="decrease" ${this.foodAmount < 2 ? "disabled" : ""}>-</button>
                <p class="quantity">${this.foodAmount}</p>
                <button id="increase">+</button>
            </div>
            <button class="remove-btn" id="remove">Remove Item</button>
        </div>
    </div>
    `;
    this.incButton = this.shadowRoot.querySelector("#increase");
    this.decButton = this.shadowRoot.querySelector("#decrease");
    this.remButton = this.shadowRoot.querySelector("#remove");

    this.incButton.addEventListener("click", () => {
      increaseQuantity(this.foodID);
    });
    this.atcButton.addEventListener("click", () => {
      decreaseQuantity(this.foodID);
    });
    this.remButton.addEventListener("click", () => {
      removeCartItem(this.foodID);
    });
  }
}
customElements.define("cart-item", CartItem);
