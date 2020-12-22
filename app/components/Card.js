import { color } from "@storybook/addon-knobs";
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import AppText from "../components/AppText";
import colors from "../congif/colors";

function Card({ title, subTitle, image }) {
  return (
    <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <View style={styles.details}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    // flex: 1,
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
