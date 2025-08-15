import express, { Request, Response, NextFunction } from "express";
import { CartillaContainer } from "./lib/Shared/Cartilla/Cartilla/Container/CartillaContainer";
import { CartillaRouter } from "./lib/Shared/Cartilla/Cartilla/Router/CartillaRouter";

(async () => {

  const app = express();
  
  app.use(express.json());

  app.use((req, res, next) => {
    res.setHeader("X-Powered-By", "Boomdevelrs");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });

  const serviceCartilla = await CartillaContainer();

  app.use("/cartilla", CartillaRouter(serviceCartilla.cartilla));

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
