import { products } from '../data/products.js';
import { heroImages } from '../data/heroImages.js';
import {
  addCarouselIB,
  addCarouselImages,
  addNPButtons,
} from '../common/carouselFunctions.js';
import { addCard } from '../common/card.js';

export const homePageLogic = () => {
  // Setting 'Home Page' as the active link
  const activeElement = document.getElementById('index');
  activeElement.classList.add('active');

  // Hero Images Carousel container
  const heroImagesCarousel = document.getElementById('hero_images_carousel');

  // Hero Images Indicator Buttons
  const heroImagesIBContainer = document.getElementById(
    'hi_carousel_indicators'
  );
  heroImages.map((image, index) => {
    heroImagesIBContainer.innerHTML += addCarouselIB(
      image.title,
      index,
      'hero_images_carousel'
    );
  });

  // Hero Images here
  const heroImagesContainer = document.getElementById('hi_carousel_images');

  heroImages.map((image, index) => {
    heroImagesContainer.innerHTML += addCarouselImages(
      image.src,
      image.title,
      index,
      true,
      2000
    );
  });

  heroImagesCarousel.innerHTML += addNPButtons('hero_images_carousel');

  // Getting the featured products from the total list of products
  const featured_products = products.filter(
    (product) => product.isFeatured === true
  );

  // Function to get the number of cards per slide based on screen size
  function getCardsPerSlide() {
    if (window.innerWidth >= 992) {
      return 3; // Large screens and above
    } else if (window.innerWidth >= 768) {
      return 2; // Medium screens
    } else {
      return 1; // Small screens
    }
  }

  // Featured Products Carousel Container
  const fpCarousel = document.getElementById('featured_products_carousel');

  function generateCards() {
    // Featured Products Images
    const fpImagesContainer = document.getElementById('fp_carousel_images');
    fpImagesContainer.innerHTML = ''; // Clear existing content

    // Determine the number of cards per slide based on screen size
    let cardsPerSlide = getCardsPerSlide();

    // Generate and insert the cards
    for (let i = 0; i < featured_products.length; i += cardsPerSlide) {
      let cardGroup = document.createElement('div');
      cardGroup.className = 'carousel-item';

      let card = document.createElement('div');
      card.className = 'row';
      for (let j = i; j < i + cardsPerSlide; j++) {
        card.innerHTML += addCard(
          featured_products[j].images[0],
          featured_products[j].name,
          featured_products[j].quote,
          featured_products[j].id
        );
        cardGroup.appendChild(card);
      }

      if (i === 0) {
        cardGroup.classList.add('active'); // Add 'active' class to the first slide
      }

      fpImagesContainer.appendChild(cardGroup);
    }
  }

  fpCarousel.innerHTML += addNPButtons('featured_products_carousel');

  // Call the generateCards function when the page loads and when the window is resized
  window.onload = window.onresize = generateCards;
};
