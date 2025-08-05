import { ProyectoActivo } from "../../../../Entity/ValueObejts/ProyectoActivo";
import { ProyectoDescripcion } from "../../../../Entity/ValueObejts/ProyectoDescripcion";
import { ProyectoId } from "../../../../Entity/ValueObejts/ProyectoId";
import { ProyectoNombre } from "../../../../Entity/ValueObejts/ProyectoNombre";

export class EEditarProyecto {
  constructor(
    public readonly idProyecto  : ProyectoId,
    public readonly nombre      : ProyectoNombre,
    public readonly descripcion : ProyectoDescripcion,
    public readonly activo      : ProyectoActivo
  ) {}
}

