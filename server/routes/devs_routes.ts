import { Router } from "express";
import { createDev, deleteDevByID, getAllDevs, getDevByID, updateDevByID } from "../controllers/devs_controllers";

export const devsRoutes = Router();

devsRoutes.get('/devs', getAllDevs)
devsRoutes.get('/devs/:id', getDevByID)
devsRoutes.post('/devs', createDev)
devsRoutes.put('/devs/:id', updateDevByID)
devsRoutes.delete('/devs/:id', deleteDevByID)