import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import { Platform } from "react-native";
import PickerSelect from "../PickerSelect";

function Form2PickerSelect({
  names,
  fields,
  onDone,
  items,
  width,
  placeholders,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const value = names.map((name) => values[name]);
  const placeholder = placeholders.map((label) => ({ label, value: 0 }));
  // const [brands, setBrands] = useState([{ brand: "", models: [] }]);
  // useEffect(() => {
  //   setBrands(require("../assets/car-list.json"));
  // }, []);
  const [value0, setValue0] = useState(value[0]);
  const [value1, setValue1] = useState(value[1]);
  const items0 = useMemo(
    () =>
      items.map(({ [fields[0]]: label }, index) => ({
        label,
        value: index + 1,
      })),
    [items]
  );
  const items1 = useMemo(
    () =>
      value0 == 0
        ? []
        : items[value0 - 1][fields[1]].map((label, index) => ({
            label,
            value: index + 1,
          })),
    [value0]
  );
  const onValueChange0 = useCallback(
    Platform.OS == "ios" ? () => {} : setValue0,
    []
  );
  const onValueChange1 = useCallback(
    Platform.OS == "ios" ? () => {} : setValue1,
    []
  );
  const pickerSelect1 = useRef();

  useEffect(() => {
    setValue0(value[0]);
    setValue1(value[1]);
  }, value);
  useEffect(() => {
    setFieldValue(names[0], value0);
    setValue1(0);
    setFieldValue(names[1], 0);
    items1.length && pickerSelect1.current.togglePicker();
  }, [items1]);
  useEffect(() => {
    const value = [value0, value1];
    if (value0 == 0 || value1 == 0) {
      return;
    }
    setFieldValue(names[1], value1);
    onDone?.();
  }, [value1]);

  return (
    <>
      {/* { items, width, onValueChange, placeholder, value, onDonePress } */}
      <PickerSelect
        width={width}
        placeholder={placeholder[0]}
        items={items0}
        onValueChange={onValueChange0}
        onDonePress={setValue0}
        value={value0}
      />
      <ErrorMessage error={errors[names[0]]} visible={touched[names[0]]} />
      {items1.length != 0 && (
        <>
          <PickerSelect
            width={width}
            placeholder={placeholder[1]}
            items={items1}
            onValueChange={onValueChange1}
            onDonePress={setValue1}
            value={value1}
            refPS={pickerSelect1}
          />
          <ErrorMessage error={errors[names[1]]} visible={touched[names[1]]} />
        </>
      )}
      {/* <ErrorMessage error={errors[names]} visible={touched[names]} /> */}
    </>
  );
}

export default Form2PickerSelect;
