"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(manufactureDate, price, id, quantity, expireDate, isPrime) {
        this.price = price;
        this.quantity = quantity;
        this.id = id;
        this.manufactureDate = manufactureDate;
        this.expireDate = expireDate;
        this.isPrime = isPrime;
    }
    Product.prototype.buy = function (data) {
        if (data === void 0) { data = 5; }
        this.quantity += data;
        console.log(this.quantity);
    };
    Product.prototype.sell = function (data) {
        if (data === void 0) { data = 5; }
        if (data > this.quantity) {
            throw new Error("data must be less than quantity.");
        }
        else {
            this.quantity -= data;
            console.log(this.quantity);
        }
    };
    return Product;
}());
exports.default = Product;
