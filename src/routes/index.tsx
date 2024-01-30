import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes  } from './auth.routes';
import { AppRoutes  } from './app.routes';

import { useAuth } from '../hooks/auth';
import { RegistrationUserRoutes } from './registrationUser.routes';
import * as SecureStorage from 'expo-secure-store';

const storageKey = process.env.EXPO_PUBLIC_USER_STORAGE_KEY;


export const Routes = () => {
  const [tokenStorage, setTokenStorage] = useState('');
  const { userGoogle, token } = useAuth();

  useEffect(() => {
    async function loadUserStorageData() {
      if (token) {
        setTokenStorage(token);
      } else {
        const storageToken = await SecureStorage.getItem(storageKey + 'token');
        setTokenStorage(JSON.stringify(storageToken));
      }
    }

    loadUserStorageData();
  }, [])

  useEffect(() => {
    setTokenStorage(token);
  }, [token]);
  
  return(
    <NavigationContainer>
      {userGoogle.id 
        ? tokenStorage && tokenStorage.length > 4 ? <AppRoutes /> : <RegistrationUserRoutes />
        : <AuthRoutes />
      }

      {/* {
        tokenStorage && tokenStorage.length > 4 ? <AppRoutes /> : <RegistrationUserRoutes />
      } */}
    </NavigationContainer>
  );
}