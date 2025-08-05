import { ProyectoId } from '.././../../../../Entity/ValueObejts/ProyectoId';
import { EGetOneByIdProyecto } from "../Entity/EGetOneByIdProyecto";

export interface IProyectoGetOneById {
  getOneById(idProyecto: string): Promise<EGetOneByIdProyecto | null>;
  dispose?(): Promise<void>;
}
