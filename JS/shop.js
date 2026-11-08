import "./components/food-item.js";
import { products } from "./products.js";

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let totalItem = 0;

const welcomeElement = document.getElementById("welcome-message");
const storeContainer = document.getElementById("store-wrapper");

function setup() {
  const fullName = localStorage.getItem("full-name");
  const firstName = fullName.split(" ")[0];
  storeContainer.innerHTML = products
    .map(
      (product) => `
            <food-item price="${product.price}" rating="${product.rating}" image="${product.image}" foodTitle="${product.name}" foodID="${product.id}"></food-item>
        `,
    )
    .join("");

  welcomeElement.innerText = `${firstName}!`;
}
document.addEventListener("DOMContentLoaded", () => {
  setup();
  updateUI();
});

function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function buyToCart(id) {
  addToCart(id);
  window.location.href = "cart.html";
}

export function addToCart(id) {
  let isExist = cart.find((item) => item.foodID === id); // {foodId, amount}
  if (isExist) {
    console.log(isExist);
    isExist.amount += 1;
  } else {
    cart.push({ foodID: id, amount: 1 });
  }
  saveCartToLocalStorage();
  updateUI();
  Swal.fire({
    title: "Success!",
    text: "Item has been added to cart!",
    icon: "success",
  });
}

function updateUI() {
  totalItem = cart.reduce((total, food) => total + food.amount, 0);
  document.getElementById("item-amount").innerText = totalItem;
}
