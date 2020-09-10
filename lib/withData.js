import withApollo from 'next-with-apollo';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createHttpLink } from "apollo-link-http";
import { endpoint } from '../config';

const link = createHttpLink({
  uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
  credentials: 'include'
});

function createClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link
  });
}

export default withApollo(createClient);
