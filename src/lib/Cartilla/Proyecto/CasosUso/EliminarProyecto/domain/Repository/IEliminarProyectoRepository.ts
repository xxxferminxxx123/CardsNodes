import { ProyectoId } from "src/lib/Cartilla/Proyecto/Entity/ValueObejts/ProyectoId"

export interface IEliminarProyectoRepository {

  delete(idProyecto: string): Promise<void>
  dispose?(): Promise<void>
}
