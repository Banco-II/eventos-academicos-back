const { Router } = require("express");
const controller = require("../controllers/maps-controller");

const mapsRouter = Router();

mapsRouter.post("/location", controller.createLocation);
mapsRouter.get("/location", controller.getLocations);
mapsRouter.get("/sincronize", controller.sincronize);

module.exports = mapsRouter;
