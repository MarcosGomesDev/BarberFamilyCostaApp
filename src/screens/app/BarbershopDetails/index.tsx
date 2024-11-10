import { Box, Button, Screen, ServiceCard } from '@components';
import React, { useState } from 'react';
import { Content, HeaderDetails } from './components';

const data = {
  barberShop: {
    id: '1',
    name: 'Barbearia do Zé',
    image:
      'https://graces.com.br/wp-content/uploads/2019/02/o-que-nao-pode-faltar-na-sua-barbearia-equipamentos.jpg',
    address: 'Avenida São Sebastião, 357, São Paulo',
    rating: 4.5,
    totalRatings: 100,
  },
  services: [],
};

const MenuType = {
  Service: 'Service',
  Information: 'Information',
} as const;

type MenuTypes = keyof typeof MenuType;

export function BarbershopDetailsScreen() {
  const [changeMenu, setChangeMenu] = useState<MenuTypes>('Service');

  function handleMenuChange(menu: MenuTypes) {
    setChangeMenu(menu);
  }

  return (
    <Screen
      scrollable
      style={{ paddingHorizontal: 0, paddingTop: 0 }}
      scrollEventThrottle={16}
      statusBarTranslucent>
      <HeaderDetails image={data.barberShop.image} />

      <Content data={data.barberShop} />

      <Box paddingHorizontal="s16" pt="s28">
        <Box flexDirection="row" alignItems="center" gap="s12" pb="s20">
          <Button
            title="Serviços"
            height={42}
            onPress={() => handleMenuChange('Service')}
            preset={changeMenu === 'Service' ? 'primary' : 'outline'}
          />
          <Button
            title="Informações"
            preset={changeMenu === 'Information' ? 'primary' : 'outline'}
            height={42}
            onPress={() => handleMenuChange('Information')}
          />
        </Box>
      </Box>

      {changeMenu === 'Service' ? (
        <Box paddingHorizontal="s16">
          {data.services.map((service, index) => (
            <ServiceCard key={index} data={service} />
          ))}
        </Box>
      ) : (
        // <BarbershopDetailsCard data={barbershopinfo} />
        <></>
      )}
    </Screen>
  );
}
