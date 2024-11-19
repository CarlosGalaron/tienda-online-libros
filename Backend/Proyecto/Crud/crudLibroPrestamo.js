const db = require("../index.js");
const express = require("express");
const router = express.Router();

// Crear un nuevo libro_prestamo
router.post("/crear", (req, res) => {
  const {
    libro_tienda_id, // Agregar este campo
    usuario_id,
    es_oferta,
    es_demanda,
    libro_isbn,
    libro_titulo,
    libro_autor,
    libro_editorial,
    libro_genero,
    libro_fecha_publi,
    imagen_libro_prestamo,
  } = req.body;

  const sql = `
    INSERT INTO Libro_prestamo (
      libro_tienda_id, usuario_id, es_oferta, es_demanda, libro_isbn, libro_titulo, libro_autor,
      libro_editorial, libro_genero, libro_fecha_publi, imagen_libro_prestamo
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      libro_tienda_id, // Incluir el valor de libro_tienda_id
      usuario_id,
      es_oferta,
      es_demanda,
      libro_isbn,
      libro_titulo,
      libro_autor,
      libro_editorial,
      libro_genero,
      libro_fecha_publi,
      imagen_libro_prestamo,
    ],
    (err, result) => {
      if (err) {
        console.error("Error al insertar libro_prestamo:", err);
        return res
          .status(500)
          .json({ error: "Error al insertar libro_prestamo" });
      }
      res.status(201).json({ message: "Libro_prestamo creado exitosamente." });
    }
  );
});

// Leer todos los libro_prestamo
router.get("/listar", (req, res) => {
  const sql = `SELECT * FROM Libro_prestamo`;
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error al obtener libro_prestamo:", err);
      return res.status(500).json({ error: "Error al obtener libro_prestamo" });
    }
    res.status(200).json(results);
  });
});

// Actualizar un libro_prestamo por ID
router.put("/actualizar/:id", (req, res) => {
  const { id } = req.params;
  const {
    libro_tienda_id, // Si quieres permitir cambiar este campo, inclúyelo aquí
    usuario_id,
    es_oferta,
    es_demanda,
    libro_isbn,
    libro_titulo,
    libro_autor,
    libro_editorial,
    libro_genero,
    libro_fecha_publi,
    imagen_libro_prestamo,
  } = req.body;

  const sql = `
    UPDATE Libro_prestamo SET
      usuario_id = ?,
      es_oferta = ?,
      es_demanda = ?,
      libro_isbn = ?,
      libro_titulo = ?,
      libro_autor = ?,
      libro_editorial = ?,
      libro_genero = ?,
      libro_fecha_publi = ?,
      imagen_libro_prestamo = ?
    WHERE libro_tienda_id = ?
  `;

  db.query(
    sql,
    [
      usuario_id,
      es_oferta,
      es_demanda,
      libro_isbn,
      libro_titulo,
      libro_autor,
      libro_editorial,
      libro_genero,
      libro_fecha_publi,
      imagen_libro_prestamo,
      id, // Identificador para la actualización
    ],
    (err, result) => {
      if (err) {
        console.error("Error al actualizar libro_prestamo:", err);
        return res
          .status(500)
          .json({ error: "Error al actualizar libro_prestamo" });
      }
      res
        .status(200)
        .json({ message: "Libro_prestamo actualizado exitosamente." });
    }
  );
});

// Eliminar un libro_prestamo por ID
router.delete("/eliminar/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM Libro_prestamo WHERE libro_tienda_id = ?`;
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error al eliminar libro_prestamo:", err);
      return res
        .status(500)
        .json({ error: "Error al eliminar libro_prestamo" });
    }
    res.status(200).json({ message: "Libro_prestamo eliminado exitosamente." });
  });
});

module.exports = router;
