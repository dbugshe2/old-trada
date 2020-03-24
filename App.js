import React, { Component, useState } from "react";
import AuthState from "./src/context/auth/AuthState";
import * as Sentry from "sentry-expo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import Navigation from "./src/navigation";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }
  async componentDidMount() {
    Sentry.init({
      dsn: "https://5a462ccaf5d6424ca916b8cfc779aefe@sentry.io/5172785",
      enableInExpoDevelopment: true,
      debug: true
    });
    try {
      await Font.loadAsync({
        montserratLight: require("./assets/fonts/MontserratLight.ttf"),
        montserratRegular: require("./assets/fonts/MontserratRegular.ttf"),
        montserratMedium: require("./assets/fonts/MontserratMedium.ttf"),
        robotoRegular: require("./assets/fonts/RobotoRegular.ttf"),
        robotoMedium: require("./assets/fonts/RobotoMedium.ttf")
      });
      this.setState({ isloading: false });
    } catch (error) {
      Sentry.captureException(error)
      this.setState({ isloading: false });
    }
    
  }

  render() {
    if (this.state.isLoading) {
      return <AppLoading />;
    } else {
      return (
        <AuthState>
          <SafeAreaProvider>
            <View style={styles.container}>
              {Platform.OS === "ios" && <StatusBar barStyle="default" />}
              <Navigation />
            </View>
          </SafeAreaProvider>
        </AuthState>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
