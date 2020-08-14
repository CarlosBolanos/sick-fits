import withApollo from 'next-with-apollo';
import {ApolloClient, InMemoryCache} from '@apollo/client';
import { endpoint } from '../config';

function createClient() {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    cache: new InMemoryCache()
  });
}

export default withApollo(createClient);
