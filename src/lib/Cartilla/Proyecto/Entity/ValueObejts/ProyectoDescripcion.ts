export class ProyectoDescripcion {
  value: string;

  constructor(value: string) {
    this.value = value;
    //this.validarLongitud();
  }

  private validarLongitud() {
    if (this.value.length == 50) {
      throw new Error("Descripcion no debe ser mayor a 50 caracteres.");
    }
  }
}
