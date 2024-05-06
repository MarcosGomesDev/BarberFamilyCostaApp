import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Box, Icon, Text, TouchableOpacityBox } from '@components';
import { ScreenProps } from '../..';

const ICON_SIZE = 20;
type Props = Pick<
  ScreenProps,
  'title' | 'canGoBack' | 'HeaderComponent' | 'isHome'
>;
export function ScreenHeader({
  canGoBack,
  isHome,
  title,
  HeaderComponent,
}: Props) {
  const navigation = useNavigation();

  const showBackLabel = !title && !HeaderComponent;

  return (
    <Box
      flexDirection="row"
      pb="s8"
      paddingHorizontal="s16"
      alignItems="center"
      borderBottomColor="gray3"
      borderBottomWidth={0.5}
      justifyContent="space-between">
      {canGoBack && (
        <TouchableOpacityBox
          testID="screen-back-button"
          flexDirection="row"
          alignItems="center"
          mr="s10"
          onPress={navigation.goBack}>
          <Icon size={ICON_SIZE} name="arrowLeft" color="primary" />
          {showBackLabel && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {HeaderComponent}
      {isHome && (
        <TouchableOpacityBox
          testID="screen-home-button"
          flexDirection="row"
          alignItems="center"
          mr="s10"
          onPress={navigation.goBack}>
          <Icon size={24} name="menu" color="white" />
        </TouchableOpacityBox>
      )}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box backgroundColor="red" width={ICON_SIZE} />}
    </Box>
  );
}
