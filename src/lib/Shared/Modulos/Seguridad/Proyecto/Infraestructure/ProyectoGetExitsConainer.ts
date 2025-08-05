import { GetOneByExitsProyectoRepository } from "../../../../../../lib/Cartilla/Proyecto/Shared/CasosUso/GetOneByExits/infrastructure/Repository/GetOneByExitsProyectoRepository"; 
//from "src/lib/Cartilla/Proyecto/Shared/CasosUso/GetOneById/infrastructure/Repository/GetOneByIdProyectoRepository";
import { AppProyectoGetOneByExits } from "../../../../../../lib/Cartilla/Proyecto/Shared/CasosUso/GetOneByExits/application/AppProyectoGetOneByExits"; 
//from "src/lib/Cartilla/Proyecto/Shared/CasosUso/GetOneById/application/AppProyectoGetOneById";
import { ProyectoGetOneByExitsService } from "../../../../../../lib/Cartilla/Proyecto/Shared/CasosUso/GetOneByExits/infrastructure/Service/ProyectoGetOneByExitsService"; 
//from "src/lib/Cartilla/Proyecto/Shared/CasosUso/GetOneById/infrastructure/Service/ProyectoGetOneByIdService";

export const ProyetoGetExitsContainer = async (): Promise<{ proyecto : ProyectoGetOneByExitsService }> => {
  
    const proyectoRepository = new GetOneByExitsProyectoRepository();
    
    await proyectoRepository.init();

    return {

        proyecto: {
            getOneByExits  : new AppProyectoGetOneByExits(proyectoRepository)
        },

    };
};
