"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludeYoungPersons = excludeYoungPersons;
function excludeYoungPersons(people) {
    return people.filter(function (person) { return person.age > 30; });
}
