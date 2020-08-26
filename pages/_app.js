import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { ChakraProvider, CSSReset } from '@chakra-ui/core';
import theme from '@chakra-ui/theme';

import { useStore } from '../lib/redux';
import { useApollo } from '../lib/apollo';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const apolloClient = useApollo(pageProps.initialApolloState);

  theme.styles.global = ({ colorMode }) => {
    return {
      'body,html': {
        bg: colorMode === 'light' ? 'gray.100' : 'gray.900',
      },
    };
  };

  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <ChakraProvider theme={theme}>
          <CSSReset />
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </Provider>
  );
}
