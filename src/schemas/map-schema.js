const Sequelize = require("sequelize");
const db = require("../config/database");

const Location = db.define("location", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  description: Sequelize.STRING,
});

module.exports = Location;
