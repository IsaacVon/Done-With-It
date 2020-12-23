import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../congif/colors";

function MyAccountScreen(props) {
  return (
    <Screen backgroundColor={colors.light}>
      <View style={styles.accountContainer}>
        <ListItem
          title="Isaac Householder"
          subTitle="isaachouseholder@gmail.com"
          image={require("../assets/mosh.jpg")}
          backgroundColor={colors.white}
          onPress={() => console.log("Isaac Householder")}
        />
      </View>

      <View style={styles.listSpacer}>
        <ListItem
          title="My Listings"
          image={require("../assets/mosh.jpg")}
          backgroundColor={colors.white}
          onPress={() => console.log("My Listings")}
        />
        <ListItem
          title="My Messages"
          image={require("../assets/mosh.jpg")}
          backgroundColor={colors.white}
          onPress={() => console.log("My Messages")}
        />
      </View>
      <ListItem
        title="Log Out"
        image={require("../assets/mosh.jpg")}
        backgroundColor={colors.white}
        onPress={() => console.log("Log Out")}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  listSpacer: {
    marginVertical: 50,
  },
});

export default MyAccountScreen;
