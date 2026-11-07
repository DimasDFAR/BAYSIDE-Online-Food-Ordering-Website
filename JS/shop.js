let cart = JSON.parse(localStorage.getItem("cart")) || [];

let totalItem = 0;

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

const welcomeElement = document.getElementById("welcome-message");
const storeContainer = document.querySelector(".store-item-wrapper");

function setup() {
  const fullName = localStorage.getItem("full-name");
  const firstName = fullName.split(" ")[0];
  storeContainer.innerHTML = products
    .map(
      (product) => `
            <div class="store-item">
            <img
                src="${product.image}"
                class="item-image"
                alt="${product.name}"
            />

            <div class="item-rating" aria-label="${product.rating} out of 5 stars">
                ${Array.from(
                  { length: 5 },
                  (_, i) => `
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    class="${i < product.rating ? "filled" : "empty"}"
                >
                    <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1Z"/>
                </svg>
                `,
                ).join("")}
            </div>

            <p class="item-title">${product.name}</p>
            <p class="item-price">$${product.price}</p>

            <div class="item-button">
                <button
                class="btn buy-button"
                onclick="buyToCart(${product.id})"
                >
                Buy
                </button>

                <button
                class="btn atc-button"
                onclick="addToCart(${product.id})"
                >
                Add to Cart
                </button>
            </div>
            </div>
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

function buyToCart(id) {
  addToCart(id);
  window.location.href = "cart.html";
}
function addToCart(id) {
  let isExist = cart.find((item) => item.foodID === id); // {foodId, amount}
  if (isExist) {
    console.log(isExist);
    isExist.amount += 1;
  } else {
    cart.push({ foodID: id, amount: 1 });
  }
  saveCartToLocalStorage();
  updateUI();
}

function updateUI() {
  totalItem = cart.reduce((total, food) => total + food.amount, 0);
  document.getElementById("item-amount").innerText = totalItem;
}
