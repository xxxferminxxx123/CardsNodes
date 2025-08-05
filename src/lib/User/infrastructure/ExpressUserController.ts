import { NextFunction, Request, Response } from "express";
import { UserNotFoundError } from "../domain/UserNotFoundError";
import { ServiceContainer } from "../../Shared/infraestructure/UserContainer/ServicesContainer";

export class ExpressUserController {
  async getAll(req: Request, res: Response , next: NextFunction) {

    try{

        const users = await ServiceContainer.user.getAll.run();
          res.setHeader("X-Custom-Header", "ListadoGeneralUsuarios")
             .json({data:users.map(user => user.mapToPrimitivies())}).status(200);

    }catch(error){
        next(error);
    }
  }

  async getOneById(req: Request, res: Response ,next: NextFunction) {
    try {
      const user = await ServiceContainer.user.getOneById.run(req.params.id);
      res.json(user.mapToPrimitivies()).status(200);
    } catch (error) {
      if (error instanceof UserNotFoundError) {
         res.status(404).json({ message: error.message });
      }
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
      try {
        const { createdAt, email, id, name } = req.body as {
          id: string;
          name: string;
          email: string;
          createdAt: string;
        };
        await ServiceContainer.user.create.run(
          id,
          name,
          email,
          new Date(createdAt)
        );

        res.status(201).send();
      }catch(err){
        next(err);
      }
  }

  async edit(req: Request, res: Response, next: NextFunction) {
    try {
      const { createdAt, email, id, name } = req.body as {
        id: string;
        name: string;
        email: string;
        createdAt: string;
      };
      await ServiceContainer.user.edit.run(id, name, email, new Date(createdAt));
      res.status(204).send();
    }catch(err){
      if (err instanceof UserNotFoundError) {
         res.status(404).json({ message: err.message });
      }
      next(err);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try{
      await ServiceContainer.user.delete.run(req.params.id);
      res.status(204).send();
    }catch(err){
      if (err instanceof UserNotFoundError) {
         res.status(404).json({ message: err.message });
      }
      next(err);    
    }
  }
}
