const fetchProducts = async (arg) => {
  const END_POINT = `https://api.mercadolibre.com/sites/MLB/search?q=${arg}`;
  try {
    if (!arg) {
      throw new Error('You must provide an url');
    } {
      const response = await fetch(END_POINT);
      const data = await response.json();
      const { results } = data;
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
