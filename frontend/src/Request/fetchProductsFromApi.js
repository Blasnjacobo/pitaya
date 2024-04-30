const fetchProductsFromAPI = async () => {
  try {
    const response = await fetch('http://localhost:5000/catalog/products', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
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

export default fetchProductsFromAPI
