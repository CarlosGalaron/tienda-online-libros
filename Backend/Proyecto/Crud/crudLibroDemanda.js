const db = require("../index.js");
const express = require("express");
const router = express.Router();

// Crear un nuevo libro_demanda
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
    imagen_libro_demanda,
  } = req.body;

  const sql = `
    INSERT INTO Libro_demanda (
      usuario_id, libro_tienda_id, es_disponible, libro_precio, libro_num_disponibles,
      libro_estado, libro_isbn, libro_titulo, libro_autor, libro_editorial,
      libro_genero, libro_fecha_publi, imagen_libro_demanda
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
      imagen_libro_demanda,
    ],
    (err, result) => {
      if (err) {
        console.error("Error al insertar libro_demanda:", err);
        return res
          .status(500)
          .json({ error: "Error al insertar libro_demanda" });
      }
      res.status(201).json({ message: "Libro_demanda creado exitosamente." });
    }
  );
});

// Leer todos los libro_demanda
router.get("/listar", (req, res) => {
  const sql = `SELECT * FROM Libro_demanda`;
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error al obtener libro_demanda:", err);
      return res.status(500).json({ error: "Error al obtener libro_demanda" });
    }
    res.status(200).json(results);
  });
});

// Actualizar un libro_demanda por ID
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
    imagen_libro_demanda,
  } = req.body;

  const sql = `
    UPDATE Libro_demanda SET
      usuario_id = ?,
      libro_tienda_id = ?,
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
      imagen_libro_demanda = ?
    WHERE libro_demanda_id = ?
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
      imagen_libro_demanda,
      id,
    ],
    (err, result) => {
      if (err) {
        console.error("Error al actualizar libro_demanda:", err);
        return res
          .status(500)
          .json({ error: "Error al actualizar libro_demanda" });
      }
      res
        .status(200)
        .json({ message: "Libro_demanda actualizado exitosamente." });
    }
  );
});

// Eliminar un libro_demanda por ID
router.delete("/eliminar/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM Libro_demanda WHERE libro_demanda_id = ?`;

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error al eliminar libro_demanda:", err);
      return res.status(500).json({ error: "Error al eliminar libro_demanda" });
    }
    res.status(200).json({ message: "Libro_demanda eliminado exitosamente." });
  });
});

module.exports = router;
