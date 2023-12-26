import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Buttom } from './src/components/Buttom';
import { Input } from './src/components/Input';
import { Card } from './src/components/Card';
import { Category } from './src/components/Category';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Buttom 
        backgroundColor='#F00'
        borderColor='#000'
        title='Realize o login antes'
      />
      <Input 
        title='Seu nome'
      /> */}
      {/* <Card 
        title='Miami'
        amount={12.00}
        urlImage={require('./assets/Frame39.png')}
      /> */}

      <Category />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
