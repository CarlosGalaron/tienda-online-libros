const db = require("../index.js");
const express = require("express");
const router = express.Router();

// Crear una nueva oferta de libro
router.post("/crear", (req, res) => {
  const {
    usuario_id,
    libro_tienda_id,
    es_disponible,
    libro_precio,
    libro_num_disponibles,
    libro_estado,
    libro_isbn,
    libro_titulo,
    libro_autor,
    libro_editorial,
    libro_genero,
    libro_fecha_publi,
    imagen_libro_oferta,
  } = req.body;

  const sql = `
    INSERT INTO Libro_oferta (
      usuario_id, libro_tienda_id, es_disponible, libro_precio,
      libro_num_disponibles, libro_estado, libro_isbn, libro_titulo,
      libro_autor, libro_editorial, libro_genero, libro_fecha_publi,
      imagen_libro_oferta
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      usuario_id,
      libro_tienda_id,
      es_disponible,
      libro_precio,
      libro_num_disponibles,
      libro_estado,
      libro_isbn,
      libro_titulo,
      libro_autor,
      libro_editorial,
      libro_genero,
      libro_fecha_publi,
      imagen_libro_oferta,
    ],
    (err, result) => {
      if (err) {
        console.error("Error al crear oferta de libro:", err);
        return res
          .status(500)
          .json({ error: "Error al crear oferta de libro" });
      }
      res.status(201).json({ message: "Oferta de libro creada exitosamente." });
    }
  );
});

// Leer todas las ofertas de libros
router.get("/listar", (req, res) => {
  const sql = `SELECT * FROM Libro_oferta`;
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error al obtener ofertas de libros:", err);
      return res
        .status(500)
        .json({ error: "Error al obtener ofertas de libros" });
    }
    res.status(200).json(results);
  });
});

// Actualizar una oferta de libro por ID
router.put("/actualizar/:id", (req, res) => {
  const { id } = req.params;
  const {
    usuario_id,
    libro_tienda_id,
    es_disponible,
    libro_precio,
    libro_num_disponibles,
    libro_estado,
    libro_isbn,
    libro_titulo,
    libro_autor,
    libro_editorial,
    libro_genero,
    libro_fecha_publi,
    imagen_libro_oferta,
  } = req.body;

  const sql = `
    UPDATE Libro_oferta SET
      usuario_id = ?, libro_tienda_id = ?, es_disponible = ?, libro_precio = ?,
      libro_num_disponibles = ?, libro_estado = ?, libro_isbn = ?, libro_titulo = ?,
      libro_autor = ?, libro_editorial = ?, libro_genero = ?, libro_fecha_publi = ?,
      imagen_libro_oferta = ?
    WHERE libro_oferta_id = ?
  `;

  db.query(
    sql,
    [
      usuario_id,
      libro_tienda_id,
      es_disponible,
      libro_precio,
      libro_num_disponibles,
      libro_estado,
      libro_isbn,
      libro_titulo,
      libro_autor,
      libro_editorial,
      libro_genero,
      libro_fecha_publi,
      imagen_libro_oferta,
      id,
    ],
    (err, result) => {
      if (err) {
        console.error("Error al actualizar oferta de libro:", err);
        return res
          .status(500)
          .json({ error: "Error al actualizar oferta de libro" });
      }
      res
        .status(200)
        .json({ message: "Oferta de libro actualizada exitosamente." });
    }
  );
});

// Eliminar una oferta de libro por ID
router.delete("/eliminar/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM Libro_oferta WHERE libro_oferta_id = ?`;
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error al eliminar oferta de libro:", err);
      return res
        .status(500)
        .json({ error: "Error al eliminar oferta de libro" });
    }
    res
      .status(200)
      .json({ message: "Oferta de libro eliminada exitosamente." });
  });
});

module.exports = router;
