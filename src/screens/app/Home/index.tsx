import { Box, Icon, Screen, SearchBar } from '@components';
import { BarberShop, Reservation } from '@interfaces';
import React from 'react';
import { Recommendeds, Schedules, WelcomeUser } from './components';
// import { BarberOptions, Schedules, SearchBar, WelcomeUser } from './components';

function Header() {
  return (
    <Box height={50} justifyContent="center" backgroundColor="gray1" mx="s14">
      <Icon size={28} name="logo" color="white" />
    </Box>
  );
}

const list: BarberShop[] = [
  {
    id: '1',
    name: 'Barbearia do Zé',
    image:
      'https://graces.com.br/wp-content/uploads/2019/02/o-que-nao-pode-faltar-na-sua-barbearia-equipamentos.jpg',
    address: 'Avenida São Sebastião, 357, São Paulo',
  },
  {
    id: '2',
    name: 'Barbearia do Zé',
    image:
      'https://classic.exame.com/wp-content/uploads/2020/05/whatsapp-image-2020-05-12-at-10.47.30.jpg?quality=70&strip=info&w=1024',
    address: 'Rua Castro Alves, 331, São Paulo',
  },
  {
    id: '3',
    name: 'Barbearia do Zé',
    image:
      'https://graces.com.br/wp-content/uploads/2019/02/o-que-nao-pode-faltar-na-sua-barbearia-equipamentos.jpg',
    address: 'Rua Sete de Setembro, 428, São Paulo',
  },
];

const data: Reservation | null = {
  status: 'CONFIRMED',
  service: {
    id: '1',
    name: 'Corte de Cabelo',
    price: 45,
    image: 'https://i.imgur.com/5Xg6zQg.png',
  },
  barbershop: {
    id: '1',
    name: 'Barbearia do Zé',
    image:
      'https://graces.com.br/wp-content/uploads/2019/02/o-que-nao-pode-faltar-na-sua-barbearia-equipamentos.jpg',
  },
  date: new Date('2024-02-09T19:45:00'),
};

export function HomeScreen() {
  return (
    <Screen
      scrollable
      isHome
      hasHeader
      HeaderComponent={<Header />}
      style={{ paddingHorizontal: 0 }}>
      <WelcomeUser />

      <SearchBar placeholder="Buscar" />

      <Schedules data={data} />

      <Recommendeds data={list} />
    </Screen>
  );
}
