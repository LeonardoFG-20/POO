"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
var VendingMachine = /** @class */ (function () {
    function VendingMachine() {
        this.candies = new Map();
        this.totalSales = 0;
        this.productSales = new Map();
        this.currentBalance = 0;
    }
    VendingMachine.prototype.addCandy = function (candy) {
        this.candies.set(candy.name, candy);
        this.productSales.set(candy.name, 0);
    };
    VendingMachine.prototype.insertMoney = function (amount) {
        if (amount <= 0)
            throw new Error("Monto inválido.");
        this.currentBalance += amount;
    };
    VendingMachine.prototype.purchase = function (candyName) {
        var candy = this.candies.get(candyName);
        if (!candy)
            return "Dulce no encontrado.";
        if (candy.stock <= 0)
            return "No hay stock disponible.";
        if (this.currentBalance < candy.price)
            return "Fondos insuficientes. Inserte más dinero.";
        candy.sell();
        this.currentBalance -= candy.price;
        this.totalSales += candy.price;
        var prevSales = this.productSales.get(candy.name) || 0;
        this.productSales.set(candy.name, prevSales + candy.price);
        return "Has comprado un ".concat(candy.name, ". Gracias!");
    };
    VendingMachine.prototype.getBalance = function () {
        return this.currentBalance;
    };
    VendingMachine.prototype.returnChange = function () {
        var change = this.currentBalance;
        this.currentBalance = 0;
        return change;
    };
    // Funciones de administrador
    VendingMachine.prototype.getTotalSales = function () {
        return this.totalSales;
    };
    VendingMachine.prototype.getProductSales = function () {
        return this.productSales;
    };
    VendingMachine.prototype.listInventory = function () {
        return Array.from(this.candies.values()).map(function (c) { return "".concat(c.name, ": ").concat(c.stock, " unidades disponibles"); });
    };
    return VendingMachine;
}());
exports.VendingMachine = VendingMachine;
