import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

function Practice(props) {
  return (
    <View style={styles.container}>
      <AppButton title="Dingus" color="secondary" onPress={() => console.log("button working")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Practice;
