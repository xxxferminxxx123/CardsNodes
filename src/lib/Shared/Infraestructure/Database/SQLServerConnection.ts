// src/Infrastructure/Database/SQLServerConnection.ts
import * as dotenv from 'dotenv';
import sql from 'mssql/msnodesqlv8';

dotenv.config();

export class SQLServerConnection {
  private static pool: sql.ConnectionPool | null = null;

  private static readonly config: sql.config = {
    server: process.env.DB_SERVER || 'LAPTOP-M1115GRH\\SQLEXPRESS',
    database: process.env.DB_NAME || 'BDDEV_PROYECTO',
    driver: 'msnodesqlv8',
    options: { trustedConnection: true }
  };

  /** Conecta si aún no está conectado */
  static async connect(): Promise<void> {
    if (!SQLServerConnection.pool) {
      SQLServerConnection.pool = await new sql.ConnectionPool(SQLServerConnection.config).connect();
    }
  }

  /** Cierra el pool */
  static async close(): Promise<void> {
    if (SQLServerConnection.pool) {
      await SQLServerConnection.pool.close();
      SQLServerConnection.pool = null;
    }
  }

  static getRequest(): sql.Request {
    if (!SQLServerConnection.pool) {
      throw new Error('La conexión a la BD no está inicializada. Llama a SQLServerConnection.connect() primero.');
    }
    return SQLServerConnection.pool.request();
  }
}
