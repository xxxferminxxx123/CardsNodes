import { Router } from "express";
import { EditarProyectoServices } from "../Service/EditarProyectoService";
import { ExpressProyectoController } from "../Controller/EditarProyectoController";

export const EditarProyectoRouter = (services: EditarProyectoServices) => {
  
    const router = Router();

    const controller = new ExpressProyectoController(services); 

    router.put("/", controller.edit.bind(controller));    
    
    return router;
};
