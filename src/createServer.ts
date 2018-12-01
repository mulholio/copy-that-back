import { Prisma } from 'prisma-binding';
import { GraphQLServer } from 'graphql-yoga';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';

/*
const typeDefs = `
  type User {
    id: ID!
    name: String
  }
  type Query {
    users: [User!]!
  }
  type Mutation {
    createUser(name: String): User
  }
`;
*/

function createServer() {
  return new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: { Query, Mutation },
    // resolverValidationOptions: {
    //   requireResolversForResolveType: false,
    // },
    context: (req) => ({
      ...req,
      db: new Prisma({
        typeDefs: './src/generated/prisma.graphql',
        endpoint: process.env.PRIMSA_ENDPOINT,
        secret: process.env.PRISMA_SECRET,
        // TODO add this to .env
        debug: false,
      }),
    }),
  });
};

export default createServer;
