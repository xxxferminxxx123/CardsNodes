import { NextFunction, Request, Response } from "express";
import { UserNotFoundError } from "../domain/UserNotFoundError";
import { ServiceContainer } from "../../Shared/infraestructure/UserContainer/ServicesContainer";

export class ExpressUserController {
  constructor(private readonly services: any) {} 
  
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {

      const users = await this.services.getAll.run();

      res.status(200).json({
        data: users.map((u: any) => u.mapToPrimitivies())
      });

    } catch (error) {
      next(error);
    }
  }

  async getOneById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const user = await this.services.getOneById.run({ id });

      res.status(200).json({ data: user?.mapToPrimitivies() });
      
    } catch (error) {
      if (error instanceof UserNotFoundError) {
         res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { id, name, email, createdAt } = req.body;
      await this.services.create.run({ id, name, email, createdAt });
      res.status(201).json({ message: "Usuario creado correctamente" });
    } catch (error) {
      next(error);
    }
  }

  async edit(req: Request, res: Response, next: NextFunction) {
    try {

      const { id, name, email } = req.body;

      await this.services.edit.run({ id, name, email });

      res.status(200).json({ message: "Usuario actualizado correctamente" });
    
    } catch (error) {
      if (error instanceof UserNotFoundError) {
         res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      
      const { id } = req.params;
      
      await this.services.delete.run({ id });
      
      res.status(200).json({ message: "Usuario eliminado correctamente" });
    
    } catch (error) {

      if (error instanceof UserNotFoundError) {
         res.status(404).json({ message: error.message });
      }

      next(error);
    }
  }
}
