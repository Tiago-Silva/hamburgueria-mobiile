import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Products } from './src/screens/Products';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';


export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    prepareApp();
  }, []);

  const prepareApp = async () => {
    try {
      // const flag = await AsyncStorage.getItem('operationDone');

      await AsyncStorage.removeItem('itemList');

      // await AsyncStorage.clear();

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
    
    <GestureHandlerRootView style={{ flex: 1 }}>

      <StatusBar 
        backgroundColor='#2a2e34'
        barStyle="light-content"
      />

      <NavigationContainer>

        <AppRoutes />
          
      </NavigationContainer>


    </GestureHandlerRootView>

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
