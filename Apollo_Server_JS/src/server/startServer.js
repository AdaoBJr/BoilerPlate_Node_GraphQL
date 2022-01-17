import 'dotenv/config';
import '../services/connection';
import { ApolloServer } from 'apollo-server';

export default function startServer({ typeDefs, resolvers }) {
  const { PORT } = process.env;

  const app = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => req.headers.authorization || '',
  });

  app.listen(PORT, () =>
    console.log(`🔥 Server Running on http://localhost:${PORT}/graphql`)
  );
}
