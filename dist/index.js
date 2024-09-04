"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postgraphile_1 = require("postgraphile");
const app = (0, express_1.default)();
app.use((0, postgraphile_1.postgraphile)("postgres://postgres:postgres@localhost:5432/grafast", "public", {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    enableCors: true,
    appendPlugins: [require("@graphile-contrib/pg-simplify-inflector")],
    exportGqlSchemaPath: "./src/generated/schema.graphql",
    enableQueryBatching: true,
    extendedErrors: ["hint", "detail", "errcode"],
}));
app.listen(process.env.PORT || 3000);
