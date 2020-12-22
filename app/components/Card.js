import { color } from "@storybook/addon-knobs";
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import colors from "../congif/colors";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style={styles.image} source={image} />
      <Text>{title}</Text>
      <Text>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    marginHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});

export default Card;
