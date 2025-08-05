import { NextFunction, Request, Response } from "express";

export class ExpressProyectoController {

  constructor(private readonly services: any) {} 

    async edit(req: Request, res: Response, next: NextFunction) {
          try {
            const { idProyecto, nombre, descripcion, activo } = req.body;
            
            await this.services.edit.run(
              idProyecto,
              nombre,
              descripcion,
              activo
            );
            res.status(201).json({ message: "Usuario editado correctamente" });
          }catch(err){

            next(err);

          }
      }
}