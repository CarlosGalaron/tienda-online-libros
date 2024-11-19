const db = require("../index.js");
const express = require("express");
const router = express.Router();

// Crear un nuevo libro en la tienda
router.post("/crear", (req, res) => {
  const {
    usuario_id,
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
    imagen_libro_tienda,
  } = req.body;

  const sql = `
    INSERT INTO Libro_tienda (
      usuario_id, es_disponible, libro_precio, libro_num_disponibles, libro_estado, 
      libro_isbn, libro_titulo, libro_autor, libro_editorial, libro_genero, 
      libro_fecha_publi, imagen_libro_tienda
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      usuario_id,
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
      imagen_libro_tienda,
    ],
    (err, result) => {
      if (err) {
        console.error("Error al insertar libro en la tienda:", err);
        return res
          .status(500)
          .json({ error: "Error al insertar libro en la tienda" });
      }
      res.status(201).json({ message: "Libro creado exitosamente." });
    }
  );
});

// Leer todos los libros en la tienda
router.get("/listar", (req, res) => {
  const sql = `SELECT * FROM Libro_tienda`;
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error al obtener libros:", err);
      return res.status(500).json({ error: "Error al obtener libros" });
    }
    res.status(200).json(results);
  });
});

// Actualizar un libro por ID
router.put("/actualizar/:id", (req, res) => {
  const { id } = req.params;
  const {
    usuario_id,
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
    imagen_libro_tienda,
  } = req.body;

  const sql = `
    UPDATE Libro_tienda SET 
      usuario_id = ?, 
      es_disponible = ?, 
      libro_precio = ?, 
      libro_num_disponibles = ?, 
      libro_estado = ?, 
      libro_isbn = ?, 
      libro_titulo = ?, 
      libro_autor = ?, 
      libro_editorial = ?, 
      libro_genero = ?, 
      libro_fecha_publi = ?, 
      imagen_libro_tienda = ?
    WHERE libro_tienda_id = ?
  `;

  db.query(
    sql,
    [
      usuario_id,
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
      imagen_libro_tienda,
      id,
    ],
    (err, result) => {
      if (err) {
        console.error("Error al actualizar libro:", err);
        return res.status(500).json({ error: "Error al actualizar libro" });
      }
      res.status(200).json({ message: "Libro actualizado exitosamente." });
    }
  );
});

// Eliminar un libro por ID
router.delete("/eliminar/:id", (req, res) => {
  const { id } = req.params;

  const sql = `DELETE FROM Libro_tienda WHERE libro_tienda_id = ?`;
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error al eliminar libro:", err);
      return res.status(500).json({ error: "Error al eliminar libro" });
    }
    res.status(200).json({ message: "Libro eliminado exitosamente." });
  });
});

module.exports = router;
