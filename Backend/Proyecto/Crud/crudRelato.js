const db = require("../index.js");
const express = require("express");
const router = express.Router();

// Crear un nuevo relato
router.post("/crear", (req, res) => {
  const {
    usuario_id,
    relato_titulo,
    relato_valoracion,
    relato_autor,
    imagen_relato,
  } = req.body;

  const sql = `
    INSERT INTO Relato (
      usuario_id, relato_titulo, relato_valoracion, relato_autor, imagen_relato
    )
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [usuario_id, relato_titulo, relato_valoracion, relato_autor, imagen_relato],
    (err, result) => {
      if (err) {
        console.error("Error al insertar relato:", err);
        return res.status(500).json({ error: "Error al insertar relato" });
      }
      res.status(201).json({ message: "Relato creado exitosamente." });
    }
  );
});

// Leer todos los relatos
router.get("/listar", (req, res) => {
  const sql = `SELECT * FROM Relato`;
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error al obtener relatos:", err);
      return res.status(500).json({ error: "Error al obtener relatos" });
    }
    res.status(200).json(results);
  });
});

// Actualizar un relato por ID
router.put("/actualizar/:id", (req, res) => {
  const { id } = req.params;
  const {
    usuario_id,
    relato_titulo,
    relato_valoracion,
    relato_autor,
    imagen_relato,
  } = req.body;

  const sql = `
    UPDATE Relato SET
      usuario_id = ?,
      relato_titulo = ?,
      relato_valoracion = ?,
      relato_autor = ?,
      imagen_relato = ?
    WHERE relato_id = ?
  `;

  db.query(
    sql,
    [
      usuario_id,
      relato_titulo,
      relato_valoracion,
      relato_autor,
      imagen_relato,
      id,
    ],
    (err, result) => {
      if (err) {
        console.error("Error al actualizar relato:", err);
        return res.status(500).json({ error: "Error al actualizar relato" });
      }
      res.status(200).json({ message: "Relato actualizado exitosamente." });
    }
  );
});

// Eliminar un relato por ID
router.delete("/eliminar/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM Relato WHERE relato_id = ?`;

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error al eliminar relato:", err);
      return res.status(500).json({ error: "Error al eliminar relato" });
    }
    res.status(200).json({ message: "Relato eliminado exitosamente." });
  });
});

module.exports = router;
