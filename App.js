import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.dummyText, {borderColor: 'blue'}]}>Another piece of Text</Text>
      <Text style={styles.dummyText}>Hello World!</Text>
      <Button title='Tap Me' />
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
  dummyText: {
    margin: 16,
    borderWidth: 2,
    borderColor: 'red',
    padding: 16
  }
});
