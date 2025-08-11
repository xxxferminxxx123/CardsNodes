import { Router } from "express";
import { EliminarProyectoService } from "../Service/EliminarProyectoService"; 
import { EliminarExpressProyectoController } from "../Controller/EliminarExpressProyectoController"; 

export const EliminarProyectoRouter = (services: EliminarProyectoService) => {
  
    const router = Router();

    const controller = new EliminarExpressProyectoController(services); 

    router.delete("/:idProyecto", controller.delete.bind(controller));    
    
    return router;
};
