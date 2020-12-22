import React from "react";
import { ImageBackground, Image, StyleSheet, Text, View } from "react-native";

import colors from "../congif/colors";
import backgroundImage from "../assets/background.jpg";
import logo from "../assets/logo-red.png";

export default function App() {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonRed} />
      <View style={styles.buttonBlue} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonBlue: {
    backgroundColor: colors.secondary,
    width: "100%",
    height: 75,
  },
  buttonRed: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 75,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 120,
  },
  tagLine: {},
});
