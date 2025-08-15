
export class EGetOneByIdProyecto {

    idProyecto  : string;
    nombre      : string;
    descripcion : string;
    activo      : boolean;

    constructor(idProyecto  : string,
                nombre      : string,
                descripcion : string,
                activo      : boolean
  ){
      this.idProyecto         = idProyecto;
      this.nombre             = nombre;
      this.descripcion        = descripcion;
      this.activo             = activo;
  }

    public mapToPrimitivies(){
      
    return {
          id          : this.idProyecto
          ,name       : this.nombre
          ,email      : this.descripcion
          ,createdAt  : this.activo  
    }
  };
}

