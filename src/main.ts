import express, { Request, Response, NextFunction } from "express";
import { ExpressUserRouter } from "./lib/User/infrastructure/SqlRouterRouter";
import { buildServiceContainer } from "./lib/Shared/infraestructure/UserContainer/SlqServicesContainer";
import { buildProyectoServiceContainer } from "./lib/Shared/Modulos/Seguridad/Proyecto/Infraestructure/ProyectoContainer";
import { AgregarProyectoRouter } from "./lib/Cartilla/Proyecto/CasosUso/AgregarProyecto/infrastructure/Router/AgregarProyectoRouter";
import { ProyetoGetOnIdContainer } from "./lib/Shared/Modulos/Seguridad/Proyecto/Infraestructure/ProyetoGetOnIdContainer";
import { GetOneByIdProyectoRouter } from "./lib/Cartilla/Proyecto/Shared/CasosUso/GetOneById/infrastructure/Router/GetOneByIdProyectoRouter";
import { buildEditarProyectoServiceContainer } from "./lib/Shared/Modulos/Seguridad/Proyecto/Infraestructure/ProyectoEditarContainer";
import { EditarProyectoRouter } from "./lib/Cartilla/Proyecto/CasosUso/EditarProyecto/infrastructure/Router/EditarProyectoRouter";
import { ProyetoGetExitsContainer } from "./lib/Shared/Modulos/Seguridad/Proyecto/Infraestructure/ProyectoGetExitsConainer";
import { GetOneByExitsProyectoRouter } from "./lib/Cartilla/Proyecto/Shared/CasosUso/GetOneByExits/infrastructure/Router/GetOneByExitsProyectoRouter";
import { ProyectoGetAllContainer } from "./lib/Shared/Modulos/Seguridad/Proyecto/Infraestructure/ProyectoGetAllContainer";
import { GetAllProyectoRouter } from "./lib/Cartilla/Proyecto/CasosUso/ListarProyecto/infraestructure/Router/GetAllProyectoRouter";
import { ProyectoEliminarContainer } from "./lib/Shared/Modulos/Seguridad/Proyecto/Infraestructure/ProyectoEliminarContainer";
import { EliminarProyectoRouter } from "./lib/Cartilla/Proyecto/CasosUso/EliminarProyecto/infraestructure/Router/EliminarProyectoRouter";

(async () => {
  const app = express();
  app.use(express.json());

  app.use((req, res, next) => {
    res.setHeader("X-Powered-By", "Fermin API v1");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });


  const services                  = await buildServiceContainer();
  const servicesProyecto          = await buildProyectoServiceContainer();
  const servicesGetOnIdProyecto   = await ProyetoGetOnIdContainer();
  const servicesEditProyecto      = await buildEditarProyectoServiceContainer();
  const servicesExitsProyecto     = await ProyetoGetExitsContainer();
  const servicesGetAllProyecto    = await ProyectoGetAllContainer();
  const servicesEliminarProyecto  = await ProyectoEliminarContainer();

  app.use("/users", ExpressUserRouter(services.user));
  app.use("/proyecto",AgregarProyectoRouter(servicesProyecto.proyecto));
  app.use("/proyecto",GetOneByIdProyectoRouter(servicesGetOnIdProyecto.proyecto))
  app.use("/proyecto",EditarProyectoRouter(servicesEditProyecto.proyecto))
  app.use("/proyecto",GetOneByExitsProyectoRouter(servicesExitsProyecto.proyecto))
  app.use("/proyecto",GetAllProyectoRouter(servicesGetAllProyecto.proyecto))
  app.use("/proyecto",EliminarProyectoRouter(servicesEliminarProyecto.proyecto))

  app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
      console.error("❌ Error inesperado:", err.stack);
       res.status(500).json({ message: err.message });
    }

    res.status(500).json({ message: "Something broke!" });
  });


  app.listen(3000, () => {
    console.log("✅ Server is running on http://localhost:3000");
  });
})();
