import { Activo } from "./ValueObjects/Activo";
import { IdCartilla } from "./ValueObjects/IdCartilla";
import { LongitudColumna } from "./ValueObjects/LongitudColumna";
import { NombreCartilla } from "./ValueObjects/NombreCartilla";
import { NombreColumna } from "./ValueObjects/NombreColumna";
import { TipoDato } from "./ValueObjects/TipoDato";

export class CartillaCreate {
    
  idCartilla            : IdCartilla;
  nombreCartilla        : NombreCartilla;
  nombreColumna         : NombreColumna;
  tipoDato              : TipoDato;
  longitudColumna       : LongitudColumna;
  activo                : Activo;  
  fechaCreacion         : string;
  usuarioCreacion       : string;
  ipv4                  : string;
  ipv6                  : string;
  direccionMac          : string;

  constructor(   idCartilla             : IdCartilla
                ,nombreCartilla         : NombreCartilla
                ,nombreColumna          : NombreColumna
                ,tipoDato               : TipoDato
                ,longitudColumna        : LongitudColumna
                ,activo                 : Activo
                ,fechaCreacion          : string
                ,usuarioCreacion        : string
                ,ipv4                   : string
                ,ipv6                   : string
                ,direccionMac           : string
  ){
    this.idCartilla             = idCartilla;
    this.nombreCartilla         = nombreCartilla;
    this.nombreColumna          = nombreColumna;
    this.tipoDato               = tipoDato;
    this.longitudColumna        = longitudColumna;
    this.activo                 = activo;
    this.fechaCreacion          = fechaCreacion;
    this.usuarioCreacion        = usuarioCreacion;
    this.ipv4                   = ipv4;
    this.ipv6                   = ipv6;  
    this.direccionMac           = direccionMac;
  }
}