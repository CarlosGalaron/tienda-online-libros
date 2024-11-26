import React from 'react'
import Header from '../../componentes/Header/Header'
import Footer from '../../componentes/Footer/Footer'
import IntercambioForm from './IntercambioForm'
import './Intercambio.css'


function Intercambio() {
  return (
    <div className='father-intercambio'>
        <Header />
        <div className='intercambio-body'>
            <div className='intercambio-container'>
                <div className='oferta-container'>
                  <h1 className='intercambio-form-title'>¿Qué libro ofreces?</h1>
                  <IntercambioForm /></div>

                <div className='intercambio-pic-container'>
                  <h1 className='confirmar-intercambio'>Confirmar</h1>
                </div>

                <div className='demanda-container'>
                  <h1 className='intercambio-form-title'>¿Qué libro quieres?</h1>
                  <IntercambioForm /></div>
            </div>

        </div>
        <Footer />
    </div>
  )
}

export default Intercambio