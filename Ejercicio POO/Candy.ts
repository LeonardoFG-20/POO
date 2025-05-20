// Definición clase Dulce
export class Candy {
  constructor(
    public name: string,
    public price: number,
    public stock: number
  ) {}

  sell(): boolean {
    if (this.stock > 0) {
      this.stock -= 1;
      return true;
    }
    return false;
  }
}