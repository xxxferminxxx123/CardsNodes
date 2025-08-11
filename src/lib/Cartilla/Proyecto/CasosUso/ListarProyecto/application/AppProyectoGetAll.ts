import { Proyecto } from "../../../Entity/Proyecto";
import { ProyectoGetAllRepository } from "../domain/ProyectoRepository";

export class ProyectoGetAll {

  constructor(private repository: ProyectoGetAllRepository) {
  }

  async run(): Promise<Proyecto[]> {
    return this.repository.getAll();
  }
}
