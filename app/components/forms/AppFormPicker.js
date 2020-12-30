import React, { useState } from "react";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";
import ErrorMessge from "../forms/ErrorMessage";

function AppFormPicker({ items, name, placeholder, width }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        width={width}
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessge error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;