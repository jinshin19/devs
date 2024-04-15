import { Router } from "express";
import {
  createDev,
  getAllDevs,
  getDevByID,
  updateDevByID,
  deleteDevByID,
} from "../controllers/devs_controllers";

export const devsRoutes = Router();

devsRoutes.get("/devs", getAllDevs);
devsRoutes.get("/devs/:id", getDevByID);
devsRoutes.post("/devs/signup", createDev);
devsRoutes.put("/devs/:id", updateDevByID);
devsRoutes.delete("/devs/:id", deleteDevByID);
