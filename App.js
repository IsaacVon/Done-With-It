import React, { useEffect, useState } from "react";
import { Button, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import MyAccountScreen from "./app/screens/MyAccountScreen"
import MessagesScreen from "./app/screens/MessagesScreen"
import ListingsScreen from "./app/screens/ListingsScreen"

import Screen from "./app/components/Screen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button title="click" onPress={() => navigation.navigate("tweetDetails")} />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="ViewTweets"
      onPress={() => navigation.navigate("TweetDetails")}
    />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweets Details {route.params.id}</Text>
  </Screen>
);

const Account = ({ route }) => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator initialRouteName="Tweets">
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetails} />
  </Stack.Navigator>
);

const AccountNavigator = () => (
  <Stack.Navigator initialRouteName="Tweets">
    <Stack.Screen name="MyAccountScreen" component={MyAccountScreen} />
    <Stack.Screen name="ListingsScreen" component={ListingsScreen} />
    <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "grey",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name="Account" component={AccountNavigator} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
