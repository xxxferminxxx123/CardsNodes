import { ProyectoNotFoundError } from "./../../../../Entity/Exceptions/ProyectoNotFoundError"; 
import { IProyectoGetOneById } from "../domain/Repository/IProyectoGetOneById"; 
import { ProyectoId } from './../../../../Entity/ValueObejts/ProyectoId';
import { EGetOneByIdProyecto } from '../domain/Entity/EGetOneByIdProyecto';
import { ProyectoNombre } from './../../../../Entity/ValueObejts/ProyectoNombre';
import { ProyectoDescripcion } from './../../../../Entity/ValueObejts/ProyectoDescripcion';
import { ProyectoActivo } from './../../../../Entity/ValueObejts/ProyectoActivo'

export class AppProyectoGetOneById {

  constructor(private repository: IProyectoGetOneById) {
  }

  async run(idProyecto: string): Promise<EGetOneByIdProyecto> {

    const proyecto = await this.repository.getOneById(idProyecto);

    if (!proyecto) throw new ProyectoNotFoundError("Proyecto not found"); 

    return proyecto;

  }
}
