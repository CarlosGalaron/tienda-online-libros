import React from 'react'

function IntercambioForm() {
  return (  
        <div className='form-intercambio-container'>

          <div className='intercambio-form-field-container'>
            <label className='label-intercambio-container' for="Titulo">Título</label>
            <input className='input-intercambio-container' type="text" id="Titulo" placeholder="Título del libro" />
          </div>

          <div className='intercambio-form-field-container'>
            <label className='label-intercambio-container' for="Autor">Autor</label>
            <input className='input-intercambio-container' type="text" id="Autor" placeholder="Autor del libro" />
            </div>

          <div className='intercambio-form-field-container'>
            <label className='label-intercambio-container' for="Editorial">Editorial</label>
            <input className='input-intercambio-container' type="text" id="Editor" placeholder="Editor del libro" />
            
          </div>

          <div className='intercambio-form-field-container'>
            <label className='label-intercambio-container' for="ISBN">ISBN</label>
            <input className='input-intercambio-container' type="text" id="ISBN" placeholder="ISBN del libro" />
          </div>

          <div className='intercambio-form-field-container'>
            <label className='label-intercambio-container' for="Estado">Estado del libro</label>
            <input className='input-intercambio-container' type="text" id="Estado" placeholder="nuevo, seminuevo, gastado" />                               
          </div>


          {/* <button className='button-intercambio-container' type="submit">Añadir</button> */}
        </div>
  )
}

export default IntercambioForm