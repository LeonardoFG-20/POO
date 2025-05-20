// User.ts
import { VendingMachine } from "./VendingMachine";
export class User {
  constructor(private machine: VendingMachine) {}

  insertMoney(amount: number) {
    try {
      this.machine.insertMoney(amount);
      console.log(`Has insertado $${amount}`);
    } catch (e: any) {
      console.error(e.message);
    }
  }

  buy(candyName: string) {
    const result = this.machine.purchase(candyName);
    console.log(result);
  }

  getChange() {
    const change = this.machine.returnChange();
    console.log(`Tu cambio es: $${change}`);
  }
}