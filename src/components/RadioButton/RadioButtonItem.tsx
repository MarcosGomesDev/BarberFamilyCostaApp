import React from 'react';

import { Box } from '../Box/';
import { Text } from '../Text';

import { RadioButton, RadioButtonProps } from '.';

export type RadioButtonItemProps = RadioButtonProps & {
  label: string;
  description?: string;
};
export function RadioButtonItem({
  label,
  description,
  ...radioButtonProps
}: RadioButtonItemProps) {
  return (
    <Box paddingVertical="s16">
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between">
        <Text semiBold>{label}</Text>
        <RadioButton {...radioButtonProps} />
      </Box>
      {description && (
        <Text style={{ width: '80%' }} color="primaryContrast">
          {description}
        </Text>
      )}
    </Box>
  );
}
