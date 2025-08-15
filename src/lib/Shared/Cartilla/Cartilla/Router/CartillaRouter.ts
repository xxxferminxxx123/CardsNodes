import { Router } from "express";
import { CartillaController } from "../Controller/CartillaController";
import { CartillaServices } from "../../../../Cartilla/Cartilla/Infraestructure/Service/CartillaService";

export const CartillaRouter = (services: CartillaServices) => {

  const router = Router();

  const controller = new CartillaController(services);

  router.post("/", controller.create.bind(controller));
  router.post("/build", controller.build.bind(controller));

  return router;

};
