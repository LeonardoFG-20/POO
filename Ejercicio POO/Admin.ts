import { VendingMachine } from "./VendingMachine";
export class Admin {
  constructor(private machine: VendingMachine) {}

  showSalesReport() {
    console.log(`Ventas totales: $${this.machine.getTotalSales()}`);
    console.log("Ventas por producto:");
    for (const [product, sales] of this.machine.getProductSales()) {
      console.log(`- ${product}: $${sales}`);
    }
  }

  showInventory() {
    console.log("Inventario actual:");
    this.machine.listInventory().forEach(line => console.log(line));
  }
}