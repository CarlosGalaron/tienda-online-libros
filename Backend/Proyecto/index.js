const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;

app.use(express.json());

const db = mysql.createConnection({
  host: "be0haxawkfcvssd5ssym-mysql.services.clever-cloud.com",
  user: "up9etq4dbc3hqgkq",
  password: "48GNSdQE3rihzBQB7Pov",
  database: "be0haxawkfcvssd5ssym",
  multipleStatements: true,
});

db.connect((err) => {
  if (err) {
    console.error("Error al conectar a MySQL:", err);
    return;
  }
  console.log("Conectado a MySQL.");
});

module.exports = db;

const crudUsuarios = require("./Crud/crudUsuario");
app.use("/crudUsuario", crudUsuarios);

const crudLibroTienda = require("./Crud/crudLibroTienda");
app.use("/crudLibroTienda", crudLibroTienda);

const crudLibroOferta = require("./Crud/crudLibroOferta");
app.use("/crudLibroOferta", crudLibroOferta);

const crudAudioLibro = require("./Crud/crudAudioLibro");
app.use("/crudAudioLibro", crudAudioLibro);

const crudLibroDemanda = require("./Crud/crudLibroDemanda");
app.use("/crudLibroDemanda", crudLibroDemanda);

const crudLibroPrestamo = require("./Crud/crudLibroPrestamo");
app.use("/crudLibroPrestamo", crudLibroPrestamo);

const crudRelato = require("./Crud/crudRelato");
app.use("/crudRelato", crudRelato);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
