import React from "react";
import { ImageBackground, Image, StyleSheet, Text, View } from "react-native";
import backgroundImage from "../assets/background.jpg";
import logo from "../assets/logo-red.png";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.tagLine}>Sell what you dont need</Text>

        <View style={styles.buttonRed} />
        <View style={styles.buttonBlue} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center", // main axis
    alignItems: "center", // secondary axis
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center", // main axis
    alignItems: "center", // secondary axis
  },

  tagLine: {
    position: "absolute",
    top: 290,
  },

  logo: {
    width: 120,
    height: 120,
    position: "absolute",
    top: 120,
  },

  buttonRed: {
    backgroundColor: "#fc5c65",
    width: "100%",
    height: 75,
    position: "absolute",
    bottom: 75,
  },
  buttonBlue: {
    backgroundColor: "#4ECDC4",
    width: "100%",
    height: 75,
    position: "absolute",
    bottom: 0,
  },
});
