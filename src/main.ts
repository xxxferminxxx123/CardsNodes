import express, { Request, Response, NextFunction } from "express";
import { ExpressUserRouter } from "./lib/User/infrastructure/SqlRouterRouter";
import { buildServiceContainer } from "./lib/Shared/infraestructure/UserContainer/SlqServicesContainer";
import { buildProyectoServiceContainer } from "./lib/Shared/Modulos/Seguridad/Proyecto/Infraestructure/ProyectoContainer";
import { ExpressProyectoController } from "./lib/Cartilla/Proyecto/CasosUso/AgregarProyecto/infrastructure/Controller/AgregarProyectoController";
import { AgregarProyectoRouter } from "./lib/Cartilla/Proyecto/CasosUso/AgregarProyecto/infrastructure/Router/AgregarProyectoRouter";
import { ProyetoGetOnIdContainer } from "./lib/Shared/Modulos/Seguridad/Proyecto/Infraestructure/ProyetoGetOnIdContainer";
import { GetOneByIdProyectoRouter } from "./lib/Cartilla/Proyecto/Shared/CasosUso/GetOneById/infrastructure/Router/GetOneByIdProyectoRouter";
import { buildEditarProyectoServiceContainer } from "./lib/Shared/Modulos/Seguridad/Proyecto/Infraestructure/ProyectoEditarContainer";
import { EditarProyectoRouter } from "./lib/Cartilla/Proyecto/CasosUso/EditarProyecto/infrastructure/Router/EditarProyectoRouter";
import { ProyetoGetExitsContainer } from "./lib/Shared/Modulos/Seguridad/Proyecto/Infraestructure/ProyectoGetExitsConainer";
import { GetOneByExitsProyectoRouter } from "./lib/Cartilla/Proyecto/Shared/CasosUso/GetOneByExits/infrastructure/Router/GetOneByExitsProyectoRouter";

//lib/Cartilla/Proyecto/CasosUso/AgregarProyecto/infrastructure/Router/AgregarProyectoRouter

(async () => {
  const app = express();
  app.use(express.json());

  // Middleware CORS
  app.use((req, res, next) => {
    res.setHeader("X-Powered-By", "Fermin API v1");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });


  const services = await buildServiceContainer();
  const servicesProyecto =  await buildProyectoServiceContainer();
  //const servicesGetOnIdProyecto =  await ProyetoGetOnIdContainer();
  const servicesEditProyecto =  await buildEditarProyectoServiceContainer();
  const servicesExitsProyecto =  await ProyetoGetExitsContainer();

  if (!services?.user) {
    throw new Error("❌ No se pudo cargar el contenedor de servicios.");
  }

  if (!servicesProyecto?.proyecto) {
    throw new Error("❌ No se pudo cargar el contenedor de servicios proyectoss.");
  } 

  // if (!servicesGetOnIdProyecto?.proyecto) {
  //   throw new Error("❌ No se pudo cargar el contenedor de servicios proyectoss.");
  // } 

    if (!servicesEditProyecto?.proyecto) {
    throw new Error("❌ Editar No se pudo cargar el contenedor de servicios proyectoss.");
  } 
    if (!servicesExitsProyecto?.proyecto) {
    throw new Error("❌ Exists No se pudo cargar el contenedor de servicios proyectoss.");
  } 
  app.use("/users", ExpressUserRouter(services.user));
  app.use("/proyecto",AgregarProyectoRouter(servicesProyecto.proyecto));
  //app.use("/proyecto",GetOneByIdProyectoRouter(servicesGetOnIdProyecto.proyecto))
  app.use("/proyecto",EditarProyectoRouter(servicesEditProyecto.proyecto))
  app.use("/proyecto",GetOneByExitsProyectoRouter(servicesExitsProyecto.proyecto))

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
