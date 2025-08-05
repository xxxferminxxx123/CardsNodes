import { EditarProyectoServices } from "../../../../../Cartilla/Proyecto/CasosUso/EditarProyecto/infrastructure/Service/EditarProyectoService";
import { SqlServerProyectoRepository } from "../../../../../Cartilla/Proyecto/CasosUso/EditarProyecto/infrastructure/Repository/ProyectoRepository";
import { AppEditarProyecto } from "../../../../../Cartilla/Proyecto/CasosUso/EditarProyecto/application/AppEditarProyecto";
import { GetOneByExitsProyectoRepository } from "../../../../../Cartilla/Proyecto/Shared/CasosUso/GetOneByExits/infrastructure/Repository/GetOneByExitsProyectoRepository";
import { GetOneByIdProyectoRepository } from "../../../../../Cartilla/Proyecto/Shared/CasosUso/GetOneById/infrastructure/Repository/GetOneByIdProyectoRepository"; 

export const buildEditarProyectoServiceContainer = async (): Promise<{ proyecto : EditarProyectoServices }> => {
  
    const proyectoRepository = new SqlServerProyectoRepository();
    const getOneRepo = new GetOneByIdProyectoRepository(); // o el que uses

    await getOneRepo.init();

    return {

        proyecto: {

            edit      : new AppEditarProyecto(proyectoRepository,getOneRepo)
        },

    };
};
