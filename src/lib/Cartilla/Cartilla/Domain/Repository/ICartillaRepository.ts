import { Cartilla } from "../Cartilla";
import { CartillaCreate } from "../CartillaCreate";

export interface ICartillaRepository {

  create(cartilla: CartillaCreate): Promise<void>;

  // getAll(): Promise<Cartilla[]>;

  // getOneById(id: string): Promise<Cartilla | null>;

  // edit(cartilla: Cartilla): Promise<void>;
  
  // delete(id: Cartilla): Promise<void>;

}
