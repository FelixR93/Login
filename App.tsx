import React, { useState } from "react";
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, Alert,} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import PantallaB from "./screens/PantallaB";
import PantallaC from "./screens/PantallaC";

const Stack = createNativeStackNavigator();

/* ================= LOGIN ================= */

const Login = ({ navigation }: any) => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const iniciarSesion = () => {
    if (usuario === "" || password === "") {
      Alert.alert("Error", "Complete todos los campos");
    } else {
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.container}>

      {/* Zona de Branding */}
      <View style={styles.logoContainer}>

        <Image
          source={require("./assets/icon/icon.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>
          Iniciar Sesión
        </Text>

        <Text style={styles.subtitle}>
          Bienvenido a la aplicación
        </Text>

      </View>

      {/* Zona de Formulario */}
      <View style={styles.formContainer}>

        <TextInput
          style={styles.input}
          placeholder="Usuario"
          placeholderTextColor="#999"
          value={usuario}
          onChangeText={setUsuario}
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={iniciarSesion}
        >
          <Text style={styles.buttonText}>
            Ingresar
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
};

/* ================= APP ================= */

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{
          headerStyle: {
            backgroundColor: "#0F172A",
          },

          headerTintColor: "#FFFFFF",

          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },

          contentStyle: {
            backgroundColor: "#0F172A",
          },

        }}
      >

        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Inicio" }} />
        <Stack.Screen name="PantallaB" component={PantallaB} options={{ title: "Pantalla B" }} />
        <Stack.Screen name="PantallaC" component={PantallaC} options={{ title: "Pantalla C" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* ================= ESTILOS ================= */

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    paddingHorizontal: 30,
  },

  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 160,
    height: 160,
    marginBottom: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: 1,
  },

  subtitle: {
    fontSize: 15,
    color: "#94A3B8",
    marginTop: 8,
    textAlign: "center",
  },

  formContainer: {
    flex: 1,
    justifyContent: "center",
  },

  input: {
    backgroundColor: "#1E293B",
    color: "#FFFFFF",
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginBottom: 18,
    fontSize: 16,

    borderWidth: 1,
    borderColor: "#334155",
  },

  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },

});