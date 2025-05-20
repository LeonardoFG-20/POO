// Maquina de dulces
import {Candy} from "./Candy";
export class VendingMachine {
  private candies: Map<string, Candy> = new Map();
  private totalSales: number = 0;
  private productSales: Map<string, number> = new Map();
  private currentBalance: number = 0;

  addCandy(candy: Candy) {
    this.candies.set(candy.name, candy);
    this.productSales.set(candy.name, 0);
  }

  insertMoney(amount: number) {
    if (amount <= 0) throw new Error("Monto inválido.");
    this.currentBalance += amount;
  }

  purchase(candyName: string): string {
    const candy = this.candies.get(candyName);

    if (!candy) return "Dulce no encontrado.";
    if (candy.stock <= 0) return "No hay stock disponible.";
    if (this.currentBalance < candy.price)
      return "Fondos insuficientes. Inserte más dinero.";

    candy.sell();
    this.currentBalance -= candy.price;
    this.totalSales += candy.price;

    const prevSales = this.productSales.get(candy.name) || 0;
    this.productSales.set(candy.name, prevSales + candy.price);

    return `Has comprado un ${candy.name}. Gracias!`;
  }

  getBalance(): number {
    return this.currentBalance;
  }

  returnChange(): number {
    const change = this.currentBalance;
    this.currentBalance = 0;
    return change;
  }

  // Funciones de administrador
  getTotalSales(): number {
    return this.totalSales;
  }

  getProductSales(): Map<string, number> {
    return this.productSales;
  }

  listInventory(): string[] {
    return Array.from(this.candies.values()).map(
      c => `${c.name}: ${c.stock} unidades disponibles`
    );
  }
}