import { Box } from '@components';
import { FormSignIn } from './components';
import { BackgroundImageContainer } from './components/BackgroundImageContainer';

export function SignInScreen() {
  return (
    <BackgroundImageContainer
      source={require('../../../assets/images/background.jpg')}
      resizeMode="cover">
      <Box flex={1} justifyContent="flex-end">
        <FormSignIn />
      </Box>
    </BackgroundImageContainer>
  );
}
