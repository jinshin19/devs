import { Router } from "express";
import {
  createDev,
  loginDev,
  getAllDevs,
  getDevByID,
  updateDevByID,
  deleteDevByID,
  isVerified,
  searchDev,
} from "../controllers/devs_controllers";

export const devsRoutes = Router();

devsRoutes.get("/devs", getAllDevs);
devsRoutes.get("/devs/:id", getDevByID);
devsRoutes.post("/devs/verify", isVerified);
devsRoutes.post("/devs/search", searchDev);
devsRoutes.post("/devs/signup", createDev);
devsRoutes.post("/devs/signin", loginDev);
devsRoutes.put("/devs/update", updateDevByID);
devsRoutes.delete("/devs/:id", deleteDevByID);
