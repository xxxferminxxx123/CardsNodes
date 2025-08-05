export class ProyectoActivo {
  value: string;

  constructor(value: string) {
    this.value = value;
    //this.validarTipoDato();
  }

  private validarTipoDato() {
    if (typeof this.value !== "boolean") {
      throw new Error("Este valor no es un boleano.");
    }
  }
}
