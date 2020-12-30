import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../congif/colors";

function ImageInput(props) {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("you need to enable permission to access the library");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setImageUri(result.uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  const deleteImage = () => {
    Alert.alert(
      "Delete",
      "Are you sure you want to delete this image?",
      [
        {
          text: "Cancel",
        
        },
        {
          text: "Delete",
          onPress: () => setImageUri(),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      {!imageUri && (
        <TouchableWithoutFeedback onPress={selectImage}>
          <MaterialCommunityIcons
            name="camera"
            size={35}
            color={colors.medium}
            style={styles.icon}
          />
        </TouchableWithoutFeedback>
      )}

      {imageUri && (
        <TouchableWithoutFeedback onPress={deleteImage}>
          <Image source={{ uri: imageUri }} style={styles.image} />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    height: 100,
    width: 100,
    borderRadius: 20,
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  icon: {},
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
