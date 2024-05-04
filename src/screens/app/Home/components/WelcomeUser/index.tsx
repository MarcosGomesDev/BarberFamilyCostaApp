import { Box, Text } from '@components';
import { getCUrrentDate, getCurrentDayName } from '@utils';
import React from 'react';

export function WelcomeUser() {
  const user: string | null = null;

  return (
    <Box mt="s12" paddingHorizontal="s16">
      <Text preset="headingMedium">
        Olá,{' '}
        <Text preset="headingMedium" bold>
          {user ? 'Miguel!' : 'Faça seu Login!'}
        </Text>
      </Text>
      <Text mt="s4">
        {getCurrentDayName()}, {getCUrrentDate()}
      </Text>
    </Box>
  );
}
