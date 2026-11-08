import { products } from "./shop.js";
import "./components/cart-item.js";

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let totalItem = 0;

const storeContainer = document.querySelector(".cart-container");

const cartText = document.getElementById("cart-text");

const orderButton = document.getElementById("order");

let totalPrice = 0;

document.addEventListener("DOMContentLoaded", () => {
  updateUI();
});

function updateUI() {
  totalItem = cart.reduce((total, food) => total + food.amount, 0);
  document.getElementById("item-amount").innerText = totalItem;

  totalPrice = cart.reduce((total, food) => {
    const foodItem = products.find((product) => product.id === food.foodID);
    if (!foodItem) {
      console.warn(`Product not found: ${food.foodID}`);
      return total;
    }
    return total + foodItem.price * food.amount;
  }, 0);
  cartText.innerText = `Cart - $${totalPrice}`;
}

function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function setupCart() {
  saveCartToLocalStorage();

  storeContainer.innerHTML = cart
    .map((item) =>
      item.amount > 0
        ? (() => {
            return `<cart-item foodID="${item.id}" amount="${item.amount}"></cart-item>`;
          })()
        : "",
    )
    .join("");
}

export function decreaseQuantity(id) {
  let foodItem = cart.find((item) => item.foodID === id);
  foodItem.amount -= 1;
  setupCart();
  updateUI();
}

export function increaseQuantity(id) {
  let foodItem = cart.find((item) => item.foodID === id);
  foodItem.amount += 1;
  setupCart();
  updateUI();
}

export function removeCartItem(id) {
  let foodItem = cart.find((item) => item.foodID === id);
  foodItem.amount = 0;
  setupCart();
  updateUI();
}

setupCart();

orderButton.addEventListener("click", () => {
  if (totalItem > 0) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#009919",
      cancelButtonColor: "rgb(197, 0, 0)",
      confirmButtonText: "Yes, order now!",
    }).then((result) => {
      if (result.isConfirmed)
        Swal.fire({
          title: "Ordered!",
          text: "Your food will come in shortly.",
          icon: "success",
        });
      cart = [];
      saveCartToLocalStorage();
      updateUI();
      setupCart();
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You have nothing in your cart!",
    });
  }
});
