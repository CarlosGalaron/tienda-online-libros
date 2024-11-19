const db = require("../index.js");
const express = require("express");
const router = express.Router();

// Crear un nuevo audiolibro
router.post("/crear", (req, res) => {
  const {
    usuario_id,
    audiolibro_nombre,
    audiolibro_descripcion,
    audiolibro_duracion,
    audiolibro_creador,
    imagen_audiolibro,
  } = req.body;

  const sql = `
    INSERT INTO Audiolibro (
      usuario_id,
      audiolibro_nombre,
      audiolibro_descripcion,
      audiolibro_duracion,
      audiolibro_creador,
      imagen_audiolibro
    ) VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      usuario_id,
      audiolibro_nombre,
      audiolibro_descripcion,
      audiolibro_duracion,
      audiolibro_creador,
      imagen_audiolibro,
    ],
    (err, result) => {
      if (err) {
        console.error("Error al insertar audiolibro:", err);
        return res.status(500).json({ error: "Error al insertar audiolibro" });
      }
      res.status(201).json({ message: "Audiolibro creado exitosamente." });
    }
  );
});

// Leer todos los audiolibros
router.get("/listar", (req, res) => {
  const sql = `SELECT * FROM Audiolibro`;
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error al obtener audiolibros:", err);
      return res.status(500).json({ error: "Error al obtener audiolibros" });
    }
    res.status(200).json(results);
  });
});

// Leer un audiolibro por ID
router.get("/detallar/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM Audiolibro WHERE audiolibro_id = ?`;

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error al obtener audiolibro:", err);
      return res.status(500).json({ error: "Error al obtener audiolibro" });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: "Audiolibro no encontrado" });
    }
    res.status(200).json(result[0]);
  });
});

// Actualizar un audiolibro por ID
router.put("/actualizar/:id", (req, res) => {
  const { id } = req.params;
  const {
    usuario_id,
    audiolibro_nombre,
    audiolibro_descripcion,
    audiolibro_duracion,
    audiolibro_creador,
    imagen_audiolibro,
  } = req.body;

  const sql = `
    UPDATE Audiolibro SET
      usuario_id = ?,
      audiolibro_nombre = ?,
      audiolibro_descripcion = ?,
      audiolibro_duracion = ?,
      audiolibro_creador = ?,
      imagen_audiolibro = ?
    WHERE audiolibro_id = ?
  `;

  db.query(
    sql,
    [
      usuario_id,
      audiolibro_nombre,
      audiolibro_descripcion,
      audiolibro_duracion,
      audiolibro_creador,
      imagen_audiolibro,
      id,
    ],
    (err, result) => {
      if (err) {
        console.error("Error al actualizar audiolibro:", err);
        return res
          .status(500)
          .json({ error: "Error al actualizar audiolibro" });
      }
      res.status(200).json({ message: "Audiolibro actualizado exitosamente." });
    }
  );
});

// Eliminar un audiolibro por ID
router.delete("/eliminar/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM Audiolibro WHERE audiolibro_id = ?`;

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error al eliminar audiolibro:", err);
      return res.status(500).json({ error: "Error al eliminar audiolibro" });
    }
    res.status(200).json({ message: "Audiolibro eliminado exitosamente." });
  });
});

module.exports = router;
