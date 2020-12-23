import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import colors from "../congif/colors";
import ListItem from "../components/ListItem";

function ListingDetailsScreen({ title, subTitle, image }) {
  return (
    <View>
      <Image source={image} style={styles.image} />
      <View style={styles.details}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>{subTitle}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Isaac Householder"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 7,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer:{
    marginVertical: 30,
  }
});

export default ListingDetailsScreen;
