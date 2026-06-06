import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function HomeScreen({ navigation }) {

  const cerrarSesion = async () => {
    try {
      await signOut(auth);
      Alert.alert("Sesión cerrada", "Has cerrado sesión exitosamente.");
      navigation.replace("Login");
    } catch (error) {
      Alert.alert("Error", "No se pudo cerrar sesión. Inténtalo de nuevo.");
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bienvenido ;)
      </Text>

      <Text style={styles.subtitle}> Pantalla Principal </Text>

      <View style={styles.buttonContainer}>
        <Button title="Ir a Pantalla B" onPress={() => navigation.navigate('PantallaB')} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Cerrar Sesión" color="#c76464ff" onPress={cerrarSesion} />
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
    marginBottom: 15,
  },

});