import { ICartillaRepository } from "../../Domain/Repository/ICartillaRepository";

export class AppCartillaBuild {

  constructor(private repository: ICartillaRepository) {}

  async run( idCartilla : string): Promise<void> {
    return this.repository.build(idCartilla);
  }

  async addColumnTable( idCartilla: string): Promise<void> {
    return this.repository.addColumnTable(idCartilla);
  }
}