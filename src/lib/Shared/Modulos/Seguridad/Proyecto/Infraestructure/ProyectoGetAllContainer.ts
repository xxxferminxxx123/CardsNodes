import { GetOneByIdProyectoRepository } from "../../../../../Cartilla/Proyecto/Shared/CasosUso/GetOneById/infrastructure/Repository/GetOneByIdProyectoRepository";
import { ProyectoGetAll } from "../../../../../Cartilla/Proyecto/CasosUso/ListarProyecto/application/AppProyectoGetAll";
import { GetAllSqlServerProyectoRepository} from "../../../../../Cartilla/Proyecto/CasosUso/ListarProyecto/infraestructure/Repository/ProyectoRepository";
import { GetAllProyectoServices } from "../../../../../Cartilla/Proyecto/CasosUso/ListarProyecto/infraestructure/Service/GetAllProyectoServices";

export const ProyectoGetAllContainer = async (): Promise<{ proyecto : GetAllProyectoServices }> => {
  
    const proyectoRepository = new GetAllSqlServerProyectoRepository();
    
    await proyectoRepository.init();

    return {

        proyecto: {
            getAll  : new ProyectoGetAll(proyectoRepository)
        },

    };
};
