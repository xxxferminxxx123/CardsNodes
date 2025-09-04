import { Router } from "express";

export const PostsRouter = () => {
  
    const router = Router();
    
    router.get("/", (req,res)=> {
        res.json([{ id: 1, title: "Hola desde Posts" }]);
    });    
    
    return router;
};
