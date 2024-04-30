import fetch from 'node-fetch';

export async function getAllProducts(request, response) {
  try {
    let url = 'https://api.bigcommerce.com/stores/crnqltdpmm/v3/catalog/products';
    let options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': 'icdawpkk572brw1xw92ulpeuuk9oumo'
      }
    };
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await res.json();
    response.json(data);
  } catch (error) {
    console.error('Error fetching products:', error);
    response.status(500).json({ error: 'Failed to fetch products' });
  }
}

export async function createProduct(request, response) {
  try {
    console.log(JSON.stringify(request.body))
    let url = 'https://api.bigcommerce.com/stores/crnqltdpmm/v3/catalog/products';
    let options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': 'icdawpkk572brw1xw92ulpeuuk9oumo',
      },
      body: JSON.stringify(request.body)
    };
    const res = await fetch(url, options);
    if (!res.ok) {
      const errorMessage = `Failed to fetch products. Status code: ${res.status}`;
      throw new Error(errorMessage);
    }
    const data = await res.json();
    response.json(data);
  } catch (error) {
    console.error('Error fetching products:', error);
    response.status(500).json({ error: error.message });
  }
}

export async function editarProducto(request, response) {
  const { id } = request.params
  console.log(id)
  
  try {
    let url = `https://api.bigcommerce.com/stores/crnqltdpmm/v3/catalog/products/${id}`;
    let options = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': 'icdawpkk572brw1xw92ulpeuuk9oumo',
      },
      body: JSON.stringify(request.body)
    };
    const res = await fetch(url, options);
    if (!res.ok) {
      const errorMessage = `Failed to fetch products. Status code: ${res.status}`;
      throw new Error(errorMessage);
    }
    const data = await res.json();
    response.json(data);
  } catch (error) {
    console.error('Error fetching products:', error);
    response.status(500).json({ error: error.message });
  }
}

export async function deleteProduct(request, response) {
  const { id } = request.params;
  console.log(id);
  
  try {
    let url = `https://api.bigcommerce.com/stores/crnqltdpmm/v3/catalog/products/${id}`;
    let options = {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Auth-Token': 'icdawpkk572brw1xw92ulpeuuk9oumo'
      }
    };
    const res = await fetch(url, options);
    
    if (!res.ok) {
      throw new Error('Failed to delete product');
    }
    
    // Successful deletion (204 No Content) does not return a body
    if (res.status === 204) {
      response.status(204).end();
      return;
    }
    
    const data = await res.json();
    response.json(data);
  } catch (error) {
    console.error('Error deleting product:', error);
    response.status(500).json({ error: 'Failed to delete product' });
  }
}
