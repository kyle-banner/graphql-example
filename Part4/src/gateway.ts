import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloGateway } from '@apollo/gateway';

let gateway = new ApolloGateway({
  __exposeQueryPlanExperimental: true,
  buildService({ url }) {
    return new AuthenticatedDataSource({ url });
  },
  serviceList: getServiceList().serviceList,
  debug: config.apollo?.debug ?? false,
});

const apolloServer = new ApolloServer({
  gateway,
  context,
  validationRules: [complexityLimitRule],
  apollo: {
    graphVariant: schemaVariant,
  },
  plugins,
  introspection: config.introspection,
  playground: config.playground,
  formatError: (err: GraphQLError): GraphQLError => {
    const error = { ...err };
    if (
      error.extensions.query &&
      constants.redactedOperations.some((operation) => error.extensions.query.includes(operation))
    ) {
      error.extensions.query = '[REDACTED]';
      error.extensions.variables = '[REDACTED]';
    }
    logger.error(error);

    const clientErr = error;
    // Remove the exception for errors to the client if we're not running locally or in dev
    if (!['dev', 'local', 'uat'].includes(process.env.CLOUD_ENVIRONMENT)) {
      delete clientErr.extensions.exception;
    }
    return clientErr;
  },
  tracing: ['dev', 'local', 'uat'].includes(process.env.CLOUD_ENVIRONMENT),
  subscriptions: false,
});

await apolloServer.start();
const port = config.port || 4001;
const graphQLPath = config.graphQLPath || '/graph';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
  // Return the transaction ID with every response; and generate one if needed
  const txnId = req.header('x-rqc-mdc_txnid') || uuid();
  res.set('x-portal-transaction-id', txnId);
  next();
});

apolloServer.applyMiddleware({
  app,
  cors: corsOptions,
  path: graphQLPath,
});

await new Promise((resolve) => app.listen({ port }, resolve));
// eslint-disable-next-line no-console
console.log(`🚀  GraphQL API at: http://localhost:${port}${apolloServer.graphqlPath}`);
// eslint-disable-next-line no-console
console.log(
  `📝  GraphQL playground at: http://localhost:${port}${apolloServer.graphqlPath}/playground`
);