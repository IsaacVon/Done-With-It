import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "../components/Card";

function Practice(props) {
  return (
    <Card
      title="Red jacket for sale"
      subTitle="$100"
      image={require("../assets/jacket.jpg")}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Practice;
