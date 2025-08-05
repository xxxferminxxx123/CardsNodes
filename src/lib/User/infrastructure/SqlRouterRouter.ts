import { Router } from "express";
import { ExpressUserController } from "./SqlExpressUserController";
import { UserServices } from "./UserServices"; 

export const ExpressUserRouter = (services: UserServices) => {
  const router = Router();
  const controller = new ExpressUserController(services);

  router.get("/", controller.getAll.bind(controller));
  router.get("/:id", controller.getOneById.bind(controller));
  router.post("/", controller.create.bind(controller));
  router.put("/", controller.edit.bind(controller));
  router.delete("/:id", controller.delete.bind(controller));

  return router;
};
