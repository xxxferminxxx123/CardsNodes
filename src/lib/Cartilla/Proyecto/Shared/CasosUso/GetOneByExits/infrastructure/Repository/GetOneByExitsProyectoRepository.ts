import * as dotenv from 'dotenv';
import sql from 'mssql/msnodesqlv8';
import { IProyectoGetOneByExits } from '../../domain/Repository/IProyectoGetOneByExits';
//'src/lib/Cartilla/Proyecto/Entity/ValueObejts/ProyectoActivo';

dotenv.config();

export class GetOneByExitsProyectoRepository implements IProyectoGetOneByExits {
    
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

  async getOneByExits(idProyecto: string): Promise<Number> {
  const result = await this.pool.request()
    .input('idProyecto', sql.VarChar(60), idProyecto)
    .query(`
      SELECT CASE WHEN COUNT(idProyecto) > 0 THEN 1 ELSE 0 END AS Existe
      FROM proyecto
      WHERE idProyecto = @idProyecto
    `);

  const existe = result.recordset[0]?.Existe === 1;
      console.log(existe)
  if (!existe) {
    // No existe el proyecto
    return 1;
  } else {
    // Sí existe el proyecto
    return 0;
  }
}

  

}
