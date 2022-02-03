function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

const createCartItemElement = async (sku) => {
  const item = await fetchItem(sku);
  const { id, title, price } = item;
  const cart = document.querySelector('.cart__items');
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${id} | NAME: ${title} | PRICE: $${price}`;
  li.setAttribute('value', price);
  li.setAttribute('user-select', 'none');
  cart.appendChild(li);
};

const cartItems = document.querySelector('ol');

const sumCart = () => {
  const cartTotal = document.querySelector('.total-price');
  let total = 0;
  for (let index = 0; index < cartItems.children.length; index += 1) {
    total += parseFloat(cartItems.children[index].getAttribute('value'));
  }
  cartTotal.textContent = total;
};

function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const button = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  button.addEventListener('click', async () => {
    await createCartItemElement(sku);
    sumCart();
    saveCartItems();
  });
  section.appendChild(button);
  return section;
}

const callFetchProducts = async () => {
  const itemsDisplay = document.querySelector('.items');
  itemsDisplay.innerHTML = `<p class="loading">carregando...</p>`;
  const itemsArray = await fetchProducts('computador');
  itemsDisplay.innerHTML = null;
  itemsArray.forEach((item) => {
    const { id, title, thumbnail } = item;
    const card = createProductItemElement({ id, title, thumbnail });
    itemsDisplay.appendChild(card);
  });
};

//* function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

function cartItemClickListener(event) {
  event.target.parentElement.removeChild(event.target);
  sumCart();
  saveCartItems();
}

cartItems.addEventListener('click', (event) => cartItemClickListener(event));

const clearCart = document.querySelector('.empty-cart');
clearCart.addEventListener('click', () => {
  while (cartItems.children.length > 0) {
    cartItems.removeChild(cartItems.children[0]);
  }
  sumCart();
  saveCartItems();
});

window.onload = async () => {
  await callFetchProducts();
  getSavedCartItems();
};
