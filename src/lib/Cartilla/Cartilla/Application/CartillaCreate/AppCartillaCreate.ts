import { Cartilla } from "../../Domain/Cartilla";
import { ICartillaRepository } from "../../Domain/Repository/ICartillaRepository";
import { Activo } from "../../Domain/ValueObjects/Activo";
import { IdCartilla } from "../../Domain/ValueObjects/IdCartilla";
import { LongitudColumna } from "../../Domain/ValueObjects/LongitudColumna";
import { NombreCartilla } from "../../Domain/ValueObjects/NombreCartilla";
import { NombreColumna } from "../../Domain/ValueObjects/NombreColumna";
import { TipoDato } from "../../Domain/ValueObjects/TipoDato";

export class AppCartillaCreate {

  constructor(private repository: ICartillaRepository) {}

  async run( idCartilla         : string
            ,nombreCartilla     : string
            ,columnaCartilla    : string
            ,tipoCartilla       : string
            ,longitudColumna    : string
            ,activo             : boolean
            ,fechaCreacion      : string
            ,usuarioCreacion    : string
            ,fechaModificacion  : string
            ,usuarioModificacion: string
            ,ipv4               : string
            ,ipv6               : string
            ,direccionMac       : string

  ): Promise<void> {

    const cartilla = new Cartilla(

         new IdCartilla(idCartilla)
        ,new NombreCartilla(nombreCartilla)
        ,new NombreColumna(columnaCartilla)
        ,new TipoDato(tipoCartilla)
        ,new LongitudColumna(longitudColumna)       
        ,new Activo(activo)                 
        ,fechaCreacion
        ,usuarioCreacion
        ,fechaModificacion
        ,usuarioModificacion
        ,ipv4
        ,ipv6
        ,direccionMac

    );

    return this.repository.create(cartilla);
  }
}
