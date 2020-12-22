import React from "react";
import { View, StyleSheet } from "react-native";
import image from "../assets/jacket.jpg";
import Card from "../components/Card";

function Practice(props) {
  return (
      <Card title="title" subTitle="subTitle" image={image} />
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
