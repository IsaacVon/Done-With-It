import React from "react";
import { View } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/listingDetailsScreen";

export default function App() {
  return (
    <>
      <ListingDetailsScreen
        title="Red jacket for sale"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
    </>
  );
}
