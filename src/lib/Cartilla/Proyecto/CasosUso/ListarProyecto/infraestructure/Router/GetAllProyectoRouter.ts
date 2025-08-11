import { Router } from "express";
import { GetAllProyectoServices } from "../Service/GetAllProyectoServices"; 
import { GetAllExpressProyectoController } from "../Controller/AgregarProyectoController"; 

export const GetAllProyectoRouter = (services: GetAllProyectoServices) => {
  
    const router = Router();

    const controller = new GetAllExpressProyectoController(services); 

    router.get("/", controller.get.bind(controller));    
    
    return router;
};
