"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.and = and;
function and(items) {
    var booli = items[0];
    items.forEach(function (item, index) {
        booli = booli && item;
    });
    return booli;
}
