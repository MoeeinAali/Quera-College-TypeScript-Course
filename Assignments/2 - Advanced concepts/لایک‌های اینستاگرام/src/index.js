"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostLikeCounts = void 0;
var getPostLikeCounts = function (account) {
    var _a, _b;
    return (_b = (_a = account === null || account === void 0 ? void 0 : account.post) === null || _a === void 0 ? void 0 : _a.likesCount) !== null && _b !== void 0 ? _b : 0;
};
exports.getPostLikeCounts = getPostLikeCounts;
