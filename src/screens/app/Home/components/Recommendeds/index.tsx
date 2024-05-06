import { BarberShopCard, Box, Text } from '@components';
import { BarberShop } from '@interfaces';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native';

interface RecommendedsProps {
  data: BarberShop[];
}

export function Recommendeds({ data }: RecommendedsProps) {
  const navigation = useNavigation();

  return (
    <Box mt="s16" pt="s20" mb="s10">
      <Text color="gray3" paddingLeft="s16" bold>
        RECOMENDADOS
      </Text>

      <FlatList
        data={data}
        horizontal
        keyExtractor={item => item.id}
        style={{ marginTop: 20 }}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Box width={15} />}
        renderItem={({ item, index }) => (
          <BarberShopCard
            onPress={() => navigation.navigate('BarbershopDetailsScreen')}
            data={item}
            style={{
              marginLeft: index === 0 ? 16 : 0,
              marginRight: index === data.length - 1 ? 16 : 8,
            }}
          />
        )}
      />
    </Box>
  );
}
