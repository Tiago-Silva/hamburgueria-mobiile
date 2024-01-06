import React from 'react';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';
import { Products } from '../screens/Products';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {

  return (
    <Navigator
      screenOptions={
        {
          headerShown: false,
          tabBarActiveTintColor: '#FF872C',
          tabBarInactiveTintColor: '#969cB2',
          tabBarLabelPosition: 'beside-icon',
          tabBarStyle: {
            height: 45,
            paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          }
        }
      }
    >
      <Screen 
        name='Produtos'
        component={Products}
        options={
          {
            tabBarIcon: (({ size, color }) =>
              <MaterialIcons 
                name='add-shopping-cart'
                size={size}
                color={color}
              />
            )
          }
        }
      />

      <Screen 
        name='Pedidos'
        component={Products}
        options={
          {
            tabBarIcon: (({ size, color }) =>
              <MaterialIcons 
                name='attach-money'
                size={size}
                color={color}
              />
            )
          }
        }
      />

      <Screen 
        name='Carrinho'
        component={Products}
        options={
          {
            tabBarIcon: (({ size, color }) =>
              <MaterialIcons 
                name='shopping-cart'
                size={size}
                color={color}
              />
            )
          }
        }
      />
    </Navigator>
  );
}