import React from 'react';
import { Dimensions, TouchableWithoutFeedback } from 'react-native';

import { Toast, ToastPosition, ToastType } from '@services';

import { $shadowProps } from '@theme';

import { Box, BoxProps, Icon, IconProps, Text } from '@components';
import { useTheme } from '@shopify/restyle';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

interface Props {
  toast: Toast;
  onPress: () => void;
}
export function ToasContent({ toast, onPress }: Props) {
  const position: ToastPosition = toast?.position || 'top';
  const type: ToastType = toast?.type || 'success';
  const { colors } = useTheme();

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Box
        {...$boxStyle}
        style={[
          {
            [position]: 50,
            backgroundColor: colors[mapTypeToIcon[type].color],
          },
          $shadowProps,
        ]}>
        <Icon name={mapTypeToIcon[type].name} color="white" size={24} />
        <Text
          style={{ flexShrink: 1, color: 'white' }}
          ml="s16"
          preset="paragraphSmall"
          bold>
          {toast?.message}
        </Text>
      </Box>
    </TouchableWithoutFeedback>
  );
}

const mapTypeToIcon: Record<ToastType, IconProps> = {
  success: {
    color: 'success',
    name: 'check',
  },
  error: {
    color: 'error',
    name: 'warning',
  },
};

const $boxStyle: BoxProps = {
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's12',
  flexDirection: 'row',
  width: MAX_WIDTH,
  maxWidth: MAX_WIDTH,
};
