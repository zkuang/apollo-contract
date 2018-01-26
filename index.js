const { ApolloClient } = require('apollo-client');
const fetch = require('node-fetch');
const { HttpLink } = require('apollo-link-http');
const { InMemoryCache } = require('apollo-cache-inmemory');

module.exports = function tester({uri, method='POST', contentType = 'application/graphql', authorization = null}) {
  const client = new ApolloClient({
    link: new HttpLink({ uri, fetch }),
    cache: new InMemoryCache()
  });

  return (query, options) => {
    return client.query({query, ...options});
  }
}
