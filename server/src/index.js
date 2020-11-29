import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import logger from "./logger"

const app = express();
const port = process.env.PORT;

const typeDefs = gql`
  type Query {
    greet: String
  }
`;

const resolvers = {
  Query: {
    greet() {
      return "hello";
    },
  },
};

const apollo_server = new ApolloServer({
  typeDefs,
  resolvers,
});

apollo_server.applyMiddleware({ app })

app.listen({ port }, () => {
    logger.info(`Server ready at port ${port}`)
})