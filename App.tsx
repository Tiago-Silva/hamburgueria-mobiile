import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Buttom } from './src/components/Buttom';
import { Input } from './src/components/Input';

export default function App() {
  return (
    <View style={styles.container}>
      <Input
        title='Seu nome'
      />
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
