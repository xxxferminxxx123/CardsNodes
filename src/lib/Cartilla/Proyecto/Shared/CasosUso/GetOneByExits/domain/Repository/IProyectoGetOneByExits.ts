export interface IProyectoGetOneByExits {
  getOneByExits(idProyecto: string): Promise<Number>;
  dispose?(): Promise<void>;
}
