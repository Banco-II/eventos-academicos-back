const express = require("express");
const sequelize = require("./config/database");
const app = express();
app.use(express.json());
const mapsRouter = require("./routes/maps-router");

const cors = require("cors");
app.use(cors());


//testa routas
app.get("/home", (req, res, next) => {
  res.send("Hello!");
});

app.use(mapsRouter);

const port = 4000;

// async function initSequelize() {
// }

// initSequelize()
// Location.sync()
//   .then((result) => {
//     console.log("Database conectado!");
//     // app(4000);
//   })
//   .catch((err) => console.log("deu ruim"));

//index.js

// (async () => {
//     const sequelize = require("./config/database");
//     const Location = require("./schemas/map-schema");

//     try {
//         const resultado = await sequelize.sync();
//         console.log(resultado);
//     } catch (error) {
//         console.log(error);
//     }
// })();

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
