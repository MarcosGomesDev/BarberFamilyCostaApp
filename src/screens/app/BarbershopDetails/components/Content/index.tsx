import { Box, Icon, Text } from '@components';

interface ContentProps {
  data: {
    name: string;
    address: string;
    rating: number;
    totalRatings: number;
  };
}

export function Content({ data }: ContentProps) {
  return (
    <Box
      paddingHorizontal="s16"
      gap="s16"
      pb="s14"
      borderBottomColor="gray1"
      borderBottomWidth={1}
      pt="s20"
      justifyContent="center"
      paddingBottom="s32">
      <Text bold preset="paragraphLarge">
        {data.name}
      </Text>
      <Box flexDirection="row" alignItems="center" gap="s8">
        <Icon name="pinMap" color="primary" />
        <Text preset="paragraphSmall"> {data.address}</Text>
      </Box>
      <Box flexDirection="row" alignItems="center" gap="s8">
        <Icon name="star" color="primary" />
        <Text preset="paragraphSmall">
          {' '}
          {data.rating} ({data.totalRatings} avaliações)
        </Text>
      </Box>
    </Box>
  );
}
