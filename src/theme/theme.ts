import { createTheme } from '@shopify/restyle';
import { ViewStyle } from 'react-native';
import { colors } from './colors';

export const theme = createTheme({
  colors: colors.lightTheme,
  spacing: {
    none: 0,
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s28: 28,
    s30: 30,
    s32: 32,
    s34: 34,
    s36: 36,
    s38: 38,
    s42: 42,
    s40: 40,
    s44: 44,
    s46: 46,
    s48: 48,
    s56: 56,
  },
  borderRadii: {
    none: 0,
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s28: 28,
    s30: 30,
    s32: 32,
    s34: 34,
    s36: 36,
    s38: 38,
    s42: 42,
    s40: 40,
    s44: 44,
    s46: 46,
    s48: 48,
    s56: 56,
    full: 9999,
  },

  textVariants: {
    defaults: {},
  },
});

export const darkTheme = {
  ...theme,
  colors: colors.darkTheme,
};

export const $shadowProps: ViewStyle = {
  elevation: 10,
  shadowColor: '#000',
  shadowOpacity: 0.05,
  shadowRadius: 12,
  shadowOffset: { width: 0, height: -3 },
};

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
