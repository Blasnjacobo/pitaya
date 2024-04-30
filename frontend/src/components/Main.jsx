import React, { useEffect, useState } from 'react'
import agregar from '../img/agregar.svg'
import fetchProductsFromAPI from '../Request/fetchProductsFromApi'
import agregarProducto from '../Request/agregarProducto'
import AgregarProducto from './AgregarProducto'
import Productos from './Productos'

const Main = () => {
  const [productos, setProductos] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [showAgregarEtapa, setShowAgregarEtapa] = useState(false)
  const [addedSuccessfully, setAddedSuccessfully] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    sku: '',
    price: 0,
    weight: 0,
    type: '',
    inventory_level: 0
  })

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchProductsFromAPI()
      setProductos(data.data)
    }

    fetchProducts()
  }, [addedSuccessfully])

  const handleClickAgregar = () => {
    setShowAgregarEtapa(true)
  }

  const handleCloseAgregarEtapa = () => {
    setShowAgregarEtapa(false)
  }

  const handleOutsideClick = (e) => {
    if (showAgregarEtapa && !e.target.closest('.modal-content')) {
      setShowAgregarEtapa(false)
    }
  }

  const handleFormSubmit = async (newFormData) => {
    try {
      await agregarProducto(newFormData)
      await setAddedSuccessfully(true)
      await handleCloseAgregarEtapa()
      setTimeout(() => {
        setAddedSuccessfully(false)
      }, 3000)
    } catch (error) {
      console.error('Error adding product:', error)
      setAddedSuccessfully(false)
    }
  }

  return (
    <div className='home-productos' onClick={handleOutsideClick}>
      {/* Render success message if product added successfully */}
      {addedSuccessfully && <div>Producto agregado exitosamente.</div>}
      <div className='home-productos-container'>
        <div className='home-productos-title'>
          <h2 className='productos-text'>Productos Playeros</h2>
          <div className='home-producto-agregar' onClick={handleClickAgregar}>
            <img src={agregar} alt='agregar icono' />
            <h2>Agregar un Producto</h2>
          </div>
          {showAgregarEtapa && (
            <div className='modal'>
              <div className='modal-content'>
                <AgregarProducto
                  onClose={handleCloseAgregarEtapa}
                  setFormData={setFormData}
                  formData={formData}
                  onFormSubmit={handleFormSubmit}
                />
              </div>
            </div>
          )}
        </div>
        <section className='home-productos-main'>
          {productos.map((producto, index) => (
            <Productos key={index} producto={producto} index={index} productos={productos} />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Main
