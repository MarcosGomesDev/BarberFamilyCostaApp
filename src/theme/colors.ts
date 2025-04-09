export const palette = {
  darkPurple: '#221C3D',
  purple: '#8162FF',
  black80: '#141518',
  black60: '#1A1B1F',
  green: '#4ABC86',
  gray1: '#26272B',
  gray2: '#4E525B',
  gray3: '#636363',
  gray4: '#838896',
  gray5: '#8E8E8E',
  gray6: '#B3B3B3',
  gray7: '#E1E1E1',
  gray8: '#F5F5F5',
  white: '#FFFFFF',
  red: '#EF4444',
  redLight: '#FBECEC',
  darkRed: '#2F1F1F',
  transparent: '#FFFFFF00',
};

const lightTheme = {
  ...palette,
  background: palette.gray8,
  primary: palette.purple,
  error: palette.red,
  success: palette.green,
  buttonPrimary: palette.purple,
  primaryContrast: palette.black80,
  focusInput: palette.gray1,
};

const darkTheme: typeof lightTheme = {
  ...palette,
  background: palette.black80,
  primary: palette.purple,
  error: palette.red,
  success: palette.green,
  buttonPrimary: palette.purple,
  primaryContrast: palette.white,
  focusInput: palette.gray8,
};

export const colors = { palette, lightTheme, darkTheme };
