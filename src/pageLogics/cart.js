import { addCartItem } from '../common/cartItem.js';

// Function to convert Cart Object to Array
export const convertCartToArray = (cartObject) => {
  const currentCart = JSON.parse(localStorage.getItem('cart'));
  const cartArray = [];
  if (
    Object.keys(currentCart).length === 0 &&
    currentCart.constructor === Object
  ) {
    return cartArray;
  } else {
    for (let i = 0; i < Object.keys(currentCart).length; i++) {
      console.log(currentCart[i]);
      cartArray.push(currentCart[i]);
    }
    return cartArray;
  }
};

// Function to render details
const renderCartDetails = () => {
  // Initialising all variables
  const cartItemsContainer = document.getElementById('cart_items_container');

  const cartItemsSubTotal = document.getElementById('cart_items_subtotal');

  const cartItemsTaxes = document.getElementById('cart_taxes');

  const cartItemsTotal = document.getElementById('cart_final_total');

  // Clearing any old HTML
  cartItemsContainer.innerHTML = '';

  let currentCart = convertCartToArray(
    JSON.parse(localStorage.getItem('cart'))
  );
  if (currentCart.length === 0) {
    cartItemsContainer.innerHTML =
      '<div class="bg-white rounded-3 shadow p-5"><q class="text-primary-200 d-flex justify-content-center text-italic text-center p-0">Your style journey begins here! Fill your cart with handcrafted elegance and redefine your look with our unique accessories. Explore our collections and add a touch of sophistication to your shopping bag!</q></div>';

    cartItemsSubTotal.innerHTML = `INR 0.00`;
    cartItemsTaxes.innerHTML = `INR 0.00`;
    cartItemsTotal.innerHTML = `INR 0.00`;
  } else {
    currentCart.map(
      (item) =>
        (cartItemsContainer.innerHTML += addCartItem(
          item.cartItem,
          item.cartQuantity
        ))
    );

    const cartSubTotal = calculateSubTotal(currentCart);
    const cartTaxes = 0.12 * cartSubTotal;

    cartItemsSubTotal.innerHTML = `INR ${cartSubTotal.toFixed(2)}`;
    cartItemsTaxes.innerHTML = `INR ${cartTaxes.toFixed(2)}`;
    cartItemsTotal.innerHTML = `INR ${(cartSubTotal + cartTaxes + 50).toFixed(
      2
    )}`;
  }
};

const calculateSubTotal = (cartArray) => {
  let sum = 0;
  cartArray.map((item) => (sum += item.cartItem.price * item.cartQuantity));
  return sum;
};

renderCartDetails();

// Functionality for removing cart items
export const removeCartItem = (id) => {
  console.log(`clicked remove item with id: ${id}`);
  const currentCart = convertCartToArray(
    JSON.parse(localStorage.getItem('cart'))
  );
  const updatedCart = currentCart.filter((item) => item.cartItem.id !== id);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  renderCartDetails();
};

// Functionality for decreasing cart quantity
export const decreaseCartQuantity = (id) => {
  console.log(`clicked decrease item with id: ${id}`);
  const currentCart = convertCartToArray(
    JSON.parse(localStorage.getItem('cart'))
  );
  const thisItem = currentCart.filter((item) => item.cartItem.id === id)[0];
  if (thisItem.cartQuantity > 1) {
    currentCart.filter((item) => item.cartItem.id === id)[0].cartQuantity -= 1;
    localStorage.setItem('cart', JSON.stringify(currentCart));
    renderCartDetails();
  }
};

// Functionality for increasing cart quantity
export const increaseCartQuantity = (id) => {
  console.log(`clicked increase item with id: ${id}`);
  const currentCart = convertCartToArray(
    JSON.parse(localStorage.getItem('cart'))
  );
  const thisItem = currentCart.filter((item) => item.cartItem.id === id)[0];
  if (thisItem.cartQuantity < thisItem.cartItem.inStock) {
    currentCart.filter((item) => item.cartItem.id === id)[0].cartQuantity += 1;
    localStorage.setItem('cart', JSON.stringify(currentCart));
    renderCartDetails();
  } else {
    alert('Maximum limit reached for this item');
  }
};

// Adding the internal functions to external window object
window.increaseCartQuantity = increaseCartQuantity;
window.decreaseCartQuantity = decreaseCartQuantity;
window.removeCartItem = removeCartItem;
