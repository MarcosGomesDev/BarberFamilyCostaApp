import React from 'react';

import {
  ActivityIndicator,
  Box,
  Icon,
  IconName,
  Text,
  TextVariants,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components';

import { buttonPresets } from './buttonPresets';

export type ButtonPreset = 'primary' | 'outline' | 'danger' | 'default';

export interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
  textPreset?: TextVariants;
  icon?: boolean;
  iconName?: IconName;
}

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled,
  icon = false,
  iconName = 'arrowLeft',
  textPreset = 'paragraphLarge',
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];
  return (
    <TouchableOpacityBox
      testID="button"
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      style={{ opacity: disabled ? 0.6 : 1 }}
      alignItems="center"
      justifyContent="center"
      borderRadius="s12"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Box flexDirection="row" alignItems="center">
          <Text preset={textPreset} bold color={buttonPreset.content}>
            {title}
          </Text>

          {icon && (
            <Icon name={iconName} size={18} color={buttonPreset.content} />
          )}
        </Box>
      )}
    </TouchableOpacityBox>
  );
}
