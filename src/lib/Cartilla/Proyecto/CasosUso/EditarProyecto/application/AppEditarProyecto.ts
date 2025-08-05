
import { ProyectoNotFoundError } from "../../../Entity/Exceptions/ProyectoNotFoundError";
import { ProyectoActivo } from "../../../Entity/ValueObejts/ProyectoActivo";
import { ProyectoDescripcion } from "../../../Entity/ValueObejts/ProyectoDescripcion";
import { ProyectoId } from "../../../Entity/ValueObejts/ProyectoId";
import { ProyectoNombre } from "../../../Entity/ValueObejts/ProyectoNombre";
import { EEditarProyecto } from "../domain/Entity/EEditarProyecto";
import { IEditarProyectoRepository } from "../domain/Repository/IEditarProyectoRepository";
import { GetOneByIdProyectoRepository } from "../../../Shared/CasosUso/GetOneById/infrastructure/Repository/GetOneByIdProyectoRepository";
import { GetOneByExitsProyectoRepository } from "../../../Shared/CasosUso/GetOneByExits/infrastructure/Repository/GetOneByExitsProyectoRepository";
import { IProyectoGetOneById } from "../../../Shared/CasosUso/GetOneById/domain/Repository/IProyectoGetOneById";

export class AppEditarProyecto {
    // //  asfas = new GetOneByExitsProyectoRepository();

  constructor(public repository: IEditarProyectoRepository
    ,    private readonly getOneByIdRepository: IProyectoGetOneById

  ) {}

  async run(
     idProyecto      : string
    ,nombre          : string
    ,descripcion     : string
    ,activo          : string
  ): Promise<void> { 

    const proyecto = new EEditarProyecto(

         new ProyectoId(idProyecto)

        ,new ProyectoNombre(nombre)

        ,new ProyectoDescripcion(descripcion)

        ,new ProyectoActivo(activo)

    );
    
    const proyectoId = new ProyectoId(idProyecto);

    const proyectoExistente = await this.getOneByIdRepository.getOneById(proyectoId.value);

    if (!proyectoExistente) {
      throw new ProyectoNotFoundError("No existe el proyecto con ese ID.");
    }
    return this.repository.edit(proyecto);
  }
}
