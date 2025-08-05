import { Router } from "express";
import { AgregarProyectoServices } from "../Service/AgregarProyectoService";
import { ExpressProyectoController } from "../Controller/AgregarProyectoController";

export const AgregarProyectoRouter = (services: AgregarProyectoServices) => {
  
    const router = Router();

    const controller = new ExpressProyectoController(services); 

    router.post("/", controller.create.bind(controller));    
    
    return router;
};
