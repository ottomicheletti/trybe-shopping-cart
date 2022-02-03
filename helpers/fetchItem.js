const fetchItem = async (id) => {
  const END_POINT = `https://api.mercadolibre.com/items/${id}`;
  try {
    if (!id) {
      throw new Error('You must provide an url');
    } {
      const response = await fetch(END_POINT);
      const data = response.json();
      return data;
    }
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
