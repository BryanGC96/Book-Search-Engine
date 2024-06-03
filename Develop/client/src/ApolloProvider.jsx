import React from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider as Provider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
    uri: '/graphql', //? URL to use when fetching operations.
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
        header: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

const ApolloProvider = ({ children }) => {
    return <Provider client={client}>{children}</Provider>;
};

export default ApolloProvider;