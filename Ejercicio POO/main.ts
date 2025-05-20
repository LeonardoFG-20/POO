import { Candy } from "./Candy";
import { VendingMachine } from "./VendingMachine";
import { User } from "./User";
import { Admin } from "./Admin";

// Configuración inicial
const vm = new VendingMachine();
vm.addCandy(new Candy("m&m's", 25, 10));
vm.addCandy(new Candy("Chocorrol", 15, 5));
vm.addCandy(new Candy("Bubulubu", 10, 20));

// Simulación de usuario
const user = new User(vm);
user.insertMoney(30);
user.buy("Chocorrol");
user.getChange();

// Simulación de administrador
const admin = new Admin(vm);
admin.showSalesReport();
admin.showInventory();