const saveCartItems = () => {
  const cart = document.querySelector('ol').innerHTML;
  const total = document.querySelector('.total-price').textContent;
  const string = JSON.stringify(cart);
  const string2 = JSON.stringify(total);
  localStorage.setItem('cart', string);
  localStorage.setItem('total', string2);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
