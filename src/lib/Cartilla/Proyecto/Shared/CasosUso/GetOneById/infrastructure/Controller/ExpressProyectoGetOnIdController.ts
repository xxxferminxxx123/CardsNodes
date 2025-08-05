import { NextFunction, Request, Response } from "express";
import { ProyectoNotFoundError } from "../../../../../Entity/Exceptions/ProyectoNotFoundError";
//"src/lib/Cartilla/Proyecto/Entity/Exceptions/ProyectoNotFoundError";

export class ExpressProyectoGetOnIdController {

  constructor(private readonly services: any) {} 

     async getOneById(req: Request, res: Response, next: NextFunction) {
       try {
         const { idProyecto } = req.params;
         const proyecto = await this.services.getOneById.run( idProyecto );

         res.status(200).json({ data: proyecto?.mapToPrimitivies() });
         
       } catch (error) {
         if (error instanceof ProyectoNotFoundError) {
            res.status(404).json({ message: error.message });
         }
         next(error);
       }
     }

}