import { ProyectoNotFoundError } from "../../../../Entity/Exceptions/ProyectoNotFoundError"; 
import { IProyectoGetOneByExits } from "../domain/Repository/IProyectoGetOneByExits"; 
import { ProyectoId } from '../../../../Entity/ValueObejts/ProyectoId';
import { ProyectoNombre } from '../../../../Entity/ValueObejts/ProyectoNombre';
import { ProyectoDescripcion } from '../../../../Entity/ValueObejts/ProyectoDescripcion';
import { ProyectoActivo } from '../../../../Entity/ValueObejts/ProyectoActivo'

export class AppProyectoGetOneByExits {

  constructor(private repository: IProyectoGetOneByExits) {
  }

  async run(idProyecto: string): Promise<number> {

    const proyecto = await this.repository.getOneByExits(idProyecto);

    if (proyecto==0) throw new ProyectoNotFoundError("Proyecto not found"); 

    return 1;

  }
}
