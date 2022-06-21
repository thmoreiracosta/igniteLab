import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ng6rhe024x01xy0kq1bwnz/master',
  cache: new InMemoryCache()
})