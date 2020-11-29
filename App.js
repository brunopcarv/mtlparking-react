import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import MapViewComponent from "./components/mapViewComponent.js";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapViewComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
