import { Proyecto } from "../../../Entity/Proyecto";

export interface ProyectoGetAllRepository {
  getAll(): Promise<Proyecto[]>;
}
