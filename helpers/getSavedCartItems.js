const getSavedCartItems = () => {
  const savedCart = JSON.parse(localStorage.getItem('cart'));
  const savedTotal = JSON.parse(localStorage.getItem('total'));
  const cart = document.querySelector('ol');
  const total = document.querySelector('.total-price');
  cart.innerHTML = savedCart;
  total.textContent = savedTotal;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
