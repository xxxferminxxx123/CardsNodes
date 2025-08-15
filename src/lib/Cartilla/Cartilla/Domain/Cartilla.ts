import { Activo } from "./ValueObjects/Activo";
import { IdCartilla } from "./ValueObjects/IdCartilla";
import { LongitudColumna } from "./ValueObjects/LongitudColumna";
import { NombreCartilla } from "./ValueObjects/NombreCartilla";
import { NombreColumna } from "./ValueObjects/NombreColumna";
import { TipoDato } from "./ValueObjects/TipoDato";
export class Cartilla {
    
  idCartilla            : IdCartilla;
  nombreCartilla        : NombreCartilla;
  nombreColumna         : NombreColumna;
  tipoDato              : TipoDato;
  longitudColumna       : LongitudColumna;
  activo                : Activo;  
  fechaCreacion         : string;
  usuarioCreacion       : string;
  fechaModificacion     : string;
  usuarioModificacion   : string;
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
                ,fechaModificacion      : string
                ,usuarioModificacion    : string
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
    this.fechaModificacion      = fechaModificacion;
    this.usuarioModificacion    = usuarioModificacion;
    this.ipv4                   = ipv4;
    this.ipv6                   = ipv6;  
    this.direccionMac           = direccionMac;
  }

  public mapToPrimitivies(){

    return {
        idCartilla            : this.idCartilla,
        nombreCartilla        : this.nombreCartilla,
        nombreColumna         : this.nombreColumna,
        tipoDato              : this.tipoDato,
        fechaCreacion         : this.fechaCreacion,
        usuarioCreacion       : this.usuarioCreacion,
        fechaModificacion     : this.fechaModificacion,
        usuarioModificacion   : this.usuarioModificacion,
        ipv4                  : this.ipv4,
        ipv6                  : this.ipv6,
        direccionMac          : this.direccionMac
    }

  };
}