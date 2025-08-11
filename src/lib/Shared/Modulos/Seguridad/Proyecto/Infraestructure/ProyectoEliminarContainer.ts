import { EliminarProyectoService } from "src/lib/Cartilla/Proyecto/CasosUso/EliminarProyecto/infraestructure/Service/EliminarProyectoService"; 
import { EliminarSqlServerProyectoRepository } from "./../../../../../Cartilla/Proyecto/CasosUso/EliminarProyecto/infraestructure/Repository/EliminarProyectoRepository"; 
import { AppProyectoDelete } from "../../../../../Cartilla/Proyecto/CasosUso/EliminarProyecto/application/AppProyectoDelete"; 
import { GetOneByIdProyectoRepository } from "../../../../../Cartilla/Proyecto/Shared/CasosUso/GetOneById/infrastructure/Repository/GetOneByIdProyectoRepository"; 

export const ProyectoEliminarContainer = async (): Promise<{ proyecto : EliminarProyectoService }> => {
  
    const proyectoRepository = new EliminarSqlServerProyectoRepository();
    // // const getOneRepo = new GetOneByIdProyectoRepository(); 

    // // await getOneRepo.init();

    return {

        proyecto: {

            delete      : new AppProyectoDelete(proyectoRepository)
        },

    };
};
