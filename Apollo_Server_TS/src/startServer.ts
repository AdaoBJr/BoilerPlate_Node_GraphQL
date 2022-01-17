import 'dotenv/config';
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import './services/connection';

export default async function startServer(resolvers) {
  const { SERVER_PORT } = process.env;
  const schema = await buildSchema({ resolvers });

  const app = new ApolloServer({ schema });

  app.listen(SERVER_PORT, () =>
    console.log(`🔥 Server Running on http://localhost:${SERVER_PORT}/graphql`)
  );
}
