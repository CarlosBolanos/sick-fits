import withApollo from 'next-with-apollo';
import {ApolloClient, InMemoryCache} from '@apollo/client';

function createClient() {
  return new ApolloClient({
    uri: process.env.ENDPOINT,
    cache: new InMemoryCache()
  });
}

export default withApollo(createClient);
