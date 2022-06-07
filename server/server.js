const express = require('express');
const path = require('path');

//const routes = require('./routes');

const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');

// importing typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');



const PORT = process.env.PORT || 3001;
// create apollo server with schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(_dirname, '../client/build/index.html'));
});
// app.use(routes);

  db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`)
    // log where we can use GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
}


startApolloServer(typeDefs, resolvers);

