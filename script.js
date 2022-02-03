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
  li.value = price;
  cart.appendChild(li);
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
  });
  section.appendChild(button);
  return section;
}

const callFetchProducts = async () => {
  const itemsArray = await fetchProducts('computador');
  const itemsDisplay = document.querySelector('.items');
  itemsArray.forEach((item) => {
    const { id, title, thumbnail } = item;
    const card = createProductItemElement({ id, title, thumbnail });
    itemsDisplay.appendChild(card);
  });
};

//* function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

//* function cartItemClickListener(event) {
//   // coloque seu código aqui
// }

window.onload = async () => {
  await callFetchProducts();
 };
