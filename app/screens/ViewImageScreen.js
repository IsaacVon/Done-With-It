import React from "react";
import {
  ImageBackground,
  ImageResizeMode,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

import colors from "../congif/colors";
import itemImage from "../assets/chair.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
      <Image resizeMode="contain" source={itemImage} style={styles.itemImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center", // main axis
    alignItems: "center", // secondary axis
  },

  itemImage: {
    width: "100%",
    height: "100%",
  },

  closeIcon: {
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    position: "absolute",
    top: 50,
    left: 30,
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    width: 50,
    height: 50,
    position: "absolute",
    top: 50,
    right: 30,
  },
});
