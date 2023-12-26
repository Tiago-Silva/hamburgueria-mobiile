import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Buttom } from './src/components/Buttom';
import { Input } from './src/components/Input';
import { Card } from './src/components/Card';
import { Category } from './src/components/Category';
import { Products } from './src/screens/Products';

export default function App() {
  return (
    <View style={styles.container}>
      <Products />
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
