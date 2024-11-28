import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderHomepage from "../../componentes/Header/HeaderHomepage";
import Footer from "../../componentes/Footer/Footer";
import "./MatchIntercambio.css";

const MatchIntercambio = () => {
  const books = [
    { title: "Título", author: "Autor" },
    { title: "Título", author: "Autor" },
    { title: "Título", author: "Autor" },
  ];

  const navigate = useNavigate();

  return (
    <div className="intercambio-container">
      <HeaderHomepage></HeaderHomepage>
      <h1 className="intercambio-title">Intercambio</h1>
      <div className="intercambio-content">
        <div className="main-book-card">
          <div className="book-image"></div>
          <div className="book-info">
            <h2 className="book-title">Título</h2>
            <p className="book-author">Autor</p>
          </div>
        </div>

        <div className="book-list">
          {books.map((book, index) => (
            <div className="list-item" key={index}>
              <div className="book-info">
                <h2 className="book-title">{book.title}</h2>
                <p className="book-author">{book.author}</p>
              </div>
              <div
                className="action-btn accept"
                onClick={() => navigate("/Intercambio")}
              >
                ✔
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MatchIntercambio;
