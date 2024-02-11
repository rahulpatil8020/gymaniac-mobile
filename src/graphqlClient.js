import { GraphQLClient } from "graphql-request";

const url = "https://pornichet.stepzen.net/api/interesting-tapir/__graphql";

const client = new GraphQLClient(url, {
  headers: {
    Authorization: process.env.EXPO_PUBLIC_GRAPHQL_KEY,
  },
});

export default client;
