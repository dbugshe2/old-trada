import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import ImageIcon from "../components/primary/ImageIcon";

export class LandingScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center"
        }}
      >
        <ImageIcon name="logo" />

        <ActivityIndicator style={{marginVertical: 16}} animating color="#91CC42" />
      </View>
    );
  }
}

export default LandingScreen;
