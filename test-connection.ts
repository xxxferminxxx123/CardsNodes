import sql from 'mssql/msnodesqlv8';

const config: sql.config = {
  server: 'LAPTOP-M1115GRH\\SQLEXPRESS',
  database: 'BDDEV_PROYECTO',
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true,
  },
};

(async () => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query('SELECT GETDATE() as now');
    console.log('✅ Conectado:', result.recordset[0]);
  } catch (err) {
    console.error('❌ Error:', err);
  }
})();
