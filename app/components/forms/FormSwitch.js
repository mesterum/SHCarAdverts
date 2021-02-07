import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import AppText from "../Text";
import { StyleSheet, Switch, View } from "react-native";
// import { TouchableWithoutFeedback } from "react-native";

function FormSwitch({
  name,
  width,
  label,
  placeholder,
  children,
  ...otherProps
}) {
  const {
    // handleChange,
    errors,
    touched,
    values,
    setFieldValue,
  } = useFormikContext();
  if (label && !placeholder) placeholder = label;
  // console.log(children);
  return (
    <>
      <View style={styles.switchRow}>
        {placeholder && (
          // <TouchableWithoutFeedback
          //   onPress={(value) => setFieldValue(name, value)}
          //   hitSlop={10}
          // >
          <AppText style={{ marginRight: 15 }}>{placeholder}:</AppText>
          // </TouchableWithoutFeedback>
        )}
        <Switch
          onValueChange={(value) => setFieldValue(name, value)}
          value={values[name]}
          {...otherProps}
        />
      </View>

      <ErrorMessage error={errors[name]} visible={touched[name]} />
      {values[name] && children}
    </>
  );
}
const styles = StyleSheet.create({
  switchRow: {
    flexDirection: "row",
    alignContent: "space-between",
    // minHeight: 25,
  },
});
export default FormSwitch;
