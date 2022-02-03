require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  test('1 - Verifica se fetchItem é uma função.', () => {
    expect(typeof fetchItem).toBe('function');
  });

  test('2 - Verifica a função fetchItem com o argumento "MLB1615760527 e testa se fetch foi chamada.', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  test('3 - Verifica se, ao chamar a função fetchItem com o argumento "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527".', async () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527'
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(url);
  });

  test('4 - Verifica se o retorno da função fetchItem com o argumento "MLB1615760527" é uma estrutura de dados igual ao objeto item, que já está importado no arquivo.', async () => {
    const response = await fetchItem('MLB1615760527');
    expect(response).toEqual(item);
  });

  test('5 - Verifica se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url.', async () => {
    const response = await fetchItem();
    expect(response).toEqual(new Error('You must provide an url'));
  });
});
