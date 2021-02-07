import { StatusBar } from "expo-status-bar";
import React from "react";
import Screen from "./components/Screen";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <Screen style={{ backgroundColor: "gold" }}>
      <View style={styles.container}>
        <Text>Hello, world!</Text>
        <StatusBar style="auto" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
