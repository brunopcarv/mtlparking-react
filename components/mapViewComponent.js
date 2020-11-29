import React, { Component } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from "react-native";

export default class MapViewComponent extends Component {
  state = {
    mapRegion: {
      latitude: 45.5017,
      longitude: -73.5673,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };

  handleMapRegionChange = (mapRegion) => {
    this.setState({ mapRegion });
    console.log(this.state);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={this.state.mapRegion}
          onRegionChangeComplete={this.handleMapRegionChange}
        >
          <Marker
            coordinate={{
              latitude: this.state.mapRegion.latitude,
              longitude: this.state.mapRegion.longitude,
            }}
          />
        </MapView>

        <Text>Montreal Parking Map</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
