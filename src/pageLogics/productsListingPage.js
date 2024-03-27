import { addCard } from '../common/card.js';
import { pageDetails } from '../data/pageDetails.js';
import { products } from '../data/products.js';

// Fetch product ID from the URL
var urlParams = new URLSearchParams(window.location.search);
var productsType = urlParams.get('type');
var searchQuery = urlParams.get('query');

const pageTitleContainer = document.getElementById('page_title');
const pageDescriptionContainer = document.getElementById('page_description');
const cardGrid = document.getElementById('card_grid');
const thisPageDetails = pageDetails.filter(
  (detail) => detail.id === productsType
);

if (thisPageDetails.length > 0) {
  pageTitleContainer.innerHTML = thisPageDetails[0].title;
  pageDescriptionContainer.innerHTML = thisPageDetails[0].description;
} else {
  pageTitleContainer.innerHTML = 'Search Results';
  pageDescriptionContainer.innerHTML =
    'Here are items matching your search criteria';
}

// Logic for all Products
if (productsType === 'all') {
  const activeElement = document.getElementById('all_products');
  activeElement.classList.add('active');

  products.map(
    (product) =>
      (cardGrid.innerHTML += addCard(
        product.images[0],
        product.name,
        product.quote,
        product.id
      ))
  );
}

// Logic for Men Products
if (productsType === 'all_men') {
  const activeElement = document.getElementById('all_men');
  activeElement.classList.add('active');

  const men_products = products.filter((product) => product.gender === 'male');

  men_products.map(
    (product) =>
      (cardGrid.innerHTML += addCard(
        product.images[0],
        product.name,
        product.quote,
        product.id
      ))
  );
}

if (productsType === 'men_rings') {
  const activeElement = document.getElementById('all_men');
  activeElement.classList.add('active');

  const men_rings = products.filter(
    (product) => product.gender === 'male' && product.category === 'ring'
  );

  men_rings.map(
    (product) =>
      (cardGrid.innerHTML += addCard(
        product.images[0],
        product.name,
        product.quote,
        product.id
      ))
  );
}

if (productsType === 'men_bracelets') {
  const activeElement = document.getElementById('all_men');
  activeElement.classList.add('active');

  const men_bracelets = products.filter(
    (product) => product.gender === 'male' && product.category === 'bracelet'
  );

  men_bracelets.map(
    (product) =>
      (cardGrid.innerHTML += addCard(
        product.images[0],
        product.name,
        product.quote,
        product.id
      ))
  );
}

if (productsType === 'men_necklaces') {
  const activeElement = document.getElementById('all_men');
  activeElement.classList.add('active');

  const men_necklaces = products.filter(
    (product) => product.gender === 'male' && product.category === 'necklace'
  );

  men_necklaces.map(
    (product) =>
      (cardGrid.innerHTML += addCard(
        product.images[0],
        product.name,
        product.quote,
        product.id
      ))
  );
}

if (productsType === 'men_other') {
  const activeElement = document.getElementById('all_men');
  activeElement.classList.add('active');

  const men_other = products.filter(
    (product) => product.gender === 'male' && product.category === 'other'
  );

  men_other.map(
    (product) =>
      (cardGrid.innerHTML += addCard(
        product.images[0],
        product.name,
        product.quote,
        product.id
      ))
  );
}

// Logic for Women Products
if (productsType === 'all_women') {
  const activeElement = document.getElementById('all_women');
  activeElement.classList.add('active');

  const women_products = products.filter(
    (product) => product.gender === 'female'
  );

  women_products.map(
    (product) =>
      (cardGrid.innerHTML += addCard(
        product.images[0],
        product.name,
        product.quote,
        product.id
      ))
  );
}

if (productsType === 'women_rings') {
  const activeElement = document.getElementById('all_women');
  activeElement.classList.add('active');

  const women_rings = products.filter(
    (product) => product.gender === 'female' && product.category === 'ring'
  );

  women_rings.map(
    (product) =>
      (cardGrid.innerHTML += addCard(
        product.images[0],
        product.name,
        product.quote,
        product.id
      ))
  );
}

if (productsType === 'women_bracelets') {
  const activeElement = document.getElementById('all_women');
  activeElement.classList.add('active');

  const women_bracelets = products.filter(
    (product) => product.gender === 'female' && product.category === 'bracelet'
  );

  women_bracelets.map(
    (product) =>
      (cardGrid.innerHTML += addCard(
        product.images[0],
        product.name,
        product.quote,
        product.id
      ))
  );
}

if (productsType === 'women_necklaces') {
  const activeElement = document.getElementById('all_women');
  activeElement.classList.add('active');

  const women_necklaces = products.filter(
    (product) => product.gender === 'female' && product.category === 'necklace'
  );

  women_necklaces.map(
    (product) =>
      (cardGrid.innerHTML += addCard(
        product.images[0],
        product.name,
        product.quote,
        product.id
      ))
  );
}

if (productsType === 'women_skin_care') {
  const activeElement = document.getElementById('all_women');
  activeElement.classList.add('active');

  const women_skinCare = products.filter(
    (product) => product.gender === 'female' && product.category === 'skin-care'
  );

  women_skinCare.map(
    (product) =>
      (cardGrid.innerHTML += addCard(
        product.images[0],
        product.name,
        product.quote,
        product.id
      ))
  );
}

// Logic for Unisex products
if (productsType === 'unisex') {
  const activeElement = document.getElementById('unisex');
  activeElement.classList.add('active');

  const unisex_products = products.filter(
    (product) => product.gender === 'unisex'
  );

  unisex_products.map(
    (product) =>
      (cardGrid.innerHTML += addCard(
        product.images[0],
        product.name,
        product.quote,
        product.id
      ))
  );
}

// Add Logic for Search
const searchItems = products.filter((product) =>
  product.name.includes(searchQuery)
);

if (searchItems.length > 0) {
  searchItems.map(
    (product) =>
      (cardGrid.innerHTML += addCard(
        product.images[0],
        product.name,
        product.quote,
        product.id
      ))
  );
} else {
  if (searchQuery && searchQuery.length > 0) {
    cardGrid.innerHTML += `<h3 class="text-center text-primary-600 text-md w-100">No items match your search criteria!</h3>`;
  }
}
