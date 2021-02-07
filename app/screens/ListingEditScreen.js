import React, { useEffect, useMemo, useRef, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import * as Yup from "yup";

import {
  Form,
  FormField,
  FormPicker as Picker,
  FormPickerSelect,
  FormSwitch,
  SubmitButton,
  FormImagePicker,
} from "../components/forms";
import ColorPickerItem from "../components/ColorPickerItem";
import Screen from "../components/Screen";
import defaultStyles from "../config/styles";
import Form2PickerSelect from "../components/forms/Form2PickerSelect";

// import useLocation from "../hooks/useLocation";

const currentYear = new Date().getFullYear();
const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  year: Yup.number().required().max(currentYear).label("Manufacturing year"),
  fuelType: Yup.string().required().label("Fuel type"),
  color: Yup.object().required().nullable().label("Color"),
  brand: Yup.number().moreThan(0).label("Brand"),
  model: Yup.number().moreThan(0).label("Model"),
  damaged: Yup.boolean(),
  description: Yup.string()
    .when("damaged", (damaged, schema) =>
      damaged ? schema.required() : schema
    )
    .label("Description"),
});

const colors = [
  {
    backgroundColor: "#fc5c65",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    value: 9,
  },
];
const fuelTypes = "Petrol,Diesel,LPG,Hybrid,Electric,Other"
  .split(",")
  .map((type) => ({ label: type, value: type }));

function ListingEditScreen() {
  // const location = useLocation();
  const [brands, setBrands] = useState([{ brand: "", models: [] }]);
  useEffect(() => {
    setBrands(require("../assets/car-list.json"));
  }, []);
  // const [models, setModels] = useState([]);
  // const onBrandChanged = (index) => {
  //   setModels(brands[index || 0].models);
  //   console.log(index);
  // };
  // useEffect(() => {
  //   setBrands(require("../assets/car-list.json"));
  // }, []);
  // const brandsItems = useMemo(
  //   () => brands.map(({ brand }, index) => ({ label: brand, value: index })),
  //   [brands]
  // );
  // const modelsItems = useMemo(
  //   () => models.map((model, index) => ({ label: model, value: index })),
  //   [models]
  // );

  return (
    <Screen style={styles.container}>
      <ScrollView>
        <Form
          initialValues={{
            title: "",
            brand: 0,
            model: 0,
            year: "", //new Date().getFullYear().toString()
            mileage: "",
            fuelType: "",
            color: null,
            damaged: false,
            description: "",
            images: [],
          }}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
          }}
          validationSchema={validationSchema}
        >
          <FormField maxLength={80} name="title" label="Title" />
          <Form2PickerSelect
            items={brands}
            fields={["brand", "models"]}
            placeholders={["Pick a brand first", "Pick also a model"]}
            names={["brand", "model"]}
            width={185}
          />
          {/* <FormPickerSelect
            items={brandsItems}
            name="brand"
            placeholder={{
              label: "Pick a brand first",
              value: "",
              color: defaultStyles.colors.medium,
            }}
            width={180}
            onDone={onBrandChanged}
          />
          <FormPickerSelect
            items={modelsItems}
            name="model"
            placeholder={{
              label: "Pick also a model",
              value: "",
              color: defaultStyles.colors.medium,
            }}
            width={180}
            onDone={onBrandChanged}
          /> */}
          <FormField
            selectTextOnFocus
            keyboardType="numeric"
            maxLength={4}
            name="year"
            label="Manufacturing year"
            placeholder="Year"
            width={120}
          />
          <FormField
            keyboardType="numeric"
            maxLength={7}
            name="mileage"
            label="Mileage"
            width={120}
          />
          <FormPickerSelect
            items={fuelTypes}
            name="fuelType"
            placeholder={{
              label: "Fuel type",
              value: "",
              color: defaultStyles.colors.medium,
            }}
            width={120}
          />
          <Picker
            items={colors}
            name="color"
            numberOfColumns={3}
            PickerItemComponent={ColorPickerItem}
            placeholder="Colors"
            width="50%"
          />
          <FormSwitch name="damaged" label="Vehicle damaged">
            <FormField
              maxLength={5000}
              multiline
              name="description"
              numberOfLines={3}
              label="Description"
            />
            <FormImagePicker name="images" />
          </FormSwitch>
          <SubmitButton title="Post" />
        </Form>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
