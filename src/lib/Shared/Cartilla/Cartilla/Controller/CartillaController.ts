import { NextFunction, Request, Response } from "express";

export class CartillaController {

  constructor(private readonly services: any) {} 

  async build(req: Request, res: Response, next: NextFunction) {
    
    try {
      
    await this.services.build.run(req.params.idCartilla);

      res.status(201).json({ message: "Cartilla construida correctamente" });

    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {

      const 
      { 
          idCartilla         
          ,nombreCartilla     
          ,columnaCartilla    
          ,tipoDato
          ,longitudColumna
          ,activo      
          ,fechaCreacion      
          ,usuarioCreacion    
          ,ipv4               
          ,ipv6               
          ,direccionMac       

    } = req.body;

      await this.services.create.run(
        
          idCartilla         
          ,nombreCartilla     
          ,columnaCartilla    
          ,tipoDato
          ,longitudColumna
          ,activo             
          ,fechaCreacion      
          ,usuarioCreacion    
          ,ipv4               
          ,ipv6               
          ,direccionMac    
        );

      res.status(201).json({ message: "Cartilla creada correctamente" });

    } catch (error) {

      next(error);
    
    }
  }
}