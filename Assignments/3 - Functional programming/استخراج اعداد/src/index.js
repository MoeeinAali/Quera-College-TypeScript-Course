"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = filter;
exports.evenNumberFilter = evenNumberFilter;
exports.oddNumberFilter = oddNumberFilter;
function evenNumberFilter(number) {
    return number % 2 == 0;
}
function oddNumberFilter(number) {
    return !evenNumberFilter(number);
}
function filter(predicateFunc) {
    var result = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    return result.filter(function (value) {
        return predicateFunc(value);
    });
}
