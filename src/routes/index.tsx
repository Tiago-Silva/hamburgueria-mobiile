import React, { useEffect, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import { AuthRoutes  } from './auth.routes';
import { AppRoutes  } from './app.routes';

import { useAuth } from '../hooks/auth';
import { RegistrationUserRoutes } from './registrationUser.routes';
import * as SecureStorage from 'expo-secure-store';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SignIn } from '../screens/SignIn';

const storageKey = process.env.EXPO_PUBLIC_USER_STORAGE_KEY;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export const Routes = () => {
  
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="App" 
          component={AppRoutes}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Registration" 
          component={RegistrationUserRoutes}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Auth" 
          component={AuthRoutes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}