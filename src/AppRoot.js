import React, { useState } from "react";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import Navigation from "./navigation";

// console.disableYellowBox = true

const AppRoot = props => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={handleFinishLoading(setIsLoading)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <Navigation />
      </View>
    );
  }
};

async function loadResourcesAsync() {
  await Font.loadAsync({
    montserratLight: require("./assets/fonts/MontserratLight.ttf"),
    montserratRegular: require("./assets/fonts/MontserratRegular.ttf"),
    montserratMedium: require("./assets/fonts/MontserratMedium.ttf"),
    robotoRegular: require("./assets/fonts/RobotoRegular.ttf"),
    robotoMedium: require("./assets/fonts/RobotoMedium.ttf")
  });
}

function handleLoadingError(error) {
  // report Error to service like Sentry
  console.error(error);
}

function handleFinishLoading(setIsLoading) {
  setIsLoading(false);
}

export default AppRoot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  }
});
