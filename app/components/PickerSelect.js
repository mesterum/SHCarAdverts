import React from "react";
import { View, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import defaultStyles from "../config/styles";

// { items, onValueChange, value, placeholder, onDonePress, width }
function PickerSelect({ width, refPS, ...params }) {
  return (
    <>
      <View width={width}>
        <RNPickerSelect
          ref={refPS}
          {...params}
          style={{
            ...pickerSelectStyles,
            // inputIOSContainer: { width },
            // inputAndroidContainer: { width },
          }}
          useNativeAndroidPickerStyle={false}
          // textInputProps={{
          //   // placeholderTextColor: defaultStyles.colors.medium,
          //   style: defaultStyles.text,
          //   // width,
          //   // textAlign: "right",
          // }}
        />
      </View>
    </>
  );
}
const customStyle = {
  ...defaultStyles.text,
  backgroundColor: defaultStyles.colors.light,
  borderRadius: 15,
  padding: 15,
  marginVertical: 10,
  minHeight: 60,
  textAlign: "left",
};
const pickerSelectStyles = StyleSheet.create({
  placeholder: {
    color: defaultStyles.colors.medium,
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    // borderWidth: 1,
    // borderColor: "gray",
    // borderRadius: 4,
    // color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
    ...customStyle,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    // borderWidth: 0.5,
    // borderColor: "purple",
    // borderRadius: 8,
    // color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
    ...customStyle,
  },
});

export default PickerSelect;
