import React, { useState } from 'react'
import eliminarProducto from '../Request/eliminarProducto'
import EditarProducto from './EditarProducto'

const Productos = ({ producto, index, handleDeleteProducto, productos }) => {
  const [showEditarModal, setShowEditarModal] = useState(false)
  const [selectedProductoIndex, setSelectedProductoIndex] = useState(null)

  const handleRemoveProduct = async () => {
    try {
      eliminarProducto(producto.id)
        .then(response => console.log('Product deleted successfully:', response))
        .catch(error => console.error('Error deleting product:', error))
    } catch (error) {
      console.error('Error removing product:', error)
      // Handle error (e.g., display error message)
    }
  }

  const handleEditClick = (index) => {
    setSelectedProductoIndex(index)
    setShowEditarModal(true)
  }

  const handleEditarProductoClose = () => {
    setShowEditarModal(false)
    setSelectedProductoIndex(null)
  }

  console.log(selectedProductoIndex)

  return (
    <div className='productos-card' key={producto.sku}>
      <h3 className='productos-name'>{producto.name}</h3>
      <img
        src='https://cdn.aarp.net/content/dam/aarp/entertainment/beauty-and-style/2022/06/1140-bag-sitting-on-beach-esp.jpg'
        alt={producto.sku}
      />
      <div className='productos-provedor-card'>
        Descripcion: {producto.description.length > 100 ? producto.description.substring(0, 100) + '...' : producto.description}
      </div>
      <div className='productos-precio-card'>Precio: ${producto.price} MXN</div>
      <div className='productos-info'>
        <div className='productos-provedor-card'>Sku: {producto.sku}</div>
        <div className='productos-provedor-card'>Peso:{producto.weight}</div>
        <div className='productos-provedor-card'>Typo: {producto.type}</div>
        <div className='productos-provedor-card'>Inventory Level: {producto.inventory_level}</div>
      </div>
      <div className='productos-botones'>
        <button onClick={handleRemoveProduct}>Borrar</button>
        <button onClick={() => handleEditClick(index)}>Editar</button>
      </div>
      {showEditarModal && (
        <div className='modal'>
          <div className='modal-content'>
            <EditarProducto
              onClose={handleEditarProductoClose}
              productosData={productos[selectedProductoIndex]}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Productos
