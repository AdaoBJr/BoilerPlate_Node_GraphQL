import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import 'dotenv/config';

export default function startServer({ typeDefs, resolvers }) {
  const { DB_URL, DB_NAME, SERVER_PORT, MONGO_PORT } = process.env;

  mongoose.connect(`${DB_URL}:${MONGO_PORT}/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const app = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => req.headers.authorization || '',
  });

  app.listen(SERVER_PORT, () =>
    console.log(`🔥 Server Running on http://localhost:${SERVER_PORT}/graphql`)
  );
}
