import express from "express";
import { postgraphile } from "postgraphile";

const app = express();

console.log("Hey");

app.use(
  postgraphile(
    "postgres://postgres:postgres@localhost:5432/grafast",
    "public",
    {
      watchPg: true,
      graphiql: true,
      enhanceGraphiql: true,
      enableCors:true,
      appendPlugins: [require("@graphile-contrib/pg-simplify-inflector")],
      exportGqlSchemaPath: "./src/generated/schema.graphql",
      enableQueryBatching: true,
      extendedErrors: ["hint", "detail", "errcode"],
    }
  )
);

app.listen(process.env.PORT || 3000);