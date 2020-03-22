import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthContext } from "../context/auth/AuthState";

import { LandingScreen } from "../screens";
import AuthNavigator from "./AuthNavigator";
import AppDrawer from "./AppDrawer";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <AuthContext.Consumer>
      {authContext => (
        <NavigationContainer>
          <Stack.Navigator>
            {authContext.isAuthenticated ? (
              <Stack.Screen name="Auth" component={AuthNavigator} /> // user authenticated
            ) : (
              <Stack.Screen name="App" component={AppDrawer} />
            ) // user NOT authenticated
            }
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </AuthContext.Consumer>
  );
};

export default Navigation;
