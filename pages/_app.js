import React from "react";
import { ApolloProvider } from '@apollo/client';
import Page from "../components/Page";
import withData from "../lib/withData";
import '../public/styles.css';

function App({ Component, pageProps, apollo }) {
  return <ApolloProvider client={apollo}>
    <Page>
      <Component {...pageProps} />
    </Page>
  </ApolloProvider>
}

App.getInitialProps = async ({Component, ctx}) => {
  let pageProps = {};
  if (Component.getInitialProps){
    pageProps = await Component.getInitialProps(ctx)
  }
  pageProps.query = ctx.query;
  return {pageProps};
}

export default withData(App);
