const products = [
  {
    id: "fried-rice",
    name: "Fried Rice",
    price: 75,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGoWVd792O9w_3HoUT_FC__DPMbULfteOjUl-0uLCecaG_uUCR2Io5pV4&s=10",
    rating: 4,
  },
  {
    id: "burger",
    name: "Burger",
    price: 50,
    image: "Assets/MCpfp.png",
    rating: 5,
  },
  {
    id: "pizza",
    name: "Pizza",
    price: 100,
    image: "Assets/MCpfp.png",
    rating: 3,
  },
  {
    id: "pizza",
    name: "Pizza",
    price: 100,
    image: "Assets/MCpfp.png",
    rating: 3,
  },
  {
    id: "pizza",
    name: "Pizza",
    price: 100,
    image: "Assets/MCpfp.png",
    rating: 3,
  },
];
const welcomeElement = document.getElementById("welcome-message");
const storeContainer = document.querySelector(".store-item-wrapper");

setup();

function setup() {
  let fullName = localStorage.getItem("full-name");
  let firstName = fullName.split(" ")[0];
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
          <p class="item-price">${product.price}$</p>

          <div class="item-button">
            <button
              class="btn buy-button"
              data-id="${product.id}"
              data-action="buy"
            >
              Buy
            </button>

            <button
              class="btn atc-button"
              data-id="${product.id}"
              data-action="cart"
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

