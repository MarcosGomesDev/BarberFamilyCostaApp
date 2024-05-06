import { Toast } from '@components';
import { Router } from '@routes';
import {
  AuthCredentialsProvider,
  initializeStorage,
  MMKVStorage,
} from '@services';
import { ThemeProvider } from '@shopify/restyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { theme } from '@theme';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

initializeStorage(MMKVStorage);

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <Router />
            <Toast />
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
}

export default App;
