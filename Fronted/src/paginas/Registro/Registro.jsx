import React, { useEffect } from 'react'; 


function Registro() {
  useEffect(() => {
    if (sessionStorage.getItem('idUsuario')) {
        window.location.href = '/';
    }
}, []); 

  return (
    <div>Registro</div>
  )
}

export default Registro