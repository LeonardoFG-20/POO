"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(machine) {
        this.machine = machine;
    }
    User.prototype.insertMoney = function (amount) {
        try {
            this.machine.insertMoney(amount);
            console.log("Has insertado $".concat(amount));
        }
        catch (e) {
            console.error(e.message);
        }
    };
    User.prototype.buy = function (candyName) {
        var result = this.machine.purchase(candyName);
        console.log(result);
    };
    User.prototype.getChange = function () {
        var change = this.machine.returnChange();
        console.log("Tu cambio es: $".concat(change));
    };
    return User;
}());
exports.User = User;
