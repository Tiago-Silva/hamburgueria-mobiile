import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Products } from './src/screens/Products';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queyClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queyClient}>
      
      <View style={styles.container}>
        <StatusBar 
          backgroundColor='#5636D3'
          barStyle="light-content"
        />
        
        <Products />

      </View>

    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#F0F2F5',
    margin: 0
  },
});
