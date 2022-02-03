const saveCartItems = () => {
  const cart = document.querySelector('ol');
  const total = document.querySelector('.total-price');
  const string = JSON.stringify(cart.innerHTML);
  const string2 = JSON.stringify(total.textContent);
  localStorage.setItem('cart', string);
  localStorage.setItem('total', string2);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
