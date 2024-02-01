import React, { useEffect, useState } from 'react';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuth } from '../hooks/auth';
import * as SecureStorage from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';

const storageKey = process.env.EXPO_PUBLIC_USER_STORAGE_KEY;

const Stack = createStackNavigator();

type RootStackParamList = {
  App: undefined;
  Registration: undefined;
  // Adicione outras rotas aqui...
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'App'>;


export const AuthRoutes = () => {
  const navigation = useNavigation<NavigationProp>();
  const { userGoogle, token } = useAuth();

  useEffect(() => {
    if (userGoogle.id && userGoogle.id.length > 2 && token && token.length > 4) {
      navigation.navigate('App');
    } else if (userGoogle.id && userGoogle.id.length > 2) {
      navigation.navigate('Registration');
    }
  }, [userGoogle, token]);

  return(
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}