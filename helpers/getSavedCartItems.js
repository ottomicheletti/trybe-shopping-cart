const getSavedCartItems = () => {
  const savedCart = localStorage.getItem('cart');
  const parsedSavedCart = JSON.parse(savedCart);
  const savedTotal = localStorage.getItem('total');
  const parsedSavedTotal = JSON.parse(savedTotal);
  const cart = document.querySelector('ol');
  const total = document.querySelector('.total-price');
  cart.innerHTML = parsedSavedCart;
  total.textContent = parsedSavedTotal;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
