export class ProyectoNombre {
  value: string;

  constructor(value: string) {
    this.value = value;
   //this.validarLongitud();
  }

  private validarLongitud() {
    if (this.value.length < 50) {
      throw new Error("Nombre ser menos a 50 caracteres.");
    }
  }
}
