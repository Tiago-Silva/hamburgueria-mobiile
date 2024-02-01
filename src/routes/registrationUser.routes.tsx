import React, { useEffect } from 'react';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { UserRegistration } from '../screens/UserRegistration';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../hooks/auth';


const Stack = createStackNavigator();

type RootStackParamList = {
  App: undefined;
  Auth: undefined;
  // Adicione outras rotas aqui...
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'App'>;

export const RegistrationUserRoutes = () => {
  const navigation = useNavigation<NavigationProp>();
  const { userGoogle, token } = useAuth();

  useEffect(() => {
    if (userGoogle.id && userGoogle.id.length > 2 && token && token.length > 4) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'App' }],
      });
    } else if (!userGoogle || userGoogle.id === undefined || userGoogle.id === null || userGoogle.id.length < 2) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Auth' }],
      });
    }
  }, [userGoogle, token]);

  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Cadastro"
        component={UserRegistration}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}