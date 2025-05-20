"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Candy_1 = require("./Candy");
var VendingMachine_1 = require("./VendingMachine");
var User_1 = require("./User");
var Admin_1 = require("./Admin");
// Configuración inicial
var vm = new VendingMachine_1.VendingMachine();
vm.addCandy(new Candy_1.Candy("m&m's", 25, 10));
vm.addCandy(new Candy_1.Candy("Chocorrol", 15, 5));
vm.addCandy(new Candy_1.Candy("Bubulubu", 10, 20));
// Simulación de usuario
var user = new User_1.User(vm);
user.insertMoney(30);
user.buy("Chocorrol");
user.getChange();
// Simulación de administrador
var admin = new Admin_1.Admin(vm);
admin.showSalesReport();
admin.showInventory();
