import { Cartilla } from "../Cartilla";

export interface ICartillaRepository {

  create(cartilla: Cartilla): Promise<void>;

  // getAll(): Promise<Cartilla[]>;

  // getOneById(id: string): Promise<Cartilla | null>;

  // edit(cartilla: Cartilla): Promise<void>;
  
  // delete(id: Cartilla): Promise<void>;

}
