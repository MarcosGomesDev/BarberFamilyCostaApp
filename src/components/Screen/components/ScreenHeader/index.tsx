import React from 'react';

import { DrawerActions, useNavigation } from '@react-navigation/native';

import { Box, BoxProps, Icon, Text, TouchableOpacityBox } from '@components';
import { ScreenProps } from '../..';

const ICON_SIZE = 28;
type Props = Pick<
  ScreenProps,
  'title' | 'canGoBack' | 'HeaderComponent' | 'isHome'
> &
  BoxProps;
export function ScreenHeader({
  canGoBack,
  isHome,
  title,
  HeaderComponent,
  ...boxProps
}: Props) {
  const navigation = useNavigation();

  return (
    <Box
      flexDirection="row"
      pb="s14"
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal="s24"
      {...boxProps}>
      {canGoBack && (
        <TouchableOpacityBox
          testID="screen-back-button"
          flexDirection="row"
          alignItems="center"
          mr="s10"
          onPress={navigation.goBack}>
          <Icon size={ICON_SIZE} name="arrowLeft" color="white" />
        </TouchableOpacityBox>
      )}

      {isHome && (
        <TouchableOpacityBox
          testID="screen-home-button"
          flexDirection="row"
          alignItems="center"
          mr="s10"
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Icon size={24} name="menu" color="white" />
        </TouchableOpacityBox>
      )}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box backgroundColor="red" width={ICON_SIZE} />}
      {HeaderComponent}
    </Box>
  );
}
