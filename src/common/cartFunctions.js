import { products } from '../data/products.js';

// Initialising the cart variable to an empty array
if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]));
}

// Add to cart logic
export const addToCart = (id, quantity) => {
  const currentCart = JSON.parse(localStorage.getItem('cart'));
  const currentProduct = products.filter((product) => product.id === id)[0];
  const itemToAdd = { cartItem: currentProduct, cartQuantity: quantity };
  currentCart.push(itemToAdd);

  // Adding the cart back to the local storage
  localStorage.setItem('cart', JSON.stringify(currentCart));
};

export const itemInCart = (id) => {
  const currentCart = JSON.parse(localStorage.getItem('cart'));
  const checkMatchedProduct = currentCart.filter(
    (item) => item.cartItem.id === id
  );
  if (checkMatchedProduct.length > 0) return true;
  return false;
};
