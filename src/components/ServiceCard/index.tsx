import { Service } from '@interfaces';
import React from 'react';
import { Image } from 'react-native';
import { Box } from '../Box';
import { Button } from '../Button';
import { Text } from '../Text';

interface ServiceCardProps {
  data: Service;
}

export function ServiceCard({ data }: ServiceCardProps) {
  return (
    <Box
      flexDirection="row"
      borderRadius="s8"
      borderColor="gray1"
      borderWidth={1}
      alignItems="center"
      backgroundColor="secondaryBlack"
      paddingHorizontal="s10"
      gap="s12"
      mb="s14"
      paddingVertical="s4">
      <Box>
        <Image
          source={{
            uri: data.image,
          }}
          width={100}
          height={100}
          borderRadius={8}
        />
      </Box>

      <Box flex={1} gap="s4" ml="s4" overflow="hidden" paddingVertical="s8">
        <Text bold preset="paragraphLarge">
          {data.name}
        </Text>
        <Text
          color="gray3"
          paddingVertical="s4"
          pb="s8"
          preset="paragraphSmall"
          paddingRight="s4"
          numberOfLines={2}
          ellipsizeMode="tail">
          {data.description && data.description.length > 0
            ? data.description
            : 'Serviço de Qualidade'}
        </Text>
        <Box
          flexDirection="row"
          gap="s14"
          alignItems="center"
          justifyContent="space-between">
          <Text color="primary" bold>
            {data.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              maximumFractionDigits: 2,
            })}
          </Text>
          <Button
            title="Reservar"
            preset="default"
            height={40}
            width={110}
            style={{ paddingHorizontal: 0 }}
            borderRadius="s8"
          />
        </Box>
      </Box>
    </Box>
  );
}
