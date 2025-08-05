import { GetOneByIdProyectoRepository } from "src/lib/Cartilla/Proyecto/Shared/CasosUso/GetOneById/infrastructure/Repository/GetOneByIdProyectoRepository";
import { AppAgregarProyecto } from "../../../../../Cartilla/Proyecto/CasosUso/AgregarProyecto/application/AppAgrearProyecto";
import { SqlServerProyectoRepository } from "../../../../../Cartilla/Proyecto/CasosUso/AgregarProyecto/infrastructure/Repository/ProyectoRepository";
import { AgregarProyectoServices } from "../../../../../Cartilla/Proyecto/CasosUso/AgregarProyecto/infrastructure/Service/AgregarProyectoService"
import { AppProyectoGetOneById } from "src/lib/Cartilla/Proyecto/Shared/CasosUso/GetOneById/application/AppProyectoGetOneById";

export const buildProyectoServiceContainer = async (): Promise<{ proyecto : AgregarProyectoServices }> => {
  
    const proyectoRepository = new SqlServerProyectoRepository();
    
    await proyectoRepository.init();

    return {

        proyecto: {

            create      : new AppAgregarProyecto(proyectoRepository)
        },

    };
};
