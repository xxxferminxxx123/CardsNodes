import { NextFunction, Request, Response } from "express";

export class GetAllExpressProyectoController {

  constructor(private readonly services: any) {} 

    async get(req: Request, res: Response, next: NextFunction){
      try {
      const proyecto = await this.services.getAll.run();

      res.status(200).json({
        data: proyecto.map((u: any) => u.mapToPrimitivies())
      });

      } catch (error) {
      next(error);
      }
    }
}