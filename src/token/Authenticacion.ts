import { NextFunction, Request, Response } from "express";

export class ExpressProyectoController {

  constructor(private readonly services: any) {} 

    async create(req: Request, res: Response, next: NextFunction) {
          try {
            const { idProyecto, nombre, descripcion, activo } = req.body;
            
            await this.services.create.run(
              idProyecto,
              nombre,
              descripcion,
              activo
            );
            res.status(201).json({ message: "Usuario creado correctamente" });
          }catch(err){

            next(err);

          }
      }
}