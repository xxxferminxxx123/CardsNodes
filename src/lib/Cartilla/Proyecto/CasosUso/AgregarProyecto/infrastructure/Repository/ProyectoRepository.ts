import * as dotenv from 'dotenv';
import sql from 'mssql/msnodesqlv8';
import { IAgregarProyectoRepository } from '../../domain/Repository/IAgregarProyectoRepository';
import { EAgregarProyecto } from '../../domain/Entity/EAgregarProyecto';

dotenv.config();

export class SqlServerProyectoRepository implements IAgregarProyectoRepository {
    
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


  async create(proyecto: EAgregarProyecto): Promise<void> {
        const config: sql.config = {
      server: 'LAPTOP-M1115GRH\\SQLEXPRESS',
      database: 'BDDEV_PROYECTO',
      driver: 'msnodesqlv8',
      options: {
        trustedConnection: true
      }
    };
      console.log('✅ LLEGO ACAQASFSAFSA a SQL Server');
      console.log(proyecto);
      this.pool = await sql.connect(config);

    await this.pool.request()
      .input('idProyecto', sql.NVarChar, proyecto.idProyecto.value)
      .input('descripcion', sql.NVarChar, proyecto.descripcion.value)
      .input('nombre', sql.NVarChar, proyecto.nombre.value)
      .input('activo', sql.Bit, proyecto.activo.value)
      .query(`
        INSERT INTO proyecto (idProyecto, descripcion, nombre, activo)
        VALUES (@idProyecto, @descripcion, @nombre, @activo)`);
            await this.pool.close();

  }
  

}
