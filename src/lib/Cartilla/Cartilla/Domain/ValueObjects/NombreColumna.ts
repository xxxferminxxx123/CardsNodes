export class NombreColumna {

  value: string;

  constructor(value: string) {
    this.value = value;
    //this.validarCaracteres();
  }

  private validarCaracteres() {
    if (this.value.length >50) {
      throw new Error("Las columnas de la cartilla debe tener menos de 50 caracteres.");
    }
  }
}