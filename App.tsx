import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
            {/* Zona de Branding */}
            
      <View style={styles.logoContainer}>
                
        <Image
          source={require("./assets/icon/icon.png")}
          style={styles.logo}
          resizeMode="contain"
        />
              
      </View>
            {/* Zona de Formulario — Parte 2 */}
            
      <View style={styles.formContainer} />
          
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#1a1a2e",
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 180,
    height: 180,
  },
  formContainer: {
    flex: 1,
  },
});

export default Login;
