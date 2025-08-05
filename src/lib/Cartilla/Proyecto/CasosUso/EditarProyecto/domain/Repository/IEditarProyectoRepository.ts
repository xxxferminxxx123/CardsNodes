import { EEditarProyecto } from "../Entity/EEditarProyecto";

export interface IEditarProyectoRepository {
  edit(editarProyectoDto: EEditarProyecto): Promise<void>;
  dispose?(): Promise<void>;
}
