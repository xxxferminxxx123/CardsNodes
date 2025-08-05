import * as dotenv from 'dotenv';
import sql from 'mssql/msnodesqlv8';
import { IProyectoGetOneById } from '../../domain/Repository/IProyectoGetOneById';
import { ProyectoId } from '.././../../../../Entity/ValueObejts/ProyectoId';
import { EGetOneByIdProyecto } from '../../domain/Entity/EGetOneByIdProyecto';
import { ProyectoNombre } from '.././../../../../Entity/ValueObejts/ProyectoNombre';
import { ProyectoDescripcion } from '.././../../../../Entity/ValueObejts/ProyectoDescripcion';
import { ProyectoActivo } from '.././../../../../Entity/ValueObejts/ProyectoActivo';
//'src/lib/Cartilla/Proyecto/Entity/ValueObejts/ProyectoActivo';

dotenv.config();

export class GetOneByIdProyectoRepository implements IProyectoGetOneById {
    
  private pool!: sql.ConnectionPool;

  async init(): Promise<void> {
    const config: sql.config = {
      server: 'LAPTOP-M1115GRH\\SQLEXPRESS',
      database: 'BDDEV_PROYECTO',
      driver: 'msnodesqlv8',
      options: {
        trustedConnection: true
      }
    };

    try {
      this.pool = await sql.connect(config);

      console.log('✅ Conectado a SQL Server (Windows Auth)');
    } catch (err) {
      console.error('❌ Error de conexión:', err);
      throw err;
    }
  }

  async getOneById(idProyecto: string): Promise<EGetOneByIdProyecto | null> {
    console.log('>> Ejecutando query con id:', idProyecto);
console.log('ID como string:', idProyecto, 'Tipo:', typeof idProyecto);

  const result = await this.pool.request()
      .input('idProyecto', sql.VarChar(60), idProyecto)
      .query(`SELECT idProyecto, nombre, descripcion, activo FROM proyecto WHERE idProyecto = @idProyecto`);
    console.log(idProyecto)

    if (result.recordset.length === 0) return null;
    console.log(idProyecto)

    const row = result.recordset[0];

    return new EGetOneByIdProyecto(
      row.idProyecto
      ,row.nombre
      ,row.descripcion
      ,row.activo
    );
  }
  

}
