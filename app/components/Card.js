import { color } from "@storybook/addon-knobs";
import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
// import { Image } from "react-native-expo-image-cache";

import AppText from "../components/AppText";
import colors from "../congif/colors";

function Card({ title, subTitle, imageUrl, onPress }) {
  console.log("imageUrl:", imageUrl);
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View style={styles.details}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    marginBottom: 20,
    borderRadius: 20,
    overflow: "hidden",
  },

  details: {
    padding: 20,
  },

  image: {
    width: "100%",
    height: 200,
  },

  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default Card;
