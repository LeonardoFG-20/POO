"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
var Admin = /** @class */ (function () {
    function Admin(machine) {
        this.machine = machine;
    }
    Admin.prototype.showSalesReport = function () {
        console.log("Ventas totales: $".concat(this.machine.getTotalSales()));
        console.log("Ventas por producto:");
        for (var _i = 0, _a = this.machine.getProductSales(); _i < _a.length; _i++) {
            var _b = _a[_i], product = _b[0], sales = _b[1];
            console.log("- ".concat(product, ": $").concat(sales));
        }
    };
    Admin.prototype.showInventory = function () {
        console.log("Inventario actual:");
        this.machine.listInventory().forEach(function (line) { return console.log(line); });
    };
    return Admin;
}());
exports.Admin = Admin;
