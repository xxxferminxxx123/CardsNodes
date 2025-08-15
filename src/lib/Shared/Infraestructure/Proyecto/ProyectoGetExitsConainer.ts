import { GetOneByExitsProyectoRepository } from "../../../../lib/Cartilla/Proyecto/Shared/CasosUso/GetOneByExits/infrastructure/Repository/GetOneByExitsProyectoRepository"; 
import { AppProyectoGetOneByExits } from "../../../../lib/Cartilla/Proyecto/Shared/CasosUso/GetOneByExits/application/AppProyectoGetOneByExits"; 
import { ProyectoGetOneByExitsService } from "../../../../lib/Cartilla/Proyecto/Shared/CasosUso/GetOneByExits/infrastructure/Service/ProyectoGetOneByExitsService"; 

export const ProyetoGetExitsContainer = async (): Promise<{ proyecto : ProyectoGetOneByExitsService }> => {
  
    const proyectoRepository = new GetOneByExitsProyectoRepository();
    
    await proyectoRepository.init();

    return {

        proyecto: {
            getOneByExits  : new AppProyectoGetOneByExits(proyectoRepository)
        },

    };
};