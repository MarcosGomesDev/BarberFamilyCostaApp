import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen } from '@screens';

export type AuthStackParamList = {
  SignInScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="SignInScreen">
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
    </Stack.Navigator>
  );
}
