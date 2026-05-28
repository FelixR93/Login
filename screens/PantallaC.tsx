import { View, Text, StyleSheet } from 'react-native';

export default function PantallaC() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Pantalla Final </Text>

      <Text style={styles.subtitle}> Llegamos a la Pantalla C ;) </Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#1E293B',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
  },

  subtitle: {
    fontSize: 18,
    color: '#CBD5E1',
  },

});