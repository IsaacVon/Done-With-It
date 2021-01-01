import React, { useEffect, useState } from "react";
import { Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

import Screen from "./app/components/Screen";
// import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  
  return (
    <ListingEditScreen />
  );
}
