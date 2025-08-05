import { NextFunction, Request, Response } from "express";
import { ProyectoNotFoundError } from "../../../../../Entity/Exceptions/ProyectoNotFoundError";
//"src/lib/Cartilla/Proyecto/Entity/Exceptions/ProyectoNotFoundError";

export class ExpressProyectoGetOneByExitsController {

  constructor(private readonly services: any) {} 

     async getOneByExits(req: Request, res: Response, next: NextFunction) {
       try {
         const { idProyecto } = req.params;
         const proyecto = await this.services.getOneByExits.run( idProyecto );

         res.status(200).json({ data: proyecto });
         
       } catch (error) {
         if (error instanceof ProyectoNotFoundError) {
            res.status(404).json({ message: error.message });
         }
         next(error);
       }
     }

}