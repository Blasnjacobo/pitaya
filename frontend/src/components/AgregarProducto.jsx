import React from 'react'

const AgregarProducto = ({ onClose, setFormData, formData, onFormSubmit }) => {
  console.log(formData)

  const handleChange = (e) => {
    const { name, value } = e.target

    // If the field is 'price', 'weight', or 'inventory_level', parse the value to a number
    let parsedValue = value
    if (name === 'price' || name === 'weight' || name === 'inventory_level') {
      parsedValue = parseFloat(value)
    }

    setFormData((prevFormData) => ({ ...prevFormData, [name]: parsedValue }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      !formData.name ||
      !formData.description ||
      !formData.sku ||
      !formData.price ||
      !formData.weight ||
      !formData.type ||
      !formData.inventory_level
    ) {
      alert('Por favor, completa todos los campos obligatorios.')
      return
    }

    // Validar que el nombre tenga entre 1 y 250 caracteres
    if (formData.name.length < 1 || formData.name.length > 250) {
      alert('El nombre del producto debe tener entre 1 y 250 caracteres.')
      return
    }

    // Validar que el tipo sea 'physical' o 'digital'
    if (formData.type !== 'physical' && formData.type !== 'digital') {
      alert('El tipo de producto debe ser "physical" o "digital".')
      return
    }

    // Si todos los campos pasan las validaciones, llamar a la función onFormSubmit
    const newFormData = { ...formData }
    onFormSubmit(newFormData)
    onClose()
    setFormData({
      name: '',
      description: '',
      sku: '',
      price: 0,
      weight: 0,
      type: '',
      inventory_level: 0
    })
  }

  const handleCancel = () => {
    onClose()
  }

  return (
    <div className='agregar-modal'>
      <h5>Agregar Producto</h5>
      <form onSubmit={handleSubmit}>
        <section className='agregar-gap'>
          <div>
            Nombre:
          </div>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
        </section>
        <section className='agregar-gap' style={{ marginTop: '5px' }}>
          <div>
            Descripción del Producto:
          </div>
          <input
            type='text'
            name='description'
            value={formData.description}
            onChange={handleChange}
            className='modal-descripcion agregar-gap'
          />
        </section>
        <section className='agregar-gap' style={{ marginTop: '5px' }}>
          <div>
            Precio:
          </div>
          <input
            type='number'
            name='price'
            value={formData.price}
            onChange={handleChange}
          />
        </section>
        <section>
          <div className='etapa-infoIcon'>
            <div>SKU:</div>
            <input
              type='text'
              name='sku'
              value={formData.sku}
              onChange={handleChange}
            />
          </div>
        </section>
        <section>
          <div className='etapa-infoIcon'>
            <div>Peso:</div>
            <input
              type='number'
              name='weight'
              value={formData.weight}
              onChange={handleChange}
            />
          </div>
        </section>
        <section>
          <div className='etapa-infoIcon'>
            <div>Tipo:</div>
            <input
              type='text'
              name='type'
              value={formData.type}
              onChange={handleChange}
            />
          </div>
        </section>
        <section>
          <div className='etapa-infoIcon'>
            <div>Inventario:</div>
            <input
              type='number'
              name='inventory_level'
              value={formData.inventory_level}
              onChange={handleChange}
            />
          </div>
        </section>

        <section className='etapa-enviar'>
          <button
            type='button'
            className='etapa-cancelar'
            onClick={handleCancel}
          >
            Cancelar
          </button>
          <button type='submit' className='etapa-enviar-agregar'>
            Agregar
          </button>
        </section>
      </form>
    </div>
  )
}

export default AgregarProducto
