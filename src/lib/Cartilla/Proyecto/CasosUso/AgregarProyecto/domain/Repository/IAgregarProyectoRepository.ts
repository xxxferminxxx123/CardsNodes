import { EAgregarProyecto } from "../Entity/EAgregarProyecto";

export interface IAgregarProyectoRepository {
  create(agregarProyectoDto: EAgregarProyecto): Promise<void>;
    dispose?(): Promise<void>; // ← ✅ método opcional

}
