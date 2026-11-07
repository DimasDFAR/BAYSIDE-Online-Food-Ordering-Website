let cart = JSON.parse(localStorage.getItem("cart")) || [];

let totalItem = 0;

const storeContainer = document.querySelector(".cart-container");

const products = [
  {
    id: 1,
    name: "Fried Rice",
    price: 5,
    image:
      "https://cookieandkate.com/images/2015/02/thai-pineapple-fried-rice-1.jpg",
    rating: 4,
  },
  {
    id: 2,
    name: "Crab Cakes",
    price: 15,
    image:
      "https://www.dinneratthezoo.com/wp-content/uploads/2020/04/maryland-crab-cakes-4.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Grilled Salmon",
    price: 18,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvc1p_R7MT2jdV-vUHVDn13hiFblJKR548NLE36Rf2lsPt480BFLNh6sQ&s=10",
    rating: 4,
  },
  {
    id: 4,
    name: "Garlic Butter Shrimp",
    price: 12,
    image:
      "https://www.pantsdownapronson.com/wp-content/uploads/garlic-butter-shrimp.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Fish and Chips",
    price: 10,
    image:
      "https://www.gimmesomeoven.com/wp-content/uploads/2026/04/Old-Bay-Fish-and-Chips.jpg",
    rating: 4,
  },
  {
    id: 6,
    name: "Lobster Tail",
    price: 28,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuzWms3CXnkvyDde7xwzPHebZ91R-6LLmXXAgXukIPf_KPrZpavOIlihJI&s=10",
    rating: 5,
  },
  {
    id: 7,
    name: "Tuna Steak",
    price: 20,
    image:
      "https://www.lecremedelacrumb.com/wp-content/uploads/2022/03/tuna-steaks-marinade-1-2.jpg",
    rating: 4,
  },
  {
    id: 8,
    name: "Grilled Squid",
    price: 11,
    image:
      "https://realgreekrecipes.com/wp-content/uploads/2023/03/Whole-Grilled-Squid-Recipe.jpg",
    rating: 4,
  },
  {
    id: 9,
    name: "Seafood Fried Rice",
    price: 9,
    image:
      "https://www.aheadofthyme.com/wp-content/uploads/2020/04/10-minute-seafood-fried-rice-6.jpg",
    rating: 5,
  },
  {
    id: 10,
    name: "Crispy Calamari",
    price: 10,
    image:
      "https://www.dinneratthezoo.com/wp-content/uploads/2019/11/fried-calamari-67.jpg",
    rating: 4,
  },
  {
    id: 11,
    name: "Shrimp Tempura",
    price: 13,
    image:
      "https://cookingwithayeh.com/wp-content/uploads/2024/10/Shrimp-Tempura-SQ.jpg",
    rating: 5,
  },
  {
    id: 12,
    name: "Steamed Mussels",
    price: 14,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvpLp9XD9ozs7N8otBM55JbpW0i7mBmgjhkGQHHop642kjrz5fQqwlk230&s=10",
    rating: 4,
  },
  {
    id: 13,
    name: "Grilled Octopus",
    price: 22,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4sknfZvVAcb8fUO-Lk2xcpre3VW-avJ7gbkaokysG9g6a94NvAEA4J04&s=10",
    rating: 5,
  },
  {
    id: 14,
    name: "Seafood Pasta",
    price: 16,
    image:
      "https://assets.bonappetit.com/photos/5a2826911a178d3636ce8fdf/1:1/w_3230,h_3230,c_limit/seafood-spaghetti-with-mussels-and-shrimp.jpg",
    rating: 4,
  },
  {
    id: 15,
    name: "Baked Oysters",
    price: 18,
    image:
      "https://images.getrecipekit.com/20241031170512-seacuterie5_homemadeclass_oysters.jpg?aspect_ratio=1:1&quality=90&",
    rating: 5,
  },
  {
    id: 16,
    name: "Fish Tacos",
    price: 12,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm8qg8AT38RlrsQhsHgivci0TvXmVnsmekI5hZD51rXhUj6oWBIlh3I99w&s=10",
    rating: 4,
  },
  {
    id: 17,
    name: "Buttered Crab",
    price: 24,
    image:
      "https://mymagicingredient.com/wp-content/uploads/2021/09/boiled-crab-6.jpg?w=1024",
    rating: 5,
  },
  {
    id: 18,
    name: "Shrimp Scampi",
    price: 17,
    image:
      "https://natashaskitchen.com/wp-content/uploads/2025/07/Shrimp-Scampi-5.jpg",
    rating: 4,
  },
  {
    id: 19,
    name: "Seafood Soup",
    price: 10,
    image:
      "https://damndelicious.net/wp-content/uploads/2022/11/220223_DD_Easy-Cioppino_076.jpg",
    rating: 4,
  },
  {
    id: 20,
    name: "Grilled Mackerel",
    price: 13,
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2021/08/Mackerel-cdc2d6b.jpg?quality=90&resize=708,643",
    rating: 5,
  },
];

let cartAttributes = products.map((product) => {
  const matchingID = cart.find((item) => item.foodID === product.id);

  return {
    ...product,
    amount: matchingID ? matchingID.amount : 0,
  };
});

console.log({ cartAttributes });

document.addEventListener("DOMContentLoaded", () => {
  updateUI();
});

function updateUI() {
  totalItem = cart.reduce((total, food) => total + food.amount, 0);
  document.getElementById("item-amount").innerText = totalItem;
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
            const foodItem = products.find(
              (productItem) => productItem.id === item.foodID,
            );

            return `
              <div class="cart-item">
                <img src="${foodItem.image}" class="item-image" />
                <div class="item-info">
                  <p class="item-title cart">${foodItem.name}</p>
                  <p class="item-price cart">Price: $${foodItem.price}</p>
                  <hr />
                  <p>Total Price: $${foodItem.price * item.amount}</p>
                  <div class="quantity-changer">
                    <button onclick="decreaseQuantity(${item.foodID})" ${item.amount < 2 ? "disabled" : ""}>-</button>
                    <p class="quantity">${item.amount}</p>
                    <button onclick="increaseQuantity(${item.foodID})">+</button>
                  </div>
                  <button class="remove-btn" onclick="removeCartItem(${item.foodID})">Remove Item</button>
                </div>
              </div>
            `;
          })()
        : "",
    )
    .join("");
}

function decreaseQuantity(id) {
  let foodItem = cart.find((item) => item.foodID === id);
  foodItem.amount -= 1;
  setupCart();
  updateUI();
}

function increaseQuantity(id) {
  let foodItem = cart.find((item) => item.foodID === id);
  foodItem.amount += 1;
  setupCart();
  updateUI();
}

function removeCartItem(id) {
  let foodItem = cart.find((item) => item.foodID === id);
  foodItem.amount = 0;
  setupCart();
  updateUI();
}

setupCart();
