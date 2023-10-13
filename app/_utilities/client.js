// Blog: https://www.apollographql.com/blog/apollo-client/next-js/how-to-use-apollo-client-with-next-js-13/
import { HttpLink } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      uri: "https://main--time-pav6zq.apollographos.net/graphql",
    }),
  });
});
