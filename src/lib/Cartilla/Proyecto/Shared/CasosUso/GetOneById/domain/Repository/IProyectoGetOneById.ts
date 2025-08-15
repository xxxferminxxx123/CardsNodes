import { EGetOneByIdProyecto } from "../Entity/EGetOneByIdProyecto";

export interface IProyectoGetOneById {

  getOneById(idProyecto: string): Promise<EGetOneByIdProyecto | null>;
  
  dispose?(): Promise<void>;

}