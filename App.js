import React, { Component, useState } from "react";
import AuthProvider from "./src/context/auth/AuthContext";
import * as Sentry from "sentry-expo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppLoading } from "expo";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import Navigation from "./src/navigation";
import VariationProvider from "./src/context/variation/VariationContext";
import { CommissionProvider } from "./src/context";

console.disableYellowBox = true;
  Sentry.init({
    dsn: "https://5a462ccaf5d6424ca916b8cfc779aefe@sentry.io/5172785",
    enableInExpoDevelopment: true,
    debug: true
  });

  const skipLoading = false
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  async componentDidMount() {
    try {
      await Font.loadAsync({
        ...Ionicons.font,
        montserratLight: require("./assets/fonts/MontserratLight.ttf"),
        montserratRegular: require("./assets/fonts/MontserratRegular.ttf"),
        montserratMedium: require("./assets/fonts/MontserratMedium.ttf"),
        robotoRegular: require("./assets/fonts/RobotoRegular.ttf"),
        robotoMedium: require("./assets/fonts/RobotoMedium.ttf")
      });
      this.setState({ isLoading: false });
    } catch (error) {
      Sentry.captureException(error);
      this.setState({ isLoading: false });
    }
  }

  render() {
    if (this.state.isLoading && !skipLoading) {
      return <AppLoading />;
    }
      return (
        <AuthProvider>
          <CommissionProvider>
          <VariationProvider>
          <SafeAreaProvider>
            <View style={styles.container}>
              {Platform.OS === "ios" && <StatusBar barStyle="default" />}
              <Navigation />
            </View>
          </SafeAreaProvider>
          </VariationProvider>
          </CommissionProvider>
        </AuthProvider>
      );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
