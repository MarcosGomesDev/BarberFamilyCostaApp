import { BarberShop } from '@interfaces';
import React from 'react';
import { Dimensions, Image, ViewStyle } from 'react-native';
import { Box } from '../Box';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Text } from '../Text';

interface BarberShopCardProps {
  data: BarberShop;
  style?: ViewStyle;
  onPress?: () => void;
}

const widthCard = Dimensions.get('window').width / 2.1;

export function BarberShopCard({ data, style, onPress }: BarberShopCardProps) {
  return (
    <Box
      backgroundColor="secondaryBlack"
      borderWidth={1}
      width={widthCard}
      height={300}
      flex={1}
      flexGrow={1}
      borderRadius="s20"
      alignContent="space-between"
      padding="s4"
      pb="s10"
      style={style}
      borderColor="gray1">
      <Box>
        <Box
          backgroundColor="darkPurple"
          zIndex={10}
          position="absolute"
          paddingHorizontal="s10"
          paddingVertical="s4"
          borderRadius="s16"
          flexDirection="row"
          alignItems="center"
          alignContent="center"
          opacity={0.8}
          ml="s4"
          mt="s4">
          <Icon name="star" color="primaryPurple" size={14} />
          <Text bold preset="paragraphSmall" ml="s4">
            5.0
          </Text>
        </Box>
        <Image
          source={{ uri: data.image }}
          borderRadius={18}
          style={{
            backgroundColor: 'transparent',
            width: '100%',
            height: 140,
            zIndex: 1,
          }}
        />
      </Box>
      <Box paddingHorizontal="s8" paddingVertical="s8" flex={1}>
        <Text bold>{data.name}</Text>
        <Text color="gray3" preset="paragraphSmall" style={{ width: '98%' }}>
          {data.address}
        </Text>
      </Box>
      <Button
        preset="default"
        title="Reservar"
        onPress={onPress}
        style={{ height: 45, marginHorizontal: 8 }}
      />
    </Box>
  );
}
