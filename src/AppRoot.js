import React, { useState } from "react";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import {AuthState} from './context'
import Navigation from './navigation';

console.disableYellowBox = true

const AppRoot = props => {
  const [loadingState, setLoadingState] = useState(false);

  if (!loadingState && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={handleFinishLoading(setLoadingState)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AuthState>
            <Navigation />
        </AuthState>
      </View>
    )
  }
};

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      ...Ionicons.font,
      montserratLight: require("./assets/fonts/MontserratLight.ttf"),
      montserratRegular: require("./assets/fonts/MontserratRegular.ttf"),
      montserratMedium: require("./assets/fonts/MontserratMedium.ttf"),
      robotoRegular: require("./assets/fonts/RobotoRegular.ttf"),
      robotoMedium: require("./assets/fonts/RobotoMedium.ttf")
    })
  ]);
}

function handleLoadingError(error) {
  // report Error to service like Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingState) {
  setLoadingState(true);
}

export default AppRoot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})