"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maximum = maximum;
function maximum(items) {
    var maxi = items[0];
    items.forEach(function (item, index) {
        if (item > maxi) {
            maxi = item;
        }
    });
    return maxi;
}
