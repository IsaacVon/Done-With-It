import React from "react";
import {
  ImageBackground,
  ImageResizeMode,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

import colors from "../config/colors";
import itemImage from "../assets/chair.jpg";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color={colors.white} size={30} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.white}
          size={30}
        />
      </View>
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
    position: "absolute",
    top: 50,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 50,
    right: 30,
  },
});
