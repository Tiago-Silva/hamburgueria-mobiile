import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserRegistration } from '../screens/UserRegistration';


const { Navigator, Screen } = createStackNavigator();

export const RegistrationUserRoutes = () => {
  return(
    <Navigator>
      <Screen
        name="SignIn"
        component={UserRegistration}
        options={{ headerShown: false }}
      />
    </Navigator>
  )
}