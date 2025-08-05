import * as dotenv from 'dotenv';
import sql from 'mssql/msnodesqlv8';
import { IEditarProyectoRepository } from '../../domain/Repository/IEditarProyectoRepository';
import { EEditarProyecto } from '../../domain/Entity/EEditarProyecto';

dotenv.config();

export class SqlServerProyectoRepository implements IEditarProyectoRepository {
    
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


  async edit(proyecto: EEditarProyecto): Promise<void> {
        const config: sql.config = {
      server: 'LAPTOP-M1115GRH\\SQLEXPRESS',
      database: 'BDDEV_PROYECTO',
      driver: 'msnodesqlv8',
      options: {
        trustedConnection: true
      }
    };
      console.log(proyecto);
      this.pool = await sql.connect(config);

    await this.pool.request()
      .input('idProyecto', sql.NVarChar, proyecto.idProyecto.value)
      .input('descripcion', sql.NVarChar, proyecto.descripcion.value)
      .input('nombre', sql.NVarChar, proyecto.nombre.value)
      .input('activo', sql.Bit, proyecto.activo.value)
      .query(`
        UPDATE proyecto 

        SET   descripcion = @descripcion
            , nombre      = @nombre
            , activo      = @activo

        WHERE idProyecto = @idProyecto`);


  }
  

}
