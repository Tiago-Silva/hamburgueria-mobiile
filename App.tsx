import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';
import { Routes } from './src/routes';
import { AuthProvider } from './src/hooks/auth';
import * as SecureStorage from 'expo-secure-store';
import { Provider } from 'react-redux';
import store from './src/store';

const storageKey = process.env.EXPO_PUBLIC_USER_STORAGE_KEY;


export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    prepareApp();
  }, []);

  const prepareApp = async () => {
    try {
      // const flag = await AsyncStorage.getItem('operationDone');

      // await AsyncStorage.removeItem('itemList');

      await AsyncStorage.clear();
      // await SecureStorage.deleteItemAsync(storageKey + 'userGoogle');

      // await AsyncStorage.setItem('operationDone', 'true');
      // if (!flag) {

      // } else {
      //   console.log('Operação já realizada anteriormente.');
      // }

      setIsAppReady(true);
    } catch (error) {
      console.error('Erro ao realizar a operação no AsyncStorage:', error);
    }
  };

  if (!isAppReady) {
    return null;
  }

  return (

    <ThemeProvider theme={theme}>

      <GestureHandlerRootView style={{ flex: 1 }}>

        <Provider store={store}>

          <AuthProvider>

            <StatusBar 
              backgroundColor='#2a2e34'
              barStyle="light-content"
            />
            <Routes />

          </AuthProvider>

        </Provider>
        
            
      </GestureHandlerRootView>

    </ThemeProvider>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#F0F2F5',
    margin: 0,
    padding: 0
  },
});
