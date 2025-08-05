import { UserRepository } from '../../domain/UserRepository';
import { User } from '../../domain/User';
import { UserId } from '../../domain/UserId';
import { UserName } from '../../domain/UserName';
import { UserEmail } from '../../domain/UserEmail';
import { UserCreatedAt } from '../../domain/UserCreatedAt';
import * as dotenv from 'dotenv';
import sql from 'mssql/msnodesqlv8';

dotenv.config();

export class SqlServerUserRepository implements UserRepository {
  private pool!: sql.ConnectionPool;

  async init(): Promise<void> {
    const config: sql.config = {
      server: 'LAPTOP-M1115GRH\\SQLEXPRESS', // ← Tu instancia completa
      database: 'BDDEV_PROYECTO',
      driver: 'msnodesqlv8',
      options: {
        trustedConnection: true
      }
    };

    try {
      this.pool = await sql.connect(config); // ← NO uses new ConnectionPool()

      console.log('✅ Conectado a SQL Server (Windows Auth)');
    } catch (err) {
      console.error('❌ Error de conexión:', err);
      throw err;
    }
  }

  async create(user: User): Promise<void> {
      console.log('✅ LLEGO ACAQASFSAFSA a SQL Server');
      console.log(user);

    await this.pool.request()
      .input('id', sql.NVarChar, user.id.value)
      .input('name', sql.NVarChar, user.name.value)
      .input('email', sql.NVarChar, user.email.value)
      .input('created_at', sql.DateTime, user.createdAt.value)
      .query(`
        INSERT INTO users (id, name, email, created_at)
        VALUES (@id, @name, @email, @created_at)`);
  }

  async getAll(): Promise<User[]> {
    const result = await this.pool.request().query(`
      SELECT id, name, email, created_at FROM users
    `);

    return result.recordset.map(row =>
      new User(
        new UserId(row.id),
        new UserName(row.name),
        new UserEmail(row.email),
        new UserCreatedAt(row.created_at)
      )
    );
  }

  async getOneById(id: UserId): Promise<User | null> {
    const result = await this.pool.request()
      .input('id', sql.NVarChar, id.value)
      .query(`
        SELECT id, name, email, created_at FROM users WHERE id = @id
      `);

    if (result.recordset.length === 0) return null;

    const row = result.recordset[0];

    return new User(
      new UserId(row.id),
      new UserName(row.name),
      new UserEmail(row.email),
      new UserCreatedAt(row.created_at)
    );
  }

  async edit(user: User): Promise<void> {
    await this.pool.request()
      .input('id', sql.NVarChar, user.id.value)
      .input('name', sql.NVarChar, user.name.value)
      .input('email', sql.NVarChar, user.email.value)
      .query(`
        UPDATE users SET name = @name, email = @email WHERE id = @id
      `);
  }

  async delete(id: UserId): Promise<void> {
    await this.pool.request()
      .input('id', sql.NVarChar, id.value)
      .query(`
        DELETE FROM users WHERE id = @id
      `);
  }
}
