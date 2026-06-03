import React, { useState } from "react";
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, Alert} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Formik } from "formik";
import * as Yup from "yup";

import HomeScreen from "./screens/HomeScreen";
import PantallaB from "./screens/PantallaB";
import PantallaC from "./screens/PantallaC";

const Stack = createNativeStackNavigator();

const LoginSchema = Yup.object().shape({
  usuario: Yup.string().required("El usuario es obligatorio"),
  email: Yup.string().email("Correo electrónico inválido") .required("El correo es obligatorio"),
  password: Yup.string().min(4, "Mínimo 4 caracteres") .required("La contraseña es obligatoria"),
  codigo: Yup.number().typeError("Solo números").required("El código es obligatorio"),
});

/* ================= LOGIN ================= */

const Login = ({ navigation }) => {
  const [focusedField, setFocusedField] = useState(null);

  const inputStyle = (field) => [
    styles.input,
    focusedField === field && styles.inputFocused,
  ];

  return (
    <View style={styles.container}>
      {/* Zona de Branding */}
      <View style={styles.logoContainer}>
        <Image
          source={require("./assets/icon/icon.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Iniciar Sesión</Text>

        <Text style={styles.subtitle}>Bienvenido a la aplicación</Text>
      </View>

      {/* Zona de Formulario */}
      <Formik
        initialValues={{
          usuario: "",
          email: "",
          password: "",
          codigo: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={() => navigation.navigate("Home")}
        > 
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.formContainer}>

        <TextInput
          style={inputStyle("usuario")}
          placeholder="Usuario"
          placeholderTextColor="#94A3B8"
          value={values.usuario}
          onChangeText={handleChange("usuario")}
          onBlur={handleBlur("usuario")}
        />
        {errors.usuario && touched.usuario && (
          <Text style={styles.errorText}>{errors.usuario}</Text>
        )}

        <TextInput
          style={inputStyle("email")}
          placeholder="Correo electrónico"
          placeholderTextColor="#94A3B8"
          value={values.email}
          onChangeText={handleChange("email")}
          keyboardType="email-address" 
          autoCapitalize="none"
          autoCorrect={false}
          onFocus={() => setFocusedField("email")}
          onBlur={() => {
            setFocusedField(null);
            handleBlur("email");
          }}
        />

        {touched.email && errors.email && (
          <Text style={styles.errorText}>
            {errors.email}
          </Text>
        )}

        <TextInput
          style={inputStyle("password")}
          placeholder="Contraseña"
          placeholderTextColor="#94A3B8"
          value={values.password}
          onChangeText={handleChange("password")}
          secureTextEntry
          keyboardType="default"
          onFocus={() => setFocusedField("password")}
          onBlur={() => {
            setFocusedField(null);
            handleBlur("password");
          }}
        />

        {touched.password && errors.password && (
          <Text style={styles.errorText}>
            {errors.password}
          </Text>
        )}

        <TextInput
          style={inputStyle("codigo")}
          placeholder="Código de acceso"
          placeholderTextColor="#94A3B8"
          value={values.codigo}
          onChangeText={handleChange("codigo")}
          keyboardType="default"
          autoCapitalize="none"
          onFocus={() => setFocusedField("codigo")}
          onBlur={handleBlur("codigo")}
        />

        {touched.codigo && errors.codigo && (
          <Text style={styles.errorText}>
            {errors.codigo}
          </Text>
        )}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
      </View>
        )}
      </Formik>
    </View>
    
    
  );
};

/* ================= APP ================= */

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
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

  inputFocused: {
    borderColor: "#0f009bff",
    borderWidth: 2,
  },

  inputError: {
  borderColor: "#E74C3C",
  borderWidth: 2,
  },

  errorText: {
  color: "#E74C3C",
  fontSize: 12,
  marginTop: -10,
  marginBottom: 10,
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
