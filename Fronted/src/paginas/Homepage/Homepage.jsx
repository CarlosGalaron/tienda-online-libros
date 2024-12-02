import React, { useEffect } from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import './Homepage.css';


function Homepage() {
  useEffect(() => { 
        if (sessionStorage.getItem('idUsuario')) {
            window.location.href = '/Catalogo';
        } 
    const book = document.querySelector('.flying-book');
    const body = document.querySelector('.homepage-body');

    function randomPosition() {
      if (book && body) {
        const maxX = body.clientWidth - book.clientWidth;
        const maxY = body.clientHeight - book.clientHeight;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        book.style.left = `${randomX}px`;
        book.style.top = `${randomY}px`;
      }

      requestAnimationFrame(randomPosition);
    }

    randomPosition();
  }, []);

  return (
    <div className="homepage-father">
    <Header /> 
      <div className="homepage-body">
        <div className="flying-book"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
