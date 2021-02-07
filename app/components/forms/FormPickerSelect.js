import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import { Platform } from "react-native";
import PickerSelect from "../PickerSelect";

function FormPickerSelect({ name, onDone, ...params }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  params.onValueChange =
    Platform.OS == "ios" || !onDone
      ? (value) => setFieldValue(name, value)
      : (value) => {
          setFieldValue(name, value);
          onDone(value);
        };

  return (
    <>
      {/* { items, width, onValueChange, placeholder, value, onDonePress } */}
      <PickerSelect {...params} onDonePress={onDone} value={values[name]} />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormPickerSelect;
