import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './ApiViewer.css'

function ApiViewer() {
  return (
    <div className='Api-father'>
      <Header />
      <div className='Api-container'>
        <div className='book-sample-container'>
          <div className='book-pic-container'>
              <img className='book-pic' src='' alt="book-pic" />
          </div>
          
          <div className='book-info-container'>
              <p className='book-title'>Título: </p>
              <p className='ISBN'>ISBN: </p>
              <p className='book-author'>Autor:</p>
              <p className='book-genre'>Género:</p>

          </div>

        </div>

      </div>
      <Footer />
    </div>
  )
}

export default ApiViewer