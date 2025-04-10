import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from './AppStack';
import { AuthStackParamList } from './AuthStack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList {}
  }
}

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;

export type AppScreenProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>;
