import { setStatusBarHidden, StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import Screen from "../components/Screen";
import {
  Button,
  StatusBarProps,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { MutableRefObject } from "react";

export default function App() {
  // const statusBar: MutableRefObject<StatusBarProps> = useRef(null)
  const [, sBTogVis] = useState(false);
  const [brands, setBrands] = useState([{ brand: "" }]);
  useEffect(() => {
    setBrands(require("../assets/car-list.json"));
    console.log(brands.length);
  }, []);
  return (
    <Screen style={styles.container}>
      <Button
        title="Toggle StatusBar"
        onPress={() =>
          sBTogVis((visibile) => {
            setStatusBarHidden(!visibile, "slide");
            return !visibile;
          })
        }
      />
      <TextInput multiline value={brands.map((item) => item.brand).join()} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
