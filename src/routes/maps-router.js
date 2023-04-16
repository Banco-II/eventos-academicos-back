import { Router } from "express";

const mapsRouter = Router()

mapsRouter.post("/home",createLocation)
mapsRouter.get("/home",listLocations)

export default mapsRouter