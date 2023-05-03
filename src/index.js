const express = require("express");
// const sequelize = require("./config/database");
const app = express();
app.use(express.json());
const mapsRouter = require("./routes/maps-router");

const cors = require("cors");
app.use(cors());

app.get("/home", (req, res, next) => {
  res.send("Hello!");
});

app.use(mapsRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
