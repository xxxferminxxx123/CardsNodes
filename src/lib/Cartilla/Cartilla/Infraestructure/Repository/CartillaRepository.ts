import { SQLServerConnection } from '../../../../Shared/Infraestructure/Database/SQLServerConnection';
import { ICartillaRepository } from '../../Domain/Repository/ICartillaRepository';
import { Cartilla } from '../../Domain/Cartilla';
import sql from 'mssql/msnodesqlv8';

export class CartillaRepository implements ICartillaRepository {

  async create(cartilla: Cartilla): Promise<void> {

    await SQLServerConnection.connect();

    const request = SQLServerConnection.getRequest();

    request
      .input('idCartilla'         , sql.VarChar,  cartilla.idCartilla.value)
      .input('nombreCartilla'     , sql.VarChar, cartilla.nombreCartilla.value)
      .input('nombreColumna'      , sql.VarChar, cartilla.nombreColumna.value)
      .input('tipoDato'           , sql.VarChar, cartilla.tipoDato.value)
      .input('longitudColumna'    , sql.VarChar, cartilla.longitudColumna.value)
      .input('activo'             , sql.Bit, cartilla.activo.value)
      .input('fechaCreacion'      , sql.VarChar, cartilla.fechaCreacion)
      .input('usuarioCreacion'    , sql.VarChar, cartilla.usuarioCreacion)
      .input('ipv4'               , sql.VarChar, cartilla.ipv4)
      .input('ipv6'               , sql.VarChar, cartilla.ipv6)
      .input('direccionMac'       , sql.VarChar, cartilla.direccionMac);

    await request.query(`
      INSERT INTO PRY_CARTILLA (
         ID_CARTILLA
        ,NOMBRE_CARTILLA
        ,NOMBRE_COLUMNA
        ,TIPO_DATO
        ,LONGITUD_COLUMNA
        ,ACTIVO 
        ,FECHA_CREACION
        ,USUARIO_CREACION
        ,IPV4
        ,IPV6
        ,DIRECCION_MAC
      )
      VALUES (
        @idCartilla,
        @nombreCartilla,
        @nombreColumna,
        @tipoDato,
        @longitudColumna,
        @activo,
        @fechaCreacion,
        @usuarioCreacion,
        @ipv4,
        @ipv6,
        @direccionMac
      )
    `);
  }
}
