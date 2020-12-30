import React from "react";
import { StyleSheet } from "react-native";

import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";

import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1200, backgroundColor: "red", icon: "apps" },
  { label: "Cars", value: 90, backgroundColor: "green", icon: "email" },
  { label: "Cameras", value: 850, backgroundColor: "blue", icon: "lock" },
  // { label: "Games", value: 1200, backgroundColor: "red", icon: "apps" },
  // { label: "Clothing", value: 90, backgroundColor: "green", icon: "email" },
  // { label: "Sports", value: 850, backgroundColor: "blue", icon: "lock" },
  // {
  //   label: "Movies & Music",
  //   value: 1200,
  //   backgroundColor: "red",
  //   icon: "apps",
  // },
  // { label: "Books", value: 90, backgroundColor: "green", icon: "email" },
  // { label: "Other", value: 850, backgroundColor: "blue", icon: "lock" },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          numberOfColumns={3}
          name="category"
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
