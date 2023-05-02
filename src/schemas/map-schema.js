const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Location = sequelize.define("location", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING
  },
  description: { 
    type: Sequelize.STRING 
  },
  latitude:{
    type: Sequelize.FLOAT
  },
  longitude:{
    type: Sequelize.FLOAT
  }
  // geometria:{
  //   type: Sequelize.GEOMETRY
  // },
});

(async () => {
  await sequelize.sync({ force: true });
  // Code here
})();

module.exports = Location;
