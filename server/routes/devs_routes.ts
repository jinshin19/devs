import { Router } from "express";
import {
  createDev,
  loginDev,
  getAllDevs,
  getDevByID,
  updateDevByID,
  deleteDevByID,
} from "../controllers/devs_controllers";

export const devsRoutes = Router();

devsRoutes.get("/devs", getAllDevs);
devsRoutes.get("/devs/:id", getDevByID);
devsRoutes.post("/devs/signup", createDev);
devsRoutes.post("/devs/signin", loginDev);
devsRoutes.put("/devs/update", updateDevByID);
devsRoutes.delete("/devs/:id", deleteDevByID);
