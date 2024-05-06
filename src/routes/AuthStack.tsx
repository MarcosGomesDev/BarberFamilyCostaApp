import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '@screens';

export type AuthStackParamList = {
  LoginScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
}
