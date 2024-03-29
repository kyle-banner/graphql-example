import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { GraphQLSchema, lexicographicSortSchema } from 'graphql';

import { addResolversToSchema } from '@graphql-tools/schema';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';

import config from './local.config.json';
import resolvers from '@part3/resolver';
import { RouletteApi } from '@part3/dataSources/routletteApi';
import rouletteDb from '@part3/dataSources/rouletteDb';

const schema = lexicographicSortSchema(
  loadSchemaSync('**/*.graphql', {
    loaders: [new GraphQLFileLoader()],
  })
);

const schemaWithResolvers: GraphQLSchema = addResolversToSchema({
  schema,
  resolvers,
});

const apolloServer = new ApolloServer({
  dataSources: () => ({
    rouletteApi: new RouletteApi(),
    rouletteDb
  }),
  schema: schemaWithResolvers,
  introspection: config.introspection,
  playground: config.playground,
});

const port = config.port;
const graphQLPath = config.graphQLPath;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

apolloServer.applyMiddleware({
  app,
  path: graphQLPath,
});

app.listen({ port }, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀  GraphQL API at: http://localhost:${port}${apolloServer.graphqlPath}`);
});
