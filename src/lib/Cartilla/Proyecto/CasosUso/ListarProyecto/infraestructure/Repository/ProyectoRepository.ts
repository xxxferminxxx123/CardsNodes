import * as dotenv from 'dotenv';
import sql from 'mssql/msnodesqlv8';
import { ProyectoGetAllRepository } from '../../domain/ProyectoRepository'; 
import { Proyecto } from '../../../../../../Cartilla/Proyecto/Entity/Proyecto';
import { ProyectoId } from '../../../../../../Cartilla/Proyecto/Entity/ValueObejts/ProyectoId';
import { ProyectoNombre } from '../../../../../../Cartilla/Proyecto/Entity/ValueObejts/ProyectoNombre';
import { ProyectoDescripcion } from '../../../../../../Cartilla/Proyecto/Entity/ValueObejts/ProyectoDescripcion';
import { ProyectoActivo } from '../../../../../../Cartilla/Proyecto/Entity/ValueObejts/ProyectoActivo';

dotenv.config();

export class GetAllSqlServerProyectoRepository implements ProyectoGetAllRepository {
    
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

  async getAll(): Promise<Proyecto[]> {
        const config: sql.config = {
      server: 'LAPTOP-M1115GRH\\SQLEXPRESS',
      database: 'BDDEV_PROYECTO',
      driver: 'msnodesqlv8',
      options: {
        trustedConnection: true
      }
    };

    this.pool = await sql.connect(config);
    const result = await this.pool.request().query(`
      SELECT  
        idProyecto 
        ,nombre     
        ,descripcion
        ,activo
        ,fechaCreacion      
        ,usuarioCreacion    
        ,fechaModificacion  
        ,usuarioModificacion
        ,ipV4               
        ,ipv6               
        ,direccionMac        
      FROM proyecto`);

    return result.recordset.map(row =>
          new Proyecto(
             new ProyectoId          (row.idProyecto )
            ,new ProyectoNombre      (row.nombre     )
            ,new ProyectoDescripcion (row.descripcion)
            ,new ProyectoActivo      (row.activo     )
            ,row.fechaCreacion          
            ,row.usuarioCreacion        
            ,row.fechaModificacion      
            ,row.usuarioModificacion    
            ,row.ipV4                   
            ,row.ipv6                   
            ,row.direccionMac           
          )
        );
  }
  
  

}
