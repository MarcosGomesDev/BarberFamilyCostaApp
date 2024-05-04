import React from 'react';
import { Box } from '../Box';
import { Button, ButtonProps } from '../Button';
import { TextInput, TextInputProps } from '../TextInput';

interface SearchBarProps
  extends TextInputProps,
    Omit<ButtonProps, 'onBlur' | 'onFocus' | 'style' | 'title'> {}

export function SearchBar({
  placeholder,
  onChangeText,
  value,
  onPress,
  ...props
}: SearchBarProps) {
  return (
    <Box
      marginVertical="s20"
      paddingHorizontal="s16"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      alignContent="center">
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        {...props}
      />
      <Button
        onPress={onPress}
        ml="s10"
        preset="primary"
        paddingVertical="s4"
        paddingHorizontal="s16"
        icon
        iconName="search"
        title=""
      />
    </Box>
  );
}
