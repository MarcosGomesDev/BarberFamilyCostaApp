import { Reservation } from '@interfaces';
import { getCurrentMonthName, getOnlyDay, getOnlyHour } from '@utils';
import React from 'react';
import { Dimensions, Image } from 'react-native';
import { Box } from '../Box';
import { Text } from '../Text';
import {
  getStatusBackgroundColor,
  getStatusColor,
  translateStatus,
} from './status';

interface ScheduleCardProps {
  data: Reservation;
}

export function ScheduleCard({ data }: ScheduleCardProps) {
  return (
    <Box
      mt="s20"
      borderRadius="s8"
      borderColor="gray1"
      borderWidth={1}
      flexDirection="row"
      height={Dimensions.get('window').height / 7}
      justifyContent="space-between"
      backgroundColor="secondaryBlack"
      paddingHorizontal="s12"
      paddingVertical="s8">
      <Box
        height={'100%'}
        width={'65%'}
        justifyContent="space-between"
        borderRightColor="gray1"
        borderRightWidth={1}
        flex={1}>
        <Box
          backgroundColor={getStatusBackgroundColor(data.status)}
          width={95}
          height={25}
          borderRadius="s48"
          justifyContent="center"
          alignItems="center">
          <Text
            preset="paragraphSmall"
            bold
            color={getStatusColor(data.status)}>
            {translateStatus(data.status)}
          </Text>
        </Box>
        <Text preset="paragraphLarge" bold>
          {data.service.name}
        </Text>
        <Box flexDirection="row" alignItems="center" mt="s4">
          <Image
            source={{
              uri: 'https://graces.com.br/wp-content/uploads/2019/02/o-que-nao-pode-faltar-na-sua-barbearia-equipamentos.jpg',
            }}
            width={25}
            height={25}
            borderRadius={20}
          />
          <Text preset="paragraphSmall" ml="s10">
            {data.barbershop.name}
          </Text>
        </Box>
      </Box>

      <Box width={'35%'}>
        <Box
          height={'100%'}
          justifyContent="space-evenly"
          alignItems="center"
          ml="s10"
          paddingHorizontal="s16">
          <Text preset="paragraphSmall">{getCurrentMonthName(data.date)}</Text>
          <Text preset="headingMedium">{getOnlyDay(data.date)}</Text>
          <Text preset="paragraphSmall">{getOnlyHour(data.date)}</Text>
        </Box>
      </Box>
    </Box>
  );
}
