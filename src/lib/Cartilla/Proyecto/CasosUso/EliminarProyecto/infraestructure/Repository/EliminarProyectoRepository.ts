import * as dotenv from 'dotenv';
import sql from 'mssql/msnodesqlv8';
import { IEliminarProyectoRepository } from '../../domain/Repository/IEliminarProyectoRepository';
import { ProyectoId } from '../../../../../../../lib/Cartilla/Proyecto/Entity/ValueObejts/ProyectoId';
import { EEditarProyecto } from '../../../EditarProyecto/domain/Entity/EEditarProyecto';
dotenv.config();

export class EliminarSqlServerProyectoRepository implements IEliminarProyectoRepository {

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

  async dispose(): Promise<void> {
    if (this.pool) {
      await this.pool.close();
      console.log('✅ Pool cerrado desde dispose()');
    }
  }


  async delete(idProyecto: string): Promise<void> {

    const config: sql.config = {
      server: 'LAPTOP-M1115GRH\\SQLEXPRESS',
      database: 'BDDEV_PROYECTO',
      driver: 'msnodesqlv8',
      options: {
        trustedConnection: true
      }
    };

    this.pool = await sql.connect(config);

    console.log("Id: "+idProyecto)

    await this.pool.request()
      .input('idProyecto', sql.NVarChar, idProyecto)
      .query(`
        UPDATE PROYECTO 
        SET   activo = 0
        WHERE idProyecto = @idProyecto`);


  }


}
