import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes  } from './auth.routes';
import { AppRoutes  } from './app.routes';

import { useAuth } from '../hooks/auth';
import { RegistrationUserRoutes } from './registrationUser.routes';
import { UserRegisterData } from '../interface/UserRegisterData';


export const Routes = () => {
  // const { userGoogle: userGoogle, user: UserData } = useAuth();
  const { userGoogle, token } = useAuth();
  
  return(
    <NavigationContainer>
      {userGoogle.id 
        ? token && token.length > 4 ? <AppRoutes /> : <RegistrationUserRoutes />
        : <AuthRoutes />
      }
    </NavigationContainer>
  );
}