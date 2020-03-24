import React, { useState } from "react";
import AuthState from "./src/context/auth/AuthState";
import * as Sentry from "sentry-expo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import Navigation from "./src/navigation";
const App = props => {
  const [isLoading, setIsLoading] = useState(true);
  Sentry.init({
    dsn: "https://5a462ccaf5d6424ca916b8cfc779aefe@sentry.io/5172785",
    enableInExpoDevelopment: true,
    debug: true
  });
  if (isLoading) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => setIsLoading(false)}
      />
    );
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
};

export default App;

const loadResourcesAsync = () => {
  return Font.loadAsync({
    montserratLight: require("./assets/fonts/MontserratLight.ttf"),
    montserratRegular: require("./assets/fonts/MontserratRegular.ttf"),
    montserratMedium: require("./assets/fonts/MontserratMedium.ttf"),
    robotoRegular: require("./assets/fonts/RobotoRegular.ttf"),
    robotoMedium: require("./assets/fonts/RobotoMedium.ttf")
  });
}


function handleLoadingError(error) {
  // report Error to service like Sentry
  Sentry.captureException(error)
}

function handleFinishLoading(setIsLoading) {
  setIsLoading(false);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  }
});
