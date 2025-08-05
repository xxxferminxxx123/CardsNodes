
import { ProyectoActivo } from "../../../Entity/ValueObejts/ProyectoActivo";
import { ProyectoDescripcion } from "../../../Entity/ValueObejts/ProyectoDescripcion";
import { ProyectoId } from "../../../Entity/ValueObejts/ProyectoId";
import { ProyectoNombre } from "../../../Entity/ValueObejts/ProyectoNombre";
import { EAgregarProyecto } from "../domain/Entity/EAgregarProyecto";
import { IAgregarProyectoRepository } from "../domain/Repository/IAgregarProyectoRepository";

export class AppAgregarProyecto {
  constructor(public repository: IAgregarProyectoRepository) {}

  async run(
     idProyecto      : string
    ,nombre          : string
    ,descripcion     : string
    ,activo          : string
  ): Promise<void> {

    const proyecto = new EAgregarProyecto(

         new ProyectoId(idProyecto)

        ,new ProyectoNombre(nombre)

        ,new ProyectoDescripcion(descripcion)

        ,new ProyectoActivo(activo)

    );

    return this.repository.create(proyecto);
  }
}
