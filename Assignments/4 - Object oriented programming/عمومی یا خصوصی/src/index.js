"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello im ".concat(this.name, " and im ").concat(this.age, " years old"));
    };
    Person.prototype.getSecret = function () {
        console.log("This is a secret");
    };
    return Person;
}());
exports.default = Person;
