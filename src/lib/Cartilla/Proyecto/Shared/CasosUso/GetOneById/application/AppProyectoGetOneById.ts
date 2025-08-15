import { ProyectoNotFoundError } from "./../../../../Entity/Exceptions/ProyectoNotFoundError"; 
import { IProyectoGetOneById } from "../domain/Repository/IProyectoGetOneById"; 
import { EGetOneByIdProyecto } from '../domain/Entity/EGetOneByIdProyecto';

export class AppProyectoGetOneById {

  constructor(private repository: IProyectoGetOneById){}

  async run(idProyecto: string): Promise<EGetOneByIdProyecto> {

    const proyecto = await this.repository.getOneById(idProyecto);

    if (!proyecto) throw new ProyectoNotFoundError("Proyecto not found"); 

    return proyecto;

  }
}
