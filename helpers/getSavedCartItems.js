const getSavedCartItems = () => {
  document.querySelector('ol').innerHTML = localStorage.getItem('cartItems');
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
