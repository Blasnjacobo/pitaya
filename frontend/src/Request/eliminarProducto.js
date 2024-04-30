const eliminarProducto = async (id) => {
  console.log(id);
  try {
    const response = await fetch(`http://localhost:5000/catalog/products/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    
    console.log(response);

    // Refresh the webpage after successful deletion
    window.location.reload();

  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export default eliminarProducto;
