import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollViewProps,
  StatusBar,
} from 'react-native';

import { Box, BoxProps } from '@components';
import { useAppSafeArea, useAppTheme } from '@hooks';

import { ScreenHeader, ScrollViewContainer, ViewContainer } from './components';

export interface ScreenProps
  extends BoxProps,
    Omit<ScrollViewProps, 'children'> {
  children: React.ReactNode;
  HeaderComponent?: React.ReactNode;
  canGoBack?: boolean;
  isHome?: boolean;
  scrollable?: boolean;
  hasHeader?: boolean;
  title?: string;
}

export function Screen({
  children,
  canGoBack = false,
  isHome = false,
  hasHeader = false,
  scrollable = true,
  style,
  title,
  HeaderComponent,
  ...boxProps
}: ScreenProps) {
  const { bottom, top } = useAppSafeArea();
  const { colors } = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.background}
      />

      {hasHeader && (
        <Box
          style={{
            backgroundColor: colors.background,
            paddingTop: top,
            marginTop: top / 2,
          }}
          alignContent="center">
          <ScreenHeader
            HeaderComponent={HeaderComponent}
            canGoBack={canGoBack}
            isHome={isHome}
            title={title}
          />
        </Box>
      )}

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Container backgroundColor={colors.background} {...boxProps}>
          <Box
            paddingHorizontal="s24"
            style={[
              {
                paddingTop: Platform.OS === 'android' ? top : top / 2,
                paddingBottom: bottom,
                flex: 1,
              },
              style,
            ]}
            {...boxProps}>
            {children}
          </Box>
        </Container>
      </KeyboardAvoidingView>
    </>
  );
}
