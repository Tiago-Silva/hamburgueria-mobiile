import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Products } from '../screens/Products';
import { Cart } from '../screens/Cart';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../hooks/auth';

const Tab = createBottomTabNavigator();

type RootStackParamList = {
  Auth: undefined;
  Registration: undefined;
  // Adicione outras rotas aqui...
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Auth'>;

export function AppRoutes() {
  const navigation = useNavigation<NavigationProp>();
  const { userGoogle, token } = useAuth();

  useEffect(() => {
    if (!userGoogle || userGoogle.id === undefined || userGoogle.id === null) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Auth' }],
      });
    } else if (!token) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Registration' }],
      });
    }
  }, [userGoogle, token]);

  return (
    <Tab.Navigator
      screenOptions={
        {
          headerShown: false,
          tabBarActiveTintColor: '#F6C015',
          tabBarInactiveTintColor: '#969cB2',
          tabBarLabelPosition: 'beside-icon',
          tabBarStyle: {
            height: 45,
            paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          }
        }
      }
    >
      <Tab.Screen 
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

      <Tab.Screen 
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

      <Tab.Screen 
        name='Carrinho'
        component={Cart}
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
    </Tab.Navigator>
  );
}