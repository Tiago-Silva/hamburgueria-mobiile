import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Buttom } from './src/components/Buttom';

export default function App() {
  return (
    <View style={styles.container}>
      <Buttom 
        title='Realize Login antes'
        borderColor='#000'
        backgroundColor='#F00'
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
