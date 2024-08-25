"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operation = void 0;
exports.performOperation = performOperation;
var Operation;
(function (Operation) {
    Operation["ADD"] = "+";
    Operation["SUBTRACT"] = "-";
    Operation["MULTIPLY"] = "*";
    Operation["DIVIDE"] = "/";
})(Operation || (exports.Operation = Operation = {}));
function performOperation(values, operation) {
    switch (operation) {
        case Operation.ADD:
            return values[0] + values[1];
        case Operation.SUBTRACT:
            return values[0] - values[1];
        case Operation.MULTIPLY:
            return values[0] * values[1];
        case Operation.DIVIDE:
            return values[0] / values[1];
        default:
            throw new Error('unknown operation');
    }
}
