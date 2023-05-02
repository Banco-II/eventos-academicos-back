import { Router } from "express";
const controller = require("../controllers/maps-controller");

const mapsRouter = Router();

mapsRouter.post("/location", controller.createLocation);
mapsRouter.get("/home", controller.getLocation);
mapsRouter.get("/home", controller.getLocationName);

export default mapsRouter;
