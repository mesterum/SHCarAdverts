import React from "react";
import Constants from "expo-constants";
import {
  StyleSheet,
  SafeAreaView,
  View,
  ViewStyle,
  StyleProp,
  // StatusBar as sb,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export interface Props {
  //  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Screen: React.FC<Props> = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    // paddingTop: Constants.statusBarHeight /*  - (sb.currentHeight ?? 0) */,
    flex: 1,
  },
  view: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
