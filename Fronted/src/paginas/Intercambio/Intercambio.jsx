import React from "react";
import HeaderHomepage from "../../componentes/Header/HeaderHomepage";
import Footer from "../../componentes/Footer/Footer";
import "./Intercambio.css";

function Intercambio() {
  return (
    <div className="intercambio-container">
      <HeaderHomepage></HeaderHomepage>
      <h1 className="intercambio-title">Intercambio</h1>
      <div className="intercambio-content">
        <div className="book-card">
          <div className="book-image"></div>
          <div className="book-info">
            <h2 className="book-title">Título</h2>
            <p className="book-author">Autor</p>
          </div>
        </div>
        <div className="actions">
          <div className="action-btn accept">✔</div>
          <div className="action-btn swap">↔</div>
          <div className="action-btn reject">✖</div>
        </div>
        <div className="book-card">
          <div className="book-image"></div>
          <div className="book-info">
            <h2 className="book-title">Título</h2>
            <p className="book-author">Autor</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Intercambio;
