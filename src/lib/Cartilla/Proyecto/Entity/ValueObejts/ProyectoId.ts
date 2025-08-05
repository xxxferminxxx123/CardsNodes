export class ProyectoId {
  value: string;

  constructor(value: string) {
    this.value = value;
    //this.validarLongitud();
  }

  private validarLongitud() {
    if (this.value.length == 36) {
      throw new Error("ProyectoId Debe tener 36 caracteres.");
    }
  }
}
