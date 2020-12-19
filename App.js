import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  SafeAreaView,
  Button,
  Alert,
  StatusBar,
  Platform,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function App() {
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "100%",
          height: landscape ? "100%" : "30%",
        }}
      ></View>
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
