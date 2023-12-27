import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Products } from './src/screens/Products';
import { Header } from './src/components/Header';
import { Footer } from './src/components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Header />

      <Products />

      <Footer />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
