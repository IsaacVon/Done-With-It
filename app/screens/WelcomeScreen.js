import React from "react";
import { ImageBackground, Image, StyleSheet, Text, View, Platform } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../congif/colors";
import backgroundImage from "../assets/background.jpg";
import logo from "../assets/logo-red.png";

export default function App() {
  return (
    <ImageBackground
      blurRadius={Platform.OS === "android" ? 2 : 10}
      source={backgroundImage}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Sign In"
          color="primary"
          onPress={() => console.log("button working")}
        />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => console.log("button working")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    padding: 20,
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
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
