const fetchProducts = async (arg) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${arg}`;
  try {
    const response = await fetch(url);
    const respObj = await response.json();
    const { results } = respObj;
    return results;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
