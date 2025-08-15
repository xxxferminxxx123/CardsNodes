import { CartillaCreate } from "../CartillaCreate";
import { IdCartilla } from "../ValueObjects/IdCartilla";

export interface ICartillaRepository {

  create(cartilla: CartillaCreate): Promise<void>;

  build(idCartilla: string): Promise<void>;

  addColumnTable(idCartilla: string): Promise<void>;

  // getAll(): Promise<Cartilla[]>;

  // getOneById(id: string): Promise<Cartilla | null>;

  // edit(cartilla: Cartilla): Promise<void>;
  
  // delete(id: Cartilla): Promise<void>;

}
