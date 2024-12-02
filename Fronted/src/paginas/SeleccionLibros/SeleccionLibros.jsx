import React, { useEffect, useState } from 'react';
import './SeleccionLibros.css';
import HeaderHomepage from '../../componentes/Header/HeaderHomepage';
import Header from '../../componentes/Header/Header';
import SearchBar from '../../componentes/SearchBar/SearchBar';
import TarjetaCesta from '../../componentes/TarjetaCesta/TarjetaCesta';

const ImageGrid = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBook, setSelectedBook] = useState(null);
  const [biblioteca, setBiblioteca] = useState([]);
  const [demandas, setDemandas] = useState([]);
  const [cart, setCart] = useState([]); // Estado para la cesta

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/json/LibrosJson.json');
        if (!response.ok) {
          throw new Error('Error al cargar el JSON');
        }
        const data = await response.json();
        setImages(data);
        setFilteredImages(data);
      } catch (error) {
        console.error('Error al cargar el JSON:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleSearchResults = (results) => {
    setFilteredImages(results); 
  };

  const handleImageClick = (book) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  const addToBiblioteca = () => {
    if (selectedBook) {
      if (!biblioteca.includes(selectedBook.nombre)) {
        setBiblioteca((prevBiblioteca) => [...prevBiblioteca, selectedBook.nombre]);
      }
    }
  };

  const addToDemandas = () => {
    if (selectedBook) {
      if (!demandas.includes(selectedBook.nombre)) {
        setDemandas((prevDemandas) => [...prevDemandas, selectedBook.nombre]);
      }
    }
  };

  const addToCart = () => {
    if (selectedBook) {
      // Recupera la lista actual de libros en la cesta
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      
      // Verifica si el libro ya está en la cesta (basado en ISBN)
      if (!cart.some(book => book.ISBN === selectedBook.ISBN)) {
        cart.push(selectedBook); // Guarda el objeto completo del libro
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }
  };


useEffect(() => {
    console.log("Biblioteca actualizada:", biblioteca);
}, [biblioteca]); 
    
useEffect(() => {
    console.log("Demandas actualizadas:", demandas);
}, [demandas]); 


  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const rows = [];
  for (let i = 0; i < filteredImages.length; i += 8) {
    rows.push(filteredImages.slice(i, i + 8));
  }

  return (
    <div>
      <SearchBar items={images} onSearchResults={handleSearchResults} />
      {isLoading ? (
        <p>Cargando imágenes...</p>
      ) : (
        <div className="image-grid">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((image, index) => (
                <div
                  key={index}
                  className="image-item"
                  onClick={() => handleImageClick(image)}
                >
                  <img
                    src={image.imagen}
                    alt={image.nombre || `Imagen ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {selectedBook && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-image">
              <img src={selectedBook.imagen} alt={selectedBook.nombre} />
            </div>
            <div className="modal-info">
              <h2>{selectedBook.nombre}</h2>
              <p><strong>Autor:</strong> {selectedBook.autor}</p>
              <p><strong>Género:</strong> {selectedBook.genero}</p>
              <p><strong>ISBN:</strong> {selectedBook.ISBN}</p>
              <div className="modal-buttons">
                <button onClick={addToBiblioteca}>Añadir a Mis Libros</button>
                <button onClick={addToDemandas}>Añadir a Mis Demandas</button>
                <button onClick={() => { addToCart(); closeModal(); }}>Añadir a Cesta</button>
              </div>
            </div>
            <button className="close-button" onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

const Seleccion = () => {
  const isLoggedIn = sessionStorage.getItem('idUsuario');
  return (
    <div>
      {isLoggedIn ? <Header /> : <HeaderHomepage />}
      <ImageGrid />
    </div>
  );
};

export default Seleccion;
