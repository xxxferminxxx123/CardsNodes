import { EditarProyectoServices } from "../../../Cartilla/Proyecto/CasosUso/EditarProyecto/infrastructure/Service/EditarProyectoService";
import { SqlServerProyectoRepository } from "../../../Cartilla/Proyecto/CasosUso/EditarProyecto/infrastructure/Repository/ProyectoRepository";
import { AppEditarProyecto } from "../../../Cartilla/Proyecto/CasosUso/EditarProyecto/application/AppEditarProyecto";
import { GetOneByIdProyectoRepository } from "../../../Cartilla/Proyecto/Shared/CasosUso/GetOneById/infrastructure/Repository/GetOneByIdProyectoRepository";

export const buildEditarProyectoServiceContainer = async (): Promise<{ proyecto: EditarProyectoServices }> => {

    const proyectoRepository = new SqlServerProyectoRepository();
    const getOneRepo = new GetOneByIdProyectoRepository();

    await proyectoRepository.init();
    await getOneRepo.init();

    return {
        proyecto: {

            edit: new AppEditarProyecto(proyectoRepository, getOneRepo)
        },

    };
};