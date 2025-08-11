import { NextFunction, Request, Response } from "express";
import { ProyectoNotFoundError } from "../../../../Entity/Exceptions/ProyectoNotFoundError";

export class EliminarExpressProyectoController {

  constructor(private readonly services: any) {} 

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
            
      await this.services.delete.run(req.params.idProyecto );
      
      res.status(200).json({ message: "Proyecto eliminado correctamente" });
    
    } catch (error) {

      if (error instanceof ProyectoNotFoundError) {
         res.status(404).json({ message: error.message });
      }

      next(error);
    }
  }
}