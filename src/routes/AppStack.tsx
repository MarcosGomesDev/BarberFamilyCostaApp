import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BarbershopDetailsScreen, HomeScreen } from '@screens';

export type AppStackParamList = {
  HomeScreen: undefined;
  BarbershopDetailsScreen: undefined;
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
      }}
      initialRouteName={initialRouteName}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="BarbershopDetailsScreen"
        component={BarbershopDetailsScreen}
      />
    </Stack.Navigator>
  );
}
