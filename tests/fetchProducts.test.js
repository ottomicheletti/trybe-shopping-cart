require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  test('1 - Verifica se fetchProducts é uma função.', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  test('2 - Verifica a função fetchProducts com o argumento "computador" e testa se fetch foi chamada.', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  test('3 - Verifica se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador".', async () => {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  await fetchProducts('computador');
  expect(fetch).toHaveBeenCalledWith(url);
  });

  test('4 - Verifica se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
    const obj = await fetchProducts('computador');
    expect(Object.keys(obj[0].seller)).toEqual(Object.keys(computadorSearch.results[0].seller));
  });

  test('5 - Verifica se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url.', () => {
    expect( async () => await fetchProducts()).toThrow(new Error('You must provide an url'));
  });
 
});
