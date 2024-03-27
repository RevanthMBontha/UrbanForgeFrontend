function redirectToProducts(typeOfProducts) {
  window.location.href = `products.html?type=${typeOfProducts}`;
}

function redirectToProductsBySearch(searchQuery) {
  window.location.href = `products.html?query=${searchQuery}`;
}

function redirectToLogin() {
  window.location.href = 'login.html';
}
