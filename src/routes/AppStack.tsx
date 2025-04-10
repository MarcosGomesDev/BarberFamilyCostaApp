import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BarbershopDetailsScreen, DarkModeScreen, HomeScreen } from '@screens';

export type AppStackParamList = {
  HomeScreen: undefined;
  BarbershopDetailsScreen: undefined;
  DarkModeScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

interface Props {
  initialRouteName?: keyof AppStackParamList;
}

export function AppStack({ initialRouteName = 'HomeScreen' }: Props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
        animation: 'fade',
      }}
      initialRouteName={initialRouteName}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="BarbershopDetailsScreen"
        component={BarbershopDetailsScreen}
      />
      <Stack.Screen name="DarkModeScreen" component={DarkModeScreen} />
    </Stack.Navigator>
  );
}
