const saveCartItems = () => {
  const cart = document.querySelector('ol').innerHTML;
  const string = JSON.stringify(cart);
  localStorage.setItem('cart', string);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
