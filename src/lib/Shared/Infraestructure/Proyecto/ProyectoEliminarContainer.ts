import { EliminarProyectoService } from "src/lib/Cartilla/Proyecto/CasosUso/EliminarProyecto/infraestructure/Service/EliminarProyectoService"; 
import { EliminarSqlServerProyectoRepository } from "../../../Cartilla/Proyecto/CasosUso/EliminarProyecto/infraestructure/Repository/EliminarProyectoRepository"; 
import { AppProyectoDelete } from "../../../Cartilla/Proyecto/CasosUso/EliminarProyecto/application/AppProyectoDelete"; 

export const ProyectoEliminarContainer = async (): Promise<{ proyecto : EliminarProyectoService }> => {
  
    const proyectoRepository = new EliminarSqlServerProyectoRepository();

    return {
        proyecto: {
            delete      : new AppProyectoDelete(proyectoRepository)
        }
    };
};