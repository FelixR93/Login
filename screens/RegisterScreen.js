import React from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet} from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email("Correo inválido")
    .required("Correo obligatorio"),

  password: Yup.string()
    .min(6, "Mínimo 6 caracteres")
    .required("Contraseña obligatoria"),
});

export default function RegisterScreen({ navigation }) {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={RegisterSchema}
      onSubmit={async (values) => {
        try {

          await createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password
          );

          Alert.alert(
            "Éxito",
            "Usuario registrado correctamente"
          );

          navigation.navigate("Login");

        } catch (error) {

          Alert.alert(
            "Error",
            error.message
          );

        }
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>

          <Text style={styles.title}>
            Crear Cuenta
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Correo"
            value={values.email}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
          />

          {errors.email && touched.email && (
            <Text style={styles.error}>
              {errors.email}
            </Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={values.password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
          />

          {errors.password && touched.password && (
            <Text style={styles.error}>
              {errors.password}
            </Text>
          )}

          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>
              Registrarme
            </Text>
          </TouchableOpacity>

        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b1e24ff",
    justifyContent: "center",
    padding: 30,
  },

  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },

  input: {
    backgroundColor: "#84878bff",
    color: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },

  error: {
    color: "red",
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 12,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});