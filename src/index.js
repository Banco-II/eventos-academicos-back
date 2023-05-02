const express = require("express");
const bodyparser = require("body-parser");
const sequelize = require("./config/database");
const Location = require("./schemas/map-schema");

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  next();
});

//testa routas
app.get("/home", (req, res, next) => {
  res.send("Hello!");
});

app.use("/locations", require("./routes/maps-router"));

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

sequelize
  .sync()
  .then((result) => {
    console.log("Database conectado!");
    app(3000);
  })
  .catch((err) => console.log(err));
