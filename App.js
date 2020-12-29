import React, { useState } from "react";
import { ImageBackground, View, Text, TextInput } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListItem from "./app/components/ListItem";
import AppTextInput from "./app/components/AppTextInput";
import ListingsScreen from "./app/screens/ListingsScreen";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <Screen>
      <AppTextInput icon="email" placeholder="username"/>
    </Screen>
  );
}
