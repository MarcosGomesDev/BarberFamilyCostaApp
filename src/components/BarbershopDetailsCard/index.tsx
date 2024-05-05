import React from 'react';
import { Box } from '../Box';
import { About, Contact, Schedule } from './components';

export interface BarberShopInfoCard {
  about: string;
  phones: string[];
  schedule: {
    close: string;
    open: string;
    dayName: string;
    isClosed: boolean;
  }[];
}

export interface BarberShopInfoCardPropsProps {
  data: BarberShopInfoCard;
}

export function BarbershopDetailsCard({ data }: BarberShopInfoCardPropsProps) {
  return (
    <Box pt="s12">
      <About about={data.about} />

      <Contact phones={data.phones} />

      <Schedule schedule={data.schedule} />
    </Box>
  );
}
