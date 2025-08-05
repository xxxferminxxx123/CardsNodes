import { GetOneByIdProyectoRepository } from "../../../../../Cartilla/Proyecto/Shared/CasosUso/GetOneById/infrastructure/Repository/GetOneByIdProyectoRepository";
//from "src/lib/Cartilla/Proyecto/Shared/CasosUso/GetOneById/infrastructure/Repository/GetOneByIdProyectoRepository";
import { AppProyectoGetOneById } from "../../../../../Cartilla/Proyecto/Shared/CasosUso/GetOneById/application/AppProyectoGetOneById";
//from "src/lib/Cartilla/Proyecto/Shared/CasosUso/GetOneById/application/AppProyectoGetOneById";
import { ProyectoGetOneByIdService } from "../../../../../Cartilla/Proyecto/Shared/CasosUso/GetOneById/infrastructure/Service/ProyectoGetOneByIdService";
//from "src/lib/Cartilla/Proyecto/Shared/CasosUso/GetOneById/infrastructure/Service/ProyectoGetOneByIdService";

export const ProyetoGetOnIdContainer = async (): Promise<{ proyecto : ProyectoGetOneByIdService }> => {
  
    const proyectoRepository = new GetOneByIdProyectoRepository();
    
    await proyectoRepository.init();

    return {

        proyecto: {
            getOneById  : new AppProyectoGetOneById(proyectoRepository)
        },

    };
};
