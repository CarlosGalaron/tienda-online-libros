const db = require("../index.js");
const express = require("express");
const router = express.Router();

// Crear un nuevo usuario
router.post("/crear", (req, res) => {
  const {
    usuario_name,
    usuario_email,
    usuario_pass,
    es_admin,
    usuario_alias,
    usuario_valor,
  } = req.body;
  const sql = `
    INSERT INTO Usuario (usuario_name, usuario_email, usuario_pass, es_admin, usuario_alias, usuario_valor)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  db.query(
    sql,
    [
      usuario_name,
      usuario_email,
      usuario_pass,
      es_admin,
      usuario_alias,
      usuario_valor,
    ],
    (err, result) => {
      if (err) {
        console.error("Error al insertar usuario:", err);
        return res.status(500).json({ error: "Error al insertar usuario" });
      }
      res.status(201).json({ message: "Usuario creado exitosamente." });
    }
  );
});

// Leer todos los usuarios
router.get("/listar", (req, res) => {
  const sql = `SELECT * FROM Usuario`;
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error al obtener usuarios:", err);
      return res.status(500).json({ error: "Error al obtener usuarios" });
    }
    res.status(200).json(results);
  });
});

// Actualizar un usuario por ID
router.put("/actualizar/:id", (req, res) => {
  const { id } = req.params;
  const {
    usuario_name,
    usuario_email,
    usuario_pass,
    es_admin,
    usuario_alias,
    usuario_valor,
  } = req.body;
  const sql = `
    UPDATE Usuario SET usuario_name = ?, usuario_email = ?, usuario_pass = ?, es_admin = ?, usuario_alias = ?, usuario_valor = ?
    WHERE usuario_id = ?
  `;
  db.query(
    sql,
    [
      usuario_name,
      usuario_email,
      usuario_pass,
      es_admin,
      usuario_alias,
      usuario_valor,
      id,
    ],
    (err, result) => {
      if (err) {
        console.error("Error al actualizar usuario:", err);
        return res.status(500).json({ error: "Error al actualizar usuario" });
      }
      res.status(200).json({ message: "Usuario actualizado exitosamente." });
    }
  );
});

// Eliminar un usuario por ID
router.delete("/eliminar/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM Usuario WHERE usuario_id = ?`;
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error al eliminar usuario:", err);
      return res.status(500).json({ error: "Error al eliminar usuario" });
    }
    res.status(200).json({ message: "Usuario eliminado exitosamente." });
  });
});

module.exports = router;
