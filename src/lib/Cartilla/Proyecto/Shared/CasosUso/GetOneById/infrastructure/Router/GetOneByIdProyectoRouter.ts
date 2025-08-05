import { Router } from "express";
import { ProyectoGetOneByIdService } from "../Service/ProyectoGetOneByIdService";
import { ExpressProyectoGetOnIdController } from "../Controller/ExpressProyectoGetOnIdController";

export const GetOneByIdProyectoRouter = (services: ProyectoGetOneByIdService) => {
  
    const router = Router();

    const controller = new ExpressProyectoGetOnIdController(services); 

    router.get("/:idProyecto", controller.getOneById.bind(controller));    
    
    return router;
};
