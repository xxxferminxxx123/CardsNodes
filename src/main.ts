import express, { Request, Response, NextFunction } from "express";
import { CartillaContainer } from "./lib/Shared/Cartilla/Cartilla/Container/CartillaContainer";
import { CartillaRouter } from "./lib/Shared/Cartilla/Cartilla/Router/CartillaRouter";
import { PostsRouter } from "./lib/Cartilla/Posts/PostsRouter";
import jwt from "jsonwebtoken";
import { generateToken } from "./token/authServer";

(async () => {

  const app = express();
  const JWT = "221ce4f433152e10922a4771bea3b00e5abce3585a949892e66108ebb4bbbe1300ae09d3a2f6bafd650a80645b4ba4ec8904f6e2a7eb429d59f71c017e790c7e";
  const RJW = "7bb7eeeb9b0ff1a78a3abd2df4473a2ae5b2b64b8ede6203ff799a44399f79d4841dc712a168086cfe7e4ac51bfa8d4a9d384a4a1360d8025063c2ce045c0516";
  app.use(express.json());

  app.use((req, res, next) => {
    res.setHeader("X-Powered-By", "Boomdevelrs");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });

  const serviceCartilla = await CartillaContainer();
  
  app.use("/posts", PostsRouter());
  app.use("/cartilla", CartillaRouter(serviceCartilla.cartilla));
  
  app.post("/login", (req,res)=>{

    const username= req.body.username;
    const password= req.body.password;

    const user = {
      username: username
      ,password: password
    };

    const accesToken = generateToken(user);
    })

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
