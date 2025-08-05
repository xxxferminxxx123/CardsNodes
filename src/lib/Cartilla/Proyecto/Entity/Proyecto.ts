import { ProyectoActivo } from "./ValueObejts/ProyectoActivo";
import { ProyectoDescripcion } from "./ValueObejts/ProyectoDescripcion";
import { ProyectoId } from "./ValueObejts/ProyectoId";
import { ProyectoNombre } from "./ValueObejts/ProyectoNombre";

export class Proyecto {

    idProyecto              :   ProyectoId;
    nombre                  :   ProyectoNombre;
    descripcion             :   ProyectoDescripcion;
    activo                  :   ProyectoActivo;
    fechaCreacion           :   string;
    usuarioCreacion         :   string;
    fechaModificacion       :   string;
    usuarioModificacion     :   string;
    ipV4                    :   string;
    ipv6                    :   string;
    direccionMac            :   string;

  constructor(
     idProyecto              :   ProyectoId
    ,nombre                  :   ProyectoNombre
    ,descripcion             :   ProyectoDescripcion
    ,activo                  :   ProyectoActivo
    ,fechaCreacion           :   string
    ,usuarioCreacion         :   string
    ,fechaModificacion       :   string
    ,usuarioModificacion     :   string
    ,ipV4                    :   string
    ,ipv6                    :   string
    ,direccionMac            :   string
  ) {
     this.idProyecto         = idProyecto         
    ,this.nombre             = nombre             
    ,this.descripcion        = descripcion  
    ,this.activo             = activo      
    ,this.fechaCreacion      = fechaCreacion      
    ,this.usuarioCreacion    = usuarioCreacion    
    ,this.fechaModificacion  = fechaModificacion  
    ,this.usuarioModificacion= usuarioModificacion
    ,this.ipV4               = ipV4               
    ,this.ipv6               = ipv6               
    ,this.direccionMac       = direccionMac       
  }
  public mapToPrimitivies(){
    return {
           idProyecto       : this.idProyecto.value
          ,nombre           : this.nombre.value
          ,descripcion      : this.descripcion.value
          ,activo           : this.activo.value  
        }
  };
}
