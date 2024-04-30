const agregarProducto = async (nuevoProducto) => {
  console.log(nuevoProducto)
  try {
    const response = await fetch('http://localhost:5000/catalog/products', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevoProducto)
    })

    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

export default agregarProducto
