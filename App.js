import React from "react";
import { ImageBackground, View } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import ListingsScreen from "./app/screens/ListingsScreen";

export default function App() {
  return <ListingsScreen />;
}
