import React, { useEffect, useContext, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "../context/auth/AuthContext";
import { LandingScreen } from "../screens";
import AuthNavigator from "./AuthNavigator";
import AppDrawer from "./AppDrawer";

const Stack = createStackNavigator();

const Navigation = () => {
  const navigatorRef = useRef(null);

  const auth = useContext(AuthContext);

  const { isAuthenticated, loading, message, verifyLogin } = auth;

  useEffect(() => {
    verifyLogin()
  
  }, [isAuthenticated]);

  return (
    <NavigationContainer ref={navigatorRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {loading ? (
          <Stack.Screen name="LandingScreen" component={LandingScreen} />
        ) : isAuthenticated ? (
          <Stack.Screen name="App" component={AppDrawer} />
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigator} /> // user NOT authenticated
        ) // user authenticated
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
