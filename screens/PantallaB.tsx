import { View, Text, Button, StyleSheet } from 'react-native';

export default function PantallaB({ navigation }: any) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Segunda Pantalla </Text>
      <Text style={styles.subtitle}> Navegación con Stack ;) </Text>

      <View style={styles.buttonContainer}>
        <Button title="Ir a Pantalla C" onPress={() => navigation.navigate('PantallaC')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#111827',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 17,
    color: '#D1D5DB',
    marginBottom: 40,
  },

  buttonContainer: {
    width: '80%',
    borderRadius: 10,
    overflow: 'hidden',
  },

});