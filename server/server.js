const express = require('express');
const path = require('path');
const db = require('./config/connection');
// const routes = require('./routes');

const { ApolloServer } = require('apollo-server-express');

// importing typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');


const app = express();
const PORT = process.env.PORT || 3001;
// create apollo server with schema data
const server = new ApolloServer({
  typeDefs,
  resolvers
});

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.use(routes);


const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`)
    // log where we can use GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
}


startApolloServer(typeDefs, resolvers);

