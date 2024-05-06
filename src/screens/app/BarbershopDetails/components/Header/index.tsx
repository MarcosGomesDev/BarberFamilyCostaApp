import { Box, Button } from '@components';
import { useNavigation } from '@react-navigation/native';
import { Dimensions, Image } from 'react-native';

interface HeaderDetailsProps {
  image: string;
}

export function HeaderDetails({ image }: HeaderDetailsProps) {
  const navigation = useNavigation();

  return (
    <Box position="relative">
      <Box
        position="absolute"
        zIndex={20}
        mt="s40"
        ml="s20"
        shadowOffset={{ width: 0, height: 9 }}
        shadowOpacity={0.22}
        shadowRadius={10.24}
        elevation={13}
        shadowColor="white">
        <Button
          icon
          iconName="arrowLeft"
          title=""
          onPress={() => navigation.goBack()}
          preset="default"
          height={40}
          width={45}
        />
      </Box>
      <Image
        source={{
          uri: image,
        }}
        height={Dimensions.get('window').height / 3.5}
      />
    </Box>
  );
}
