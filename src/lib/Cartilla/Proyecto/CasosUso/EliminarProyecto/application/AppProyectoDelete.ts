import { ProyectoNotFoundError } from "../../../Entity/Exceptions/ProyectoNotFoundError"; 
import { ProyectoId } from "../../../Entity/ValueObejts/ProyectoId";
import { IProyectoGetOneById } from "../../../Shared/CasosUso/GetOneById/domain/Repository/IProyectoGetOneById";
import { IEliminarProyectoRepository } from "../domain/Repository/IEliminarProyectoRepository";

export class AppProyectoDelete {
  constructor(private repository: IEliminarProyectoRepository,
    // private readonly getOneByIdRepository: IProyectoGetOneById
  ) {}

  async run(idProyecto:string): Promise<void> {
    // const proyectoExistente = await this.getOneByIdRepository.getOneById(id);    

    //if (!proyectoExistente || proyectoExistente==null) throw new ProyectoNotFoundError("Proyecto not found");
    
    await this.repository.delete(idProyecto);
  }
}
