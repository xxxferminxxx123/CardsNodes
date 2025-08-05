import { Router } from "express";
import { ProyectoGetOneByExitsService } from "../Service/ProyectoGetOneByExitsService";
import { ExpressProyectoGetOneByExitsController } from "../Controller/ExpressProyectoGetOneByExitsController";

export const GetOneByExitsProyectoRouter = (services: ProyectoGetOneByExitsService) => {
  
    const router = Router();

    const controller = new ExpressProyectoGetOneByExitsController(services); 

    router.get("/:idProyecto", controller.getOneByExits.bind(controller));    
    
    return router;
};
