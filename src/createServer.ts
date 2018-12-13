import { Prisma } from 'prisma-binding';
import { GraphQLServer } from 'graphql-yoga';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';

const toBool = v => v === 'true'
  ? true
  : v === 'false'
    ? false
    : undefined;

function createServer() {
  return new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: { Query, Mutation },
    context: (req) => ({
      ...req,
      db: new Prisma({
        typeDefs: './src/generated/prisma.graphql',
        endpoint: process.env.PRIMSA_ENDPOINT,
        secret: process.env.PRISMA_SECRET,
        debug: toBool(process.env.DEBUG),
      }),
    }),
  });
};

export default createServer;
