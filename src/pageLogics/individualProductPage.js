import {
  addCarouselIB,
  addCarouselImages,
  addNPButtons,
} from '../common/carouselFunctions.js';
import { getRatingStars } from '../common/getRatingStars.js';
import { getCurrentTime } from '../common/getCurrentTime.js';
import { products } from '../data/products.js';
import { addToCart, itemInCart } from '../common/cartFunctions.js';

// Fetch product ID from the URL
var urlParams = new URLSearchParams(window.location.search);
var productId = urlParams.get('id');

const thisProduct = products.filter((product) => product.id === productId)[0];

// Getting the containers
const imagesCarouselContainer = document.getElementById(
  'productImagesCarousel'
);
const imagesCarouselIBContainer = document.getElementById(
  'product_carousel_indicators'
);
const imagesCarouselImagesContainer = document.getElementById(
  'product_carousel_images'
);

thisProduct.images.map((image, index) => {
  imagesCarouselIBContainer.innerHTML += addCarouselIB(
    thisProduct.name,
    index,
    'productImagesCarousel'
  );
});

thisProduct.images.map((src, index) => {
  imagesCarouselImagesContainer.innerHTML += addCarouselImages(
    src,
    thisProduct.name,
    index,
    false,
    3000
  );
});

imagesCarouselContainer.innerHTML += addNPButtons('productImagesCarousel');

// Product Title
const productName = document.getElementById('product_name');
productName.innerHTML = thisProduct.name;

// Product Quote
const productQuote = document.getElementById('product_quote');
productQuote.innerHTML = `<q class="text-primary-200 text-center">${thisProduct.quote}</q>`;

// Product ID
const productID = document.getElementById('product_id');
productID.innerHTML = `${thisProduct.id}`;

// Product for
const productFor = document.getElementById('product_for');
if (thisProduct.gender === 'male') {
  productFor.innerHTML =
    '<span class="bg-primary-200 rounded-2 p-1">Men <i class="fa-solid fa-mars text-primary-600"></i></span>';
} else if (thisProduct.gender === 'female') {
  productFor.innerHTML =
    '<span class="bg-secondary-200 rounded-2 p-1">Women <i class="fa-solid fa-venus text-secondary-600"></i></span>';
} else {
  productFor.innerHTML =
    '<span class="bg-tertiary-200 rounded-2 p-1">Men & Women <i class="fa-solid fa-mars-and-venus text-tertiary-600"></i></span>';
}

// Product Rating
const productRating = document.getElementById('product_rating');
productRating.innerHTML = getRatingStars(thisProduct.rating);

// Product Reviews
const productReviews = document.getElementById('product_reviews');
productReviews.innerHTML = `${thisProduct.rating.toFixed(1)} (${
  thisProduct.reviews
} reviews)`;

// Product Price
const productPrice = document.getElementById('product_price');
productPrice.innerHTML = `${thisProduct.price.toFixed(2)} INR`;

// Initialising Product Quantity
let productQuantity = 1;
const productQuantityDisplay = document.getElementById(
  'product_quantity_display'
);
productQuantityDisplay.value = productQuantity;

// Initialising Total Price
let totalPrice = productQuantity * thisProduct.price;
const totalPriceContainer = document.getElementById('total_price');
totalPriceContainer.innerHTML = `Total : ${totalPrice.toFixed(2)} INR`;

// Product Quantity  Decrease Logic
let productQuantityDecreaseBtn = document.getElementById(
  'product_quantity_decrease'
);
productQuantityDecreaseBtn.addEventListener('click', function () {
  if (productQuantity > 1) {
    productQuantity -= 1;
    totalPrice = productQuantity * thisProduct.price;
    productQuantityDisplay.value = productQuantity;
    totalPriceContainer.innerHTML = `Total : ${totalPrice.toFixed(2)} INR`;
  }
});

// Product Quantity Increase logic
let productQuantityIncreaseBtn = document.getElementById(
  'product_quantity_increase'
);
productQuantityIncreaseBtn.addEventListener('click', function () {
  if (productQuantity < thisProduct.inStock) {
    productQuantity += 1;
    totalPrice = productQuantity * thisProduct.price;
    productQuantityDisplay.value = productQuantity;
    totalPriceContainer.innerHTML = `Total : ${totalPrice.toFixed(2)} INR`;
  }
});

// Selecting various containers for the toast
const toastElement = document.getElementById('liveToast');
const toastTimeContainer = document.getElementById('time_now');
const toastMessageContainer = document.getElementById('toast_message');

// Function to populate the toast
function maxLimitReached() {
  let currentTime = getCurrentTime();
  toastTimeContainer.innerHTML = currentTime;

  toastMessageContainer.innerHTML = 'Maximum quantity reached on the product';
}

productQuantityIncreaseBtn.addEventListener('click', maxLimitReached());

// Logic to show toast only when the product quantity is equal to the inStock value
if (productQuantityIncreaseBtn) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastElement);
  productQuantityIncreaseBtn.addEventListener('click', () => {
    if (productQuantity === thisProduct.inStock) toastBootstrap.show();
  });
}

// Key points Logic
const keyPointsContainer = document.getElementById('key_points');
thisProduct.keyPoints.map(
  (point) =>
    (keyPointsContainer.innerHTML += `<li class="text-sm text-primary-600 mb-2">${point}</li>`)
);

// Add to cart button logic
const addToCartBtn = document.getElementById('add_to_cart_btn');

// Function to see if the item is in cart or not
const changeBtnTextIfInCart = () => {
  if (itemInCart(thisProduct.id)) {
    addToCartBtn.innerHTML = `Already Added to Cart!`;
    addToCartBtn.disabled = true;
  } else {
    addToCartBtn.innerHTML = `Add to Cart!`;
  }
};
changeBtnTextIfInCart();

// Function to add item to cart on button click
addToCartBtn.addEventListener('click', function () {
  addToCart(thisProduct.id, productQuantity);
  changeBtnTextIfInCart();
});
