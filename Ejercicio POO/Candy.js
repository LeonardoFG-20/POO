"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Candy = void 0;
// Definición clase Dulce
var Candy = /** @class */ (function () {
    function Candy(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    Candy.prototype.sell = function () {
        if (this.stock > 0) {
            this.stock -= 1;
            return true;
        }
        return false;
    };
    return Candy;
}());
exports.Candy = Candy;
