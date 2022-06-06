import React from 'react'
import './App.css';
import News from "./components/News";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'; 

const httpLink = createHttpLink({
    uri: 'http://localhost: 3001/graphql',
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <News />
        </ApolloProvider>
    );
}

// const App = () => <News />;



export default App;