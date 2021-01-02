import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../congif/colors";
import Icon from "../components/Icon";


function MyAccountScreen(props) {
  const navigation = useNavigation();

  
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
          ImageComponent={
            <Icon
              name="format-list-bulleted"
              backgroundColor={colors.primary}
            />
          }
          backgroundColor={colors.white}
          onPress={() => console.log("My Listings")}
        />
        <ListItem
          title="My Messages"
          ImageComponent={
            <Icon name="email" backgroundColor={colors.secondary} />
          }
          backgroundColor={colors.white}
          onPress={() => navigation.navigate("MessagesScreen")}

        />
      </View>
      <ListItem
        title="Log Out"
        ImageComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
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
