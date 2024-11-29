import React, { useEffect } from 'react'; 
import Header from '../../componentes/Header/Header';


function Registro() {
  useEffect(() => {
    if (sessionStorage.getItem('idUsuario')) {
        window.location.href = '/';
    }
}, []); 

  return (
    <><Header /><div>Registro</div></>
  )
}

export default Registro