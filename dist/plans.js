"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plans = void 0;
const grafast_1 = require("grafast");
exports.plans = {
    Query: {
        addTwoNumbers(_, fieldArgs) {
            const $a = fieldArgs.get("a");
            const $b = fieldArgs.get("b");
            return (0, grafast_1.lambda)([$a, $b], ([a, b]) => a + b);
        },
    },
};
