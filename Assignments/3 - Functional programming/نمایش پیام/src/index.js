"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//implement your code here
function welcome(input) {
    switch (typeof input) {
        case "string":
            console.log("Hello, ".concat(input, "!"));
            break;
        case "number":
            console.log("You are ".concat(input, " years old."));
            break;
        case "boolean":
            if (input) {
                console.log("Are you a teacher? Yes.");
            }
            else {
                console.log("Are you a teacher? No.");
            }
            break;
    }
}
exports.default = welcome;
