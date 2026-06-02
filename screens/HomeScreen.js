import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bienvenido ;)
      </Text>

      <Text style={styles.subtitle}> Pantalla Principal </Text>

      <View style={styles.buttonContainer}>
        <Button title="Ir a Pantalla B" onPress={() => navigation.navigate('PantallaB')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    color: '#CBD5E1',
    marginBottom: 40,
  },

  buttonContainer: {
    width: '80%',
    borderRadius: 10,
    overflow: 'hidden',
  },

});