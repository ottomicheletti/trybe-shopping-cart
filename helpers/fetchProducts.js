const fetchProducts = async (arg) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${arg}`;
  try {
    if (!arg) {
      throw new Error('You must provide an url');
    } {
      const response = await fetch(url);
      const respObj = await response.json();
      const { results } = respObj;
      return results;
    }
  } catch (error) {
      return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
