import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '@screens';

export type AppStackParamList = {
  HomeScreen: undefined;
  ScheduleScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

interface Props {
  initialRouteName?: keyof AppStackParamList;
}

export function AppStack({ initialRouteName = 'ScheduleScreen' }: Props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName={initialRouteName}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}
