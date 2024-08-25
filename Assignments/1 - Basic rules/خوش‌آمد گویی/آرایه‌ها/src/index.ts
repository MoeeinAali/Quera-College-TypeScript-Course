import { maximum } from "./maximum";
import { and } from "./and";
import { removeDuplicates } from "./removeDuplicates";

console.log(maximum([1, 2, 3, 4, 5, 6]));
console.log(maximum([20, 12, 15, 23]));

console.log(and([true, true, false]));
console.log(and([true, true]));

console.log(removeDuplicates(["foo", "bar", "bar"]));
console.log(removeDuplicates(["a", "a", "a", "b", "b"]));
