import { NextFunction, Request, Response } from "express";

export class CartillaController {

  constructor(private readonly services: any) {} 
  
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
          ,fechaModificacion  
          ,usuarioModificacion
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
          ,fechaModificacion  
          ,usuarioModificacion
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
