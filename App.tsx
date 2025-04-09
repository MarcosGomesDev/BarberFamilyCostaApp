import { Toast } from '@components';
import { useAppColorScheme } from '@hooks';
import { Router } from '@routes';
import {
  AuthCredentialsProvider,
  initializeStorage,
  MMKVStorage,
  settingsService,
  useAppColor,
} from '@services';
import { ThemeProvider } from '@shopify/restyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { darkTheme, theme } from '@theme';
import React, { ReactElement, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

initializeStorage(MMKVStorage);

if (__DEV__) {
  require('./src/config/ReactotronConfig');
}

const queryClient = new QueryClient();

function App(): ReactElement {
  useAppColorScheme();
  const appColor = useAppColor();

  useEffect(() => {
    settingsService.handleStatusBar(appColor);
  }, [appColor]);

  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={appColor === 'dark' ? darkTheme : theme}>
            <Router />
            <Toast />
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
}

export default App;
