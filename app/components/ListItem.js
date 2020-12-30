import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "../components/AppText";
import colors from "../congif/colors";

function ListItem({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  backgroundColor,
  ImageComponent,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={[styles.container, { backgroundColor: backgroundColor }]}>
          {ImageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.textContainer}>
            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}  numberOfLines={2}>{subTitle}</AppText>}
          </View>
          <MaterialCommunityIcons color={colors.medium} name="chevron-right" size={25} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "500",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
  },
  subTitle: {
    color: colors.medium,
  },
});
export default ListItem;
