module.exports = {
  client: {
    excludes: [
      "**/node_modules",
      "**/__tests__",
      "**/generated/**/*.{ts,tsx,js,jsx,graphql,gql}",
    ],
    includes: ["src/**/*.{ts,tsx,js,jsx,graphql,gql}"],
    service: {
      name: "client",
      localSchemaFile: "./src/generated/schema.graphql",
    },
  },
};