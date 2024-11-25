import React from "react";
import HeaderHomepage from "../../componentes/Header/HeaderHomepage";
import Footer from "../../componentes/Footer/Footer";
import "./LibrosIntercambio.css";
import quijote from "../../assets/images/quijote.jpg";

const imagenesLibreria = [
  { id: 1, url: quijote },
  { id: 2, url: quijote },
  { id: 3, url: quijote },
  { id: 4, url: quijote },
  { id: 5, url: quijote },
  { id: 6, url: quijote },
  { id: 7, url: quijote },
  { id: 8, url: quijote },
  { id: 9, url: quijote },
];

const imagenesPedidos = [
  { id: 1, url: quijote },
  { id: 2, url: quijote },
  { id: 3, url: quijote },
  { id: 4, url: quijote },
  { id: 5, url: quijote },
  { id: 6, url: quijote },
  { id: 7, url: quijote },
  { id: 8, url: quijote },
  { id: 9, url: quijote },
];

function LibrosIntercambio() {
  return (
    <div className="libros-intercambio">
      <HeaderHomepage />

      <main className="libros-contenedor">
        <div className="seccion">
          <h2>Librería</h2>
          <div className="grid">
            {imagenesLibreria.map((imagen) => (
              <div className="cuadro" key={`libreria-${imagen.id}`}>
                <img src={imagen.url} alt={`Imagen Librería ${imagen.id}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="seccion">
          <h2>Pedidos</h2>
          <div className="grid">
            {imagenesPedidos.map((imagen) => (
              <div className="cuadro" key={`pedidos-${imagen.id}`}>
                <img src={imagen.url} alt={`Imagen Pedidos ${imagen.id}`} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default LibrosIntercambio;
