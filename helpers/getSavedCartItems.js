const getSavedCartItems = () => {
  const savedCart = JSON.parse(localStorage.getItem('cart'));
  const cart = document.querySelector('ol');
  cart.innerHTML = savedCart;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
