import React from "react";
import { useFormikContext } from "formik";

import TextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";
import AppText from "../Text";

function AppFormField({ name, width, label, placeholder, ...otherProps }) {
  const {
    setFieldTouched,
    handleChange,
    errors,
    touched,
    values,
  } = useFormikContext();
  if (label && !placeholder) placeholder = label;
  return (
    <>
      {label && <AppText style={{ marginTop: 15 }}>{label}:</AppText>}
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        value={values[name]}
        width={width}
        placeholder={placeholder}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
